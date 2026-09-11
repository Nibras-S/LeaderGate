"use client";

import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CtaButton } from "@/components/ui/CtaButton";

const IMAGES = [
  "/product-showcase/siete-taco-shells-mild-salsa-mild-seasoning-9x16.avif",
  "/product-showcase/pepsico-s-net-water-positive-infographic.avif",
  "/product-showcase/cheetos-flamin-hot-cheetos-esquites-038.avif",
  "/product-showcase/lays-ad-classic-example-bento-2.avif",
  "/product-showcase/Tostiots_Tabletop_HOL.avif",
  "/product-showcase/gatorade-bento-gatorlyte-cherrylime-powder-pdp.avif",
  "/product-showcase/In-The-Kitchen-poppi-Hero-1200x860.avif",
  "/product-showcase/siete-maiz-shells-mild-salsa-mild-seasoning-9x16.avif",
  "/product-showcase/pepsi-classic-12oz-on-ice-tm-4860-refreshed.jpg",
  "/product-showcase/siete-taco-shells-mild-salsa-mild-seasoning-9x16.avif",
  "/product-showcase/gatorade-bento-gatorlyte-cherrylime-powder-pdp.avif",
  "/product-showcase/pepsi-classic-12oz-on-ice-tm-4860-refreshed.jpg",
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
      <div className="flex flex-col items-center justify-center py-20 px-6 sm:py-24 md:py-28 text-center">
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

      {/* Bottom Callout */}
      <div className="flex flex-col items-center justify-center gap-6 py-20 px-6 text-center md:py-28 md:px-10">
        <p className="font-display text-2xl font-semibold text-[#1A1A18] tracking-[-0.03em] md:text-3xl max-w-xl text-balance">
          Ready to elevate your brand presence across the UAE?
        </p>
        <p className="text-sm sm:text-base text-[#626760] max-w-md -mt-2">
          Work directly with our engineers and fabrication specialists from first concept to on-site handover.
        </p>
        <CtaButton
          href="#contact"
          variant="dark"
        >
          Start your project
        </CtaButton>
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
