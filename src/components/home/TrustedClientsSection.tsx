import Image from "next/image";

interface Client {
  name: string;
  src: string;
  alt: string;
  desktopClass: string;
  mobileClass: string;
}

const clients: Client[] = [
  {
    name: "Emirates NBD",
    src: "/clients/emirates-nbd.png",
    alt: "Emirates NBD Logo",
    desktopClass: "h-8 md:h-9 lg:h-10 max-w-[180px] lg:max-w-[210px]",
    mobileClass: "max-h-9 max-w-[150px]",
  },
  {
    name: "Citibank",
    src: "/clients/citibank.png",
    alt: "Citibank Logo",
    desktopClass: "h-8 md:h-9 lg:h-10 max-w-[140px] lg:max-w-[165px]",
    mobileClass: "max-h-9 max-w-[120px]",
  },
  {
    name: "Bank of Baroda",
    src: "/clients/bank-of-baroda.png",
    alt: "Bank of Baroda Logo",
    desktopClass: "h-8 md:h-9 lg:h-10 max-w-[170px] lg:max-w-[200px]",
    mobileClass: "max-h-8 max-w-[150px]",
  },
  {
    name: "ADNOC",
    src: "/clients/adnoc.png",
    alt: "ADNOC Logo",
    desktopClass: "h-9 md:h-10 lg:h-11 max-w-[140px] lg:max-w-[165px]",
    mobileClass: "max-h-10 max-w-[115px]",
  },
  {
    name: "Abu Dhabi Police",
    src: "/clients/abu-dhabi-police.png",
    alt: "Abu Dhabi Police Logo",
    desktopClass: "h-9 md:h-10 lg:h-11 max-w-[160px] lg:max-w-[190px]",
    mobileClass: "max-h-10 max-w-[135px]",
  },
  {
    name: "ALDAR",
    src: "/clients/aldar.png",
    alt: "ALDAR Logo",
    desktopClass: "h-9 md:h-10 lg:h-11 max-w-[80px] lg:max-w-[95px]",
    mobileClass: "max-h-10 max-w-[75px]",
  },
  {
    name: "SOBHA REALTY",
    src: "/clients/sobha-realty.png",
    alt: "SOBHA Realty Logo",
    desktopClass: "h-8 md:h-9 lg:h-10 max-w-[145px] lg:max-w-[175px]",
    mobileClass: "max-h-8 max-w-[130px]",
  },
  {
    name: "LuLu",
    src: "/clients/lulu.png",
    alt: "LuLu Logo",
    desktopClass: "h-8 md:h-9 lg:h-10 max-w-[145px] lg:max-w-[175px]",
    mobileClass: "max-h-9 max-w-[125px]",
  },
  {
    name: "KHIDMAH",
    src: "/clients/khidmah.png",
    alt: "KHIDMAH Logo",
    desktopClass: "h-8 md:h-9 lg:h-10 max-w-[150px] lg:max-w-[180px]",
    mobileClass: "max-h-8 max-w-[130px]",
  },
  {
    name: "OMODA | JAECOO",
    src: "/clients/omoda-jaecoo.png",
    alt: "OMODA JAECOO Logo",
    desktopClass: "h-6 md:h-7 lg:h-8 max-w-[200px] lg:max-w-[240px]",
    mobileClass: "max-h-6 max-w-[160px]",
  },
  {
    name: "Mahy Khoory Automotive",
    src: "/clients/mahy-khoory.png",
    alt: "Mahy Khoory Automotive Logo",
    desktopClass: "h-8 md:h-9 lg:h-10 max-w-[165px] lg:max-w-[195px]",
    mobileClass: "max-h-8 max-w-[145px]",
  },
  {
    name: "DEWA",
    src: "/clients/dewa.png",
    alt: "DEWA Logo",
    desktopClass: "h-9 md:h-10 lg:h-11 max-w-[130px] lg:max-w-[155px]",
    mobileClass: "max-h-10 max-w-[115px]",
  },
];

