"use client";

import { ShieldCheck, Cpu, Database, Network, Zap, History } from "lucide-react";

export default function PqcStandardBanner() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-16 animate-fade-in">
          <div className="flex items-center space-x-2 mb-4">
            <span className="w-12 h-0.5 bg-[#00E599]"></span>
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-gray-400">Standardization Protocol</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-black tracking-tighter">
            Architected for <span className="text-[#00E599]"> Maximum Performance.</span>
          </h2>
        </div>

        {/* Bento Grid Layout with ALL 6 ITEMS & FULL CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 animate-fade-in">

          {/* 1. NIST (Large) */}
          <div className="lg:col-span-8 group relative bg-black rounded-[2.5rem] p-10 flex flex-col justify-between overflow-hidden shadow-2xl min-h-[380px]">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#00E599] opacity-10 blur-[100px] -mr-48 -mt-48"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-[#00E599]/20 flex items-center justify-center mb-10">
                <ShieldCheck className="w-10 h-10 text-[#00E599]" />
              </div>
              <h3 className="text-white font-black text-4xl mb-6 tracking-tight">NIST FIPS 203/204 Standards</h3>
              <p className="text-gray-400 text-xl font-medium leading-relaxed max-w-2xl">
                Full production-ready implementation of ML-KEM and ML-DSA standards for key encapsulation and digital signatures across global financial infrastructure.
              </p>
            </div>
            <div className="relative z-10 flex items-center space-x-4 text-[10px] font-mono text-[#00E599]">
              <span className="px-3 py-1.5 border border-[#00E599]/30 rounded-full bg-[#00E599]/5">COMPLIANT</span>
              <span className="px-3 py-1.5 border border-[#00E599]/30 rounded-full bg-[#00E599]/5">PRODUCTION-READY</span>
            </div>
          </div>

          {/* 2. Lattice Hardness (Medium) */}
          <div className="lg:col-span-4 group relative bg-[#fafafa] rounded-[2.5rem] p-10 border border-gray-100 hover:border-[#00E599]/50 transition-all flex flex-col justify-center">
            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-sm group-hover:bg-black transition-all">
              <Cpu className="w-6 h-6 text-black group-hover:text-[#00E599]" />
            </div>
            <h3 className="text-black font-black text-2xl mb-4 tracking-tight">Lattice Hardness</h3>
            <p className="text-gray-500 text-base font-medium leading-relaxed">
              Security derived from the M-LWE problem, ensuring provable resistance against Shor&apos;s algorithm and future quantum threats.
            </p>
          </div>

          {/* 3. Backward Compatible (Medium) */}
          <div className="lg:col-span-4 group relative bg-[#fafafa] rounded-[2.5rem] p-10 border border-gray-100 hover:border-[#00E599]/50 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-sm group-hover:bg-black transition-all">
              <History className="w-6 h-6 text-black group-hover:text-[#00E599]" />
            </div>
            <h3 className="text-black font-black text-2xl mb-4 tracking-tight">Backward Compatible</h3>
            <p className="text-gray-500 text-base font-medium leading-relaxed">
              Hybrid signature support (ML-DSA + ECDSA) ensuring full connectivity with legacy systems during the transition.
            </p>
          </div>

          {/* 4. Optimized Integration (Medium) */}
          <div className="lg:col-span-4 group relative bg-[#fafafa] rounded-[2.5rem] p-10 border border-gray-100 hover:border-[#00E599]/50 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-sm group-hover:bg-black transition-all">
              <Zap className="w-6 h-6 text-black group-hover:text-[#00E599]" />
            </div>
            <h3 className="text-black font-black text-2xl mb-4 tracking-tight">Optimized Integration</h3>
            <p className="text-gray-500 text-base font-medium leading-relaxed">
              Parallel-pipeline architecture providing PQC security without overhead or latency drag on existing infrastructure.
            </p>
          </div>

          {/* 5. Zero-Downtime (Medium) */}
          <div className="lg:col-span-4 group relative bg-[#fafafa] rounded-[2.5rem] p-10 border border-gray-100 hover:border-[#00E599]/50 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-sm group-hover:bg-black transition-all">
              <Database className="w-6 h-6 text-black group-hover:text-[#00E599]" />
            </div>
            <h3 className="text-black font-black text-2xl mb-4 tracking-tight">Zero-Downtime</h3>
            <p className="text-gray-500 text-base font-medium leading-relaxed">
              Proprietary state-bridge technology for seamless migration of institutional ledger states with no operational interruption.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
