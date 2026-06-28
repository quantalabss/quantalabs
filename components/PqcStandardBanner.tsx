"use client";

import Link from "next/link";

export default function PqcStandardBanner() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#C4ED5F] border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-start gap-6">
            <div className="hidden sm:flex mt-1">
              <span className="font-serif text-4xl text-black leading-none mt-[-4px]">
                ⚠
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-black bg-white/50 px-2 py-0.5 border border-black/10">
                  Regulatory Mandate
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-black tracking-tight mb-2">
                India DST Mandates PQC Migration by FY 2027-28
              </h3>
              <p className="text-black/80 font-medium text-sm max-w-2xl">
                The Department of Science and Technology requires all critical
                financial and state infrastructure to establish Cryptographic
                Bills of Materials (CBOM) and begin migration to NIST FIPS
                203/204 standard algorithms.
              </p>
            </div>
          </div>

          <div className="flex-shrink-0 w-full md:w-auto">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center w-full md:w-auto px-8 py-4 bg-black text-white font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors border-2 border-transparent hover:border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              Start Your CBOM Audit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
