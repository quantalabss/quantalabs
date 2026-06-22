"use client";

import { ArrowUpRight, FileText } from "lucide-react";
import Link from "next/link";

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
    },
  ];

  return (
    <section className="py-24 bg-gray-50 text-black border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col border border-gray-200 shadow-sm bg-white overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-gray-200">
            <div className="lg:col-span-4 p-10 border-b lg:border-b-0 lg:border-r border-black/10 flex flex-col justify-between bg-[#C4ED5F] relative">
              <div 
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.15) 1px, transparent 1px)`,
                  backgroundSize: "24px 24px"
                }}
              ></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-2 bg-black"></div>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-black/60 uppercase font-bold">
                    Applied Research
                  </span>
                </div>
                <h2 className="text-3xl font-black tracking-tight text-black mb-4">
                  From theory<br />
                  to production.
                </h2>
                <p className="text-sm text-black/70 font-medium leading-relaxed mb-8">
                  Our protocol engineering team regularly publishes findings on lattice-based cryptography, ZKPs, and secure migration strategies.
                </p>
              </div>
              <Link
                href="/research"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#C4ED5F] text-black font-bold text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-colors w-max"
              >
                <span>View All Papers</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="lg:col-span-8 bg-gray-50/50">
              <div className="flex flex-col h-full">
                {papers.map((paper, index) => (
                  <a
                    href={paper.zenodoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={paper.id}
                    className={`group flex flex-col sm:flex-row sm:items-center justify-between p-6 md:p-8 hover:bg-white transition-colors ${
                      index !== papers.length - 1 ? 'border-b border-gray-200' : ''
                    }`}
                  >
                    <div className="flex items-start gap-6 mb-4 sm:mb-0">
                      <div className="hidden sm:flex mt-1">
                        <FileText className="w-6 h-6 text-gray-300 group-hover:text-black transition-colors" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-mono text-[9px] font-bold text-gray-400 group-hover:text-black transition-colors">
                            {paper.id}
                          </span>
                          <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-black bg-gray-200 px-1.5 py-0.5">
                            {paper.type}
                          </span>
                        </div>
                        <h3 className="text-base font-bold text-black group-hover:text-[#8ab329] transition-colors max-w-xl">
                          {paper.title}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between sm:justify-end gap-6 sm:w-auto w-full border-t sm:border-t-0 border-gray-200 pt-4 sm:pt-0">
                      <span className="font-mono text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                        {paper.date}
                      </span>
                      <div className="w-8 h-8 border border-gray-200 rounded flex items-center justify-center group-hover:bg-[#C4ED5F] group-hover:border-[#C4ED5F] transition-colors">
                        <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-black transition-colors" />
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
