import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Quanta Wallet | QuantaLabs",
  description: "Post-quantum browser extension wallet for QuantaChain.",
};

export default function QuantaWalletPage() {
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
                  Ecosystem // Web3
                </span>
              </div>
              <h1 className="text-[3rem] md:text-[5rem] font-black tracking-tighter leading-[0.95] text-black">
                <span className="text-[#C4ED5F]">Quanta</span>{" "}
                <span className="relative inline-block mt-1">
                  Wallet.
                  <span className="absolute bottom-1 left-0 w-full h-[6px] bg-[#C4ED5F] -z-10"></span>
                </span>
              </h1>
            </div>

            <div className="lg:col-span-4 p-10 flex flex-col justify-end bg-black relative overflow-hidden text-white">
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
                  backgroundSize: "20px 20px",
                }}
              ></div>
              <span className="absolute top-8 right-8 text-[6rem] font-black text-white/5 leading-none select-none">
                λ
              </span>
              <p className="text-sm font-medium relative z-10">
                A post-quantum browser extension wallet for QuantaChain (QUA).
                Built on the NIST-standardised Falcon-512 signature scheme,
                compiled to WebAssembly via Rust.
              </p>
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white overflow-hidden mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="p-8">
              <span className="font-serif text-3xl text-black group-hover:text-[#C4ED5F] transition-colors mb-4 relative z-10 leading-none inline-block">
                ∫
              </span>
              <h3 className="font-bold text-lg mb-2">Falcon-512 Native</h3>
              <p className="text-sm text-gray-600">
                No classical elliptic-curve cryptography is used anywhere in the
                signing path. PQC Level 5 compliance.
              </p>
            </div>
            <div className="p-8">
              <span className="font-serif text-3xl text-black group-hover:text-[#C4ED5F] transition-colors mb-4 relative z-10 leading-none inline-block">
                ∬
              </span>
              <h3 className="font-bold text-lg mb-2">
                Deterministic HD Derivation
              </h3>
              <p className="text-sm text-gray-600">
                BIP-39 24-word mnemonic with deterministic Falcon-512 key
                derivation and AES-GCM local storage.
              </p>
            </div>
            <div className="p-8">
              <span className="font-serif text-3xl text-black group-hover:text-[#C4ED5F] transition-colors mb-4 relative z-10 leading-none inline-block">
                ⨀
              </span>
              <h3 className="font-bold text-lg mb-2">dApp RPC API</h3>
              <p className="text-sm text-gray-600">
                Interact with dApps via window.quanta to connect, sign
                transactions, and authorize messages securely.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Callout */}
        <div className="border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-gray-50 flex flex-col md:flex-row items-center justify-between p-10">
          <div className="mb-6 md:mb-0">
            <h3 className="font-bold text-black mb-2">Compiled via WASM</h3>
            <p className="text-sm text-gray-600 max-w-xl">
              Key generation and signing use the falcon-rust pure-Rust
              implementation of Falcon-512. This is the same library used by the
              QuantaChain node, ensuring byte-identical signature output across
              all signing paths.
            </p>
          </div>
          <a
            href="#"
            className="px-8 py-4 bg-black text-white font-bold text-xs uppercase tracking-widest hover:bg-[#C4ED5F] hover:text-black transition-colors flex items-center gap-2 whitespace-nowrap"
          >
            View Source on GitHub
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
