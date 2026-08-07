// CHANGED: Restored real research data into the new light-mode structural theme.
// DATE: 2026-08-07 | VERSION: 3.1
"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ResearchTeaser() {
  const papers = [
    {
      id: "LCE-2026-01",
      title: "Learning with Correlated Errors: A New Lattice Hard Problem with Worst-Case Reductions",
      date: "MAY 2026",
      type: "PREPRINT",
      zenodoUrl: "https://zenodo.org/records/20361875",
    },
    {
      id: "QTO-2026-02",
      title: "Quantum Temporal Order: Structural Inevitability of Modular Flow and the Problem of Time",
      date: "MAR 2026",
      type: "PREPRINT",
      zenodoUrl: "https://zenodo.org/records/18845465",
    },
    {
      id: "QNT-2026-03",
      title: "QUANTA: Engineering a Production-Ready Post-Quantum Blockchain with Falcon-512 Lattice Signatures",
      date: "FEB 2026",
      type: "TECHNICAL REPORT",
      zenodoUrl: "https://zenodo.org/records/18753528",
    }
  ];

  return (
    <section className="py-32 bg-transparent text-[#141413] font-sans border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 bg-white border border-gray-200 mb-6 shadow-sm">
            <span className="w-1.5 h-1.5 bg-[#C04A2B]"></span>
            <span className="text-[10px] tracking-[0.2em] text-gray-500 uppercase font-mono font-medium">
              Applied Research
            </span>
          </div>
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-display font-medium tracking-tight leading-[1.1] text-[#141413] max-w-2xl">
            Advancing the frontier of <br className="hidden sm:block" />
            <span className="text-gray-400">quantum-safe AI.</span>
          </h2>
        </div>

        {/* Papers List (Academic Style) */}
        <div className="max-w-4xl mx-auto bg-white border border-[#C04A2B] shadow-sm">
          
          {papers.map((paper, index) => (
            <div key={paper.id} className={`p-8 md:p-10 hover:bg-gray-50 transition-colors group ${index !== papers.length - 1 ? 'border-b border-gray-200' : ''}`}>
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-2 py-0.5 bg-gray-100 border border-gray-200 text-[10px] uppercase tracking-widest font-mono text-gray-500">{paper.type}</span>
                    <span className="text-[10px] font-mono text-gray-400">{paper.date}</span>
                    <span className="text-[10px] font-mono text-gray-300">|</span>
                    <span className="text-[10px] font-mono text-gray-400">{paper.id}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-display font-medium text-[#141413] mb-3 group-hover:text-gray-600 transition-colors">
                    {paper.title}
                  </h3>
                </div>
                <div className="shrink-0 mt-4 md:mt-0">
                  <Link
                    href={paper.zenodoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#141413] hover:text-[#C04A2B] transition-colors"
                  >
                    Read Paper <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
