import type { Metadata } from "next";
import Hero from "@/components/Hero";

import ProductsShowcase from "@/components/ProductsShowcase";
import ServicesPreview from "@/components/ServicesPreview";
import WhoWeFor from "@/components/WhoWeFor";
import ResearchTeaser from "@/components/ResearchTeaser";
import StartupPartners from "@/components/StartupPartners";
import BlogTeaser from "@/components/BlogTeaser";


const siteUrl = "https://quantalabs.cc";
const ogImage = "/seo/image.png";

// CHANGED: Updated metadata for two-pillar AI + PQC brand positioning
// DATE: 2026-08-07 | VERSION: 2.0
export const metadata: Metadata = {
  title:
    "QuantaLabs | Quantum & AI Lab",
  description:
    "QuantaLabs is a Quantum & AI Lab engineering quantum-safe computing, autonomous AI systems, and materials discovery.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title:
      "QuantaLabs | Quantum & AI Lab",
    description:
      "QuantaLabs is a Quantum & AI Lab engineering quantum-safe computing, autonomous AI systems, and materials discovery.",
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
      "QuantaLabs | Quantum & AI Lab",
    description:
      "QuantaLabs is a Quantum & AI Lab engineering quantum-safe computing, autonomous AI systems, and materials discovery.",
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
        "QuantaLabs is a Quantum & AI Lab engineering quantum-safe computing, autonomous AI agent infrastructure, and materials discovery.",
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
      <StartupPartners />
      <ProductsShowcase />
      <ServicesPreview />
      <WhoWeFor />
      <BlogTeaser />
      <ResearchTeaser />
    </>
  );
}
