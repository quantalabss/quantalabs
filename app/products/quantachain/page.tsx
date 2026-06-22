import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Zap, Bot, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "QuantaChain | QuantaLabs",
  description: "A production-grade Post-Quantum Institutional Settlement and AI Execution Layer.",
};

export default function QuantaChainPage() {
  return (
    <div className="bg-white min-h-screen pt-28 pb-24 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="border border-gray-200 shadow-sm bg-white mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-8 p-10 md:p-16 border-b lg:border-b-0 lg:border-r border-gray-200 bg-gray-50/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-[#C4ED5F]"></div>
                <span className="font-mono text-[10px] tracking-[0.2em] text-gray-500 uppercase font-bold">
                  Products // Layer 1 Blockchain
                </span>
              </div>
              <h1 className="text-[3rem] md:text-[5rem] font-black tracking-tighter leading-[0.95] text-black">
                <span className="text-[#C4ED5F]">Quanta</span><span className="relative inline-block mt-1">Chain.<span className="absolute bottom-1 left-0 w-full h-[6px] bg-[#C4ED5F] -z-10"></span></span>
              </h1>
            </div>
            
            <div className="lg:col-span-4 p-10 flex flex-col justify-end bg-black relative overflow-hidden text-white">
               <div 
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
                  backgroundSize: "20px 20px"
                }}
              ></div>
              <p className="text-sm font-medium relative z-10 border-l-2 border-[#C4ED5F] pl-4">
                A production-grade Post-Quantum Institutional Settlement and AI Execution Layer. Deterministic 6-second finality via DPoS and AlephBFT, fully secured by Falcon-512 signatures.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          <div className="border border-gray-200 p-10 bg-white shadow-sm hover:shadow-md transition-shadow">
            <Bot className="w-8 h-8 text-[#C4ED5F] mb-6" />
            <h3 className="text-xl font-black mb-4">AI Execution Layer</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Every transaction includes a signature-verified payload field designed to carry agent instructions or stablecoin settlement intents. QuantaChain acts as the native execution and gas layer for Headless AI Agents and M2M micro-transactions.
            </p>
            <div className="font-mono text-[10px] bg-gray-100 p-2 text-gray-600 border border-gray-200 inline-block">
              NATIVE_TEMPLATE: AGENT_JOB_CONTRACT
            </div>
          </div>

          <div className="border border-gray-200 p-10 bg-white shadow-sm hover:shadow-md transition-shadow">
            <Zap className="w-8 h-8 text-black mb-6" />
            <h3 className="text-xl font-black mb-4">DPoS + AlephBFT Finality</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              We completely abandoned Proof-of-Work. Quanta V2 utilizes Delegated Proof-of-Stake combined with Asynchronous Byzantine Fault Tolerance (AlephBFT) to achieve instant mathematical finality in under 6 seconds, enabling rapid high-frequency trading.
            </p>
            <div className="font-mono text-[10px] bg-gray-100 p-2 text-gray-600 border border-gray-200 inline-block">
              120+ TPS // O(1) MEMPOOL SYNC
            </div>
          </div>

          <div className="border border-gray-200 p-10 bg-white shadow-sm hover:shadow-md transition-shadow">
            <ShieldCheck className="w-8 h-8 text-black mb-6" />
            <h3 className="text-xl font-black mb-4">NIST Standardized PQC</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Zero reliance on vulnerable Elliptic Curve Cryptography (ECC). The entire network state, consensus layer, and transaction mempool is secured mathematically by Falcon-512 and Kyber-1024, defending against Shor's algorithm.
            </p>
            <div className="font-mono text-[10px] bg-gray-100 p-2 text-gray-600 border border-gray-200 inline-block">
              FIPS 206 COMPLIANT
            </div>
          </div>

          <div className="border border-gray-200 p-10 bg-white shadow-sm hover:shadow-md transition-shadow">
            <Cpu className="w-8 h-8 text-[#C4ED5F] mb-6" />
            <h3 className="text-xl font-black mb-4">Native Contract Templates</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              To drastically minimize the attack surface of Turing-complete smart contracts, QUANTA provides built-in, highly audited native templates enforced at the consensus level for Escrows, Agent Jobs, and Time-Locks.
            </p>
            <div className="font-mono text-[10px] bg-gray-100 p-2 text-gray-600 border border-gray-200 inline-block">
              NO VULNERABLE VM OVERHEAD
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="border border-gray-200 shadow-sm bg-black text-white p-10 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
             <h3 className="font-bold text-white mb-2">Run a Node via Docker</h3>
             <p className="text-sm text-gray-400 font-mono">docker pull xd637/quanta-node:latest</p>
          </div>
          <div className="flex gap-4">
            <a href="https://quantachain.org" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-[#C4ED5F] text-black font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors flex items-center gap-2 whitespace-nowrap">
              Visit QuantaChain.org
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
