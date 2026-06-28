import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "QuaScan Explorer | QuantaLabs",
  description: "Official high-performance block explorer for QuantaChain.",
};

export default function QuaScanPage() {
  return (
    <div className="bg-white min-h-screen pt-28 pb-24 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-8 p-10 md:p-16 border-b-2 lg:border-b-0 lg:border-r-2 border-black bg-gray-50/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-black"></div>
                <span className="font-mono text-[10px] tracking-[0.2em] text-gray-500 uppercase font-bold">
                  Ecosystem // Explorer
                </span>
              </div>
              <h1 className="text-[3rem] md:text-[5rem] font-black tracking-tighter leading-[0.95] text-black">
                <span className="text-[#C4ED5F]">Qua</span>
                <span className="relative inline-block mt-1">
                  Scan.
                  <span className="absolute bottom-1 left-0 w-full h-[6px] bg-[#C4ED5F] -z-10"></span>
                </span>
              </h1>
            </div>

            <div className="lg:col-span-4 p-10 flex flex-col justify-end bg-[#C4ED5F] relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.15] pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)`,
                  backgroundSize: "20px 20px",
                }}
              ></div>
              <span className="absolute top-8 right-8 text-[6rem] font-black text-black/10 leading-none select-none">
                ∏
              </span>
              <p className="text-sm text-black font-medium relative z-10">
                QuaScan is the official, high-performance block explorer for the
                Quanta post-quantum blockchain ecosystem. Built with Next.js and
                MongoDB.
              </p>
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white overflow-hidden mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="p-8">
              <span className="font-serif text-3xl text-black group-hover:text-[#C4ED5F] transition-colors mb-4 relative z-10 leading-none inline-block">
                ⚙
              </span>
              <h3 className="font-bold text-lg mb-2">Deep Block Inspection</h3>
              <p className="text-sm text-gray-600">
                Track transactions from mempool to confirmation. View full
                cryptographic details including raw Falcon-512 public keys.
              </p>
            </div>
            <div className="p-8">
              <span className="font-serif text-3xl text-black group-hover:text-[#C4ED5F] transition-colors mb-4 relative z-10 leading-none inline-block">
                ⬡
              </span>
              <h3 className="font-bold text-lg mb-2">Real-Time Metrics</h3>
              <p className="text-sm text-gray-600">
                Live tracking of chain height, network hashrate, total supply,
                and mining difficulty without querying RPC.
              </p>
            </div>
            <div className="p-8">
              <span className="font-serif text-3xl text-black group-hover:text-[#C4ED5F] transition-colors mb-4 relative z-10 leading-none inline-block">
                ⇌
              </span>
              <h3 className="font-bold text-lg mb-2">Idempotent Sync</h3>
              <p className="text-sm text-gray-600">
                Powered by a Rust-based indexer daemon that continually
                synchronizes RPC state directly into a high-speed MongoDB
                instance.
              </p>
            </div>
          </div>
        </div>

        {/* Architectural Callout */}
        <div className="border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-[#C4ED5F] flex flex-col md:flex-row items-center justify-between p-10">
          <div className="mb-6 md:mb-0">
            <h3 className="font-bold text-black mb-2">
              Lightning Fast. DDoS Resilient.
            </h3>
            <p className="text-sm text-black/80 max-w-xl">
              QuaScan does not fetch block data directly from the blockchain RPC
              in real-time. By reading purely from its MongoDB instance, we
              ensure immediate page loads and mitigate node DDoS vectors.
            </p>
          </div>
          <a
            href="#"
            className="px-8 py-4 bg-[#C4ED5F] border-2 border-transparent text-black font-bold text-xs uppercase tracking-widest hover:bg-white hover:border-black transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] md:shadow-none flex items-center gap-2 whitespace-nowrap"
          >
            Launch Explorer
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
