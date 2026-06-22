import { Metadata } from "next";
import { ArrowUpRight, Cpu, Network, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "Falcon-Multisig | QuantaLabs",
  description: "Production-grade threshold multisig library using Falcon-512.",
};

export default function FalconMultisigPage() {
  return (
    <div className="bg-white min-h-screen pt-28 pb-24 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header */}
        <div className="border border-gray-200 shadow-sm bg-white mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-8 p-10 md:p-16 border-b lg:border-b-0 lg:border-r border-gray-200 bg-gray-50/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-black"></div>
                <span className="font-mono text-[10px] tracking-[0.2em] text-gray-500 uppercase font-bold">
                  Ecosystem // Libraries
                </span>
              </div>
              <h1 className="text-[3rem] md:text-[5rem] font-black tracking-tighter leading-[0.95] text-black">
                <span className="text-[#C4ED5F]">Falcon-</span><span className="relative inline-block mt-1">Multisig.<span className="absolute bottom-1 left-0 w-full h-[6px] bg-[#C4ED5F] -z-10"></span></span>
              </h1>
            </div>

            <div className="lg:col-span-4 p-10 flex flex-col justify-end bg-black text-white relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
                  backgroundSize: "20px 20px"
                }}
              ></div>
              <span className="absolute top-8 right-8 text-[6rem] font-black text-[#C4ED5F]/10 leading-none select-none">⊕</span>
              <p className="text-sm text-gray-300 font-medium relative z-10">
                A production-grade post-quantum threshold multisignature library using Falcon-512 (NIST FIPS 206 / FN-DSA). Extracted directly from QuantaChain's consensus layer.
              </p>
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="border border-gray-200 shadow-sm bg-white overflow-hidden mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="p-8">
              <Network className="w-6 h-6 mb-4 text-[#C4ED5F]" />
              <h3 className="font-bold text-lg mb-2">Chain-Agnostic</h3>
              <p className="text-sm text-gray-600">No dependency on any blockchain runtime, EVM, or specific transaction format. Integrate it into any protocol requiring threshold authorization.</p>
            </div>
            <div className="p-8">
              <Cpu className="w-6 h-6 mb-4 text-black" />
              <h3 className="font-bold text-lg mb-2">WASM Compatible</h3>
              <p className="text-sm text-gray-600">Uses <code className="text-xs font-mono bg-gray-100 p-1">falcon-rust</code> (pure Rust, no C FFI). Runs perfectly in browsers and constrained embedded targets.</p>
            </div>
            <div className="p-8">
              <ShieldAlert className="w-6 h-6 mb-4 text-black" />
              <h3 className="font-bold text-lg mb-2">Misuse Resistant</h3>
              <p className="text-sm text-gray-600">Domain separation applied to all signed data internally. All secret keys are forcefully zeroized on drop via the zeroize crate.</p>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 shadow-sm bg-black p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="font-mono text-sm text-[#C4ED5F] bg-gray-900 px-6 py-4 border border-gray-800 w-full sm:w-auto">
            cargo add falcon-multisig
          </div>
          <div className="flex gap-4 w-full sm:w-auto">
            <a href="https://crates.io/crates/falcon-multisig" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-[#C4ED5F] transition-colors w-full text-center">
              View on Crates.io
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
