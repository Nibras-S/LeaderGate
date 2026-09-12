import { routeAI } from "@/lib/ai/model-router";
import { businessProfileSchema } from "@/lib/calculator/schema";
import { z } from "zod";

const requestSchema = z.object({
  message: z.string().min(1).max(4000),
  profile: businessProfileSchema,
  model: z.enum(["smart", "openai/gpt-oss-120b", "openai/gpt-oss-20b", "llama-3.3-70b-versatile"]).optional(),
  currentQuestion: z.object({ id: z.string(), question: z.string(), options: z.array(z.string()) }).nullable().optional(),
});

export async function POST(request: Request) {
  try {
    const input = requestSchema.parse(await request.json());
    const result = await routeAI(input.message, input.profile, input.model, input.currentQuestion);
    return Response.json(result);
  } catch (error) {
    console.error("Calculator chat request failed", error instanceof Error ? error.message : "Unknown provider error");
    return Response.json({ error: "Sorry, I'm having trouble connecting to the AI right now." }, { status: 503 });
  }
}
