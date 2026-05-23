import type { Metadata } from "next";
import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import ServicesPreview from "@/components/ServicesPreview";
import WalletShowcase from "@/components/WalletShowcase";
import DeveloperShowcase from "@/components/DeveloperShowcase";
import NetworkMetrics from "@/components/NetworkMetrics";
import EcosystemShowcase from "@/components/EcosystemShowcase";
import ResearchTeaser from "@/components/ResearchTeaser";
import PqcStandardBanner from "@/components/PqcStandardBanner";
import QuantaCipherShowcase from "@/components/QuantaCipherShowcase";

const siteUrl = "https://quantalabs.cc";
const ogImage = "/seo/image.png";

export const metadata: Metadata = {
  title: "Quantalabs — The Leading Standard for Post-Quantum Cryptography Migration",
  description:
    "Quantalabs is the premier institutional protocol engineering lab specializing in NIST-standardized PQC migration and sovereign blockchain infrastructure for global financial systems.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Quantalabs — The Leading Standard for Post-Quantum Cryptography Migration",
    description:
      "Premier institutional protocol lab specializing in NIST-standardized PQC migration and sovereign blockchain infrastructure.",
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
    title: "Quantalabs — The Leading Standard for Post-Quantum Cryptography Migration",
    description:
      "Premier institutional protocol lab specializing in NIST-standardized PQC migration and sovereign blockchain infrastructure.",
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
      <ResearchTeaser />
      <PqcStandardBanner />
      <ServicesPreview />
      <WalletShowcase />
      <QuantaCipherShowcase />
      <EcosystemShowcase />
      <DeveloperShowcase />
    </>
  );
}
