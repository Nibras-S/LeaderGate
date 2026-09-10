"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./ProcessSection.module.css";

interface StepItem {
  step: string;
  title: string;
  desc: string;
  image: string;
  imageAlt: string;
}

const steps: StepItem[] = [
  {
    step: "(STEP – 01)",
    title: "Survey & Consultation",
    desc: "We audit site conditions, inspect architectural drawings, review local regulatory codes, and benchmark brand visibility.",
    image: "/map.webp",
    imageAlt: "Site survey and technical consultation phase",
  },
  {
    step: "(STEP – 02)",
    title: "Design & Engineering",
    desc: "Creative concepts become production blueprints, 3D structural calculations, illumination specs, and material selections.",
    image: "/step2.webp",
    imageAlt: "Design engineering and structural planning phase",
  },
  {
    step: "(STEP – 03)",
    title: "In-House Fabrication",
    desc: "CNC cutting, laser processing, acrylic forming, metal fabrication, and LED integration executed under one roof in our UAE facility.",
    image: "/step3.webp",
    imageAlt: "In-house manufacturing and precision fabrication phase",
  },
  {
    step: "(STEP – 04)",
    title: "Installation & Support",
    desc: "Certified rigging teams coordinate site access, cranes, and turnkey mounting across Dubai, Abu Dhabi, and the Northern Emirates.",
    image: "/step4.webp",
    imageAlt: "Turnkey installation, handover, and ongoing support",
  },
];

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    // Range intervals for sequential column locking
    const colConfigs = [
      { selector: '[data-col="1"]', isFirst: true },
      { selector: '[data-col="2"]', start: 0.05, end: 0.32 },
      { selector: '[data-col="3"]', start: 0.35, end: 0.62 },
      { selector: '[data-col="4"]', start: 0.65, end: 0.92 },
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

      // 0 when section enters sticky top, 1 when sticky scroll finishes
      const progress = Math.min(1, Math.max(0, -rect.top / scrollable));
      const entryOffsetY = Math.min(550, window.innerHeight * 0.65);

      columns.forEach((col) => {
        if (col.isFirst) {
          // Col 1 is always in position right from the start
          col.elements.forEach((el) => {
            el.style.transform = "translate3d(0, 0, 0)";
            el.style.opacity = "1";
          });
          return;
        }

        if (progress < col.start) {
          // Hasn't reached start of scroll range yet: position below and hidden
          col.elements.forEach((el) => {
            el.style.transform = `translate3d(0, ${entryOffsetY}px, 0)`;
            el.style.opacity = "0";
          });
        } else if (progress > col.end) {
          // Has passed end of scroll range: locked in place
          col.elements.forEach((el) => {
            el.style.transform = "translate3d(0, 0, 0)";
            el.style.opacity = "1";
          });
        } else {
          // Currently animating from entry position up into its fixed grid slot
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
      id="process"
      aria-labelledby="process-title"
    >
      <div className={styles.sticky}>
        <div className={styles.container}>
          {/* Header */}
          <div className={styles.header}>
            <div className={styles.headerMain}>
              <div className={styles.titleWrapper}>
                <h2 className={styles.title} id="process-title">
                  How We Work
                </h2>
                <div className={styles.badge}>
                  <span className={styles.badgeSquare} />
                  <span>WORKING PROCESS</span>
                </div>
              </div>
              <p className={styles.subtitle}>
                Four disciplined phases. In-house manufacturing. Zero handoffs from concept to installation.
              </p>
            </div>
          </div>

          <div className={styles.divider} />

          {/* Desktop / Tablet Checkerboard Grid & Mobile Stacking */}
          <div className={styles.grid}>
            {/* Step 01 */}
            <div className={`${styles.stepBlock} ${styles.step1}`}>
              <div
                data-col="1"
                className={`${styles.colItem} ${styles.card} ${styles.cardCol1Top}`}
              >
                <span className={styles.cardStep}>{steps[0].step}</span>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{steps[0].title}</h3>
                  <p className={styles.cardDesc}>{steps[0].desc}</p>
                </div>
              </div>
              <div
                data-col="1"
                className={`${styles.colItem} ${styles.imageBox} ${styles.imageCol1Bottom}`}
              >
                <Image
                  src={steps[0].image}
                  alt={steps[0].imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Step 02 */}
            <div className={`${styles.stepBlock} ${styles.step2}`}>
              <div
                data-col="2"
                className={`${styles.colItem} ${styles.imageBox} ${styles.imageCol2Top}`}
              >
                <Image
                  src={steps[1].image}
                  alt={steps[1].imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div
                data-col="2"
                className={`${styles.colItem} ${styles.card} ${styles.cardCol2Bottom}`}
              >
                <span className={styles.cardStep}>{steps[1].step}</span>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{steps[1].title}</h3>
                  <p className={styles.cardDesc}>{steps[1].desc}</p>
                </div>
              </div>
            </div>

            {/* Step 03 */}
            <div className={`${styles.stepBlock} ${styles.step3}`}>
              <div
                data-col="3"
                className={`${styles.colItem} ${styles.card} ${styles.cardCol3Top}`}
              >
                <span className={styles.cardStep}>{steps[2].step}</span>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{steps[2].title}</h3>
                  <p className={styles.cardDesc}>{steps[2].desc}</p>
                </div>
              </div>
              <div
                data-col="3"
                className={`${styles.colItem} ${styles.imageBox} ${styles.imageCol3Bottom}`}
              >
                <Image
                  src={steps[2].image}
                  alt={steps[2].imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Step 04 */}
            <div className={`${styles.stepBlock} ${styles.step4}`}>
              <div
                data-col="4"
                className={`${styles.colItem} ${styles.imageBox} ${styles.imageCol4Top}`}
              >
                <Image
                  src={steps[3].image}
                  alt={steps[3].imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div
                data-col="4"
                className={`${styles.colItem} ${styles.card} ${styles.cardCol4Bottom}`}
              >
                <span className={styles.cardStep}>{steps[3].step}</span>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{steps[3].title}</h3>
                  <p className={styles.cardDesc}>{steps[3].desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
