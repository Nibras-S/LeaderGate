import type { AIResponse, BusinessProfile } from "@/lib/calculator/schema";

export type ModelConfig = { provider: "groq" | "openai-compatible"; model: string; priority: number; enabled: boolean };
export type ProviderRequest = { message: string; profile: BusinessProfile; currentQuestion?: { id: string; question: string; options: string[] } | null; model: string; temperature: number; maxTokens: number; timeoutMs: number };
export interface AIProvider { complete(request: ProviderRequest): Promise<AIResponse> }
