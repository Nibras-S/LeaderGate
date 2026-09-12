import type { Metadata } from "next";
import { CalculatorShell } from "./CalculatorShell";

export const metadata: Metadata = {
  title: "UAE Business Setup Cost Calculator | Insource Prime",
  description: "Build an estimated UAE company setup plan with the Insource Prime AI Business Setup Advisor.",
};

export default function InsourcePrimeCalculatorPage() {
  return <CalculatorShell />;
}
