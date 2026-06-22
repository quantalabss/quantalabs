import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Code2, Layers, Cpu, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Engineering | QuantaLabs",
  description: "Bespoke protocol engineering, sovereign blockchains, and custom cryptography.",
};

export default function EngineeringPage() {
  return (
    <div className="bg-white min-h-screen pt-28 pb-24 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="border border-gray-200 shadow-sm bg-white mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-8 p-10 md:p-16 border-b lg:border-b-0 lg:border-r border-gray-200 bg-gray-50/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-[#C4ED5F]"></div>
                <span className="font-mono text-[10px] tracking-[0.2em] text-gray-500 uppercase font-bold">
                  Solutions // Development
                </span>
              </div>
              <h1 className="text-[3rem] md:text-[5rem] font-black tracking-tighter leading-[0.95] text-black">
                <span className="text-[#C4ED5F]">Custom</span> <span className="relative inline-block mt-1">Engineering.<span className="absolute bottom-1 left-0 w-full h-[6px] bg-[#C4ED5F] -z-10"></span></span>
              </h1>
            </div>

            <div className="lg:col-span-4 p-10 flex flex-col justify-end bg-black text-white relative overflow-hidden">
              <span className="absolute top-8 right-8 text-[6rem] font-black text-white/5 leading-none select-none">λ</span>
              <Code2 className="w-8 h-8 text-[#C4ED5F] mb-6 relative z-10" strokeWidth={1.5} />
              <p className="text-sm text-gray-300 font-medium relative z-10">
                Bespoke protocol engineering in Rust and C++. We do not just consult; we build. As the core maintainers of a live Layer-1 PQC blockchain, we understand the ruthless constraints of distributed systems.
              </p>
            </div>
          </div>
        </div>

        {/* Why QuantaLabs Context */}
        <div className="mb-16">
          <div className="border-l-4 border-black pl-8 py-2 mb-8 bg-gray-50 p-6">
            <h2 className="text-2xl font-black mb-4">The Protocol Lab Advantage</h2>
            <p className="text-gray-600 font-medium leading-relaxed max-w-3xl">
              Most cybersecurity firms write PDF reports. We write consensus layers. Our engineering team routinely deals with highly complex zero-knowledge circuits, sub-millisecond cryptographic latency constraints, and asynchronous Byzantine Fault Tolerance (aBFT) algorithms. When off-the-shelf software fails, institutions hire QuantaLabs to build custom mathematical primitives from the ground up.
            </p>
          </div>
        </div>

        {/* Capabilities */}
        <h2 className="text-2xl font-black mb-8">Our Core Competencies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

          <div className="border border-gray-200 p-10 bg-white shadow-sm hover:shadow-md transition-shadow">
            <Layers className="w-8 h-8 text-[#C4ED5F] mb-6" />
            <h3 className="text-lg font-black mb-4">Sovereign Blockchains</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We design and implement custom Layer-1 blockchains and app-chains utilizing Substrate or custom Rust architectures. We specialize in deploying highly secure, permissioned Ledgers for Central Bank Digital Currencies (CBDCs).
            </p>
          </div>

          <div className="border border-gray-200 p-10 bg-white shadow-sm hover:shadow-md transition-shadow">
            <Wrench className="w-8 h-8 text-black mb-6" />
            <h3 className="text-lg font-black mb-4">Consensus Optimization</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Implementation and optimization of advanced consensus algorithms (like AlephBFT or Tendermint) to drastically reduce finality times and increase network throughput in harsh adversarial environments.
            </p>
          </div>

          <div className="border border-gray-200 p-10 bg-white shadow-sm hover:shadow-md transition-shadow">
            <Cpu className="w-8 h-8 text-black mb-6" />
            <h3 className="text-lg font-black mb-4">Zero-Knowledge Proofs</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Design of custom ZKP circuits (using Noir or Circom) for privacy-preserving protocols. We build systems that allow regulators to cryptographically verify state without exposing raw data to competitors.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="border border-gray-200 shadow-sm bg-gray-900 text-white flex items-center justify-between p-10">
          <div>
            <h3 className="font-bold mb-2">Have a protocol to build?</h3>
            <p className="text-sm text-gray-400">Submit an RFP to our protocol engineering team.</p>
          </div>
          <Link href="/contact" className="px-8 py-4 bg-[#C4ED5F] text-black font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors flex items-center gap-2">
            Submit RFP
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
