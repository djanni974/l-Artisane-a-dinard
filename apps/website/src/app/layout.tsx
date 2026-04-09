import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";
import { siteConfig } from "@/data/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default:
      "L'Artisane à Dinard | Salon de coiffure naturel & coloration végétale",
    template: "%s | L'Artisane à Dinard",
  },
  description:
    "Salon de coiffure artisanal à Dinard. Pauline Besnard, coloriste experte spécialisée en coloration végétale, balayage et soins naturels. Réservation en ligne.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      { url: "/og", width: 1200, height: 630, alt: "L'Artisane a Dinard" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "L'Artisane à Dinard | Salon de coiffure naturel & coloration végétale",
    description:
      "Salon de coiffure artisanal à Dinard. Pauline Besnard, coloriste experte spécialisée en coloration végétale, balayage et soins naturels.",
    images: ["/og"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${cormorant.variable} min-h-screen bg-[#f5ebe0] font-sans text-[#2d4a4a] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
