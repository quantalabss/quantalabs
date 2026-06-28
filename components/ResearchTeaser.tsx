"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function ResearchTeaser() {
  const papers = [
    {
      id: "LCE-2026-01",
      title:
        "Learning with Correlated Errors: A New Lattice Hard Problem with Worst-Case Reductions",
      date: "MAY 2026",
      type: "PREPRINT",
      zenodoUrl: "https://zenodo.org/records/20361875",
    },
    {
      id: "QTO-2026-02",
      title:
        "Quantum Temporal Order: Structural Inevitability of Modular Flow and the Problem of Time",
      date: "MAR 2026",
      type: "PREPRINT",
      zenodoUrl: "https://zenodo.org/records/18845465",
    },
    {
      id: "QNT-2026-03",
      title:
        "QUANTA: Engineering a Production-Ready Post-Quantum Blockchain with Falcon-512 Lattice Signatures",
      date: "FEB 2026",
      type: "TECHNICAL REPORT",
      zenodoUrl: "https://zenodo.org/records/18753528",
    },
  ];

  return (
    <section className="py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main brutalist container */}
        <div className="flex flex-col border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white overflow-hidden">
          {/* TOP ROW */}
          <div className="grid grid-cols-1 lg:grid-cols-12 border-b-2 border-black">
            {/* Left: Headline */}
            <div className="lg:col-span-8 p-10 md:p-14 flex flex-col justify-center border-b-2 lg:border-b-0 lg:border-r-2 border-black bg-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-black"></div>
                <span className="font-mono text-[10px] tracking-[0.2em] text-black uppercase font-bold">
                  Applied Research
                </span>
              </div>
              <h2 className="text-[2.8rem] sm:text-[3.8rem] md:text-[4rem] font-black tracking-tighter leading-[0.93] text-black mb-4">
                From theory
                <br />
                <span className="relative inline-block mt-1">
                  to production.
                  <span className="absolute bottom-1 left-0 w-full h-[6px] bg-[#C4ED5F] -z-10"></span>
                </span>
              </h2>
              <p className="text-sm text-black/80 font-medium leading-relaxed max-w-lg mt-4">
                Our protocol engineering team regularly publishes findings on
                lattice-based cryptography, ZKPs, and secure migration
                strategies.
              </p>
            </div>

            {/* Right: Visual */}
            <div className="lg:col-span-4 relative bg-[#C4ED5F] flex flex-col items-center justify-center p-10 overflow-hidden min-h-[240px]">
              <div
                className="absolute inset-0 opacity-40 pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.15) 1px, transparent 1px)`,
                  backgroundSize: "24px 24px",
                }}
              ></div>
              <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
                <span className="text-[8rem] font-black text-black leading-none select-none tracking-tighter opacity-90">
                  ∫
                </span>
              </div>
            </div>
          </div>

          {/* BOTTOM ROW: Papers + CTAs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 bg-white">
            {/* Papers */}
            <div className="lg:col-span-8 flex flex-col border-b-2 lg:border-b-0 lg:border-r-2 border-black bg-gray-50/50">
              {papers.map((paper, index) => (
                <a
                  href={paper.zenodoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={paper.id}
                  className={`group flex flex-col sm:flex-row sm:items-center justify-between p-6 md:px-10 md:py-8 hover:bg-white transition-colors ${
                    index !== papers.length - 1
                      ? "border-b-2 border-black/10"
                      : ""
                  }`}
                >
                  <div className="flex items-start gap-6 mb-4 sm:mb-0">
                    <div className="hidden sm:flex mt-1">
                      <span className="font-serif text-2xl text-black/20 group-hover:text-black transition-colors leading-none">
                        §
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-mono text-[9px] font-bold text-black/40 group-hover:text-black transition-colors">
                          {paper.id}
                        </span>
                        <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-black bg-gray-200 px-2 py-0.5 border border-black/10 group-hover:bg-[#C4ED5F] group-hover:border-black transition-colors">
                          {paper.type}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-black group-hover:text-[#8ab329] transition-colors max-w-xl pr-4">
                        {paper.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-6 sm:w-auto w-full border-t border-black/10 sm:border-t-0 pt-4 sm:pt-0">
                    <span className="font-mono text-[10px] text-black/50 font-bold uppercase tracking-widest">
                      {paper.date}
                    </span>
                    <div className="w-8 h-8 border-2 border-black/10 rounded-sm flex items-center justify-center group-hover:bg-black group-hover:border-black transition-colors">
                      <ArrowUpRight className="w-4 h-4 text-black/40 group-hover:text-[#C4ED5F] transition-colors" />
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* CTA Container */}
            <div className="lg:col-span-4 p-6 flex flex-col justify-center items-center bg-[#f8f9fa]">
              <Link
                href="/research"
                className="group flex items-center justify-between w-full px-8 py-5 bg-black text-white font-bold hover:bg-gray-900 transition-colors text-xs uppercase tracking-widest border-2 border-transparent hover:border-[#C4ED5F] shadow-[4px_4px_0px_0px_rgba(196,237,95,1)]"
              >
                <span>View All Papers</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#C4ED5F]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
