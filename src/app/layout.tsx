import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap"
});

export const metadata: Metadata = {
  title: "AuraShoot | AI Catalogue Apparel Shoot Platform",
  description:
    "Design, orchestrate, and launch photorealistic AI apparel catalogue shoots. Generate cohesive campaigns, styles, and prompts with AuraShoot.",
  keywords: [
    "AI catalogue",
    "apparel",
    "fashion shoot",
    "product photography",
    "generative AI",
    "virtual photoshoot"
  ],
  openGraph: {
    title: "AuraShoot | AI Catalogue Apparel Shoot Platform",
    description:
      "Launch immersive apparel campaigns with AI-generated models, lighting, and styling. Build prompts, manage scenes, and deliver consistent catalogue imagery in minutes.",
    url: "https://agentic-7c23c872.vercel.app",
    siteName: "AuraShoot",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "AuraShoot | AI Catalogue Apparel Shoot Platform",
    description:
      "Create cohesive apparel catalogue imagery with AI scene orchestration, prompts, and adaptive moodboards."
  },
  authors: [{ name: "AuraShoot" }]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>{children}</body>
    </html>
  );
}
