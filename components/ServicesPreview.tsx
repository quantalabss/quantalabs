"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-gray-50 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 border-b-2 border-black bg-gray-50/50">
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
                  Enterprise Solutions
                </span>
              </div>
              <h2 className="text-[2.5rem] md:text-[4rem] font-black tracking-tighter leading-[0.95] text-black max-w-2xl relative z-10">
                Securing the
                <br />
                future.
              </h2>
            </div>
            <div className="lg:col-span-4 px-8 py-10 pt-32 lg:pt-10 flex flex-col justify-end bg-[#C4ED5F] relative overflow-hidden">
              <span className="absolute top-8 right-8 text-[6rem] font-black text-black leading-none select-none opacity-20 lg:opacity-90">
                ∇
              </span>
              <p className="text-sm text-black/70 font-medium relative z-10">
                We provide end-to-end consulting, auditing, and deep-tech
                protocol engineering to transition institutional infrastructure
                to quantum safety.
              </p>
            </div>
          </div>
        </div>

        {/* Three Column Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* CBOM Audit */}
          <div className="bg-white border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-8 flex flex-col transition-all group hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gray-50 border-2 border-black flex items-center justify-center group-hover:border-black transition-colors shrink-0">
                <span className="font-serif text-2xl text-black leading-none">
                  ⨀
                </span>
              </div>
              <h3 className="text-xl font-bold text-black">CBOM Audit</h3>
            </div>
            <p className="text-sm text-gray-600 font-medium leading-relaxed mb-8">
              A 4-phase Cryptographic Bill of Materials generation identifying
              vulnerable algorithms across your stack to ensure FIPS 203
              readiness.
            </p>
            <div className="mt-auto pt-6 border-t border-gray-100">
              <Link
                href="/solutions/cbom-audit"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#C4ED5F] text-black font-bold text-[10px] uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
              >
                Learn More
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* PQC Migration */}
          <div className="bg-white border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-8 flex flex-col transition-all group hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gray-50 border-2 border-black flex items-center justify-center group-hover:border-black transition-colors shrink-0">
                <span className="font-serif text-2xl text-black leading-none">
                  ⇌
                </span>
              </div>
              <h3 className="text-xl font-bold text-black">PQC Migration</h3>
            </div>
            <p className="text-sm text-gray-600 font-medium leading-relaxed mb-8">
              Full-scale engineering transition from legacy cryptography to
              NSA-recommended Hybrid Cryptography (ML-KEM/ML-DSA) for TLS and
              HSMs.
            </p>
            <div className="mt-auto pt-6 border-t border-gray-100">
              <Link
                href="/solutions/pqc-migration"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#C4ED5F] text-black font-bold text-[10px] uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
              >
                Learn More
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Custom Engineering */}
          <div className="bg-white border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-8 flex flex-col transition-all group hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gray-50 border-2 border-black flex items-center justify-center group-hover:border-black transition-colors shrink-0">
                <span className="font-serif text-2xl text-black leading-none">
                  ⚙
                </span>
              </div>
              <h3 className="text-xl font-bold text-black">
                Custom Engineering
              </h3>
            </div>
            <p className="text-sm text-gray-600 font-medium leading-relaxed mb-8">
              Bespoke protocol engineering in Rust/C++. We design and implement
              custom sovereign L1 blockchains, AlephBFT consensus, and ZKP
              circuits.
            </p>
            <div className="mt-auto pt-6 border-t border-gray-100">
              <Link
                href="/solutions/engineering"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#C4ED5F] text-black font-bold text-[10px] uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
              >
                Learn More
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
