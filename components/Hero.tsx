"use client";
// CHANGED: Implemented light-mode minimal terminal/code block and animated ASCII wave art.
// DATE: 2026-08-07 | VERSION: 4.4
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const staticAsciiArt = (() => {
  const rows = 28;
  const cols = 64;
  let art = "";
  const chars = [" ", ".", ":", "-", "=", "+", "*", "#", "%", "@"];
  
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
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
  const [art, setArt] = useState(staticAsciiArt);

  useEffect(() => {
    let t = 0;
    let animId: number;
    let lastTime = 0;
    const targetFps = 14; // Smooth, slow cinematic terminal frame rate
    const frameInterval = 1000 / targetFps;
    const rows = 28;
    const cols = 64;
    const chars = [" ", ".", ":", "-", "=", "+", "*", "#", "%", "@"];
    const charsLenMinusOne = chars.length - 1;

    const animate = (currentTime: number) => {
      animId = requestAnimationFrame(animate);

      if (currentTime - lastTime < frameInterval) return;
      lastTime = currentTime;

      // Slow, mesmerizing progression
      t += 0.035;

      let result = "";
      for (let y = 0; y < rows; y++) {
        const ny = y * 0.18;
        for (let x = 0; x < cols; x++) {
          const nx = x * 0.12;

          const wave1 = Math.sin(nx + ny + t);
          const wave2 = Math.cos(nx * 0.5 - ny + t * 0.65);
          const wave3 = Math.sin(x * 0.05 + ny * 0.08 + t * 0.35);

          const value = (wave1 + wave2 + wave3) / 3;
          const normalized = Math.floor(((value + 1) / 2) * charsLenMinusOne);
          const charIndex = Math.max(0, Math.min(charsLenMinusOne, normalized));

          result += chars[charIndex];
        }
        result += "\n";
      }

      setArt(result);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <pre className="font-mono text-[9px] leading-[9px] sm:text-[10px] sm:leading-[10px] md:text-[11px] md:leading-[11px] lg:text-[12px] lg:leading-[12.5px] text-[#C04A2B] font-bold tracking-widest whitespace-pre opacity-90 select-none">
      {art}
    </pre>
  );
}

export default function Hero() {
  return (
    <section className="relative bg-transparent text-[#141413] pt-32 pb-24 overflow-hidden font-sans">
      {/* Structural Grid Background - Deep Tech Light Mode */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-14">

          {/* Left: Headline & Copy */}
          <div className="w-full lg:w-[55%] text-center lg:text-left flex flex-col items-center lg:items-start">
            {/* R2P Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#FAF9F5] border border-[#e8e6dc] rounded-full text-[11px] font-mono uppercase tracking-widest text-[#C04A2B] font-semibold mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C04A2B] animate-pulse"></span>
              Research-to-Product (R2P) &bull; Deep-Tech Lab
            </div>

            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-medium tracking-tight text-[#141413] mb-6 leading-tight">
                Frontier Research <span className="text-[#C04A2B]">to</span> Production Systems<span className="text-[#C04A2B]">.</span>
              </h1>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed font-normal max-w-2xl mb-10">
              Quantalabs is a frontier <strong className="text-[#141413] font-semibold">Research-to-Product (R2P) deep-tech lab</strong>. Our core edge is closing the gap between fundamental scientific breakthroughs and real-world industrial deployment — taking cutting-edge research across <strong className="text-[#141413] font-semibold">post-quantum cryptography</strong>, <strong className="text-[#141413] font-semibold">autonomous AI agent execution</strong>, and <strong className="text-[#141413] font-semibold">atomistic materials discovery</strong> straight from the lab into scalable production-grade products and physical technologies.
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

          {/* Right: ASCII Art Container (Enlarged) */}
          <div className="w-full lg:w-[45%] flex justify-center lg:justify-end">
            <div className="w-full max-w-lg aspect-[4/3] bg-[#141413] border border-[#C04A2B] shadow-md p-5 sm:p-6 relative overflow-hidden group transition-colors flex items-center justify-center">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>
              <div className="absolute top-0 right-0 w-1.5 h-full bg-[#C04A2B]"></div>
              
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
