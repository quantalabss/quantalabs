import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogNotification from "@/components/BlogNotification";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://quantalabs.cc";
const ogImage = "/seo/image.png";

export const metadata: Metadata = {
  title: 'QuantaLabs — Post-Quantum Cryptography Migration Company India',
  description: 'QuantaLabs helps Indian fintechs and crypto companies complete CBOM audits and migrate to NIST post-quantum standards before India\'s DST FY 2027-28 deadline. Falcon-512 blockchain. QuantaCipher API.',
  keywords: [
    'PQC migration India',
    'post-quantum cryptography India',
    'CBOM audit India',
    'cryptographic bill of materials India',
    'NIST PQC migration services',
    'quantum safe cryptography India',
    'India DST PQC compliance',
    'Falcon-512 blockchain',
    'Kyber-1024 encryption',
    'post-quantum cryptography company India',
    'QuantaCipher',
    'QuantaLabs',
    'PQC readiness assessment India',
    'quantum resistant cryptography India',
    'fintech PQC migration India',
  ],
  authors: [{ name: 'QuantaLabs Private Limited' }],
  creator: 'QuantaLabs Private Limited',
  publisher: 'QuantaLabs Private Limited',
  metadataBase: new URL('https://quantalabs.cc'),
  alternates: {
    canonical: 'https://quantalabs.cc',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://quantalabs.cc',
    siteName: 'QuantaLabs',
    title: 'QuantaLabs — Post-Quantum Cryptography Migration Company India',
    description: 'India\'s first PQC migration company. CBOM audits, NIST migration roadmaps, and QuantaCipher API. Built on 131,000+ blocks of live Falcon-512 blockchain.',
    images: [
      {
        url: '/seo/image.png',
        width: 1200,
        height: 630,
        alt: 'QuantaLabs — Post-Quantum Cryptography Built and Deployed',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QuantaLabs — Post-Quantum Cryptography Migration Company India',
    description: 'CBOM audits and NIST PQC migration for Indian fintechs and crypto companies. India DST FY 2027-28 deadline compliance.',
    images: ['/seo/image.png'],
    creator: '@quantalabs',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-black font-sans antialiased">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <BlogNotification />
        <Footer />
      </body>
    </html>
  );
}