// Mobile pairs matching reference image media_1788959362760.png:
// Row 1: Emirates NBD | citibank
// Row 2: Bank of Baroda | ADNOC
// Row 3: Abu Dhabi Police | ALDAR
// Row 4: SOBHA REALTY | LuLu
// Row 5: KHIDMAH | OMODA | JAECOO
// Row 6: Mahy Khoory Automotive | DEWA
const mobilePairs: [Client, Client][] = [
  [clients[0], clients[1]],
  [clients[2], clients[3]],
  [clients[4], clients[5]],
  [clients[6], clients[7]],
  [clients[8], clients[9]],
  [clients[10], clients[11]],
];

interface TrustedClientsSectionProps {
  variant?: "all" | "desktop-only" | "mobile-only";
}

/**
 * TRUSTED CLIENTS SECTION — 02
 *
 * Implements reference designs:
 * - Desktop: Full-Width Single-Row Horizontal Infinite Marquee
 * - Mobile: 2-Column Divided Grid
 * - Supports responsive placement (e.g. desktop below Hero, mobile after Capabilities)
 */
export function TrustedClientsSection({ variant = "all" }: TrustedClientsSectionProps) {
  const isDesktopOnly = variant === "desktop-only";
  const isMobileOnly = variant === "mobile-only";

  const visibilityClass = isDesktopOnly
    ? "hidden md:block"
    : isMobileOnly
    ? "block md:hidden"
    : "";

  return (
    <section
      id={isMobileOnly ? "clients-mobile" : "clients"}
      className={`relative w-full bg-[#F9F8F5] py-9 sm:py-11 md:py-13 border-y border-[#E5E3DC] overflow-hidden ${visibilityClass}`}
    >
      {/* Eyebrow / Section Title matching reference */}
      <div className="homepage-shell">
        <p className="text-center text-[0.6875rem] sm:text-xs font-medium uppercase tracking-[0.22em] text-[#7A7972] mb-6 sm:mb-7">
          Trusted by Industry Leaders
        </p>
      </div>

      {/* ──────────────────────────────────────────────────────────
          DESKTOP & TABLET: Full-Width Single-Row Horizontal Infinite Marquee
          - Uses full available viewport width
          - Increased logo scale and generous proportional spacing
          - Subtle 5vw side fade mask (no large blank areas)
      ────────────────────────────────────────────────────────── */}
      {!isMobileOnly && (
        <div className="hidden md:block relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5vw,black_calc(100%-5vw),transparent)]">
          <div className="animate-marquee flex items-center gap-16 md:gap-20 lg:gap-24 xl:gap-28 py-3">
            {[...clients, ...clients].map((client, idx) => (
              <div
                key={`${client.name}-${idx}`}
                className="flex-shrink-0 flex items-center justify-center transition-transform duration-300 hover:scale-105 cursor-pointer"
                title={client.name}
              >
                <Image
                  src={client.src}
                  alt={client.alt}
                  width={260}
                  height={90}
                  className={`w-auto object-contain opacity-85 hover:opacity-100 transition-opacity duration-200 ${client.desktopClass}`}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ──────────────────────────────────────────────────────────
          MOBILE: 2-Column Divided Grid (Exact match to reference)
      ────────────────────────────────────────────────────────── */}
      {!isDesktopOnly && (
        <div className="block md:hidden max-w-sm sm:max-w-md mx-auto px-4">
          <div className="grid grid-cols-2">
            {mobilePairs.map((pair, rowIdx) => {
              const isLastRow = rowIdx === mobilePairs.length - 1;
              return (
                <div key={rowIdx} className="contents">
                  {/* Left Column Item */}
                  <div
                    className={`flex items-center justify-center px-3 py-4 h-24 border-r border-[#E2DFD7] ${
                      !isLastRow ? "border-b border-[#E2DFD7]" : ""
                    }`}
                  >
                    <Image
                      src={pair[0].src}
                      alt={pair[0].alt}
                      width={200}
                      height={70}
                      className={`w-auto object-contain opacity-90 ${pair[0].mobileClass}`}
                    />
                  </div>

                  {/* Right Column Item */}
                  <div
                    className={`flex items-center justify-center px-3 py-4 h-24 ${
                      !isLastRow ? "border-b border-[#E2DFD7]" : ""
                    }`}
                  >
                    <Image
                      src={pair[1].src}
                      alt={pair[1].alt}
                      width={200}
                      height={70}
                      className={`w-auto object-contain opacity-90 ${pair[1].mobileClass}`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
