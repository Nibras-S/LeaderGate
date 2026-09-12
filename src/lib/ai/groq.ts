import { aiResponseSchema, businessProfileSchema, type AIResponse, type BusinessProfile } from "@/lib/calculator/schema";
import { ADVISOR_SYSTEM_PROMPT } from "./prompts";
import type { AIProvider, ProviderRequest } from "./provider";

export class GroqProvider implements AIProvider {
  constructor(private apiKey: string, private baseUrl = "https://api.groq.com/openai/v1") {}

  async complete(request: ProviderRequest) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), request.timeoutMs);
    try {
      const response = await fetch(`${this.baseUrl}/chat/completions`, {
        method: "POST",
        headers: { Authorization: `Bearer ${this.apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          model: request.model,
          temperature: request.temperature,
          max_completion_tokens: request.maxTokens,
          response_format: { type: "json_object" },
          messages: [
            { role: "system", content: ADVISOR_SYSTEM_PROMPT },
            { role: "user", content: JSON.stringify({ message: request.message, currentProfile: request.profile, currentQuestion: request.currentQuestion }) },
          ],
        }),
        signal: controller.signal,
      });
      if (!response.ok) throw new Error(`Provider request failed: ${response.status}`);
      const data = await response.json();
      return normalizeResponse(JSON.parse(data.choices?.[0]?.message?.content ?? "{}"));
    } finally { clearTimeout(timer); }
  }
}

function normalizeResponse(raw: Record<string, unknown>): AIResponse {
  const source = (raw.extracted && typeof raw.extracted === "object" ? raw.extracted : {}) as Record<string, unknown>;
  const categorySource = String(source.activityCategory ?? source.businessType ?? "").toLowerCase();
  const categoryMap: Record<string, BusinessProfile["activityCategory"]> = {
    trading: "trading", ecommerce: "ecommerce", "e-commerce": "ecommerce", consulting: "consulting",
    technology: "technology", software: "technology", marketing: "marketing", food: "food", restaurant: "food", construction: "construction",
  };
  const candidate = {
    ...source,
    businessActivity: source.businessActivity ?? source.businessType ?? source.activity,
    activityCategory: categoryMap[categorySource],
    emirate: source.emirate ?? source.location,
    partners: source.partners ?? source.partnersCount ?? source.owners ?? source.shareholders,
    visas: source.visas ?? source.visasCount ?? source.residenceVisas,
  };
  const parsedProfile = businessProfileSchema.safeParse(candidate);
  const next = raw.nextQuestion && typeof raw.nextQuestion === "object" ? raw.nextQuestion as Record<string, unknown> : null;
  const normalized = {
    message: typeof raw.message === "string" ? raw.message : "Thanks, I've updated your setup details.",
    extracted: parsedProfile.success ? parsedProfile.data : {},
    intent: ["greeting", "answer", "correction", "question", "uncertain", "off_topic"].includes(String(raw.intent)) ? raw.intent : "answer",
    confidence: typeof raw.confidence === "number" ? Math.max(0, Math.min(1, raw.confidence)) : .7,
    correctedFields: Array.isArray(raw.correctedFields) ? raw.correctedFields.filter((value): value is string => typeof value === "string") : [],
    clarification: raw.clarification && typeof raw.clarification === "object" && typeof (raw.clarification as Record<string, unknown>).proposedValue === "string" ? {
      proposedValue: String((raw.clarification as Record<string, unknown>).proposedValue),
      question: String((raw.clarification as Record<string, unknown>).question ?? `Did you mean ${(raw.clarification as Record<string, unknown>).proposedValue}?`),
    } : null,
    missingFields: Array.isArray(raw.missingFields) ? raw.missingFields.filter((value): value is string => typeof value === "string") : [],
    nextQuestion: next ? {
      id: typeof next.id === "string" ? next.id : "guided_follow_up",
      question: typeof next.question === "string" ? next.question : typeof next.text === "string" ? next.text : "What would you like to add?",
      options: Array.isArray(next.options) ? next.options.filter((value): value is string => typeof value === "string") : [],
    } : null,
    requiresConfirmation: raw.requiresConfirmation === true,
  };
  return aiResponseSchema.parse(normalized);
}
