import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "QuantaCipher SDK | QuantaLabs",
  description: "Zero-Trust Post-Quantum Cryptography SDK for the Enterprise.",
};

export default function QuantaCipherPage() {
  return (
    <div className="bg-white min-h-screen pt-28 pb-24 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-8 p-10 md:p-16 border-b-2 lg:border-b-0 lg:border-r-2 border-black bg-gray-50/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-[#C4ED5F]"></div>
                <span className="font-mono text-[10px] tracking-[0.2em] text-gray-500 uppercase font-bold">
                  Ecosystem // SDK
                </span>
              </div>
              <h1 className="text-[3rem] md:text-[5rem] font-black tracking-tighter leading-[0.95] text-black">
                <span className="text-[#C4ED5F]">Quanta</span>
                <span className="relative inline-block mt-1">
                  Cipher.
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
              <p className="text-sm text-black font-medium relative z-10">
                Zero-Trust Post-Quantum Cryptography (PQC) SDK for the
                Enterprise. Built on top of the NIST-standardized Kyber
                algorithm to protect your infrastructure against &quot;Store
                Now, Decrypt Later&quot; attacks.
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
              <h3 className="font-bold text-lg mb-2">Quantum-Resistant</h3>
              <p className="text-sm text-gray-600">
                Uses FIPS-standardized Kyber key encapsulation mechanisms.
              </p>
            </div>
            <div className="p-8">
              <span className="font-serif text-3xl text-black group-hover:text-[#C4ED5F] transition-colors mb-4 relative z-10 leading-none inline-block">
                Ω
              </span>
              <h3 className="font-bold text-lg mb-2">Zero-Trust</h3>
              <p className="text-sm text-gray-600">
                Keys are generated and retained client-side; only encrypted
                payloads touch the network.
              </p>
            </div>
            <div className="p-8">
              <span className="font-serif text-3xl text-black group-hover:text-[#C4ED5F] transition-colors mb-4 relative z-10 leading-none inline-block">
                ⨂
              </span>
              <h3 className="font-bold text-lg mb-2">Cross-Platform</h3>
              <p className="text-sm text-gray-600">
                Compile once in Rust, use flawlessly in JS/TS and Python.
              </p>
            </div>
          </div>
        </div>

        {/* Code Example */}
        <div className="border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-black text-white overflow-hidden">
          <div className="px-8 py-4 border-b border-gray-800 flex justify-between items-center bg-black">
            <span className="font-mono text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              Quickstart (Node.js)
            </span>
            <span className="flex gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-gray-700"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-gray-700"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-gray-700"></span>
            </span>
          </div>
          <div className="p-8 font-mono text-sm leading-relaxed overflow-x-auto text-gray-300">
            <pre>
              <code>{`import { QuantaCipher } from 'quantacipher-sdk';

const sdk = new QuantaCipher({ apiKey: 'your_api_key' });
const keys = sdk.generateKeypair();

const ciphertext = sdk.encryptSecure("Top Secret Data", keys.publicKey);
const plaintext = sdk.decryptSecure(ciphertext, keys.privateKey);`}</code>
            </pre>
          </div>
          <div className="p-8 border-t border-gray-800 bg-black flex justify-between items-center">
            <span className="text-sm text-gray-400 font-medium">
              Also available for Python via pip install quantacipher
            </span>
            <a
              href="https://quantacipher.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-[#C4ED5F] text-black font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors"
            >
              Access Enterprise API
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
