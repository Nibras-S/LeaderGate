const speechModels = ["whisper-large-v3-turbo", "whisper-large-v3"];

export async function POST(request: Request) {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) return Response.json({ error: "Speech transcription is not configured." }, { status: 503 });
  let incoming: FormData;
  try { incoming = await request.formData(); }
  catch { return Response.json({ error: "Invalid audio upload." }, { status: 400 }); }
  const audio = incoming.get("audio");
  if (!(audio instanceof Blob)) return Response.json({ error: "No audio was received." }, { status: 400 });
  if (!audio.size || audio.size > 20 * 1024 * 1024) return Response.json({ error: "Please record a shorter message." }, { status: 400 });
  const extension = audio.type.includes("mp4") ? "m4a" : audio.type.includes("ogg") ? "ogg" : "webm";
  for (const model of speechModels) {
    const body = new FormData();
    body.append("file", audio, `recording.${extension}`);
    body.append("model", model);
    try {
      const response = await fetch(`${process.env.GROQ_API_BASE_URL ?? "https://api.groq.com/openai/v1"}/audio/transcriptions`, { method: "POST", headers: { Authorization: `Bearer ${apiKey}` }, body, signal: AbortSignal.any([request.signal, AbortSignal.timeout(30000)]) });
      if (response.ok) {
        const data = await response.json();
        if (typeof data.text === "string" && data.text.trim()) return Response.json({ text: data.text.trim() });
      }
    } catch { /* Try the fallback model. */ }
    if (request.signal.aborted) break;
  }
  return Response.json({ error: "I couldn't hear that clearly." }, { status: 503 });
}
