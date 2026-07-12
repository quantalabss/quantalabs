"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ServicesPreview() {
  return (
    <section className="pt-24 pb-12 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
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
                  Our Services
                </span>
              </div>
              <h2 className="text-[3rem] md:text-[4.5rem] font-black tracking-tighter leading-[0.95] text-black max-w-2xl relative z-10 mb-8">
                End-to-end
                <br />
                <span className="relative inline-block">
                  PQC Migration.
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#C4ED5F] -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0 10 Q 50 20 100 10" fill="currentColor" stroke="currentColor" strokeWidth="4" />
                  </svg>
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-10 max-w-xl leading-relaxed relative z-10">
                From cryptographic discovery audits to full-scale protocol engineering. We transition your legacy infrastructure to NSA-recommended Hybrid Cryptography (ML-KEM/ML-DSA) well ahead of compliance mandates.
              </p>
              <div className="flex flex-wrap gap-4 relative z-10">
                <Link
                  href="https://quantacipher.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-bold text-xs uppercase tracking-widest hover:bg-[#C4ED5F] hover:text-black transition-colors border-2 border-black"
                >
                  Start Migration
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-gray-50 transition-colors border-2 border-black"
                >
                  Request Audit
                </Link>
              </div>
            </div>
            
            <div className="lg:col-span-4 bg-[#C4ED5F] relative overflow-hidden flex flex-col items-center justify-center min-h-[300px] lg:min-h-full">
              <span className="text-[10rem] lg:text-[14rem] font-serif text-black leading-none select-none relative z-10 opacity-90 transition-transform duration-500 hover:scale-110">
                ⇌
              </span>
              <div className="absolute bottom-8 left-8 right-8 z-10">
                  <p className="text-[10px] md:text-xs font-mono font-bold text-black border-t-2 border-black pt-4 tracking-widest">
                    LEGACY (RSA/ECC) → PQC (ML-KEM)
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
