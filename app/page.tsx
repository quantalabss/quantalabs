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
    "QuantaLabs | Post-Quantum Cryptography & Autonomous AI",
  description:
    "Quantalabs helps businesses integrate post-quantum cryptography and secure autonomous AI agent workflows.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title:
      "QuantaLabs | Post-Quantum Cryptography & Autonomous AI",
    description:
      "Post-quantum cryptography security + AI engineering. Secure your autonomous AI agent infrastructure for the quantum era.",
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
      "QuantaLabs | Post-Quantum Cryptography & Autonomous AI",
    description:
      "Post-quantum security + AI engineering. Build intelligent systems. Secure them for the quantum era.",
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
      <StartupPartners />
      <ProductsShowcase />
      <ServicesPreview />
      <WhoWeFor />
      <BlogTeaser />
      <ResearchTeaser />
    </>
  );
}
