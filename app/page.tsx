import type { Metadata } from "next";
import Hero from "@/components/Hero";

import ProductsShowcase from "@/components/ProductsShowcase";
import ServicesPreview from "@/components/ServicesPreview";
import ResearchTeaser from "@/components/ResearchTeaser";


const siteUrl = "https://quantalabs.cc";
const ogImage = "/seo/image.png";

// CHANGED: Updated metadata for two-pillar AI + PQC brand positioning
// DATE: 2026-08-07 | VERSION: 2.0
export const metadata: Metadata = {
  title:
    "QuantaLabs | AI Engineering & Post-Quantum Security",
  description:
    "Quantalabs helps businesses integrate AI, automate workflows, and secure applications with post-quantum cryptography. AI today, quantum ready tomorrow.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title:
      "QuantaLabs | AI Engineering & Post-Quantum Security",
    description:
      "AI engineering and automation services + post-quantum cryptography security. QuantaCipher encryption APIs and QuantaChain AI agent infrastructure.",
    url: siteUrl,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "QuantaLabs | AI Engineering & Post-Quantum Security",
      },
    ],
  },
  twitter: {
    title:
      "QuantaLabs | AI Engineering & Post-Quantum Security",
    description:
      "AI engineering + post-quantum security. Build intelligent systems. Secure them for the quantum era.",
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
        "AI engineering and post-quantum security company. AI integration services, workflow automation, QuantaCipher PQC encryption API, and QuantaChain AI agent infrastructure.",
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
      <ServicesPreview />
      <ResearchTeaser />
    </>
  );
}
