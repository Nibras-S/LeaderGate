"use client";

import { useEffect, useRef, type CSSProperties, type RefObject } from "react";
import styles from "./voice.module.css";

export function VoiceOrb({ analyser, small = false }: { analyser?: RefObject<AnalyserNode | null>; small?: boolean }) {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (small) return;
    const node = root.current;
    if (!node) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0, level = 0, phase = 0, previous = performance.now();
    let samples = new Float32Array(2048);
    const draw = (time: number) => {
      const dt = Math.min((time - previous) / 1000, .05);
      previous = time;
      const audio = analyser?.current;
      let energy = 0;
      if (audio) {
        if (samples.length !== audio.fftSize) samples = new Float32Array(audio.fftSize);
        audio.getFloatTimeDomainData(samples);
        for (const value of samples) energy += value * value;
        energy = Math.min(1, Math.max(0, Math.sqrt(energy / samples.length) - .008) * 8);
      }
      level += (energy - level) * (1 - Math.exp(-dt * (energy > level ? 12 : 5)));
      phase += dt * (8 + level * 26);
      const movement = reduced.matches ? .15 : 1;
      node.style.setProperty("--orb-scale", String(1 + movement * (level * .065 + (1 + Math.sin(time / 650)) * .0125)));
      node.style.setProperty("--halo-scale", String(1 + level * .08 * movement));
      node.style.setProperty("--glow", `${18 + level * 28}px`);
      node.style.setProperty("--particle-opacity", String(.42 + level * .3));
      node.style.setProperty("--particle-spread", String(1 + level * .035 * movement));
      if (!reduced.matches) {
        // Drifting light pools, not a spinning color wheel.
        node.style.setProperty("--drift-x", `${Math.sin(phase / 42) * 12}%`);
        node.style.setProperty("--drift-y", `${Math.cos(phase / 57) * 10}%`);
        node.style.setProperty("--dust-turn", `${phase * .65}deg`);
      }
      frame = requestAnimationFrame(draw);
    };
    frame = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(frame);
  }, [analyser, small]);

  return <div ref={root} className={`${styles.orbStage} ${small ? styles.small : ""}`} aria-hidden="true">
    <div className={styles.aura} />
    <div className={styles.halo} />
    <div className={styles.particles}>{Array.from({ length: small ? 12 : 72 }, (_, i) => {
      const angle = i * 2.39996;
      const radius = small ? 48 + (i % 3) : 41.5 + (i % 7) * .85;
      return <i key={i} style={{ left: `${50 + Math.cos(angle) * radius}%`, top: `${50 + Math.sin(angle) * radius}%`, "--size": `${small ? .8 : 1.2 + i % 3 * .55}px`, "--twinkle-delay": `${-(i % 11) * .47}s`, "--dust-color": ["#ffffff", "#65bfd4", "#c6a365"][i % 3] } as CSSProperties} />;
    })}</div>
    <div className={styles.sphere}>
      <div className={styles.liquid} /><div className={styles.ribbon} /><div className={styles.reflection} />
      <div className={styles.face}>
        <div className={styles.eyes}><i /><i /></div>
        <svg className={styles.smile} viewBox="0 0 40 20" fill="none"><path d="M5 5 Q20 22 35 5" stroke="currentColor" strokeWidth="4" strokeLinecap="round" /></svg>
      </div>
    </div>
  </div>;
}
