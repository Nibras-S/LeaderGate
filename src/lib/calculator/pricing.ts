export const pricing = {
  freezone: { baseLicense: 12_750, registration: 1_500, establishmentCard: 2_000, visa: 4_000, flexiDesk: 7_500, physicalOffice: 15_000 },
  mainland: { tradeLicense: 14_999, registration: 2_500, visa: 4_000, flexiDesk: 0, office: 8_000 },
  offshore: { setup: 8_000, registration: 1_000 },
  services: { banking: 2_500, accounting: 3_600, vat: 1_500, corporateTax: 1_500, pro: 3_000 },
} as const;

export type PricingConfig = typeof pricing;
