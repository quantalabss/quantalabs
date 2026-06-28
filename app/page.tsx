import type { Metadata } from "next";
import Hero from "@/components/Hero";

import ProductsShowcase from "@/components/ProductsShowcase";
import EcosystemShowcase from "@/components/EcosystemShowcase";
import OpenSourceShowcase from "@/components/OpenSourceShowcase";
import ServicesPreview from "@/components/ServicesPreview";
import ResearchTeaser from "@/components/ResearchTeaser";
import PqcStandardBanner from "@/components/PqcStandardBanner";

const siteUrl = "https://quantalabs.cc";
const ogImage = "/seo/image.png";

export const metadata: Metadata = {
  title:
    "QuantaLabs | The Leading Standard for Post-Quantum Cryptography Migration",
  description:
    "Quantalabs is the premier institutional protocol engineering lab specializing in NIST-standardized PQC migration and sovereign blockchain infrastructure for global financial systems.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title:
      "QuantaLabs | The Leading Standard for Post-Quantum Cryptography Migration",
    description:
      "Premier institutional protocol lab specializing in NIST-standardized PQC migration and sovereign blockchain infrastructure.",
    url: siteUrl,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "QuantaLabs | Post-Quantum Migration & Blockchain",
      },
    ],
  },
  twitter: {
    title:
      "QuantaLabs | The Leading Standard for Post-Quantum Cryptography Migration",
    description:
      "Premier institutional protocol lab specializing in NIST-standardized PQC migration and sovereign blockchain infrastructure.",
    images: [ogImage],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.quantalabs.cc/#organization",
      name: "QuantaLabs Private Limited",
      url: "https://www.quantalabs.cc",
      logo: {
        "@type": "ImageObject",
        url: "https://www.quantalabs.cc/logo.png",
      },
      description:
        "India's first post-quantum cryptography migration company. CBOM audits, NIST PQC migration services, and QuantaCipher encryption API.",
      foundingDate: "2026",
      foundingLocation: {
        "@type": "Place",
        name: "Coimbatore, Tamil Nadu, India",
      },
      areaServed: ["IN", "Worldwide"],
      contactPoint: {
        "@type": "ContactPoint",
        email: "quanta@quantachain.org",
        contactType: "sales",
      },
      sameAs: ["https://quantachain.org", "https://quantacipher.com"],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.quantalabs.cc/#website",
      url: "https://www.quantalabs.cc",
      name: "QuantaLabs",
      publisher: {
        "@id": "https://www.quantalabs.cc/#organization",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />

      <ProductsShowcase />
      <EcosystemShowcase />
      <OpenSourceShowcase />
      <ServicesPreview />
      <ResearchTeaser />
      <PqcStandardBanner />
    </>
  );
}
