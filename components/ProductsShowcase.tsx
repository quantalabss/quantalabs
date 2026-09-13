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

        <div className="grid grid-cols-1 gap-8 max-w-3xl mx-auto">


          {/* QuantaCipher Card */}
          <div className="group border border-[#e8e6dc] bg-white flex flex-col overflow-hidden hover:border-[#C04A2B] transition-colors duration-500 shadow-sm hover:shadow-md">
            {/* Visual Header area */}
            <div className="h-72 bg-gradient-to-br from-[#faf9f5] to-[#f0efe9] border-b border-[#e8e6dc] p-6 relative overflow-hidden flex flex-col justify-between group-hover:to-[#e8e6dc] transition-colors duration-700">
              {/* Premium Background Elements */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Subtle Grid */}
                <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to right, #14141308 1px, transparent 1px), linear-gradient(to bottom, #14141308 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                {/* Diagonal accent line */}
                <div className="absolute top-[-50%] right-1/4 w-px h-[200%] bg-gradient-to-b from-transparent via-[#C04A2B]/15 to-transparent rotate-45 transform origin-top group-hover:opacity-100 opacity-50 transition-opacity duration-700"></div>
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
            <div className="p-8 md:p-10 flex flex-col flex-grow">
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
        </div>
      </div>
    </section>
  );
}
