"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function EcosystemShowcase() {
  return (
    <section className="py-24 bg-gray-50 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white overflow-hidden mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 border-b-2 border-black">
            <div className="lg:col-span-8 px-8 py-10 md:py-16 border-b-2 lg:border-b-0 lg:border-r-2 border-black bg-white relative">
              <div
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.15) 1px, transparent 1px)`,
                  backgroundSize: "24px 24px",
                }}
              ></div>
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="w-2 h-2 bg-black"></div>
                <span className="font-mono text-[10px] tracking-[0.2em] text-black/60 uppercase font-bold">
                  QuantaChain Ecosystem
                </span>
              </div>
              <h2 className="text-[2.5rem] md:text-[4rem] font-black tracking-tighter leading-[0.95] text-black relative z-10">
                Built for the
                <br />
                quantum era.
              </h2>
            </div>
            <div className="lg:col-span-4 px-8 py-10 flex flex-col justify-end bg-[#C4ED5F] relative overflow-hidden">
              <span className="absolute top-8 right-8 text-[6rem] font-black text-black leading-none select-none opacity-90">
                λ
              </span>
              <p className="text-sm text-black/70 font-medium relative z-10">
                Our suite of high-performance decentralized applications and
                infrastructure built natively on top of the QuantaChain network.
              </p>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Quanta Wallet */}
          <div className="border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white text-black p-10 flex flex-col transition-all group">
            <span className="text-4xl font-serif text-black mb-6 block leading-none">
              Δ
            </span>
            <h3 className="text-2xl font-black mb-4">Quanta Wallet</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              The official non-custodial browser extension for QuantaChain.
              Engineered entirely in WASM for native Falcon-512 and Kyber-1024
              cryptography inside Chromium browsers.
            </p>
            <div className="mt-auto pt-8 border-t-2 border-black">
              <Link
                href="/ecosystem/quanta-wallet"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#C4ED5F] text-black font-bold text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
              >
                Install Extension
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* QuaScan Explorer */}
          <div className="border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white text-black p-10 flex flex-col transition-all group">
            <span className="text-4xl font-serif text-black mb-6 block leading-none">
              Φ
            </span>
            <h3 className="text-2xl font-black mb-4">QuaScan Explorer</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              Real-time block explorer and analytics platform for QuantaChain.
              Powered by a high-performance MongoDB indexing engine capable of
              tracing Falcon-512 signatures and agent payloads.
            </p>
            <div className="mt-auto pt-8 border-t-2 border-black">
              <Link
                href="/ecosystem/quascan"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#C4ED5F] text-black font-bold text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
              >
                Launch Explorer
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
