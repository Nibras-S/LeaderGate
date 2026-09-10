"use client";

import { useEffect, useRef } from "react";

const MOBILE_VIDEO_QUERY = "(max-width: 767px)";

export function ResponsiveHeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.src = window.matchMedia(MOBILE_VIDEO_QUERY).matches
      ? "/herosection-mobile.mp4"
      : "/herosection-optimized.mp4";

    const attemptPlayback = () => {
      void video.play().catch(() => {
        // The poster remains visible if the device blocks autoplay.
      });
    };

    video.addEventListener("canplay", attemptPlayback, { once: true });
    video.load();
    attemptPlayback();

    return () => {
      video.removeEventListener("canplay", attemptPlayback);
      video.pause();
    };
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      poster="/hero-poster.jpg"
      preload="metadata"
      aria-hidden="true"
      className="h-full w-full object-cover object-center"
    />
  );
}
