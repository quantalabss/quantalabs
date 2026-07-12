"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ProductsShowcase() {
  return (
    <section className="pt-12 pb-24 bg-white text-black">
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
                  Core Products
                </span>
              </div>
              <h2 className="text-[2.5rem] md:text-[4rem] font-black tracking-tighter leading-[0.95] text-black relative z-10">
                Our Core PQC
                <br />
                Products.
              </h2>
            </div>
            <div className="lg:col-span-4 px-8 py-10 flex flex-col justify-end bg-[#C4ED5F] relative overflow-hidden">
              <span className="absolute top-8 right-8 text-[6rem] font-black text-black leading-none select-none opacity-90 hidden md:block">
                ∏
              </span>
              <p className="text-sm text-black/70 font-medium relative z-10">
                Our flagship post-quantum products form the bedrock of the
                next-generation financial system. From sovereign L1 execution to
                enterprise zero-trust SDKs.
              </p>
            </div>
          </div>
        </div>

        {/* Stacked Showcase */}
        <div className="flex flex-col border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white">
          {/* QuantaCipher */}
          <div className="grid grid-cols-1 md:grid-cols-12 border-b-2 border-black group">
            <div className="md:col-span-4 p-8 md:p-10 border-b-2 md:border-b-0 md:border-r-2 border-black flex flex-col bg-[#C4ED5F]">
              <span className="text-2xl font-serif text-black mb-6 block leading-none font-bold tracking-tight">
                C = E(K, P)
              </span>
              <h3 className="text-3xl md:text-4xl font-black mt-auto">
                QuantaCipher
              </h3>
            </div>
            <div className="md:col-span-8 p-8 md:p-10 flex flex-col justify-center relative bg-white">
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
                Encryption-as-a-Service powered by Zero-Trust Kyber-1024. Secure your
                internal databases, S3 buckets, and IPC communications against
                &quot;Store Now, Decrypt Later&quot; attacks with drop-in,
                hybrid-capable APIs.
              </p>
              <div>
                <Link
                  href="https://quantacipher.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-black text-white font-bold text-xs uppercase tracking-widest hover:bg-[#C4ED5F] hover:text-black transition-colors border-2 border-black"
                >
                  Get API Key
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* QuantaChain */}
          <div className="grid grid-cols-1 md:grid-cols-12 border-b-2 border-black group">
            <div className="md:col-span-4 p-8 md:p-10 border-b-2 md:border-b-0 md:border-r-2 border-black flex flex-col bg-[#C4ED5F]">
              <span className="text-2xl font-serif text-black mb-6 block leading-none font-bold tracking-tight">
                |ψ⟩ = α|0⟩ + β|1⟩
              </span>
              <h3 className="text-3xl md:text-4xl font-black mt-auto">
                QuantaChain
              </h3>
            </div>
            <div className="md:col-span-8 p-8 md:p-10 flex flex-col justify-center relative bg-white">
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
                A high-performance Post-Quantum Institutional Settlement and AI
                Execution Layer. Deterministic 6-second finality via DPoS and
                AlephBFT, strictly secured by Falcon-512 signatures. Designed
                natively for Headless AI Agents.
              </p>
              <div>
                <Link
                  href="https://quantachain.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-black text-white font-bold text-xs uppercase tracking-widest hover:bg-[#C4ED5F] hover:text-black transition-colors border-2 border-black"
                >
                  Explore L1
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Quanta Wallet */}
          <div className="grid grid-cols-1 md:grid-cols-12 group">
            <div className="md:col-span-4 p-8 md:p-10 border-b-2 md:border-b-0 md:border-r-2 border-black flex flex-col bg-[#C4ED5F]">
              <span className="text-2xl font-serif text-black mb-6 block leading-none font-bold tracking-tight">
                σ = Sign(sk, m)
              </span>
              <h3 className="text-3xl md:text-4xl font-black mt-auto">
                Quanta Wallet
              </h3>
            </div>
            <div className="md:col-span-8 p-8 md:p-10 flex flex-col justify-center relative bg-white">
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
                The official non-custodial browser extension for QuantaChain. Engineered
                entirely in WASM for native Falcon-512 and Kyber-1024 cryptography inside
                Chromium browsers.
              </p>
              <div>
                <Link
                  href="https://chromewebstore.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-black text-white font-bold text-xs uppercase tracking-widest hover:bg-[#C4ED5F] hover:text-black transition-colors border-2 border-black"
                >
                  Install Extension
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
