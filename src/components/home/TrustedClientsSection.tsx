import Image from "next/image";
import { Container } from "@/components/ui/Container";

interface ClientLogo {
  name: string;
  src: string;
  alt: string;
  className?: string;
}

const row1Clients: ClientLogo[] = [
  {
    name: "Emirates NBD",
    src: "/clients/emirates-nbd.png",
    alt: "Emirates NBD Logo",
    className: "h-6 sm:h-7 md:h-8 max-w-[140px] sm:max-w-[170px]",
  },
  {
    name: "Citibank",
    src: "/clients/citibank.png",
    alt: "Citibank Logo",
    className: "h-6 sm:h-7 md:h-8 max-w-[100px] sm:max-w-[125px]",
  },
  {
    name: "Bank of Baroda",
    src: "/clients/bank-of-baroda.png",
    alt: "Bank of Baroda Logo",
    className: "h-6 sm:h-7 md:h-8 max-w-[130px] sm:max-w-[160px]",
  },
  {
    name: "ADNOC",
    src: "/clients/adnoc.png",
    alt: "ADNOC Logo",
    className: "h-7 sm:h-8 md:h-9 max-w-[105px] sm:max-w-[130px]",
  },
  {
    name: "Abu Dhabi Police",
    src: "/clients/abu-dhabi-police.png",
    alt: "Abu Dhabi Police Logo",
    className: "h-7 sm:h-8 md:h-9 max-w-[135px] sm:max-w-[165px]",
  },
  {
    name: "ALDAR",
    src: "/clients/aldar.png",
    alt: "ALDAR Logo",
    className: "h-7 sm:h-8 md:h-9 max-w-[60px] sm:max-w-[75px]",
  },
  {
    name: "SOBHA REALTY",
    src: "/clients/sobha-realty.png",
    alt: "SOBHA Realty Logo",
    className: "h-6 sm:h-7 md:h-8 max-w-[110px] sm:max-w-[135px]",
  },
];

const row2Clients: ClientLogo[] = [
  {
    name: "LuLu",
    src: "/clients/lulu.png",
    alt: "LuLu Logo",
    className: "h-6 sm:h-7 md:h-8 max-w-[110px] sm:max-w-[135px]",
  },
  {
    name: "KHIDMAH",
    src: "/clients/khidmah.png",
    alt: "KHIDMAH Logo",
    className: "h-6 sm:h-7 md:h-8 max-w-[115px] sm:max-w-[140px]",
  },
  {
    name: "OMODA | JAECOO",
    src: "/clients/omoda-jaecoo.png",
    alt: "OMODA JAECOO Logo",
    className: "h-4 sm:h-5 md:h-[1.45rem] max-w-[150px] sm:max-w-[190px]",
  },
  {
    name: "Mahy Khoory Automotive",
    src: "/clients/mahy-khoory.png",
    alt: "Mahy Khoory Automotive Logo",
    className: "h-6 sm:h-7 md:h-8 max-w-[130px] sm:max-w-[160px]",
  },
  {
    name: "DEWA",
    src: "/clients/dewa.png",
    alt: "DEWA Logo",
    className: "h-7 sm:h-8 md:h-9 max-w-[95px] sm:max-w-[120px]",
  },
];

/**
 * TRUSTED CLIENTS SECTION — 02
 *
 * Implements reference design:
 * - Warm off-white background (#F4F3F0) with subtle borders
 * - Refined eyebrow: "TRUSTED BY INDUSTRY LEADERS"
 * - 2-row balanced desktop presentation of all 12 key UAE/Global clients
 * - Clean responsive multi-row wrap for mobile/tablet with optical height balance
 * - Monochrome dark charcoal logos with subtle hover feedback
 */
export function TrustedClientsSection() {
  return (
    <section
      id="clients"
      className="relative w-full bg-[#F4F3F0] py-14 sm:py-16 md:py-20 border-y border-[#E5E3DC] overflow-hidden"
    >
      <Container>
        {/* Eyebrow / Section Title matching reference */}
        <p className="text-center text-[0.6875rem] sm:text-xs font-medium uppercase tracking-[0.22em] text-[#7A7972] mb-9 sm:mb-12">
          Trusted by Industry Leaders
        </p>

        {/* Desktop 2-row layout / Responsive flex */}
        <div className="flex flex-col items-center gap-7 sm:gap-9 md:gap-11">
          {/* Row 1: 7 Clients */}
          <div className="w-full flex flex-wrap items-center justify-center gap-x-8 sm:gap-x-10 md:gap-x-12 lg:gap-x-14 xl:gap-x-16 gap-y-6 sm:gap-y-7">
            {row1Clients.map((client) => (
              <div
                key={client.name}
                className="flex items-center justify-center transition-transform duration-200 hover:scale-105"
                title={client.name}
              >
                <Image
                  src={client.src}
                  alt={client.alt}
                  width={240}
                  height={80}
                  className={`w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-200 ${client.className}`}
                />
              </div>
            ))}
          </div>

          {/* Row 2: 5 Clients */}
          <div className="w-full flex flex-wrap items-center justify-center gap-x-8 sm:gap-x-10 md:gap-x-12 lg:gap-x-14 xl:gap-x-16 gap-y-6 sm:gap-y-7">
            {row2Clients.map((client) => (
              <div
                key={client.name}
                className="flex items-center justify-center transition-transform duration-200 hover:scale-105"
                title={client.name}
              >
                <Image
                  src={client.src}
                  alt={client.alt}
                  width={240}
                  height={80}
                  className={`w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-200 ${client.className}`}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
