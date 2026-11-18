"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Lock, Network, ShieldCheck, Atom, Clock, Leaf, Zap, Layers, Sparkles } from "lucide-react";

export default function ProductsShowcase() {
  return (
    <section id="products" className="py-24 sm:py-32 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 md:mb-24 text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight text-[#141413] mb-6">
              Deep-tech infrastructure for the next era of computing.
            </h2>
            <p className="text-lg text-gray-500 font-normal max-w-2xl">
              We build production-grade systems that bridge autonomous AI execution with post-quantum cryptographic security.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* 1. QuantaCipher Card (FIRST) */}
          <div id="quantacipher" className="group border border-[#e8e6dc] bg-white flex flex-col xl:flex-row overflow-hidden hover:border-[#C04A2B] transition-colors duration-500 shadow-sm hover:shadow-md xl:col-span-2 scroll-mt-24">
            {/* Visual Cover area */}
            <div className="w-full xl:w-[45%] min-h-[280px] sm:min-h-[340px] xl:min-h-full relative overflow-hidden border-b xl:border-b-0 xl:border-r border-[#e8e6dc] bg-[#141413]">
              <Image
                src="/images/quantacipher-cover.jpg"
                alt="QuantaLabs QuantaCipher - Enterprise Post-Quantum Cryptography HSM and Datacenter Rack"
                fill
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Content area */}
            <div className="w-full xl:w-[55%] p-6 sm:p-8 lg:p-10 flex flex-col flex-grow">
              <div className="mb-4">
                <h3 className="text-2xl sm:text-3xl font-display font-medium text-[#141413] mb-1">
                  QuantaCipher
                </h3>
                <p className="text-xs font-mono uppercase tracking-widest text-[#706960]">
                  Post-Quantum Cryptography &bull; Enterprise Security
                </p>
              </div>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-sans mb-6">
                Developer-native post-quantum cryptographic security compliant with NIST FIPS 203 (ML-KEM-1024) and FIPS 204 (ML-DSA). Executes locally in Rust and WebAssembly in two lines of code, insulating enterprise datacenters from Harvest Now, Decrypt Later threats.
              </p>

              {/* Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                <div className="p-3.5 bg-[#FAF9F5] border border-[#e8e6dc] rounded-lg">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#141413] font-semibold mb-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#706960] shrink-0" /> FIPS 203 / 204
                  </div>
                  <div className="text-[11px] text-gray-500 leading-snug">
                    Standardized ML-KEM and ML-DSA lattice primitives resisting Shor&apos;s algorithm.
                  </div>
                </div>

                <div className="p-3.5 bg-[#FAF9F5] border border-[#e8e6dc] rounded-lg">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#141413] font-semibold mb-1 flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-[#706960] shrink-0" /> Local Execution
                  </div>
                  <div className="text-[11px] text-gray-500 leading-snug">
                    Zero plaintext leaves your VPC — cryptography runs in local WASM / Rust runtimes.
                  </div>
                </div>

                <div className="p-3.5 bg-[#FAF9F5] border border-[#e8e6dc] rounded-lg">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#141413] font-semibold mb-1 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#706960] shrink-0" /> 15-Min Setup
                  </div>
                  <div className="text-[11px] text-gray-500 leading-snug">
                    Drop-in SDK migration without enterprise architecture overhauls.
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-auto">
                <Link
                  href="https://quantacipher.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-[#141413] text-white font-mono text-xs uppercase tracking-widest hover:bg-[#C04A2B] transition-colors shadow-sm"
                >
                  <span>Get API Key</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0" />
                </Link>
                <Link
                  href="https://quantacipher.com/pricing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#141413] border border-gray-200 font-mono text-xs uppercase tracking-widest hover:border-[#141413] transition-colors"
                >
                  Pricing &amp; Plans
                </Link>
              </div>

              {/* Footer */}
              <div className="mt-6 sm:mt-8 pt-4 border-t border-gray-100 flex items-center justify-between text-[10px] font-mono tracking-widest uppercase text-gray-400">
                <span>Security Audit</span>
                <Link href="https://quantakrypto.com" target="_blank" rel="noopener noreferrer">
                  <img src="/partners/quantakrypto-logo-light.svg" alt="Quantakrypto" className="h-5 w-auto object-contain hover:opacity-80 transition-opacity" />
                </Link>
              </div>
            </div>
          </div>

          {/* 2. QuantaChain Card */}
          <div id="quantachain" className="group border border-[#e8e6dc] bg-white flex flex-col overflow-hidden hover:border-[#C04A2B] transition-colors duration-500 shadow-sm hover:shadow-md scroll-mt-24">
            {/* Visual Cover area */}
            <div className="w-full h-56 sm:h-64 relative overflow-hidden border-b border-[#e8e6dc] bg-[#141413]">
              <Image
                src="/images/quantachain-cover.jpg"
                alt="QuantaChain - High-Performance Distributed Node Network and Validator Racks"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Content area */}
            <div className="w-full p-6 sm:p-8 flex flex-col flex-grow">
              <div className="mb-4">
                <h3 className="text-2xl sm:text-3xl font-display font-medium text-[#141413] mb-1">
                  QuantaChain
                </h3>
                <p className="text-xs font-mono uppercase tracking-widest text-[#706960]">
                  Post-Quantum L1 &bull; Sovereign Settlement
                </p>
              </div>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-sans mb-6">
                Institutional settlement layer powered by Asynchronous Byzantine Fault Tolerance (AlephBFT) and post-quantum Falcon-512 signatures, providing deterministic sub-second finality resilient against quantum computing advancements.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div className="p-3.5 bg-[#FAF9F5] border border-[#e8e6dc] rounded-lg">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#141413] font-semibold mb-1 flex items-center gap-1.5">
                    <Network className="w-3.5 h-3.5 text-[#706960] shrink-0" /> Falcon-512
                  </div>
                  <div className="text-[11px] text-gray-500 leading-snug">
                    Lattice signature scheme safeguarding state transitions and validator consensus.
                  </div>
                </div>

                <div className="p-3.5 bg-[#FAF9F5] border border-[#e8e6dc] rounded-lg">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#141413] font-semibold mb-1 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#706960] shrink-0" /> AlephBFT
                  </div>
                  <div className="text-[11px] text-gray-500 leading-snug">
                    Deterministic 6-second finality with asynchronous Byzantine fault tolerance.
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-auto">
                <Link
                  href="https://quantachain.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-[#141413] text-white font-mono text-xs uppercase tracking-widest hover:bg-[#C04A2B] transition-colors shadow-sm"
                >
                  <span>Explore Infrastructure</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0" />
                </Link>
                <Link
                  href="https://quantachain.gitbook.io/quantachain-docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#141413] border border-gray-200 font-mono text-xs uppercase tracking-widest hover:border-[#141413] transition-colors"
                >
                  Documentation
                </Link>
              </div>

              {/* Footer */}
              <div className="mt-6 sm:mt-8 pt-4 border-t border-gray-100 flex items-center justify-between text-[10px] font-mono tracking-widest uppercase text-gray-400">
                <span>Consensus</span>
                <span className="text-gray-600">AlephBFT &bull; Falcon-512</span>
              </div>
            </div>
          </div>

          {/* 3. Ornyx Card */}
          <div id="ornyx" className="group border border-[#e8e6dc] bg-white flex flex-col overflow-hidden hover:border-[#C04A2B] transition-colors duration-500 shadow-sm hover:shadow-md scroll-mt-24">
            {/* Visual Cover area */}
            <div className="w-full h-56 sm:h-64 relative overflow-hidden border-b border-[#e8e6dc] bg-[#141413]">
              <Image
                src="/images/ornyx-cover.jpg"
                alt="Ornyx - Autonomous AI Agent Operations Workspace and Telemetry Hub"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Content area */}
            <div className="w-full p-6 sm:p-8 flex flex-col flex-grow">
              <div className="mb-4">
                <h3 className="text-2xl sm:text-3xl font-display font-medium text-[#141413] mb-1">
                  Ornyx
                </h3>
                <p className="text-xs font-mono uppercase tracking-widest text-[#706960]">
                  Autonomous AI Agents &bull; Decentralized Marketplace
                </p>
              </div>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-sans mb-6">
                Decentralized marketplace built natively on QuantaChain and secured by Falcon-512, enabling autonomous AI agents to discover, negotiate tasks, and settle peer-to-peer without central intermediaries.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div className="p-3.5 bg-[#FAF9F5] border border-[#e8e6dc] rounded-lg">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#141413] font-semibold mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#706960] shrink-0" /> Autonomous Swarms
                  </div>
                  <div className="text-[11px] text-gray-500 leading-snug">
                    Multi-agent discovery, task negotiation, and trustless execution.
                  </div>
                </div>

                <div className="p-3.5 bg-[#FAF9F5] border border-[#e8e6dc] rounded-lg">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#141413] font-semibold mb-1 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#706960] shrink-0" /> Quantum-Safe Escrow
                  </div>
                  <div className="text-[11px] text-gray-500 leading-snug">
                    Cryptographically signed agent actions with sub-second finality.
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-auto">
                <Link
                  href="https://ornyx.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-[#141413] text-white font-mono text-xs uppercase tracking-widest hover:bg-[#C04A2B] transition-colors shadow-sm"
                >
                  <span>Explore Platform</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0" />
                </Link>
              </div>

              {/* Footer */}
              <div className="mt-6 sm:mt-8 pt-4 border-t border-gray-100 flex items-center justify-between text-[10px] font-mono tracking-widest uppercase text-gray-400">
                <span>Settlement Layer</span>
                <span className="text-gray-600">QuantaChain L1</span>
              </div>
            </div>
          </div>

          {/* 4. IONZE Card (LAST) */}
          <div id="ionze" className="group border border-[#e8e6dc] bg-white flex flex-col xl:flex-row overflow-hidden hover:border-[#C04A2B] transition-colors duration-500 shadow-sm hover:shadow-md xl:col-span-2 scroll-mt-24">
            {/* Visual Cover area */}
            <div className="w-full xl:w-[45%] min-h-[280px] sm:min-h-[340px] xl:min-h-full relative overflow-hidden border-b xl:border-b-0 xl:border-r border-[#e8e6dc] bg-[#141413]">
              <Image
                src="/images/ionze-cover.jpg"
                alt="QuantaLabs IONZE - Agricultural Biomass to Sodium-Ion Battery Materials Laboratory"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Content area */}
            <div className="w-full xl:w-[55%] p-6 sm:p-8 lg:p-10 flex flex-col flex-grow">
              <div className="mb-4">
                <h3 className="text-2xl sm:text-3xl font-display font-medium text-[#141413] mb-1">
                  IONZE
                </h3>
                <p className="text-xs font-mono uppercase tracking-widest text-[#706960]">
                  CleanTech &bull; Sodium-Ion Battery Intelligence
                </p>
              </div>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-sans mb-6">
                Bridging first-principles quantum mechanics and atomistic Density Functional Theory (DFT) directly into physical battery products: converting surplus agricultural residues into sovereign, high-capacity sodium-ion hard carbon anodes.
              </p>

              {/* Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                <div className="p-3.5 bg-[#FAF9F5] border border-[#e8e6dc] rounded-lg">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#141413] font-semibold mb-1 flex items-center gap-1.5">
                    <Leaf className="w-3.5 h-3.5 text-[#706960] shrink-0" /> Circular Carbon
                  </div>
                  <div className="text-[11px] text-gray-500 leading-snug">
                    Upcycling biomass into high-purity battery-grade active material.
                  </div>
                </div>

                <div className="p-3.5 bg-[#FAF9F5] border border-[#e8e6dc] rounded-lg">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#141413] font-semibold mb-1 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-[#706960] shrink-0" /> Sovereign Anodes
                  </div>
                  <div className="text-[11px] text-gray-500 leading-snug">
                    Eliminating graphite import bottlenecks with sodium-ion chemistry.
                  </div>
                </div>

                <div className="p-3.5 bg-[#FAF9F5] border border-[#e8e6dc] rounded-lg">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#141413] font-semibold mb-1 flex items-center gap-1.5">
                    <Atom className="w-3.5 h-3.5 text-[#706960] shrink-0" /> DFT Screening
                  </div>
                  <div className="text-[11px] text-gray-500 leading-snug">
                    Compressing wet-lab trial cycles with physics-informed simulation.
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-auto">
                <Link
                  href="https://www.ionze.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-[#141413] text-white font-mono text-xs uppercase tracking-widest hover:bg-[#C04A2B] transition-colors shadow-sm"
                >
                  <span>Launch Platform</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0" />
                </Link>
                <Link
                  href="https://www.ionze.xyz/atlas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#141413] border border-gray-200 font-mono text-xs uppercase tracking-widest hover:border-[#141413] transition-colors"
                >
                  Materials Atlas
                </Link>
              </div>

              {/* Footer */}
              <div className="mt-6 sm:mt-8 pt-4 border-t border-gray-100 flex items-center justify-between text-[10px] font-mono tracking-widest uppercase text-gray-400">
                <span>Architecture</span>
                <span className="text-gray-600">Quantum DFT &bull; AI Surrogates &bull; Pyrolysis</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
