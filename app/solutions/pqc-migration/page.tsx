import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "PQC Migration | QuantaLabs",
  description:
    "End-to-end lattice integration and deployment for enterprise infrastructure.",
};

export default function PQCMigrationPage() {
  return (
    <div className="bg-white min-h-screen pt-28 pb-24 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-8 p-10 md:p-16 border-b-2 lg:border-b-0 lg:border-r-2 border-black bg-gray-50/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-[#C4ED5F]"></div>
                <span className="font-mono text-[10px] tracking-[0.2em] text-gray-500 uppercase font-bold">
                  Solutions // Implementation
                </span>
              </div>
              <h1 className="text-[3rem] md:text-[5rem] font-black tracking-tighter leading-[0.95] text-black">
                <span className="text-[#C4ED5F]">PQC</span>{" "}
                <span className="relative inline-block mt-1">
                  Migration.
                  <span className="absolute bottom-1 left-0 w-full h-[6px] bg-[#C4ED5F] -z-10"></span>
                </span>
              </h1>
            </div>

            <div className="lg:col-span-4 p-10 flex flex-col justify-end bg-[#C4ED5F] text-black relative overflow-hidden">
              <span className="font-serif text-3xl text-black mb-6 relative z-10 leading-none inline-block">
                ⇌
              </span>
              <p className="text-sm font-medium relative z-10">
                End-to-end migration from classical ECC/RSA to NIST-standardized
                lattice-based cryptography (FIPS 203, 204, 205). We deploy
                zero-downtime hybrid implementations for HSMs, cloud
                infrastructure, and TLS endpoints.
              </p>
            </div>
          </div>
        </div>

        {/* Hybrid Approach Context */}
        <div className="mb-16">
          <div className="border-l-4 border-black pl-8 py-2 mb-8 bg-gray-50 p-6">
            <h2 className="text-2xl font-black mb-4">
              The Hybridization Strategy
            </h2>
            <p className="text-gray-600 font-medium leading-relaxed max-w-3xl">
              Ripping and replacing classical cryptography is dangerous.
              QuantaLabs strictly adheres to the NSA&apos;s recommended{" "}
              <strong>Hybrid Cryptography</strong> approach. We combine
              classical algorithms (like X25519) with post-quantum algorithms
              (like ML-KEM) in the same connection. If the post-quantum math is
              broken, you fall back to classical security. If classical math is
              broken by a quantum computer, you are protected by the lattice
              math.
            </p>
          </div>
        </div>

        {/* Capabilities */}
        <h2 className="text-2xl font-black mb-8">Migration Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="border-2 border-black p-10 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all group">
            <span className="font-serif text-3xl text-black group-hover:text-[#C4ED5F] transition-colors mb-6 leading-none inline-block">
              Ξ
            </span>
            <h3 className="text-lg font-black mb-4">TLS 1.3 Upgrades</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We update your load balancers, proxies, and internal microservices
              to support hybrid key exchange (X25519Kyber768Draft00) ensuring
              all data-in-transit is immediately protected from &quot;Store Now,
              Decrypt Later&quot; attacks without severely impacting latency.
            </p>
          </div>

          <div className="border-2 border-black p-10 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all group">
            <span className="font-serif text-3xl text-black group-hover:text-[#C4ED5F] transition-colors mb-6 leading-none inline-block">
              Γ
            </span>
            <h3 className="text-lg font-black mb-4">Code Signing & PKI</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Migration of your internal Public Key Infrastructure to support
              ML-DSA (Dilithium) and SLH-DSA (Sphincs+). We secure your software
              supply chain so that firmware updates and binaries cannot be
              spoofed by a quantum adversary.
            </p>
          </div>

          <div className="border-2 border-black p-10 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all group">
            <span className="font-serif text-3xl text-black group-hover:text-[#C4ED5F] transition-colors mb-6 leading-none inline-block">
              ⨀
            </span>
            <h3 className="text-lg font-black mb-4">HSM & Cloud Integration</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Integration of PQC algorithms directly into AWS KMS, Azure Key
              Vault, and on-premise Hardware Security Modules (HSMs). We ensure
              keys are generated securely using quantum-safe random number
              generation.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-black text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-10">
          <div>
            <h3 className="font-bold mb-2">
              Secure your infrastructure today.
            </h3>
            <p className="text-sm text-gray-400">
              Our engineers implement what others only theorize.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-8 py-4 bg-white border-2 border-transparent text-black font-bold text-xs uppercase tracking-widest hover:bg-[#C4ED5F] hover:border-black transition-all flex items-center justify-center gap-2 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] md:shadow-none w-full md:w-auto"
          >
            Contact Engineering
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
