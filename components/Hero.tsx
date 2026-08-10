"use client";
// CHANGED: Implemented light-mode minimal terminal/code block and simplified title.
// DATE: 2026-08-07 | VERSION: 4.3
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const staticAsciiArt = (() => {
  const rows = 28;
  const cols = 64;
  let art = "";
  const chars = [" ", ".", ":", "-", "=", "+", "*", "#", "%", "@"];
  
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      // Flowing topographic waves / data stream (no central blob)
      const nx = x * 0.12;
      const ny = y * 0.18;
      
      const wave1 = Math.sin(nx + ny);
      const wave2 = Math.cos(nx * 0.5 - ny);
      const wave3 = Math.sin(x * 0.05);
      
      const value = (wave1 + wave2 + wave3) / 3;
      
      const normalized = Math.floor(((value + 1) / 2) * (chars.length - 1));
      const charIndex = Math.max(0, Math.min(chars.length - 1, normalized));
      
      art += chars[charIndex];
    }
    art += "\n";
  }
  return art;
})();

function AsciiWaveArt() {
  return (
    <pre className="font-mono text-[9px] leading-[9px] md:text-[11px] md:leading-[11px] text-[#C04A2B] font-bold tracking-widest whitespace-pre opacity-90 select-none">
      {staticAsciiArt}
    </pre>
  );
}

export default function Hero() {
  return (
    <section className="relative bg-transparent text-[#141413] pt-32 pb-24 overflow-hidden font-sans">
      {/* Structural Grid Background - Deep Tech Light Mode */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Left: Headline & Copy */}
          <div className="w-full lg:w-3/5 text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="h-8 mb-8">
              {/* Spacer to keep original layout height */}
            </div>
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight text-[#141413] mb-8 leading-[1.1]">
                AI Engineering <span className="text-[#C04A2B]">&amp;</span><br />
                <span className="text-gray-400">Quantum Security.</span>
              </h1>
            </div>

            <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-normal max-w-2xl mb-10">
              Quantalabs operates two dedicated engineering practices: <strong className="text-black font-medium">autonomous AI workflows</strong> and <strong className="text-black font-medium">post-quantum cryptographic migrations</strong>. Elite infrastructure for the enterprise layer.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                href="/contact"
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-[#C04A2B] text-white font-mono text-xs uppercase tracking-widest hover:bg-[#141413] transition-all shadow-md"
              >
                <span>Automate Now</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/services"
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-[#141413] border border-[#141413] font-mono text-xs uppercase tracking-widest hover:bg-[#141413] hover:text-white transition-all shadow-sm"
              >
                <span>Explore Services</span>
              </Link>
            </div>
          </div>

          {/* Right: ASCII Art Container */}
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md aspect-[4/3] bg-[#141413] border border-[#C04A2B] shadow-sm p-4 relative overflow-hidden group transition-colors flex items-center justify-center">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>
              <div className="absolute top-0 right-0 w-1 h-full bg-[#C04A2B]"></div>
              
              <div className="relative z-10 overflow-hidden w-full h-full flex items-center justify-center bg-transparent">
                <AsciiWaveArt />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
