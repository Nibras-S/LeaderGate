import type { BusinessProfile } from "./schema";
import type { GuidedQuestion } from "./questions";

const numberWords: Record<string, number> = { no: 0, zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10 };
const readNumber = (value?: string) => value ? (numberWords[value.toLowerCase()] ?? Number(value)) : undefined;

export function extractProfile(message: string, current: BusinessProfile, question?: GuidedQuestion | null): BusinessProfile {
  const text = message.toLowerCase();
  const next: BusinessProfile = { ...current };
  const correctionText = text.match(/(?:actually|no[,]?|not\s+[^,.]+[, ]+|i meant|change (?:it|that) to|make (?:it|that))\s*(?:it is|it's|to)?\s*(.+)$/)?.[1]?.trim();
  const activityText = correctionText ?? text;
  const activityMap = [
    [/general trading|\btrading\b|trade company/, "General Trading", "trading"],
    [/e-?commerce|online store|sell online/, "E-commerce", "ecommerce"],
    [/consult/, "Consulting", "consulting"],
    [/software|technology|tech company|app development/, "Software & Technology", "technology"],
    [/marketing|advertising agency/, "Marketing", "marketing"],
    [/restaurant|cafe|food/, "Restaurant / Food", "food"],
    [/construction|contracting/, "Construction", "construction"],
  ] as const;
  const activity = activityMap.find(([pattern]) => pattern.test(activityText));
  if (activity) { next.businessActivity = activity[1]; next.activityCategory = activity[2]; next.ecommerce = activity[2] === "ecommerce"; }
  if (correctionText && /\bother\b/.test(correctionText)) {
    next.businessActivity = "Other"; next.activityCategory = "other"; next.ecommerce = false;
    delete next.detailedActivity; delete next.importExport; delete next.warehouse;
  }
  const emirate = ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain"].find((place) => text.includes(place.toLowerCase()));
  if (emirate) next.emirate = emirate;
  if (/mainland/.test(text)) next.jurisdiction = "mainland";
  if (/free\s?zone/.test(text)) next.jurisdiction = "freezone";
  if (/offshore/.test(text)) next.jurisdiction = "offshore";
  const partnerMatch = text.match(/(?:with\s+)?(no|one|two|three|four|five|six|seven|eight|nine|ten|\d+)\s+(?:owners?|partners?|shareholders?)/);
  if (partnerMatch) next.partners = Math.max(1, readNumber(partnerMatch[1]) ?? 1);
  const visaMatch = text.match(/(no|zero|one|two|three|four|five|six|seven|eight|nine|ten|\d+)\s+(?:residence\s+)?visas?/);
  if (visaMatch) next.visas = readNumber(visaMatch[1]);
  const employeeMatch = text.match(/(no|zero|one|two|three|four|five|six|seven|eight|nine|ten|\d+)\s+employees?/);
  if (employeeMatch) next.employees = readNumber(employeeMatch[1]);
  if (/flexi\s?desk|shared desk|cowork/.test(text)) { next.officeType = "flexi"; next.officeRequired = true; }
  else if (/small office/.test(text)) { next.officeType = "small"; next.officeRequired = true; }
  else if (/physical office|private office/.test(text)) { next.officeType = "physical"; next.officeRequired = true; }
  else if (/warehouse/.test(text)) { next.officeType = "warehouse"; next.officeRequired = true; next.warehouse = !/no warehouse|without.*warehouse/.test(text); }
  else if (/no office|don'?t need.*office|without.*office/.test(text)) { next.officeType = "none"; next.officeRequired = false; }
  if (/import|export/.test(text)) next.importExport = !/no import|no export|don'?t import|don'?t export/.test(text);
  if (/bank account|banking/.test(text)) next.banking = !/no bank|without bank|don'?t need.*bank/.test(text);
  if (/accounting|bookkeeping/.test(text)) next.accounting = !/(?:remove|no|without|don'?t need)[^,.]*(?:accounting|bookkeeping)/.test(text);
  if (/\bvat\b/.test(text)) next.vat = !/(?:remove|no|without|don'?t need)[^,.]*vat/.test(text);
  if (/corporate tax|corporation tax/.test(text)) next.corporateTax = !/(?:remove|no|without|don'?t need)[^,.]*corporate tax/.test(text);
  if (/\bpro services?\b|government liaison/.test(text)) next.proServices = !/(?:remove|no|without|don'?t need)[^,.]*pro services?/.test(text);
  if (/(?:remove|no|without|don'?t need)[^,.]*(?:bank account|banking)/.test(text)) next.banking = false;

  if (question) {
    const n = readNumber(text.match(/\b(no|zero|one|two|three|four|five|six|seven|eight|nine|ten|\d+)\b/)?.[1]);
    if (question.id === "businessActivity" && !next.businessActivity && !/not sure/.test(text)) { next.businessActivity = message.trim(); next.activityCategory = "other"; }
    if (question.id === "detailedActivity" && !/not sure/.test(text)) next.detailedActivity = message.trim();
    if (question.id === "emirate" && /not sure/.test(text)) next.emirate = "Dubai";
    if (question.id === "jurisdiction" && /not sure|recommend/.test(text)) next.jurisdiction = next.importExport || (next.visas ?? 0) > 2 ? "mainland" : "freezone";
    if (question.id === "partners" && n !== undefined) next.partners = Math.max(1, n);
    if (question.id === "visas" && n !== undefined) next.visas = n;
    if (question.id === "officeType" && /not sure/.test(text)) { next.officeType = "flexi"; next.officeRequired = true; }
    if (question.id === "importExport" && !/not sure/.test(text)) next.importExport = /yes|include|will/.test(text);
    if (question.id === "warehouse" && !/not sure/.test(text)) next.warehouse = /yes|include|need/.test(text);
    if (question.id === "banking") next.banking = !/no|thanks/.test(text);
    if (question.id === "accounting") { next.accounting = /accounting|both|\+/.test(text); next.vat = /tax|both|\+/.test(text); next.corporateTax = /tax|both|\+/.test(text); }
  }
  return next;
}

export function detectClarification(message: string, question?: GuidedQuestion | null) {
  const text = message.trim().toLowerCase();
  if (question?.id === "emirate" && /^(dub+o+|dub+a+i+|dubi|duba|dubay|dubaii+)$/.test(text) && text !== "dubai") {
    return { field: "emirate" as const, value: "Dubai", prompt: "Did you mean Dubai?" };
  }
  if (question?.id === "jurisdiction" && /free\s*z+o+n*e*|frezone|freezon/.test(text) && !/free\s?zone/.test(text)) {
    return { field: "jurisdiction" as const, value: "Free Zone", prompt: "Did you mean Free Zone?" };
  }
  return null;
}
