"use client";

import Link from "next/link";
import { ArrowUpRight, Terminal, Lock, Cpu, Network, ShieldCheck, Key } from "lucide-react";

export default function ProductsShowcase() {
  return (
    <section className="py-24 sm:py-32 bg-transparent">
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
          {/* QuantaCipher Card */}
          <div className="group border border-[#e8e6dc] bg-white flex flex-col xl:flex-row overflow-hidden hover:border-[#C04A2B] transition-colors duration-500 shadow-sm hover:shadow-md xl:col-span-2">
            {/* Visual Header area */}
            <div className="xl:w-[45%] h-72 xl:h-auto bg-gradient-to-br from-[#faf9f5] to-[#f0efe9] border-b xl:border-b-0 xl:border-r border-[#e8e6dc] p-6 relative overflow-hidden flex flex-col justify-between group-hover:to-[#e8e6dc] transition-colors duration-700">
              {/* Premium Background Elements */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Subtle Grid */}
                <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to right, #14141308 1px, transparent 1px), linear-gradient(to bottom, #14141308 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
              </div>
              
              <div className="relative z-10 flex justify-between items-start">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/80 backdrop-blur-md border border-gray-200/60 text-[#141413] shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] rounded-full font-mono text-[10px] uppercase tracking-widest">
                  <ShieldCheck className="w-3 h-3 text-[#C04A2B]" /> Enterprise API
                </div>
                <Key className="w-5 h-5 text-gray-400 group-hover:text-[#C04A2B] transition-colors duration-500" />
              </div>
              
              {/* Code snippet visual */}
              <div className="relative z-10 mt-auto bg-white/90 backdrop-blur-2xl rounded-xl border border-white p-5 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.05)] translate-y-4 group-hover:translate-y-0 transition-all duration-500 group-hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)]">
                <div className="flex gap-2 mb-4 pb-3 border-b border-gray-100/80">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                </div>
                <pre className="font-mono text-[12px] leading-loose text-gray-600">
                  <span className="text-[#C04A2B] font-medium">import</span> {'{ QuantaCipher }'} <span className="text-[#C04A2B] font-medium">from</span> <span className="text-emerald-600">'quantacipher'</span>;<br/>
                  <br/>
                  <span className="text-gray-400 italic">// ML-KEM-1024 Encryption</span><br/>
                  <span className="text-[#C04A2B] font-medium">const</span> cipher <span className="text-gray-400">=</span> sdk.<span className="text-blue-600">encryptVault</span>(<br/>
                  &nbsp;&nbsp;<span className="text-emerald-600">"Top Secret Data"</span><br/>
                  );
                </pre>
              </div>
            </div>

            {/* Content area */}
            <div className="xl:w-[55%] p-8 md:p-10 flex flex-col flex-grow">
              <h3 className="text-3xl font-display font-medium text-[#141413] mb-4">QuantaCipher</h3>
              <p className="text-gray-500 leading-relaxed mb-10 flex-grow">
                Zero-trust, developer-native post-quantum encryption. We provide drop-in NIST FIPS 203 ML-KEM-1024 integration. Cryptography executes 100% locally via WASM or native Rust extensions, protecting your enterprise data from "Harvest Now, Decrypt Later" attacks in just two lines of code.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <Link href="https://quantacipher.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 bg-[#C04A2B] text-white font-mono text-xs uppercase tracking-widest hover:bg-[#141413] transition-colors">
                  Get API Key <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link href="https://quantacipher.com/pricing" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#141413] border border-gray-200 font-mono text-xs uppercase tracking-widest hover:border-[#141413] transition-colors">
                  View Pricing
                </Link>
              </div>

              {/* Audit Partner */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase">Security Audited By</span>
                <Link href="https://quantakrypto.com" target="_blank" rel="noopener noreferrer">
                  <img src="/partners/quantakrypto-logo-light.svg" alt="Quantakrypto" className="h-6 w-auto object-contain hover:scale-105 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>

          {/* QuantaChain Card */}
          <div className="group border border-[#e8e6dc] bg-white flex flex-col overflow-hidden hover:border-[#C04A2B] transition-colors duration-500 shadow-sm hover:shadow-md">
            {/* Visual Header area */}
            <div className="h-72 bg-gradient-to-br from-[#faf9f5] to-[#f0efe9] border-b border-[#e8e6dc] p-6 relative overflow-hidden flex flex-col justify-between group-hover:to-[#e8e6dc] transition-colors duration-700">
              {/* Premium Background Elements */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Subtle Dot Grid */}
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#C04A2B 1px, transparent 1px)', backgroundSize: '24px 24px', opacity: 0.07 }}></div>
                {/* Glowing Orbs */}
                <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#C04A2B]/10 rounded-full blur-[50px] group-hover:bg-[#C04A2B]/15 transition-colors duration-700"></div>
                <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-orange-400/10 rounded-full blur-[40px]"></div>
              </div>
              
              <div className="relative z-10 flex justify-between items-start">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/80 backdrop-blur-md border border-gray-200/60 text-[#141413] shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] rounded-full font-mono text-[10px] uppercase tracking-widest">
                  <Network className="w-3 h-3 text-[#C04A2B]" /> Core Protocol
                </div>
                <Cpu className="w-5 h-5 text-gray-400 group-hover:text-[#C04A2B] transition-colors duration-500" />
              </div>
              
              {/* Terminal Window */}
              <div className="relative z-10 font-mono text-[13px] text-[#141413] mt-auto bg-white/90 backdrop-blur-2xl p-5 rounded-xl border border-white shadow-[0_15px_35px_-10px_rgba(0,0,0,0.05)] group-hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                <div className="flex gap-3 mb-3 items-center">
                  <span className="text-[#C04A2B] font-bold text-lg leading-none">{'>'}</span>
                  <span className="text-gray-500">[QuantaChain] <span className="text-[#141413]">INITIALIZING BFT...</span></span>
                </div>
                <div className="flex gap-3 mb-3 items-center">
                  <span className="text-[#C04A2B] font-bold text-lg leading-none">{'>'}</span>
                  <span className="text-gray-500">[AlephBFT] <span className="text-[#141413]">VALIDATING SIGS...</span></span>
                </div>
                <div className="flex gap-3 items-center mt-4 pt-3 border-t border-gray-100">
                  <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse"></div>
                  <span className="font-semibold text-green-600 tracking-wide">BLOCK FINALIZED (6.02s)</span>
                </div>
              </div>
            </div>

            {/* Content area */}
            <div className="p-8 md:p-10 flex flex-col flex-grow">
              <h3 className="text-3xl font-display font-medium text-[#141413] mb-4">QuantaChain</h3>
              <p className="text-gray-500 leading-relaxed mb-10 flex-grow">
                The post-quantum execution layer for autonomous AI agents. Built on Asynchronous Byzantine Fault Tolerance (AlephBFT) with NIST-standardized Falcon-512 signatures, we enable AI agents to coordinate and execute natively with deterministic 6-second finality that survives the quantum era.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <Link href="https://quantachain.org" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 bg-[#C04A2B] text-white font-mono text-xs uppercase tracking-widest hover:bg-[#141413] transition-colors">
                  Explore Infrastructure <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link href="https://quantachain.gitbook.io/quantachain-docs" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#141413] border border-gray-200 font-mono text-xs uppercase tracking-widest hover:border-[#141413] transition-colors">
                  Read Docs
                </Link>
              </div>

              {/* Infrastructure Context to align with QuantaCipher audit footer */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase">Core Infrastructure</span>
                <span className="text-[10px] font-mono font-medium tracking-widest text-[#C04A2B] uppercase flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C04A2B] animate-pulse"></span>
                  Falcon-512 Secured
                </span>
              </div>
            </div>
          </div>

          {/* Ornyx Card */}
          <div className="group border border-[#e8e6dc] bg-white flex flex-col overflow-hidden hover:border-[#C04A2B] transition-colors duration-500 shadow-sm hover:shadow-md">
            {/* Visual Header area */}
            <div className="h-72 bg-gradient-to-br from-[#faf9f5] to-[#f0efe9] border-b border-[#e8e6dc] p-6 relative overflow-hidden flex flex-col justify-between group-hover:to-[#e8e6dc] transition-colors duration-700">
              {/* Premium Background Elements */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#141413 1px, transparent 1px)', backgroundSize: '24px 24px', opacity: 0.04 }}></div>
                <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#C04A2B]/10 rounded-full blur-[50px] group-hover:bg-[#C04A2B]/15 transition-colors duration-700"></div>
              </div>
              
              <div className="relative z-10 flex justify-between items-start">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/80 backdrop-blur-md border border-gray-200/60 text-[#141413] shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] rounded-full font-mono text-[10px] uppercase tracking-widest">
                  <Terminal className="w-3 h-3 text-[#C04A2B]" /> Agent Marketplace
                </div>
                <Terminal className="w-5 h-5 text-gray-400 group-hover:text-[#C04A2B] transition-colors duration-500" />
              </div>
              
              {/* UI visual */}
              <div className="relative z-10 mt-auto bg-white/90 backdrop-blur-2xl rounded-xl border border-white p-5 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.05)] translate-y-4 group-hover:translate-y-0 transition-all duration-500 group-hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)]">
                <div className="flex justify-between items-center mb-3">
                   <div className="text-xs font-bold text-[#141413]">Trading Agent AI</div>
                   <div className="text-[10px] text-green-600 bg-green-50 px-2 py-0.5 rounded-full font-medium">ACTIVE</div>
                </div>
                <div className="h-1.5 w-full bg-gray-100 rounded-full mb-3 overflow-hidden">
                   <div className="h-full bg-[#C04A2B] w-3/4 rounded-full"></div>
                </div>
                <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                   <span>Settlement: QUA</span>
                   <span>Secured by Falcon-512</span>
                </div>
              </div>
            </div>

            {/* Content area */}
            <div className="p-8 md:p-10 flex flex-col flex-grow">
              <h3 className="text-3xl font-display font-medium text-[#141413] mb-4">Ornyx</h3>
              <p className="text-gray-500 leading-relaxed mb-10 flex-grow">
                The decentralized AI Agent marketplace. Secured by Falcon-512 and settled natively in QUA. Discover, deploy, and monetize autonomous AI agents on a post-quantum network with determinism and trust.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <Link href="https://ornyx.xyz" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 bg-[#C04A2B] text-white font-mono text-xs uppercase tracking-widest hover:bg-[#141413] transition-colors">
                  Explore Platform <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Network Context */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase">Settlement Layer</span>
                <span className="text-[10px] font-mono font-medium tracking-widest text-[#C04A2B] uppercase flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C04A2B] animate-pulse"></span>
                  QuantaChain
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
