import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company | QuantaLabs",
  description:
    "Engineering sovereign infrastructure at the frontier of post-quantum cryptography.",
};

export default function CompanyPage() {
  return (
    <div className="bg-white min-h-screen pt-28 pb-24 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-8 p-10 md:p-16 border-b-2 lg:border-b-0 lg:border-r-2 border-black bg-gray-50/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-[#C4ED5F]"></div>
                <span className="font-mono text-[10px] tracking-[0.2em] text-gray-500 uppercase font-bold">
                  Corporate Overview
                </span>
              </div>
              <h1 className="text-[3rem] md:text-[5rem] font-black tracking-tighter leading-[0.95] text-black">
                <span className="text-[#C4ED5F]">QuantaLabs</span>
                <br />
                Private{" "}
                <span className="relative inline-block mt-1">
                  Limited.
                  <span className="absolute bottom-1 left-0 w-full h-[6px] bg-[#C4ED5F] -z-10"></span>
                </span>
              </h1>
            </div>

            {/* Math/Symbol Block */}
            <div className="lg:col-span-4 relative bg-[#C4ED5F] flex flex-col items-center justify-center p-6 overflow-hidden">
              <div
                className="absolute inset-0 opacity-40 pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.15) 1px, transparent 1px)`,
                  backgroundSize: "24px 24px",
                }}
              ></div>
              <div className="relative z-10 flex flex-col items-center justify-center h-full py-8">
                <span className="text-[8rem] font-black text-black leading-none select-none mb-4 tracking-tighter">
                  λ
                </span>
                <div className="w-full bg-white/90 backdrop-blur-sm border-2 border-black p-3 font-mono text-[10px] text-gray-500 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mt-auto text-center">
                  <span className="text-black font-bold">
                    EST. 2026 // INDIA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Sidebar Meta */}
            <div className="lg:col-span-4 p-10 border-b-2 lg:border-b-0 lg:border-r-2 border-black bg-gray-50/30">
              <div className="space-y-8">
                <div>
                  <h3 className="font-mono text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-2">
                    Headquarters
                  </h3>
                  <p className="text-sm font-bold text-black">
                    Coimbatore, Tamil Nadu
                    <br />
                    India
                  </p>
                </div>
                <div>
                  <h3 className="font-mono text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-2">
                    Focus Areas
                  </h3>
                  <ul className="text-sm font-bold text-black space-y-1">
                    <li>NIST FIPS 203/204/205</li>
                    <li>CBOM Auditing</li>
                    <li>Sovereign Blockchain</li>
                    <li>ZKP Primitives</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-mono text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-2">
                    Entity ID
                  </h3>
                  <p className="text-sm font-mono text-black bg-gray-100 p-2 border-2 border-black inline-block">
                    QL-IN-2026-9A
                  </p>
                </div>
              </div>
            </div>

            {/* Main Article */}
            <div className="lg:col-span-8 p-10 md:p-16">
              <article className="prose prose-gray max-w-none">
                <h2 className="text-2xl font-black text-black mb-6">
                  The Threat is Now.
                </h2>
                <p className="text-gray-600 font-medium leading-relaxed mb-6">
                  In December 2025, advances in quantum error correction
                  demonstrated that Shor&apos;s algorithm will break RSA and
                  Elliptic Curve Cryptography much sooner than historically
                  projected. The resulting &quot;Store Now, Decrypt Later&quot;
                  (SNDL) attacks threaten the very fabric of national
                  sovereignty, banking infrastructure, and digital privacy.
                </p>
                <p className="text-gray-600 font-medium leading-relaxed mb-6">
                  QuantaLabs was founded to defend the digital frontier. We are
                  India&apos;s first protocol engineering lab dedicated exclusively
                  to Post-Quantum Cryptography (PQC).
                </p>

                <h2 className="text-2xl font-black text-black mt-12 mb-6">
                  Our Mission
                </h2>
                <p className="text-gray-600 font-medium leading-relaxed mb-6">
                  Our mission is to migrate India&apos;s critical financial and state
                  infrastructure to NIST-standardized lattice-based cryptography
                  (ML-KEM and ML-DSA) before the Department of Science and
                  Technology&apos;s FY 2027-28 mandate deadline.
                </p>

                <blockquote className="border-l-8 border-black pl-6 my-8 py-2 bg-gray-50/50 pr-4">
                  <p className="text-lg font-bold text-black italic">
                    &quot;We do not build speculative cryptography. We build
                    high-performance, compliant, and formally verified
                    implementations of standardized mathematics.&quot;
                  </p>
                </blockquote>

                <h2 className="text-2xl font-black text-black mt-12 mb-6">
                  The QuantaLabs Difference
                </h2>
                <p className="text-gray-600 font-medium leading-relaxed mb-6">
                  Unlike generic cybersecurity consultants, we are deep-tech
                  protocol engineers. We maintain the Falcon-512 blockchain, we
                  build custom C++ and Rust cryptographic engines, and we
                  understand the nuanced latency constraints of high-frequency
                  trading networks. We don&apos;t just write reports; we deploy
                  code.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
