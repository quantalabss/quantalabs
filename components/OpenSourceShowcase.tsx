"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function OpenSourceShowcase() {
  return (
    <section className="py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white overflow-hidden mb-12">
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
                  Open Source Public Goods
                </span>
              </div>
              <h2 className="text-[2.5rem] md:text-[4rem] font-black tracking-tighter leading-[0.95] text-black relative z-10">
                Cross-chain
                <br />
                infrastructure.
              </h2>
            </div>
            <div className="lg:col-span-4 px-8 py-10 flex flex-col justify-end bg-[#C4ED5F] relative overflow-hidden">
              <span className="absolute top-8 right-8 text-[6rem] font-black text-black leading-none select-none opacity-90 hidden md:block">
                ⊕
              </span>
              <p className="text-sm text-black/70 font-medium relative z-10">
                Our protocol engineering team actively maintains critical
                privacy and post-quantum public goods across the broader web3
                ecosystem.
              </p>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Algo-PQC-Kit */}
          <div className="border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white text-black p-8 flex flex-col transition-all group">
            <span className="text-3xl font-serif text-black mb-6 block leading-none">
              Γ
            </span>
            <h3 className="text-xl font-black mb-3">Algo-PQC-Kit</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Algorand AVM v12 smart contracts and Python SDK for building
              M-of-N Post-Quantum Treasuries and DAOs using the Falcon-1024
              opcode.
            </p>
            <div className="mt-auto pt-6 border-t-2 border-black">
              <Link
                href="/ecosystem/algo-pqc-kit"
                className="inline-flex items-center gap-2 text-black font-bold text-[10px] uppercase tracking-widest hover:text-[#C4ED5F] transition-colors"
              >
                View Documentation
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Ornyx Protocol */}
          <div className="border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white text-black p-8 flex flex-col transition-all group">
            <span className="text-3xl font-serif text-black mb-6 block leading-none">
              Θ
            </span>
            <h3 className="text-xl font-black mb-3">Ornyx Protocol</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              An Aztec Foundation grant project. A modular, privacy-first Real
              World Asset (RWA) protocol leveraging Aztec&apos;s hybrid
              public/private state architecture.
            </p>
            <div className="mt-auto pt-6 border-t-2 border-black">
              <Link
                href="/ecosystem/ornyx"
                className="inline-flex items-center gap-2 text-black font-bold text-[10px] uppercase tracking-widest hover:text-[#C4ED5F] transition-colors"
              >
                View Documentation
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Falcon-Multisig */}
          <div className="border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white text-black p-8 flex flex-col transition-all group">
            <span className="text-3xl font-serif text-black mb-6 block leading-none">
              ⨂
            </span>
            <h3 className="text-xl font-black mb-3">Falcon-Multisig</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              A chain-agnostic, production-grade threshold multisignature
              library written in pure Rust using Falcon-512 (NIST FIPS 206 /
              FN-DSA).
            </p>
            <div className="mt-auto pt-6 border-t-2 border-black">
              <Link
                href="/ecosystem/falcon-multisig"
                className="inline-flex items-center gap-2 text-black font-bold text-[10px] uppercase tracking-widest hover:text-[#C4ED5F] transition-colors"
              >
                View Documentation
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Global Github CTA */}
        <div className="mt-12 flex justify-center">
          <a
            href="https://github.com/quantalabss"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white font-bold text-xs uppercase tracking-widest hover:bg-gray-900 transition-all border-2 border-transparent hover:border-[#C4ED5F] shadow-[4px_4px_0px_0px_rgba(196,237,95,1)]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="none"
              className="w-4 h-4"
            >
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"></path>
            </svg>
            View our Open Source GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
