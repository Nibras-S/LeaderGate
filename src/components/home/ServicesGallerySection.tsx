"use client";

import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const IMAGES = [
  "/images/projects/al-masraf.png",
  "/images/about/fabrication-laser.jpg",
  "/images/projects/jaecoo.png",
  "/images/about/fabrication-cnc.jpg",
  "/images/projects/sobha.png",
  "/images/about/fabrication-craftsman.jpg",
  "/images/projects/dominos.png",
  "/images/about/fabrication-facility.jpg",
  "/images/projects/al-madina.png",
  "/images/about/fabrication-cad.jpg",
  "/images/projects/chums.png",
  "/images/projects/jaecoo-2.png",
];

export function ServicesGallerySection() {
  const gallery = useRef<HTMLDivElement>(null);
  const mobileGallery = useRef<HTMLDivElement>(null);
  const [dimension, setDimension] = useState({ width: 1440, height: 900 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: mobileScrollYProgress } = useScroll({
    target: mobileGallery,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);
  const mobileY = useTransform(mobileScrollYProgress, [0, 1], [-height * 0.15, height * 0.45]);
  const mobileY2 = useTransform(mobileScrollYProgress, [0, 1], [-height * 0.45, height * 0.3]);

  useEffect(() => {
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", resize);
    resize();
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <section id="services-showcase" className="w-full bg-[#F9F8F5] text-[#1A1A18] border-t border-[#E5E3DC]">
      {/* Header Container */}
      <div className="homepage-shell flex flex-col items-center justify-center py-10 sm:py-14 md:py-18 text-center">
        <div className="max-w-3xl flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#7A7972]">
            <span className="h-[7px] w-[7px] rounded-[1.5px] bg-[#F26522]" />
            <span>SERVICES & SHOWCASE</span>
          </div>
          <h2 className="font-display text-3xl font-semibold tracking-[-0.035em] text-[#1A1A18] sm:text-5xl lg:text-6xl text-balance">
            The Services Your Business Relies On
          </h2>
          <p className="mt-2 max-w-2xl text-base sm:text-lg text-[#626760] font-normal leading-relaxed text-balance">
            From precision architectural signage and illuminated 3D branding to large-format displays and turnkey corporate environments.
          </p>
        </div>
      </div>

      {/* Desktop Parallax Gallery — 4 vertical columns with staggered speeds */}
      <div
        ref={gallery}
        className="relative box-border hidden h-[175vh] gap-[2vw] overflow-hidden bg-white p-[2vw] md:flex border-y border-[#E5E3DC]"
      >
        <GalleryColumn images={[IMAGES[0], IMAGES[1], IMAGES[2]]} y={y} />
        <GalleryColumn images={[IMAGES[3], IMAGES[4], IMAGES[5]]} y={y2} />
        <GalleryColumn images={[IMAGES[6], IMAGES[7], IMAGES[8]]} y={y3} />
        <GalleryColumn images={[IMAGES[9], IMAGES[10], IMAGES[11]]} y={y4} />
      </div>

      {/* Mobile Parallax Gallery — 2 vertical columns with independent scroll motion */}
      <div
        ref={mobileGallery}
        className="relative flex h-[150vh] gap-3 overflow-hidden bg-white p-3 md:hidden border-y border-[#E5E3DC]"
      >
        <MobileGalleryColumn images={IMAGES.filter((_, index) => index % 2 === 0)} y={mobileY} />
        <MobileGalleryColumn images={IMAGES.filter((_, index) => index % 2 === 1)} y={mobileY2} />
      </div>
    </section>
  );
}

type ColumnProps = {
  images: string[];
  y: MotionValue<number>;
};

function GalleryColumn({ images, y }: ColumnProps) {
  return (
    <motion.div
      className="relative -top-[45%] flex h-full w-1/4 min-w-[220px] flex-col gap-[2vw] first:top-[-45%] [&:nth-child(2)]:top-[-95%] [&:nth-child(3)]:top-[-45%] [&:nth-child(4)]:top-[-75%] will-change-transform"
      style={{ y }}
    >
      {images.map((src, i) => (
        <div
          key={i}
          className="group relative h-full w-full overflow-hidden rounded-2xl border border-[#E5E3DC] shadow-sm"
        >
          <Image
            src={src}
            alt="Leader Gate brand service showcase"
            fill
            sizes="(max-width: 1024px) 50vw, 25vw"
            className="pointer-events-none object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ))}
    </motion.div>
  );
}

function MobileGalleryColumn({ images, y }: ColumnProps) {
  return (
    <motion.div
      className="relative flex w-1/2 flex-col gap-3 first:-top-[10%] last:-top-[30%] will-change-transform"
      style={{ y }}
    >
      {images.map((src, index) => (
        <div
          key={`${src}-${index}`}
          className="relative aspect-[3/4] w-full shrink-0 overflow-hidden rounded-2xl border border-[#E5E3DC] shadow-sm"
        >
          <Image
            src={src}
            alt="Leader Gate brand service showcase"
            fill
            sizes="50vw"
            className="pointer-events-none object-cover"
          />
        </div>
      ))}
    </motion.div>
  );
}
