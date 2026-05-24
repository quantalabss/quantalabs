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
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://quantalabs.cc/#organization',
        name: 'QuantaLabs Private Limited',
        url: 'https://quantalabs.cc',
        logo: {
          '@type': 'ImageObject',
          url: 'https://quantalabs.cc/logo.png',
        },
        description: 'India\'s first post-quantum cryptography migration company. CBOM audits, NIST PQC migration services, and QuantaCipher encryption API.',
        foundingDate: '2026',
        foundingLocation: {
          '@type': 'Place',
          name: 'Coimbatore, Tamil Nadu, India',
        },
        areaServed: ['IN', 'Worldwide'],
        contactPoint: {
          '@type': 'ContactPoint',
          email: 'quanta@quantachain.org',
          contactType: 'sales',
        },
        sameAs: [
          'https://quantachain.org',
          'https://quantacipher.com',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://quantalabs.cc/#website',
        url: 'https://quantalabs.cc',
        name: 'QuantaLabs',
        publisher: {
          '@id': 'https://quantalabs.cc/#organization',
        },
      },
      {
        '@type': 'Service',
        name: 'CBOM Audit',
        provider: {
          '@id': 'https://quantalabs.cc/#organization',
        },
        description: 'Cryptographic Bill of Materials audit for Indian enterprises — identifying quantum-vulnerable algorithms and delivering a regulatory-ready CBOM document for India DST FY 2027-28 compliance.',
        areaServed: 'IN',
        serviceType: 'Cryptographic Security Audit',
      },
      {
        '@type': 'Service',
        name: 'PQC Migration',
        provider: {
          '@id': 'https://quantalabs.cc/#organization',
        },
        description: 'End-to-end post-quantum cryptography migration to NIST ML-KEM and ML-DSA standards for fintech and crypto companies in India.',
        areaServed: 'IN',
        serviceType: 'Cryptographic Migration Consulting',
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
      <LogoTicker />
      <EcosystemShowcase />
      <QuantaCipherShowcase />
      <WalletShowcase />
      <ServicesPreview />
      <PqcStandardBanner />
      <DeveloperShowcase />
      <ResearchTeaser />
    </>
  );
}
