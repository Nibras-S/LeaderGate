import type { AIResponse, BusinessProfile } from "@/lib/calculator/schema";
import { GroqProvider } from "./groq";
import type { ModelConfig } from "./provider";

export const defaultModels: ModelConfig[] = [
  { provider: "groq", model: "openai/gpt-oss-120b", priority: 1, enabled: true },
  { provider: "groq", model: "openai/gpt-oss-20b", priority: 2, enabled: true },
  { provider: "groq", model: "llama-3.3-70b-versatile", priority: 3, enabled: true },
];

export async function routeAI(message: string, profile: BusinessProfile, selectedModel: string = "smart", currentQuestion?: { id: string; question: string; options: string[] } | null): Promise<AIResponse> {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) throw new Error("AI provider is not configured");
  const provider = new GroqProvider(apiKey, process.env.GROQ_API_BASE_URL);
  let lastError: unknown;
  const models = selectedModel === "smart"
    ? defaultModels
    : [...defaultModels].sort((a, b) => (a.model === selectedModel ? -1 : b.model === selectedModel ? 1 : a.priority - b.priority));
  for (const config of models.filter((item) => item.enabled).slice(0, 3)) {
    try { return await provider.complete({ message, profile, currentQuestion, model: config.model, temperature: 0.1, maxTokens: 1100, timeoutMs: 18_000 }); }
    catch (error) { lastError = error; }
  }
  throw lastError ?? new Error("No AI model is available");
}
