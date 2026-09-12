import { calculateQuote } from "@/lib/calculator/calculator";
import { pricing } from "@/lib/calculator/pricing";
import { businessProfileSchema } from "@/lib/calculator/schema";
import { z } from "zod";

const requestSchema = z.object({ confirmed: z.literal(true), profile: businessProfileSchema });
export async function POST(request: Request) {
  try {
    const { profile } = requestSchema.parse(await request.json());
    return Response.json(calculateQuote(profile, pricing));
  } catch {
    return Response.json({ error: "We couldn't prepare the estimate right now." }, { status: 400 });
  }
}
