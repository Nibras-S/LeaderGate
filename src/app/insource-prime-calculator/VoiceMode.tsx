"use client";

import { useEffect, useRef, useState } from "react";
import { VoiceOrb } from "./VoiceOrb";
import styles from "./voice.module.css";

type Phase = "activating" | "listening" | "processing" | "transcribing" | "preview" | "error";

export function VoiceMode({ onClose, onSend }: { onClose: () => void; onSend: (text: string) => void }) {
  const [phase, setPhase] = useState<Phase>("activating");
  const [seconds, setSeconds] = useState(0);
  const [transcript, setTranscript] = useState("");
  const [error, setError] = useState("");
  const [attempt, setAttempt] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const edit = useRef<HTMLTextAreaElement>(null);
  const analyser = useRef<AnalyserNode | null>(null);
  const stop = useRef<() => void>(() => {});

  useEffect(() => {
    const element = dialog.current;
    const previous = document.activeElement as HTMLElement | null;
    element?.showModal();
    return () => { element?.close(); previous?.focus(); };
  }, []);

  useEffect(() => {
    let disposed = false;
    let stream: MediaStream | undefined;
    let context: AudioContext | undefined;
    let recorder: MediaRecorder | undefined;
    let timer: ReturnType<typeof setInterval> | undefined;
    const abort = new AbortController();
    const chunks: Blob[] = [];
    const release = () => {
      clearInterval(timer);
      analyser.current = null;
      stream?.getTracks().forEach((track) => track.stop());
      if (context && context.state !== "closed") void context.close().catch(() => {});
    };
    const begin = async () => {
      try {
        if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) throw new Error("unsupported");
        stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        if (disposed) { release(); return; }
        context = new AudioContext();
        await context.resume();
        if (disposed) { release(); return; }
        const source = context.createMediaStreamSource(stream);
        analyser.current = context.createAnalyser();
        analyser.current.fftSize = 2048;
        source.connect(analyser.current);
        const mimeType = ["audio/webm;codecs=opus", "audio/mp4", "audio/webm"].find((type) => MediaRecorder.isTypeSupported(type));
        recorder = new MediaRecorder(stream, mimeType ? { mimeType } : undefined);
        recorder.ondataavailable = (event) => { if (event.data.size) chunks.push(event.data); };
        recorder.onerror = () => { if (recorder) recorder.onstop = null; if (!disposed) { setError("Recording stopped unexpectedly. Please try again or type instead."); setPhase("error"); } release(); };
        recorder.onstop = async () => {
          release();
          if (disposed) return;
          const audio = new Blob(chunks, { type: recorder?.mimeType || "audio/webm" });
          if (audio.size === 0) { setError("No audio was recorded. Please try again."); setPhase("error"); return; }
          setPhase("transcribing");
          const body = new FormData();
          body.append("audio", audio, audio.type.includes("mp4") ? "recording.m4a" : "recording.webm");
          try {
            const response = await fetch("/api/calculator/transcribe", { method: "POST", body, signal: abort.signal });
            const data = await response.json();
            if (!response.ok || typeof data.text !== "string" || !data.text.trim()) throw new Error("transcription");
            if (!disposed) { setTranscript(data.text.trim()); setPhase("preview"); }
          } catch { if (!disposed) { setError("I couldn't hear that clearly. Please try again or type instead."); setPhase("error"); } }
        };
        stop.current = () => {
          if (recorder?.state !== "recording") return;
          setPhase("processing");
          recorder.stop();
          release();
        };
        recorder.start(250);
        setPhase("listening");
        const startTime = Date.now();
        timer = setInterval(() => {
          const elapsed = Math.floor((Date.now() - startTime) / 1000);
          setSeconds(elapsed);
          if (elapsed >= 180) stop.current();
        }, 1000);
      } catch (failure) {
        release();
        if (!disposed) {
          setError(failure instanceof DOMException && ["NotAllowedError", "SecurityError"].includes(failure.name)
            ? "Microphone access is needed for voice input."
            : "Your microphone isn't available. Check your device and try again, or type instead.");
          setPhase("error");
        }
      }
    };
    void begin();
    return () => {
      disposed = true;
      abort.abort();
      if (recorder) { recorder.onstop = null; recorder.onerror = null; if (recorder.state !== "inactive") recorder.stop(); }
      stop.current = () => {};
      release();
    };
  }, [attempt]);

  const retry = () => { setPhase("activating"); setSeconds(0); setError(""); setAttempt((value) => value + 1); };
  const label = { activating: "Connecting your microphone…", listening: "Listening…", processing: "Understanding…", transcribing: "Transcribing…", preview: "Here's what I heard", error: "Let's try again" }[phase];

  return <dialog ref={dialog} className={styles.voiceMode} data-phase={phase} aria-labelledby="voice-name" onCancel={(event) => { event.preventDefault(); onClose(); }} data-lenis-prevent>
    <div className={styles.voiceContent}>
      <header className={styles.voiceHeader}><span>Insource Prime AI Advisor</span><h2 id="voice-name">Insy</h2><p role="status" aria-live="polite">{label}</p></header>
      <VoiceOrb analyser={analyser} />
      {phase === "preview" ? <div className={styles.preview}>
        <label htmlFor="voice-transcript">You said</label>
        <textarea id="voice-transcript" ref={edit} value={transcript} onChange={(event) => setTranscript(event.target.value)} />
        <div className={styles.controls}><button onClick={() => edit.current?.focus()}>Edit</button><button className={styles.primary} disabled={!transcript.trim()} onClick={() => onSend(transcript.trim())}>Send</button></div>
      </div> : <div className={styles.voiceFooter}>
        <p>{phase === "error" ? error : phase === "listening" ? "Speak naturally. I'm here to listen." : phase === "activating" ? "Allow microphone access to begin." : "Turning your words into your next step."}</p>
        {phase === "listening" && <time className={styles.timer}>{String(Math.floor(seconds / 60)).padStart(2, "0")}:{String(seconds % 60).padStart(2, "0")}</time>}
        <div className={styles.controls}>
          {phase === "listening" && <button className={styles.primary} aria-label="Stop voice recording" onClick={() => stop.current()}><span className={styles.stopSquare} />Stop recording</button>}
          {phase === "error" && <><button className={styles.primary} onClick={retry}>Try again</button><button onClick={onClose}>Type instead</button></>}
        </div>
      </div>}
      <button className={styles.cancel} onClick={onClose}>Cancel</button>
    </div>
  </dialog>;
}
