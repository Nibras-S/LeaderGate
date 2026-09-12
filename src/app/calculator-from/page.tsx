import type { Metadata } from "next";
import { FormCalculator } from "./FormCalculator";

export const metadata: Metadata = {
  title: "Business Setup Cost Calculator | Insource Prime",
  description: "Answer a few questions to get an indicative UAE business setup cost breakdown.",
};

export default function CalculatorFormPage() {
  return <FormCalculator />;
}
