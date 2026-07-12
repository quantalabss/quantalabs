import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const RPC_URL = "https://rpc.quantachain.org";

async function fetchStats() {
  try {
    const res = await fetch(`${RPC_URL}/api/stats`, {
      next: { revalidate: 30 },
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export default async function Hero() {
  const stats = await fetchStats();
  const chainLength = stats?.chain_length ?? null;

  return (
    <section className="relative bg-white text-black pt-28 pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white overflow-hidden">
          {/* HEADLINE + VISUAL ROW */}
          <div className="grid grid-cols-1 lg:grid-cols-12 border-b-2 border-black">
            {/* Left: Headline */}
            <div className="lg:col-span-8 px-8 py-10 md:py-14 flex flex-col justify-center border-b-2 lg:border-b-0 lg:border-r-2 border-black bg-white">
              <h1 className="text-[2.8rem] sm:text-[3.8rem] md:text-[4.8rem] font-extrabold tracking-tighter leading-[0.93] text-black mb-4">
                We migrate your
                <br />
                crypto stack
                <br />
                <span className="relative inline-block mt-1">
                  to PQC.
                  <span className="absolute bottom-1 left-0 w-full h-[5px] bg-[#C4ED5F] -z-10"></span>
                </span>
              </h1>
              <p className="text-sm text-gray-500 leading-relaxed font-medium max-w-lg">
                We audit your cryptographic stack and migrate it to{" "}
                <strong className="text-black">
                  NIST-finalized ML-KEM & ML-DSA
                </strong>{" "}
                before India DST&apos;s FY 2027-28 mandate.
              </p>
            </div>

            {/* Right: Accent Visual — compact */}
            <div className="lg:col-span-4 relative bg-[#C4ED5F] flex flex-col items-center justify-center p-6 overflow-hidden min-h-[220px]">
              <div
                className="absolute inset-0 opacity-40 pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.15) 1px, transparent 1px)`,
                  backgroundSize: "24px 24px",
                }}
              ></div>
              <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
                <span className="text-[7rem] font-black text-black leading-none select-none mb-8 tracking-tighter">
                  ∑
                </span>
                <div className="w-full bg-white/90 border-2 border-black p-3 font-mono text-[10px] text-gray-500">
                  <div className="flex justify-between border-b border-gray-100 pb-1.5 mb-1.5">
                    <span>Algorithm</span>
                    <span className="text-black font-bold">ML-KEM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Target</span>
                    <span className="text-black font-bold">FIPS 203</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM ROW: Live Stats + CTAs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 bg-white">
            {/* Live chain stats */}
            <div className="lg:col-span-8 px-8 py-4 border-b-2 lg:border-b-0 lg:border-r-2 border-black flex items-center gap-6 md:gap-8 bg-gray-50/50">
              <div>
                <div className="text-lg font-black tracking-tight text-black leading-none mb-0.5">
                  {chainLength !== null ? chainLength.toLocaleString() : "—"}
                </div>
                <div className="text-[9px] font-mono text-gray-400 uppercase tracking-widest">
                  Chain Height
                </div>
              </div>
              <div className="w-px h-6 bg-gray-200 shrink-0 hidden sm:block"></div>
              <div>
                <div className="text-lg font-black tracking-tight text-black leading-none mb-0.5">
                  15+
                </div>
                <div className="text-[9px] font-mono text-gray-400 uppercase tracking-widest">
                  Active Projects
                </div>
              </div>
              <div className="w-px h-6 bg-gray-200 shrink-0 hidden sm:block"></div>
              <div>
                <div className="text-lg font-black tracking-tight text-black leading-none mb-0.5">
                  10+
                </div>
                <div className="text-[9px] font-mono text-gray-400 uppercase tracking-widest">
                  Published Packages
                </div>
              </div>
              <div className="w-px h-6 bg-gray-200 shrink-0 hidden sm:block"></div>
              <div>
                <div className="text-lg font-black tracking-tight text-black leading-none mb-0.5">
                  3
                </div>
                <div className="text-[9px] font-mono text-gray-400 uppercase tracking-widest">
                  Published Papers
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="lg:col-span-4 p-3 flex flex-col gap-2 bg-white justify-center">
              <Link
                href="/contact"
                className="group flex items-center justify-between w-full px-6 py-3.5 bg-black text-white font-bold hover:bg-gray-900 transition-colors text-xs uppercase tracking-widest border-2 border-transparent hover:border-[#C4ED5F] shadow-[4px_4px_0px_0px_rgba(196,237,95,1)]"
              >
                <span>Get CBOM Audit</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="https://quantacipher.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between w-full px-6 py-3.5 border-2 border-black text-black font-bold hover:bg-gray-100 transition-colors text-xs uppercase tracking-widest"
              >
                <span>Explore Solutions</span>
                <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-black transition-colors" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
