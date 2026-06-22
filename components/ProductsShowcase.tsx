"use client";

import Link from "next/link";
import { ArrowUpRight, Blocks, ShieldCheck } from "lucide-react";

export default function ProductsShowcase() {
  return (
    <section className="py-24 bg-white text-black border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col border border-gray-200 shadow-sm bg-white overflow-hidden mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-8 px-8 py-10 md:py-16 border-b lg:border-b-0 lg:border-r border-black/10 bg-[#C4ED5F] relative">
               <div 
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.15) 1px, transparent 1px)`,
                  backgroundSize: "24px 24px"
                }}
              ></div>
               <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="w-2 h-2 bg-black"></div>
                <span className="font-mono text-[10px] tracking-[0.2em] text-black/60 uppercase font-bold">
                  Core Products
                </span>
              </div>
              <h2 className="text-[2.5rem] md:text-[4rem] font-black tracking-tighter leading-[0.95] text-black relative z-10">
                The institutional<br />
                PQC standard.
              </h2>
            </div>
            <div className="lg:col-span-4 px-8 py-10 flex flex-col justify-end bg-[#C4ED5F] relative overflow-hidden border-l border-black/10">
              <span className="absolute top-8 right-8 text-[6rem] font-black text-black leading-none select-none">∏</span>
              <p className="text-sm text-black/70 font-medium relative z-10">
                Our flagship post-quantum products form the bedrock of the next-generation financial system. From sovereign L1 execution to enterprise zero-trust SDKs.
              </p>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* QuantaChain */}
          <div className="border border-gray-200 shadow-sm bg-black text-white p-10 flex flex-col relative overflow-hidden group">
            <div 
              className="absolute inset-0 opacity-[0.05] pointer-events-none"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
                backgroundSize: "20px 20px"
              }}
            ></div>
            <Blocks className="w-8 h-8 text-black mb-6 relative z-10" />
            <h3 className="text-3xl font-black mb-4 relative z-10">QuantaChain</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 relative z-10 border-l-2 border-[#C4ED5F] pl-4">
              A high-performance Post-Quantum Institutional Settlement and AI Execution Layer. Deterministic 6-second finality via DPoS and AlephBFT, strictly secured by Falcon-512 signatures. Designed natively for Headless AI Agents.
            </p>
            <div className="mt-auto pt-8 border-t border-gray-800 relative z-10">
              <Link
                href="/products/quantachain"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#C4ED5F] text-black font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors"
              >
                Explore L1
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* QuantaCipher */}
          <div className="border border-gray-200 shadow-sm bg-white text-black p-10 flex flex-col relative group hover:shadow-md transition-shadow">
             <div 
              className="absolute inset-0 opacity-[0.03] pointer-events-none transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)`,
                backgroundSize: "20px 20px"
              }}
            ></div>
            <ShieldCheck className="w-8 h-8 text-black mb-6 relative z-10" />
            <h3 className="text-3xl font-black mb-4 relative z-10">QuantaCipher SaaS</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-8 relative z-10 border-l-2 border-black pl-4">
              Enterprise-grade Zero-Trust Kyber-1024 encryption SDK. Secure your internal databases, S3 buckets, and IPC communications against "Store Now, Decrypt Later" attacks with drop-in, hybrid-capable APIs.
            </p>
             <div className="mt-auto pt-8 border-t border-gray-200 relative z-10">
              <Link
                href="/products/quantacipher"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#C4ED5F] text-black font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors"
              >
                View SDK
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
