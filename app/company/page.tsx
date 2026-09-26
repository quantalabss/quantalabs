// CHANGED: Redesigned for Deep Tech Light Mode aesthetic and renamed to "About Us".
// DATE: 2026-08-07 | VERSION: 4.0
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | QuantaLabs",
  description:
    "Engineering sovereign infrastructure at the frontier of post-quantum cryptography.",
};

export default function AboutUsPage() {
  return (
    <div className="bg-transparent min-h-screen pt-32 pb-24 text-[#141413] font-sans selection:bg-[#C04A2B] selection:text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mb-16 pb-12 border-b border-gray-200">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 mb-8 shadow-sm">
            <span className="w-1.5 h-1.5 bg-[#C04A2B]"></span>
            <span className="text-[10px] tracking-[0.2em] text-gray-500 uppercase font-mono font-medium">About Us</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight text-[#141413] leading-[1.05]">
            QuantaLabs <br/><span className="text-gray-400">Private Limited.</span>
          </h1>
          <p className="mt-8 text-lg text-gray-600 max-w-2xl font-normal leading-relaxed">
            We are a deep tech engineering lab securing critical infrastructure with post-quantum cryptography and building the execution layer for the autonomous AI economy.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Sidebar Meta */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white border border-[#C04A2B] p-8 shadow-sm space-y-8 relative overflow-hidden group transition-colors">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>
              <div className="relative z-10">
                <h3 className="font-mono text-[10px] text-[#141413] font-medium uppercase tracking-widest mb-2">
                  Headquarters
                </h3>
                <p className="text-sm font-medium text-gray-600">
                  Coimbatore, Tamil Nadu<br />
                  India
                </p>
              </div>
              <div className="relative z-10">
                <h3 className="font-mono text-[10px] text-[#141413] font-medium uppercase tracking-widest mb-2">
                  Focus Areas
                </h3>
                <ul className="text-sm font-medium text-gray-600 space-y-2">
                  <li>Enterprise AI Integration</li>
                  <li>AI Autonomous Agents</li>
                  <li>NIST FIPS 203/204/205</li>
                  <li>Sovereign Blockchain</li>
                </ul>
              </div>
              <div className="relative z-10">
                <h3 className="font-mono text-[10px] text-[#141413] font-medium uppercase tracking-widest mb-2">
                  Entity ID
                </h3>
                <p className="text-[10px] font-mono text-[#141413] bg-white border border-gray-200 p-2 inline-block shadow-sm">
                  QL-IN-2026-9A
                </p>
              </div>
            </div>
          </div>

          {/* Main Article */}
          <div className="w-full lg:w-2/3">
            <article className="prose prose-gray max-w-none text-gray-600 font-normal leading-relaxed text-base">
              <h2 className="text-2xl font-display font-medium text-[#141413] mb-6">
                The Post-Quantum Imperative
              </h2>
              <p className="mb-6">
                Every RSA and ECC system in production today is on borrowed time. As adversaries harvest encrypted data now to decrypt later, organizations face an urgent need to transition to quantum-resistant architectures. QuantaLabs was founded to build this sovereign infrastructure.
              </p>
              <p className="mb-6">
                Through <strong>QuantaCipher</strong>, we provide a zero-trust PQC encryption API built on ML-KEM (Kyber-1024), the NIST standardized lattice cryptography. Currently live and independently audited, it enables telecom operators, BFSI institutions, and critical infrastructure to achieve quantum compliance with just four lines of code.
              </p>

              <h2 className="text-2xl font-display font-medium text-[#141413] mt-12 mb-6">
                Securing the Autonomous AI Economy
              </h2>
              <p className="mb-6">
                As the internet transitions into a Machine-to-Machine (M2M) economy, AI agents must coordinate, transact, and execute logic with deterministic finality. However, the infrastructure they rely on was built for classical threats, making this gap a real risk to autonomous systems.
              </p>
              <p className="mb-6">
                Enter <strong>QuantaChain</strong>, a quantum-safe execution layer built specifically for the AI agent economy. Securing transactions with Falcon-512 lattice signatures, it provides autonomous agents with protocol-native primitives for escrow, identity, bidding, and payments. Our testnet is currently live, finalizing over 160K+ blocks across a decentralized network.
              </p>

              <blockquote className="border-l-4 border-[#C04A2B] pl-6 my-10 py-4 italic text-lg text-[#141413] bg-white border border-y-gray-200 border-r-gray-200 shadow-sm relative overflow-hidden group">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>
                <div className="relative z-10 p-4">
                  &quot;We do not build speculative cryptography. We build the deterministic, mathematically verified infrastructure necessary for machines to trust each other.&quot;
                </div>
              </blockquote>

              <h2 className="text-2xl font-display font-medium text-[#141413] mt-12 mb-6">
                The QuantaLabs Difference
              </h2>
              <p className="mb-6">
                As a DPIIT-recognized deep tech startup, we sit at the intersection of advanced cryptography and applied AI engineering. Whether we are migrating your telecom API gateways to quantum-safe tunneling or orchestrating zero-knowledge agent networks on QuantaChain, we don&apos;t just write reports; we deploy sovereign, production-ready code.
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
