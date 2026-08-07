// CHANGED: Replaced inline SVGs with high-end AI generated 3D images per user request.
// DATE: 2026-08-07 | VERSION: 8.0
"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function ProductsShowcase() {
  return (
    <>
      {/* Slab 1: QuantaChain */}
      <section className="py-32 bg-transparent text-[#141413] font-sans border-b border-gray-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 mb-8 shadow-sm">
                <span className="w-1.5 h-1.5 bg-[#C04A2B]"></span>
                <span className="text-[10px] tracking-[0.2em] text-gray-500 uppercase font-mono font-medium">Flagship Product</span>
              </div>
              <h2 className="text-[3.5rem] md:text-[5rem] font-display font-medium tracking-tight leading-[1.05] text-[#141413] mb-6">
                QuantaChain
              </h2>
              <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-normal max-w-lg mb-10">
                The post-quantum trust layer for autonomous AI agents. We enable agents to coordinate, transact, and execute logic with finality that survives the quantum era.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link href="https://quantachain.org" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-8 py-4 bg-[#C04A2B] text-white font-mono text-xs uppercase tracking-widest hover:bg-[#141413] transition-all shadow-sm">
                  Explore Infrastructure <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link href="https://docs.quantachain.org" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#141413] border border-gray-200 font-mono text-xs uppercase tracking-widest hover:border-[#141413] transition-all">
                  Read Docs
                </Link>
              </div>
            </div>
            {/* Right: SVG Visual */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="w-full max-w-md aspect-square bg-white border border-[#C04A2B] shadow-sm p-8 relative overflow-hidden group transition-colors">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-1 h-full bg-[#C04A2B]"></div>
                <div className="absolute top-4 left-4 font-mono text-[9px] text-gray-400 uppercase tracking-widest z-10">AI Agent Network</div>
                <div className="relative w-full h-full z-10">
                  <Image src="/images/quantachain-m2m.png" alt="QuantaChain M2M visual" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slab 2: QuantaCipher */}
      <section className="py-32 bg-transparent text-[#141413] font-sans border-b border-gray-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-16">
            {/* Right Content */}
            <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 mb-8 shadow-sm">
                <span className="w-1.5 h-1.5 bg-[#C04A2B]"></span>
                <span className="text-[10px] tracking-[0.2em] text-gray-500 uppercase font-mono font-medium">Enterprise Security</span>
              </div>
              <h2 className="text-[3.5rem] md:text-[5rem] font-display font-medium tracking-tight leading-[1.05] text-[#141413] mb-6">
                QuantaCipher
              </h2>
              <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-normal max-w-lg mb-10">
                Post-quantum encryption APIs. We provide drop-in ML-KEM and ML-DSA integration so you can protect your data against &quot;Store Now, Decrypt Later&quot; attacks today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link href="https://quantacipher.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-8 py-4 bg-[#C04A2B] text-white font-mono text-xs uppercase tracking-widest hover:bg-[#141413] transition-all shadow-sm">
                  Get API Key <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link href="https://quantacipher.com/pricing" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#141413] border border-gray-200 font-mono text-xs uppercase tracking-widest hover:border-[#141413] transition-all">
                  View Pricing
                </Link>
              </div>
            </div>
            {/* Left: SVG Visual */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <div className="w-full max-w-md aspect-square bg-white border border-[#C04A2B] shadow-sm p-8 relative overflow-hidden group transition-colors">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>
                <div className="absolute top-0 left-0 w-1 h-full bg-[#C04A2B]"></div>
                <div className="absolute top-4 right-4 font-mono text-[9px] text-gray-400 uppercase tracking-widest z-10">ML-DSA / Kyber</div>
                <div className="relative w-full h-full z-10">
                  <Image src="/images/quantacipher.png" alt="QuantaCipher visual" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
