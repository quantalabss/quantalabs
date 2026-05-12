import type { Metadata } from "next";
import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import ServicesPreview from "@/components/ServicesPreview";
import WalletShowcase from "@/components/WalletShowcase";
import DeveloperShowcase from "@/components/DeveloperShowcase";
import NetworkMetrics from "@/components/NetworkMetrics";
import EcosystemShowcase from "@/components/EcosystemShowcase";
import ResearchTeaser from "@/components/ResearchTeaser";

const siteUrl = "https://quantalabs.cc";
const ogImage = "/seo/image.png";

export const metadata: Metadata = {
  title: "Quantalabs — Post-Quantum Migration & Blockchain",
  description:
    "Quantalabs is an institutional protocol engineering lab specializing in PQC migration for banks and government agencies. We leverage QuantaChain, a live production blockchain implementing NIST-standardized Falcon-512 and Kyber-1024.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Quantalabs — Post-Quantum Migration & Blockchain",
    description:
      "Institutional protocol lab specializing in PQC migration for banks and government. Battle-tested on QuantaChain with Falcon-512 and Kyber-1024.",
    url: siteUrl,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Quantalabs — Post-Quantum Migration & Blockchain",
      },
    ],
  },
  twitter: {
    title: "Quantalabs — Post-Quantum Migration & Blockchain",
    description:
      "Institutional protocol lab specializing in PQC migration for banks and government. Battle-tested on QuantaChain.",
    images: [ogImage],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Quantalabs",
  url: siteUrl,
  logo: `${siteUrl}/logo/quanta-transparent-bg-logo.svg`,
  description:
    "Quantalabs is an institutional protocol engineering lab specializing in NIST-standardized post-quantum cryptography (PQC) migration for banks, government agencies, and enterprises.",
  sameAs: [
    "https://quantachain.org",
    "https://github.com/quantachain",
    "https://medium.com/@quantachain",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "contact@quantalabs.cc",
    contactType: "Customer Support",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <LogoTicker />
      <ServicesPreview />
      <WalletShowcase />
      <DeveloperShowcase />
      <NetworkMetrics />
      <EcosystemShowcase />
      <ResearchTeaser />
    </>
  );
}
