import type { BusinessProfile } from "./schema";
import type { PricingConfig } from "./pricing";

export type QuoteLine = { label: string; amount: number };
export type Quote = { recommendedSetup: string; lines: QuoteLine[]; firstYear: number; renewal: number };

export function calculateQuote(profile: BusinessProfile, config: PricingConfig): Quote {
  const jurisdiction = profile.jurisdiction ?? "freezone";
  const lines: QuoteLine[] = [];
  if (jurisdiction === "freezone") {
    lines.push({ label: "Business licence", amount: config.freezone.baseLicense });
    lines.push({ label: "Registration", amount: config.freezone.registration });
    lines.push({ label: "Establishment card", amount: config.freezone.establishmentCard });
  } else if (jurisdiction === "mainland") {
    lines.push({ label: "Trade licence", amount: config.mainland.tradeLicense });
    lines.push({ label: "Registration", amount: config.mainland.registration });
  } else {
    lines.push({ label: "Offshore setup", amount: config.offshore.setup });
    lines.push({ label: "Registration", amount: config.offshore.registration });
  }

  const visas = profile.visas ?? 0;
  if (visas > 0 && jurisdiction !== "offshore") lines.push({ label: `${visas} residence visa${visas === 1 ? "" : "s"}`, amount: visas * (jurisdiction === "freezone" ? config.freezone.visa : config.mainland.visa) });
  if (profile.officeType === "flexi" && jurisdiction === "freezone") lines.push({ label: "Flexi desk", amount: config.freezone.flexiDesk });
  if (["small", "physical"].includes(profile.officeType ?? "")) lines.push({ label: "Physical office allowance", amount: jurisdiction === "freezone" ? config.freezone.physicalOffice : config.mainland.office });
  if (profile.officeType === "warehouse" || profile.warehouse) lines.push({ label: "Warehouse allowance", amount: 20_000 });

  const services = [
    [profile.banking, "Bank account assistance", config.services.banking],
    [profile.accounting, "Accounting support", config.services.accounting],
    [profile.vat, "VAT registration assistance", config.services.vat],
    [profile.corporateTax, "Corporate Tax assistance", config.services.corporateTax],
    [profile.proServices, "PRO services", config.services.pro],
  ] as const;
  services.forEach(([selected, label, amount]) => selected && lines.push({ label, amount }));
  const firstYear = lines.reduce((sum, line) => sum + line.amount, 0);
  const recurringServices = lines.filter((line) => ["Accounting support", "PRO services"].includes(line.label)).reduce((sum, line) => sum + line.amount, 0);
  const licence = jurisdiction === "freezone" ? config.freezone.baseLicense : jurisdiction === "mainland" ? config.mainland.tradeLicense : config.offshore.setup;
  const renewal = licence + recurringServices + (profile.officeType === "flexi" ? config.freezone.flexiDesk : 0) + (["small", "physical"].includes(profile.officeType ?? "") ? (jurisdiction === "freezone" ? config.freezone.physicalOffice : config.mainland.office) : 0);
  return { recommendedSetup: `${profile.emirate ?? "UAE"} ${jurisdiction === "freezone" ? "Free Zone" : jurisdiction === "mainland" ? "Mainland" : "Offshore"}`, lines, firstYear, renewal };
}
