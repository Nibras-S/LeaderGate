"use client";

import React, { useEffect, useRef } from "react";
import Image, { type StaticImageData } from "next/image";
import designAndDeploymentImage from "../../../desing and deploymnet.png";
import printingImage from "../../../printng.png";
import signageImage from "../../../sinagage.png";
import styles from "./ProcessSection.module.css";

interface CapabilityItem {
  step: string;
  title: string;
  desc: string;
  image: string | StaticImageData;
  imageAlt: string;
  imagePosition?: string;
}

const capabilities: CapabilityItem[] = [
  {
    step: "(CAPABILITY – 01)",
    title: "Design & Brand Development",
    desc: "Strategic brand consultation, 3D visual concepts, engineering shop drawings, and production-ready architectural solutions.",
    image: "/images/cap-design.png",
    imageAlt: "Leader Gate design studio — brand development and engineering shop drawings",
  },
  {
    step: "(CAPABILITY – 02)",
    title: "Signage & Fabrication",
    desc: "Illuminated signs, 3D channel letters, architectural monoliths, ACP cladding, and comprehensive wayfinding systems built in-house.",
    image: signageImage,
    imageAlt: "Leader Gate signage and fabrication work",
  },
  {
    step: "(CAPABILITY – 03)",
    title: "Printing & Graphics",
    desc: "Large-format digital printing, architectural wall & window vinyls, directional banners, and durable exhibition displays.",
    image: printingImage,
    imageAlt: "Leader Gate printing and graphics production work",
  },
  {
    step: "(CAPABILITY – 04)",
    title: "Installation & Deployment",
    desc: "Site surveys, licensed crane rigging, multi-site corporate rollouts, nationwide UAE delivery, and preventative maintenance.",
    image: designAndDeploymentImage,
    imageAlt: "Leader Gate signage installation and deployment work",
    imagePosition: "70% center",
  },
];

export function CapabilitiesProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    // Range intervals for sequential column locking
    const colConfigs = [
      { selector: '[data-cap-col="1"]', isFirst: true },
      { selector: '[data-cap-col="2"]', start: 0.05, end: 0.32 },
      { selector: '[data-cap-col="3"]', start: 0.35, end: 0.62 },
      { selector: '[data-cap-col="4"]', start: 0.65, end: 0.92 },
    ];

    const columns = colConfigs.map((cfg) => ({
      elements: Array.from(section.querySelectorAll<HTMLElement>(cfg.selector)),
      isFirst: !!cfg.isFirst,
      start: cfg.start || 0,
      end: cfg.end || 0,
    }));

    let ticking = false;

    function update() {
      if (!section) return;

      if (window.innerWidth <= 1024) {
        columns.forEach((col) => {
          col.elements.forEach((el) => {
            el.style.transform = "";
            el.style.opacity = "";
          });
        });
        return;
      }

      const rect = section.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      if (scrollable <= 0) return;

      const progress = Math.min(1, Math.max(0, -rect.top / scrollable));
      const entryOffsetY = Math.min(550, window.innerHeight * 0.65);

      columns.forEach((col) => {
        if (col.isFirst) {
          col.elements.forEach((el) => {
            el.style.transform = "translate3d(0, 0, 0)";
            el.style.opacity = "1";
          });
          return;
        }

        if (progress < col.start) {
          col.elements.forEach((el) => {
            el.style.transform = `translate3d(0, ${entryOffsetY}px, 0)`;
            el.style.opacity = "0";
          });
        } else if (progress > col.end) {
          col.elements.forEach((el) => {
            el.style.transform = "translate3d(0, 0, 0)";
            el.style.opacity = "1";
          });
        } else {
          const p = (progress - col.start) / (col.end - col.start);
          const easeP = 1 - Math.pow(1 - p, 3);
          const ty = (1 - easeP) * entryOffsetY;
          const opacity = Math.min(1, easeP * 1.2);

          col.elements.forEach((el) => {
            el.style.transform = `translate3d(0, ${ty.toFixed(1)}px, 0)`;
            el.style.opacity = opacity.toFixed(2);
          });
        }
      });
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          ticking = false;
          update();
        });
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      id="capabilities"
      aria-labelledby="capabilities-title"
    >
      <div className={styles.sticky}>
        <div className={styles.container}>
          {/* Header */}
          <div className={styles.header}>
            <div className={`${styles.headerMain} !max-w-none`}>
              <div className={styles.titleWrapper}>
                <h2 className={styles.title} id="capabilities-title">
                  Our Capabilities
                </h2>
                <div className={styles.badge}>
                  <span className={styles.badgeSquare} />
                  <span>CAPABILITIES & SOLUTIONS</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.divider} />

          {/* Staggered Checkerboard Grid */}
          <div className={styles.grid}>
            {/* Capability 01 */}
            <div className={`${styles.stepBlock} ${styles.step1}`}>
              <div
                data-cap-col="1"
                className={`${styles.colItem} ${styles.card} ${styles.cardCol1Top}`}
              >
                <span className={styles.cardStep}>{capabilities[0].step}</span>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{capabilities[0].title}</h3>
                  <p className={styles.cardDesc}>{capabilities[0].desc}</p>
                </div>
              </div>
              <div
                data-cap-col="1"
                className={`${styles.colItem} ${styles.imageBox} ${styles.imageCol1Bottom}`}
              >
                <Image
                  src={capabilities[0].image}
                  alt={capabilities[0].imageAlt}
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Capability 02 */}
            <div className={`${styles.stepBlock} ${styles.step2}`}>
              <div
                data-cap-col="2"
                className={`${styles.colItem} ${styles.imageBox} ${styles.imageCol2Top}`}
              >
                <Image
                  src={capabilities[1].image}
                  alt={capabilities[1].imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div
                data-cap-col="2"
                className={`${styles.colItem} ${styles.card} ${styles.cardCol2Bottom}`}
              >
                <span className={styles.cardStep}>{capabilities[1].step}</span>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{capabilities[1].title}</h3>
                  <p className={styles.cardDesc}>{capabilities[1].desc}</p>
                </div>
              </div>
            </div>

            {/* Capability 03 */}
            <div className={`${styles.stepBlock} ${styles.step3}`}>
              <div
                data-cap-col="3"
                className={`${styles.colItem} ${styles.card} ${styles.cardCol3Top}`}
              >
                <span className={styles.cardStep}>{capabilities[2].step}</span>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{capabilities[2].title}</h3>
                  <p className={styles.cardDesc}>{capabilities[2].desc}</p>
                </div>
              </div>
              <div
                data-cap-col="3"
                className={`${styles.colItem} ${styles.imageBox} ${styles.imageCol3Bottom}`}
              >
                <Image
                  src={capabilities[2].image}
                  alt={capabilities[2].imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Capability 04 */}
            <div className={`${styles.stepBlock} ${styles.step4}`}>
              <div
                data-cap-col="4"
                className={`${styles.colItem} ${styles.imageBox} ${styles.imageCol4Top}`}
              >
                <Image
                  src={capabilities[3].image}
                  alt={capabilities[3].imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                  style={{ objectPosition: capabilities[3].imagePosition }}
                />
              </div>
              <div
                data-cap-col="4"
                className={`${styles.colItem} ${styles.card} ${styles.cardCol4Bottom}`}
              >
                <span className={styles.cardStep}>{capabilities[3].step}</span>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{capabilities[3].title}</h3>
                  <p className={styles.cardDesc}>{capabilities[3].desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
