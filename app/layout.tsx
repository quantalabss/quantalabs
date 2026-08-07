import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import Analytics from "@/components/Analytics";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://quantalabs.cc";
const ogImage = "/seo/image.png";

export const metadata: Metadata = {
  title: "QuantaLabs | AI Engineering & Quantum Security",
  description:
    "QuantaLabs engineers sovereign infrastructure for the autonomous AI economy. Enterprise AI Integrations, QuantaChain PQC blockchain, and QuantaCipher SDKs.",
  keywords: [
    "AI Engineering",
    "Autonomous AI Agents",
    "Post-Quantum Cryptography",
    "QuantaChain",
    "QuantaCipher",
    "M2M Economy",
    "Enterprise AI Integrations",
    "LLM Architecture",
    "FIPS 203/204 Compliance",
    "Quantum Safe Blockchain",
    "Zero-knowledge agent frameworks"
  ],
  authors: [{ name: "QuantaLabs Private Limited" }],
  creator: "QuantaLabs Private Limited",
  publisher: "QuantaLabs Private Limited",
  metadataBase: new URL("https://www.quantalabs.cc"),
  alternates: {
    canonical: "https://www.quantalabs.cc",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.quantalabs.cc",
    siteName: "QuantaLabs",
    title: "QuantaLabs | AI Engineering & Quantum Security",
    description:
      "Engineering the execution layer for the autonomous AI economy. Enterprise AI Integrations and QuantaChain PQC blockchain.",
    images: [
      {
        url: "/seo/image.png",
        width: 1200,
        height: 630,
        alt: "QuantaLabs | AI Engineering & Quantum Security",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QuantaLabs | AI Engineering & Quantum Security",
    description:
      "Engineering the execution layer for the autonomous AI economy. Enterprise AI Integrations and QuantaChain PQC blockchain.",
    images: ["/seo/image.png"],
    creator: "@quantalabs",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-[#FAF9F5] text-[#141413] font-sans antialiased selection:bg-[#C04A2B] selection:text-[#FAF9F5]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "QuantaLabs Private Limited",
              alternateName: "QuantaLabs Pvt Ltd",
              url: "https://www.quantalabs.cc",
              logo: "https://www.quantalabs.cc/seo/image.png",
              sameAs: ["https://github.com/quantachain"],
            }),
          }}
        />
      </body>
    </html>
  );
}
