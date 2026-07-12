"use client";

import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white text-black pt-20">
      {/* Header Section */}
      <section className="py-24 border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-[#C4ED5F] overflow-hidden">
            <div className="p-10 md:p-16 relative">
              <span className="absolute top-8 right-8 text-[8rem] md:text-[12rem] font-serif text-black leading-none select-none opacity-20">
                ⇌
              </span>
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="w-2 h-2 bg-black"></div>
                <span className="font-mono text-[10px] tracking-[0.2em] text-black uppercase font-bold">
                  Our Methodology
                </span>
              </div>
              <h1 className="text-[3rem] md:text-[5rem] font-black tracking-tighter leading-[0.95] text-black max-w-3xl relative z-10 mb-8">
                Seamless PQC
                <br />
                Migration.
              </h1>
              <p className="text-xl font-medium text-black/80 max-w-2xl relative z-10">
                Transitioning to NIST-finalized Post-Quantum Cryptography doesn't mean breaking your existing systems. We guarantee backward compatibility and zero downtime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">The Migration Protocol</h2>
            <p className="text-lg text-gray-600 max-w-2xl">A deterministic, phased approach to upgrading your cryptographic stack to ML-KEM and ML-DSA.</p>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white group hover:-translate-y-1 transition-transform">
              <div className="md:w-64 bg-black text-white p-8 border-b-2 md:border-b-0 md:border-r-2 border-black flex flex-col justify-between">
                <span className="font-mono text-[10px] tracking-widest text-[#C4ED5F] uppercase font-bold">Phase 01</span>
                <span className="text-[6rem] font-serif leading-none mt-4">1</span>
              </div>
              <div className="p-8 md:p-12 flex-1">
                <h3 className="text-3xl font-black mb-4">Audit & Discovery</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We begin by generating a comprehensive Cryptographic Bill of Materials (CBOM). We scan your entire infrastructure to identify every instance of legacy cryptography (RSA/ECC) across your databases, communications, and storage.
                </p>
                <ul className="space-y-3 font-mono text-sm text-black">
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-[#C4ED5F] fill-black" /> FIPS 203 Readiness Assessment</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-[#C4ED5F] fill-black" /> Vulnerability mapping</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-[#C4ED5F] fill-black" /> Asset classification</li>
                </ul>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white group hover:-translate-y-1 transition-transform">
              <div className="md:w-64 bg-black text-white p-8 border-b-2 md:border-b-0 md:border-r-2 border-black flex flex-col justify-between">
                <span className="font-mono text-[10px] tracking-widest text-[#C4ED5F] uppercase font-bold">Phase 02</span>
                <span className="text-[6rem] font-serif leading-none mt-4">2</span>
              </div>
              <div className="p-8 md:p-12 flex-1">
                <h3 className="text-3xl font-black mb-4">Strategic Planning</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  With the CBOM complete, we architect a deterministic migration plan. We map out exactly how to integrate hybrid cryptography without disrupting ongoing operations, ensuring regulatory compliance timelines are met efficiently.
                </p>
                <ul className="space-y-3 font-mono text-sm text-black">
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-[#C4ED5F] fill-black" /> Zero-downtime architecture design</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-[#C4ED5F] fill-black" /> Hybrid cryptography roadmap</li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-[#C4ED5F] group hover:-translate-y-1 transition-transform">
              <div className="md:w-64 bg-black text-white p-8 border-b-2 md:border-b-0 md:border-r-2 border-black flex flex-col justify-between">
                <span className="font-mono text-[10px] tracking-widest text-[#C4ED5F] uppercase font-bold">Phase 03</span>
                <span className="text-[6rem] font-serif leading-none mt-4">3</span>
              </div>
              <div className="p-8 md:p-12 flex-1">
                <h3 className="text-3xl font-black mb-4">Execution & Migration</h3>
                <p className="text-black/80 font-medium leading-relaxed mb-8">
                  The active transition phase. We implement the migration using our proprietary tools and custom engineering processes.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white border-2 border-black p-6">
                    <h4 className="font-bold mb-2">Stack Migration via QuantaCipher</h4>
                    <p className="text-sm text-gray-600">
                      We utilize the QuantaCipher SDK to instantly upgrade your core stack infrastructure to PQC. This provides immediate, drop-in post-quantum encryption for internal data channels and databases.
                    </p>
                  </div>
                  <div className="bg-white border-2 border-black p-6">
                    <h4 className="font-bold mb-2">Legacy Account Migration</h4>
                    <p className="text-sm text-gray-600">
                      Existing user accounts and legacy keys are securely migrated using specialized threshold and rollover processes, guaranteeing full backward compatibility with zero service interruption.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t-2 border-black bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8">Ready to secure your stack?</h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-5 bg-black text-white font-bold uppercase tracking-widest hover:bg-[#C4ED5F] hover:text-black transition-colors border-2 border-transparent hover:border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            Schedule a Migration Audit
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
