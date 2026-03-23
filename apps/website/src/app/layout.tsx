import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CookieBanner } from "@/components/cookie-banner";
import { JsonLd } from "@/components/json-ld";
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
    images: [{ url: "/og", width: 1200, height: 630, alt: "L'Artisane a Dinard" }],
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: `+33${siteConfig.owner.phone.replace(/\s/g, "").slice(1)}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    postalCode: siteConfig.address.postalCode,
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.6326,
    longitude: -2.0688,
  },
  priceRange: "€€",
  image: `${siteConfig.url}/images/logo-hair-golden.png`,
  sameAs: [siteConfig.social.instagram],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Sunday"],
      opens: "00:00",
      closes: "00:00",
    },
  ],
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
        <JsonLd data={jsonLd} />
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
        <Script
          defer
          data-domain={siteConfig.analytics.plausibleDomain}
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
