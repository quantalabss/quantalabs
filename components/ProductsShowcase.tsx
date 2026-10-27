"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Terminal, Lock, Cpu, Network, ShieldCheck, Key, Atom, Sparkles, Layers, Clock, Leaf, Zap, Flame, Shield } from "lucide-react";

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
          {/* IONZE Card (First Product) */}
          <div id="ionze" className="group border border-[#e8e6dc] bg-white flex flex-col xl:flex-row overflow-hidden hover:border-[#C04A2B] transition-colors duration-500 shadow-sm hover:shadow-md xl:col-span-2 scroll-mt-24">
            
            {/* Visual Cover area with Real Laboratory Photography */}
            <div className="w-full xl:w-[45%] min-h-[300px] sm:min-h-[360px] xl:min-h-full relative overflow-hidden border-b xl:border-b-0 xl:border-r border-[#e8e6dc] flex flex-col justify-between p-4 sm:p-6 lg:p-8 bg-black">
              {/* Cover Photo */}
              <Image
                src="/images/ionze-cover.jpg"
                alt="QuantaLabs IONZE - Agricultural Biomass to Sodium-Ion Battery Materials Laboratory"
                fill
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-[0.90] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40 pointer-events-none" />

              {/* Top Badges */}
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-black/65 backdrop-blur-md border border-white/20 text-white shadow-sm rounded-full font-mono text-[10px] uppercase tracking-widest">
                  <Atom className="w-3.5 h-3.5 text-orange-400" /> Research-to-Product
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/95 backdrop-blur-md border border-emerald-500/30 text-emerald-700 rounded-full font-mono text-[9px] uppercase tracking-widest font-semibold shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Live Platform
                </div>
              </div>

              {/* Bottom Documentary Overlay */}
              <div className="relative z-10 mt-auto pt-6 sm:pt-10">
                <div className="bg-black/80 backdrop-blur-md border border-white/15 p-3 sm:p-4 rounded-xl text-white">
                  <div className="flex items-center gap-2 text-orange-400 font-mono text-[10px] sm:text-xs uppercase tracking-wider mb-1 font-semibold">
                    <Flame className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                    <span>In-Silico Quantum DFT ➔ Physical Coin-Cell Validation</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-zinc-300 font-light leading-relaxed">
                    Transforming raw agricultural biowaste into high-purity hard carbon active materials via 1,200°C tube pyrolysis and automated cycling.
                  </p>
                </div>
              </div>
            </div>

            {/* Content area */}
            <div className="w-full xl:w-[55%] p-5 sm:p-8 lg:p-10 flex flex-col flex-grow">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl sm:text-3xl font-display font-medium text-[#141413]">IONZE</h3>
                  <span className="px-2.5 py-0.5 bg-[#FAF9F5] text-[#C04A2B] border border-[#e8e6dc] rounded-full text-[10px] font-mono uppercase tracking-wider font-semibold">
                    Live ↗
                  </span>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400">
                  R2P Wedge
                </span>
              </div>

              <div className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#C04A2B] font-semibold mb-4 leading-relaxed">
                Research-to-Product &bull; CleanTech &bull; Sodium-Ion Battery Intelligence
              </div>

              {/* The Edge: Research-to-Product */}
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-sans mb-6">
                QuantaLabs operates as a cutting-edge <strong className="text-[#141413] font-semibold">Research-to-Product lab</strong>. With <strong className="text-[#141413] font-semibold">IONZE</strong>, we bridge first-principles quantum mechanics and atomistic DFT calculations directly into physical battery products: converting surplus Indian agricultural residues into sovereign, high-capacity sodium-ion hard carbon anodes.
              </p>

              {/* Real-World Impact Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 mb-6 sm:mb-8">
                <div className="p-3 sm:p-3.5 bg-[#FAF9F5] border border-[#e8e6dc] rounded-lg">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#C04A2B] font-semibold mb-1 flex items-center gap-1.5">
                    <Leaf className="w-3 h-3 text-[#C04A2B] shrink-0" /> Circular Economy
                  </div>
                  <div className="text-xs font-medium text-[#141413] mb-0.5">Agro Waste-to-Wealth</div>
                  <div className="text-[11px] text-gray-500 leading-snug">
                    Upcycling Indian coconut shells and biomass into high-purity battery-grade carbon.
                  </div>
                </div>

                <div className="p-3 sm:p-3.5 bg-[#FAF9F5] border border-[#e8e6dc] rounded-lg">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#C04A2B] font-semibold mb-1 flex items-center gap-1.5">
                    <Zap className="w-3 h-3 text-[#C04A2B] shrink-0" /> Energy Security
                  </div>
                  <div className="text-xs font-medium text-[#141413] mb-0.5">Zero-Lithium Storage</div>
                  <div className="text-[11px] text-gray-500 leading-snug">
                    Eliminating graphite import bottlenecks with sovereign sodium-ion materials.
                  </div>
                </div>

                <div className="p-3 sm:p-3.5 bg-[#FAF9F5] border border-[#e8e6dc] rounded-lg">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#C04A2B] font-semibold mb-1 flex items-center gap-1.5">
                    <Atom className="w-3 h-3 text-[#C04A2B] shrink-0" /> R2P Velocity
                  </div>
                  <div className="text-xs font-medium text-[#141413] mb-0.5">10x Rapid Screening</div>
                  <div className="text-[11px] text-gray-500 leading-snug">
                    Compressing 18-month wet-lab trial cycles with physics-informed simulation.
                  </div>
                </div>
              </div>

              {/* Live CTA Action Bar */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-auto">
                <Link
                  href="https://www.ionze.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 bg-[#C04A2B] text-white font-mono text-xs uppercase tracking-widest hover:bg-[#141413] transition-colors shadow-sm"
                >
                  <span>Launch Platform (ionze.xyz)</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0" />
                </Link>
                <Link
                  href="https://www.ionze.xyz/atlas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 bg-white text-[#141413] border border-gray-200 font-mono text-xs uppercase tracking-widest hover:border-[#141413] transition-colors"
                >
                  Explore Materials Atlas
                </Link>
              </div>

              {/* Footer bar */}
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[10px] font-mono tracking-widest uppercase">
                <span className="text-gray-400">Lab-to-Product Architecture</span>
                <span className="text-gray-600 font-medium">
                  Quantum ESPRESSO &bull; AI Surrogates &bull; 1,200°C Pyrolysis
                </span>
              </div>
            </div>
          </div>

          {/* QuantaCipher Card */}
          <div id="quantacipher" className="group border border-[#e8e6dc] bg-white flex flex-col xl:flex-row overflow-hidden hover:border-[#C04A2B] transition-colors duration-500 shadow-sm hover:shadow-md xl:col-span-2 scroll-mt-24">
            {/* Visual Cover area with Real Datacenter & Hardware Security Module Photography */}
            <div className="w-full xl:w-[45%] min-h-[300px] sm:min-h-[360px] xl:min-h-full relative overflow-hidden border-b xl:border-b-0 xl:border-r border-[#e8e6dc] flex flex-col justify-between p-4 sm:p-6 lg:p-8 bg-black">
              {/* Cover Photo */}
              <Image
                src="/images/quantacipher-cover.jpg"
                alt="QuantaLabs QuantaCipher - Enterprise Post-Quantum Cryptography HSM and Datacenter Rack"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-[0.90] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40 pointer-events-none" />

              {/* Top Badges */}
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-black/65 backdrop-blur-md border border-white/20 text-white shadow-sm rounded-full font-mono text-[10px] uppercase tracking-widest">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-400" /> Research-to-Product
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/95 backdrop-blur-md border border-blue-500/30 text-blue-700 rounded-full font-mono text-[9px] uppercase tracking-widest font-semibold shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span> FIPS 203 Ready
                </div>
              </div>

              {/* Bottom Documentary Overlay */}
              <div className="relative z-10 mt-auto pt-6 sm:pt-10">
                <div className="bg-black/80 backdrop-blur-md border border-white/15 p-3 sm:p-4 rounded-xl text-white">
                  <div className="flex items-center gap-2 text-blue-400 font-mono text-[10px] sm:text-xs uppercase tracking-wider mb-1 font-semibold">
                    <Lock className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>Mathematical Lattice Research ➔ Enterprise Datacenter Security</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-zinc-300 font-light leading-relaxed">
                    Eliminating Harvest Now, Decrypt Later (HNDL) exposure with drop-in NIST FIPS 203 ML-KEM-1024 local Rust and WASM execution.
                  </p>
                </div>
              </div>
            </div>

            {/* Content area */}
            <div className="w-full xl:w-[55%] p-5 sm:p-8 lg:p-10 flex flex-col flex-grow">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl sm:text-3xl font-display font-medium text-[#141413]">QuantaCipher</h3>
                  <span className="px-2.5 py-0.5 bg-[#FAF9F5] text-[#C04A2B] border border-[#e8e6dc] rounded-full text-[10px] font-mono uppercase tracking-wider font-semibold">
                    v1.2 Live ↗
                  </span>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400">
                  R2P Wedge
                </span>
              </div>

              <div className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#C04A2B] font-semibold mb-4 leading-relaxed">
                Research-to-Product &bull; Post-Quantum Cryptography &bull; Enterprise Security
              </div>

              {/* The Edge: Research-to-Product */}
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-sans mb-6">
                QuantaLabs translates abstract lattice cryptography research directly into production-grade enterprise software. <strong className="text-[#141413] font-semibold">QuantaCipher</strong> delivers zero-trust, developer-native post-quantum encryption compliant with NIST FIPS 203 (ML-KEM-1024). Cryptography executes 100% locally via WASM or native Rust extensions in two lines of code, insulating enterprise datacenters from nation-state "Harvest Now, Decrypt Later" threats.
              </p>

              {/* Real-World Impact Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 mb-6 sm:mb-8">
                <div className="p-3 sm:p-3.5 bg-[#FAF9F5] border border-[#e8e6dc] rounded-lg">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#C04A2B] font-semibold mb-1 flex items-center gap-1.5">
                    <Shield className="w-3 h-3 text-[#C04A2B] shrink-0" /> Quantum Immunity
                  </div>
                  <div className="text-xs font-medium text-[#141413] mb-0.5">NIST FIPS 203</div>
                  <div className="text-[11px] text-gray-500 leading-snug">
                    Standardized ML-KEM-1024 lattice primitives resisting Shor's algorithm.
                  </div>
                </div>

                <div className="p-3 sm:p-3.5 bg-[#FAF9F5] border border-[#e8e6dc] rounded-lg">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#C04A2B] font-semibold mb-1 flex items-center gap-1.5">
                    <Lock className="w-3 h-3 text-[#C04A2B] shrink-0" /> Zero Data Leakage
                  </div>
                  <div className="text-xs font-medium text-[#141413] mb-0.5">100% Local Execution</div>
                  <div className="text-[11px] text-gray-500 leading-snug">
                    Zero plaintext leaves your VPC — cryptography runs in local WASM / Rust.
                  </div>
                </div>

                <div className="p-3 sm:p-3.5 bg-[#FAF9F5] border border-[#e8e6dc] rounded-lg">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#C04A2B] font-semibold mb-1 flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-[#C04A2B] shrink-0" /> Rapid Velocity
                  </div>
                  <div className="text-xs font-medium text-[#141413] mb-0.5">15-Min Deployment</div>
                  <div className="text-[11px] text-gray-500 leading-snug">
                    Drop-in two-line SDK migration without enterprise architecture overhauls.
                  </div>
                </div>
              </div>

              {/* Live CTA Action Bar */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-auto">
                <Link
                  href="https://quantacipher.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 bg-[#C04A2B] text-white font-mono text-xs uppercase tracking-widest hover:bg-[#141413] transition-colors shadow-sm"
                >
                  <span>Get API Key (quantacipher.com)</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0" />
                </Link>
                <Link
                  href="https://quantacipher.com/pricing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 bg-white text-[#141413] border border-gray-200 font-mono text-xs uppercase tracking-widest hover:border-[#141413] transition-colors"
                >
                  View Pricing &amp; Plans
                </Link>
              </div>

              {/* Audit Partner */}
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[10px] font-mono tracking-widest uppercase">
                <span className="text-gray-400">Security Audited By</span>
                <Link href="https://quantakrypto.com" target="_blank" rel="noopener noreferrer">
                  <img src="/partners/quantakrypto-logo-light.svg" alt="Quantakrypto" className="h-6 w-auto object-contain hover:scale-105 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>

          {/* QuantaChain Card */}
          <div id="quantachain" className="group border border-[#e8e6dc] bg-white flex flex-col overflow-hidden hover:border-[#C04A2B] transition-colors duration-500 shadow-sm hover:shadow-md scroll-mt-24">
            {/* Visual Cover area with Real High-Performance Node Rack Photography */}
            <div className="w-full h-64 sm:h-72 lg:h-80 relative overflow-hidden border-b border-[#e8e6dc] p-4 sm:p-6 flex flex-col justify-between bg-black">
              {/* Cover Photo */}
              <Image
                src="/images/quantachain-cover.jpg"
                alt="QuantaChain - High-Performance Distributed Node Network and Validator Racks"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-[0.88] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/30 pointer-events-none" />

              {/* Top Badges */}
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-black/65 backdrop-blur-md border border-white/20 text-white shadow-sm rounded-full font-mono text-[10px] uppercase tracking-widest">
                  <Cpu className="w-3.5 h-3.5 text-emerald-400" /> Research-to-Product
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/95 backdrop-blur-md border border-emerald-500/30 text-emerald-700 rounded-full font-mono text-[9px] uppercase tracking-widest font-semibold shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> L1 Protocol
                </div>
              </div>

              {/* Bottom Documentary Overlay */}
              <div className="relative z-10 mt-auto">
                <div className="bg-black/80 backdrop-blur-md border border-white/15 p-3 sm:p-3.5 rounded-xl text-white">
                  <div className="flex items-center gap-2 text-emerald-400 font-mono text-[10px] sm:text-xs uppercase tracking-wider mb-1 font-semibold">
                    <Network className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>AlephBFT Consensus ➔ High-Throughput Node Validators</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-zinc-300 font-light leading-snug">
                    Deterministic 6-second finality secured with quantum-proof Falcon-512 lattice signature schemes.
                  </p>
                </div>
              </div>
            </div>

            {/* Content area */}
            <div className="w-full p-5 sm:p-8 lg:p-10 flex flex-col flex-grow">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl sm:text-3xl font-display font-medium text-[#141413]">QuantaChain</h3>
                  <span className="px-2.5 py-0.5 bg-[#FAF9F5] text-[#C04A2B] border border-[#e8e6dc] rounded-full text-[10px] font-mono uppercase tracking-wider font-semibold">
                    L1 Protocol
                  </span>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400">
                  R2P Wedge
                </span>
              </div>

              <div className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#C04A2B] font-semibold mb-4 leading-relaxed">
                Research-to-Product &bull; Post-Quantum L1 &bull; Sovereign Settlement
              </div>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-sans mb-6">
                Engineering theoretical distributed consensus into an impenetrable institutional settlement layer. Powered by Asynchronous Byzantine Fault Tolerance (AlephBFT) and post-quantum Falcon-512 signatures, QuantaChain provides deterministic finality that survives quantum computing advancements without retrofitting.
              </p>

              {/* Real-World Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-6 sm:mb-8">
                <div className="p-3 sm:p-3.5 bg-[#FAF9F5] border border-[#e8e6dc] rounded-lg">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#C04A2B] font-semibold mb-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-3 h-3 text-[#C04A2B] shrink-0" /> Falcon-512 Signatures
                  </div>
                  <div className="text-xs font-medium text-[#141413] mb-0.5">Quantum-Proof Keys</div>
                  <div className="text-[11px] text-gray-500 leading-snug">
                    Mathematical lattice signatures safeguarding blocks &amp; validator state.
                  </div>
                </div>

                <div className="p-3 sm:p-3.5 bg-[#FAF9F5] border border-[#e8e6dc] rounded-lg">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#C04A2B] font-semibold mb-1 flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-[#C04A2B] shrink-0" /> 6s Finality
                  </div>
                  <div className="text-xs font-medium text-[#141413] mb-0.5">Sub-Second Consensus</div>
                  <div className="text-[11px] text-gray-500 leading-snug">
                    AlephBFT consensus with zero smart-contract vulnerability attack vectors.
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-auto">
                <Link href="https://quantachain.org" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 bg-[#C04A2B] text-white font-mono text-xs uppercase tracking-widest hover:bg-[#141413] transition-colors shadow-sm">
                  <span>Explore Infrastructure</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0" />
                </Link>
                <Link href="https://quantachain.gitbook.io/quantachain-docs" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 bg-white text-[#141413] border border-gray-200 font-mono text-xs uppercase tracking-widest hover:border-[#141413] transition-colors">
                  Read Docs
                </Link>
              </div>

              {/* Infrastructure Context */}
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[10px] font-mono tracking-widest uppercase">
                <span className="text-gray-400">Core Infrastructure</span>
                <span className="text-[#C04A2B] font-medium flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C04A2B] animate-pulse"></span>
                  Falcon-512 Secured
                </span>
              </div>
            </div>
          </div>

          {/* Ornyx Card */}
          <div id="ornyx" className="group border border-[#e8e6dc] bg-white flex flex-col overflow-hidden hover:border-[#C04A2B] transition-colors duration-500 shadow-sm hover:shadow-md scroll-mt-24">
            {/* Visual Cover area with Real Autonomous Systems Lab Photography */}
            <div className="w-full h-64 sm:h-72 lg:h-80 relative overflow-hidden border-b border-[#e8e6dc] p-4 sm:p-6 flex flex-col justify-between bg-black">
              {/* Cover Photo */}
              <Image
                src="/images/ornyx-cover.jpg"
                alt="Ornyx - Autonomous AI Agent Operations Workspace and Telemetry Hub"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-[0.88] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/30 pointer-events-none" />

              {/* Top Badges */}
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-black/65 backdrop-blur-md border border-white/20 text-white shadow-sm rounded-full font-mono text-[10px] uppercase tracking-widest">
                  <Terminal className="w-3.5 h-3.5 text-amber-400" /> Research-to-Product
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/95 backdrop-blur-md border border-emerald-500/30 text-emerald-700 rounded-full font-mono text-[9px] uppercase tracking-widest font-semibold shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Live Platform
                </div>
              </div>

              {/* Bottom Documentary Overlay */}
              <div className="relative z-10 mt-auto">
                <div className="bg-black/80 backdrop-blur-md border border-white/15 p-3 sm:p-3.5 rounded-xl text-white">
                  <div className="flex items-center gap-2 text-amber-400 font-mono text-[10px] sm:text-xs uppercase tracking-wider mb-1 font-semibold">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Agent Swarm Telemetry ➔ Autonomous On-Chain Settlement</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-zinc-300 font-light leading-snug">
                    Autonomous agent discovery, task negotiation, and trustless settlement on post-quantum infrastructure.
                  </p>
                </div>
              </div>
            </div>

            {/* Content area */}
            <div className="w-full p-5 sm:p-8 lg:p-10 flex flex-col flex-grow">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl sm:text-3xl font-display font-medium text-[#141413]">Ornyx</h3>
                  <span className="px-2.5 py-0.5 bg-[#FAF9F5] text-[#C04A2B] border border-[#e8e6dc] rounded-full text-[10px] font-mono uppercase tracking-wider font-semibold">
                    Live ↗
                  </span>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400">
                  R2P Wedge
                </span>
              </div>

              <div className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#C04A2B] font-semibold mb-4 leading-relaxed">
                Research-to-Product &bull; Autonomous AI Agents &bull; Decentralized Marketplace
              </div>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-sans mb-6">
                Translating autonomous agent coordination research into a live decentralized marketplace. Built natively on QuantaChain and secured by Falcon-512, Ornyx allows autonomous AI agents to discover, negotiate tasks, and settle peer-to-peer without central intermediaries.
              </p>

              {/* Real-World Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-6 sm:mb-8">
                <div className="p-3 sm:p-3.5 bg-[#FAF9F5] border border-[#e8e6dc] rounded-lg">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#C04A2B] font-semibold mb-1 flex items-center gap-1.5">
                    <Zap className="w-3 h-3 text-[#C04A2B] shrink-0" /> Autonomous Swarms
                  </div>
                  <div className="text-xs font-medium text-[#141413] mb-0.5">Trustless Dispatching</div>
                  <div className="text-[11px] text-gray-500 leading-snug">
                    Multi-agent task discovery, verification, and algorithmic settlement.
                  </div>
                </div>

                <div className="p-3 sm:p-3.5 bg-[#FAF9F5] border border-[#e8e6dc] rounded-lg">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#C04A2B] font-semibold mb-1 flex items-center gap-1.5">
                    <Layers className="w-3 h-3 text-[#C04A2B] shrink-0" /> Native QUA Rails
                  </div>
                  <div className="text-xs font-medium text-[#141413] mb-0.5">Quantum-Safe Escrow</div>
                  <div className="text-[11px] text-gray-500 leading-snug">
                    Cryptographically signed agent actions with sub-second execution on QuantaChain.
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-auto">
                <Link href="https://ornyx.xyz" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 bg-[#C04A2B] text-white font-mono text-xs uppercase tracking-widest hover:bg-[#141413] transition-colors shadow-sm">
                  <span>Explore Platform (ornyx.xyz)</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0" />
                </Link>
              </div>

              {/* Network Context */}
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[10px] font-mono tracking-widest uppercase">
                <span className="text-gray-400">Settlement Layer</span>
                <span className="text-[#C04A2B] font-medium flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C04A2B] animate-pulse"></span>
                  QuantaChain L1
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
