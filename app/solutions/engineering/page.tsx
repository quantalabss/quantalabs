import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Engineering | QuantaLabs",
  description:
    "Bespoke protocol engineering, sovereign blockchains, and custom cryptography.",
};

export default function EngineeringPage() {
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
                  Solutions // Development
                </span>
              </div>
              <h1 className="text-[3rem] md:text-[5rem] font-black tracking-tighter leading-[0.95] text-black">
                <span className="text-[#C4ED5F]">Custom</span>{" "}
                <span className="relative inline-block mt-1">
                  Engineering.
                  <span className="absolute bottom-1 left-0 w-full h-[6px] bg-[#C4ED5F] -z-10"></span>
                </span>
              </h1>
            </div>

            <div className="lg:col-span-4 p-10 flex flex-col justify-end bg-black text-white relative overflow-hidden">
              <span className="absolute top-8 right-8 text-[6rem] font-black text-white/5 leading-none select-none">
                λ
              </span>
              <span className="font-serif text-3xl text-[#C4ED5F] mb-6 relative z-10 leading-none inline-block">
                ⚙
              </span>
              <p className="text-sm text-gray-300 font-medium relative z-10">
                Bespoke protocol engineering in Rust and C++. We do not just
                consult; we build. As the core maintainers of a live Layer-1 PQC
                blockchain, we understand the ruthless constraints of
                distributed systems.
              </p>
            </div>
          </div>
        </div>

        {/* Why QuantaLabs Context */}
        <div className="mb-16">
          <div className="border-l-4 border-black pl-8 py-2 mb-8 bg-gray-50 p-6">
            <h2 className="text-2xl font-black mb-4">
              The Protocol Lab Advantage
            </h2>
            <p className="text-gray-600 font-medium leading-relaxed max-w-3xl">
              Most cybersecurity firms write PDF reports. We write consensus
              layers. Our engineering team routinely deals with highly complex
              zero-knowledge circuits, sub-millisecond cryptographic latency
              constraints, and asynchronous Byzantine Fault Tolerance (aBFT)
              algorithms. When off-the-shelf software fails, institutions hire
              QuantaLabs to build custom mathematical primitives from the ground
              up.
            </p>
          </div>
        </div>

        {/* Capabilities */}
        <h2 className="text-2xl font-black mb-8">Our Core Competencies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="border-2 border-black p-10 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all group">
            <span className="font-serif text-3xl text-black group-hover:text-[#C4ED5F] transition-colors mb-6 leading-none inline-block">
              ⬡
            </span>
            <h3 className="text-lg font-black mb-4">Sovereign Blockchains</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We design and implement custom Layer-1 blockchains and app-chains
              utilizing Substrate or custom Rust architectures. We specialize in
              deploying highly secure, permissioned Ledgers for Central Bank
              Digital Currencies (CBDCs).
            </p>
          </div>

          <div className="border-2 border-black p-10 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all group">
            <span className="font-serif text-3xl text-black group-hover:text-[#C4ED5F] transition-colors mb-6 leading-none inline-block">
              ⇌
            </span>
            <h3 className="text-lg font-black mb-4">Consensus Optimization</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Implementation and optimization of advanced consensus algorithms
              (like AlephBFT or Tendermint) to drastically reduce finality times
              and increase network throughput in harsh adversarial environments.
            </p>
          </div>

          <div className="border-2 border-black p-10 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all group">
            <span className="font-serif text-3xl text-black group-hover:text-[#C4ED5F] transition-colors mb-6 leading-none inline-block">
              Φ
            </span>
            <h3 className="text-lg font-black mb-4">Zero-Knowledge Proofs</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Design of custom ZKP circuits (using Noir or Circom) for
              privacy-preserving protocols. We build systems that allow
              regulators to cryptographically verify state without exposing raw
              data to competitors.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-black text-white flex flex-col md:flex-row items-start md:items-center justify-between p-10 gap-6">
          <div>
            <h3 className="font-bold mb-2">Have a protocol to build?</h3>
            <p className="text-sm text-gray-400">
              Submit an RFP to our protocol engineering team.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-8 py-4 bg-[#C4ED5F] border-2 border-transparent text-black font-bold text-xs uppercase tracking-widest hover:bg-white hover:border-black transition-all flex items-center justify-center gap-2 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] md:shadow-none w-full md:w-auto"
          >
            Submit RFP
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
