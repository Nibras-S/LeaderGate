import { z } from "zod";

export const businessProfileSchema = z.object({
  businessActivity: z.string().optional(),
  detailedActivity: z.string().optional(),
  activityCategory: z.enum(["trading", "ecommerce", "consulting", "technology", "marketing", "food", "construction", "other"]).optional(),
  businessModel: z.string().optional(),
  targetMarket: z.string().optional(),
  emirate: z.string().optional(),
  jurisdiction: z.enum(["freezone", "mainland", "offshore"]).optional(),
  partners: z.number().int().min(1).optional(),
  visas: z.number().int().min(0).optional(),
  employees: z.number().int().min(0).optional(),
  officeRequired: z.boolean().optional(),
  officeType: z.enum(["none", "flexi", "small", "physical", "warehouse"]).optional(),
  ecommerce: z.boolean().optional(),
  importExport: z.boolean().optional(),
  warehouse: z.boolean().optional(),
  banking: z.boolean().optional(),
  accounting: z.boolean().optional(),
  vat: z.boolean().optional(),
  corporateTax: z.boolean().optional(),
  proServices: z.boolean().optional(),
  additionalServices: z.array(z.string()).optional(),
});

export type BusinessProfile = z.infer<typeof businessProfileSchema>;

export const aiResponseSchema = z.object({
  message: z.string(),
  extracted: businessProfileSchema,
  intent: z.enum(["greeting", "answer", "correction", "question", "uncertain", "off_topic"]).default("answer"),
  confidence: z.number().min(0).max(1).default(0.7),
  correctedFields: z.array(z.string()).default([]),
  clarification: z.object({ proposedValue: z.string(), question: z.string() }).nullable().default(null),
  missingFields: z.array(z.string()),
  nextQuestion: z.object({
    id: z.string(),
    question: z.string(),
    options: z.array(z.string()),
  }).nullable(),
  requiresConfirmation: z.boolean(),
});

export type AIResponse = z.infer<typeof aiResponseSchema>;
