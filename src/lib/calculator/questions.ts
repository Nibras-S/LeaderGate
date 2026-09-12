import type { BusinessProfile } from "./schema";

export type GuidedQuestion = { id: keyof BusinessProfile; question: string; options: string[] };

export function getNextQuestion(profile: BusinessProfile): GuidedQuestion | null {
  if (!profile.businessActivity) return { id: "businessActivity", question: "What type of business are you planning to start?", options: ["Trading", "E-commerce", "Consulting", "Technology", "Marketing", "Restaurant / Food", "Construction", "Other"] };
  if (profile.activityCategory === "other" && !profile.detailedActivity) return { id: "detailedActivity", question: "What will your business mainly do? You can describe it in a few words.", options: ["Professional services", "Retail", "Manufacturing", "Education", "Health & wellness", "Something else"] };
  if ((profile.activityCategory === "trading" || profile.ecommerce) && !profile.detailedActivity) return {
    id: "detailedActivity",
    question: profile.ecommerce ? "What will you mainly sell online? Choose an example or type your own product." : "What products will you trade? Choose an example or type your own.",
    options: profile.ecommerce ? ["Fashion", "Electronics", "Beauty products", "Food & beverages", "Digital products", "Something else"] : ["Consumer goods", "Electronics", "Food products", "Building materials", "Machinery", "Something else"],
  };
  if (!profile.emirate) return { id: "emirate", question: "Which emirate would you prefer?", options: ["Dubai", "Abu Dhabi", "Sharjah", "Not sure"] };
  if (!profile.jurisdiction) return { id: "jurisdiction", question: "Do you prefer Mainland, Free Zone, or would you like a recommendation?", options: ["Mainland", "Free Zone", "Not sure"] };
  if (!profile.partners) return { id: "partners", question: "How many owners or shareholders will there be?", options: ["1 owner", "2 partners", "3 partners", "More than 3"] };
  if (profile.visas === undefined) return { id: "visas", question: "How many UAE residence visas should I include?", options: ["No visas", "1 visa", "2 visas", "3 visas", "4+ visas"] };
  if (profile.officeType === undefined) return { id: "officeType", question: "What workspace would suit the business?", options: ["Flexi desk", "Small office", "Physical office", "No office", "Not sure"] };
  if (profile.activityCategory === "trading" && profile.importExport === undefined) return { id: "importExport", question: "Will you import or export goods?", options: ["Yes", "No", "Not sure"] };
  if (profile.importExport && profile.warehouse === undefined) return { id: "warehouse", question: "Will you need warehouse facilities?", options: ["Yes", "No", "Not sure"] };
  if (profile.banking === undefined) return { id: "banking", question: "Would you like bank account assistance included?", options: ["Yes, include it", "No, thanks"] };
  if (profile.accounting === undefined) return { id: "accounting", question: "Should I include accounting and tax support?", options: ["Accounting + tax", "Accounting only", "Tax only", "Not now"] };
  return null;
}
