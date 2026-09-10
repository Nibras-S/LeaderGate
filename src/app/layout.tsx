import type { Metadata } from "next";
import "./globals.css";
import { dmSans, manrope, inter } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Leader Gate Advertising — Premium Signage, Branding & Fabrication UAE",
  description:
    "Leader Gate is a leading UAE signage, branding, and fabrication company helping businesses create powerful visual experiences through innovative design, precision manufacturing, and professional installation.",
  keywords: [
    "signage UAE",
    "branding fabrication Dubai",
    "architectural signage",
    "corporate branding UAE",
    "LED signage",
    "wayfinding systems",
    "large format printing",
    "Leader Gate",
  ],
  openGraph: {
    title: "Leader Gate Advertising — Premium Signage, Branding & Fabrication UAE",
    description:
      "Premium signage, branding and visual communication solutions across the UAE.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${manrope.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&f[]=clash-display@500,600,700&display=swap"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
