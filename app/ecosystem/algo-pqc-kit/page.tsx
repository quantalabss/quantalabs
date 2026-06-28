import { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Algo-PQC-Kit | QuantaLabs",
  description: "Algorand Post-Quantum Vault Toolkit using Falcon-1024.",
};

export default function AlgoPqcKitPage() {
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
                  Ecosystem // L1 Tools
                </span>
              </div>
              <h1 className="text-[3rem] md:text-[5rem] font-black tracking-tighter leading-[0.95] text-black">
                <span className="text-[#C4ED5F]">Algo-</span>
                <span className="relative inline-block mt-1">
                  PQC-Kit.
                  <span className="absolute bottom-1 left-0 w-full h-[6px] bg-[#C4ED5F] -z-10"></span>
                </span>
              </h1>
            </div>

            <div className="lg:col-span-4 p-10 flex flex-col justify-end bg-black text-white relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
                  backgroundSize: "20px 20px",
                }}
              ></div>
              <span className="absolute top-8 right-8 text-[6rem] font-black text-[#C4ED5F]/10 leading-none select-none">
                ∑
              </span>
              <p className="text-sm text-gray-300 font-medium relative z-10">
                Algorand&apos;s AVM v12 introduced the{" "}
                <code className="bg-gray-100 px-1 font-mono text-xs">
                  falcon_verify
                </code>{" "}
                opcode. This toolkit makes it usable for developers. Build
                M-of-N Post-Quantum Treasuries and DAOs natively on Algorand.
              </p>
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white overflow-hidden mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="p-8">
              <span className="font-serif text-3xl text-black group-hover:text-[#C4ED5F] transition-colors mb-4 relative z-10 leading-none inline-block">
                Σ
              </span>
              <h3 className="font-bold text-lg mb-2">Puya Smart Contracts</h3>
              <p className="text-sm text-gray-600">
                Includes FalconVault (M-of-N treasury), FalconLsig, and PQCDao
                for governance with timelocks and voting periods.
              </p>
            </div>
            <div className="p-8">
              <span className="font-serif text-3xl text-black group-hover:text-[#C4ED5F] transition-colors mb-4 relative z-10 leading-none inline-block">
                Ω
              </span>
              <h3 className="font-bold text-lg mb-2">Python SDK</h3>
              <p className="text-sm text-gray-600">
                Generate Falcon-1024 keys, derive addresses, and facilitate
                co-signing sessions without touching Ed25519.
              </p>
            </div>
            <div className="p-8">
              <span className="font-serif text-3xl text-black group-hover:text-[#C4ED5F] transition-colors mb-4 relative z-10 leading-none inline-block">
                ⨂
              </span>
              <h3 className="font-bold text-lg mb-2">Multi-Tx Box Storage</h3>
              <p className="text-sm text-gray-600">
                Bypasses AVM application arg limits using a multi-transaction
                session pattern to write 1793-byte keys to Box Storage.
              </p>
            </div>
          </div>
        </div>

        <div className="border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-black text-white p-10 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="font-bold text-white mb-2">
              AlgoKit Copier Template
            </h3>
            <p className="text-sm text-gray-400 font-mono">
              algokit init -t
              https://github.com/quantalabss/algokit-pqc-vault-template
            </p>
          </div>
          <a
            href="#"
            className="px-8 py-4 bg-[#C4ED5F] border-2 border-transparent text-black font-bold text-xs uppercase tracking-widest hover:bg-white hover:border-black transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] md:shadow-none flex items-center gap-2 whitespace-nowrap"
          >
            View Source on GitHub
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
