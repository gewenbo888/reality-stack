import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://reality-stack.psyverse.fun"),
  title: "Reality Stack | 现实技术栈",
  description:
    "Reality may itself be a layered system — physics, energy, matter, life, intelligence, civilization, information, simulation, AI, meta-reality. A bilingual, cinematic architecture diagram of existence.",
  keywords: [
    "Reality Stack",
    "现实技术栈",
    "layered universe",
    "systems thinking",
    "complexity theory",
    "information theory",
    "cosmology",
    "civilization",
    "AI",
    "simulation hypothesis",
    "meta-reality",
    "Psyverse",
  ],
  authors: [{ name: "Gewenbo", url: "https://psyverse.fun" }],
  alternates: {
    canonical: "/",
    languages: { en: "/", "zh-CN": "/", "x-default": "/" },
  },
  openGraph: {
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Reality Stack · 现实技术栈 — The Architecture of Existence" }],
    title: "Reality Stack · The Architecture Diagram of Existence",
    description:
      "Ten layers, one universe. From quantum fields to recursive AI — a bilingual cinematic exploration of how reality stacks itself.",
    url: "https://reality-stack.psyverse.fun/",
    siteName: "Psyverse",
    type: "website",
    locale: "en_US",
    alternateLocale: ["zh_CN"],
  },
  twitter: {
    images: ["/twitter-image.png"],
    card: "summary_large_image",
    title: "Reality Stack · 现实技术栈",
    description:
      "Reality itself may be a layered system. Ten layers, from physics to meta-reality.",
  },
  robots: { index: true, follow: true },
  other: { "theme-color": "#02030a" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Inter+Tight:wght@300;400;500;600&family=JetBrains+Mono:wght@300;400;500&family=Noto+Serif+SC:wght@300;400;500;600;700&family=Noto+Sans+SC:wght@300;400;500&display=swap"
        />
      </head>
      <body className="min-h-screen antialiased">
        <div className="void-field" aria-hidden />
        <div className="grid-field" aria-hidden />
        <div className="grain" aria-hidden />
        {children}
        <Script
          src="https://analytics-dashboard-two-blue.vercel.app/tracker.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
