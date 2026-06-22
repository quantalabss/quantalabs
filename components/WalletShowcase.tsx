"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function WalletShowcase() {
  return (
    <section className="py-24 bg-gray-50 text-black border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col border border-gray-200 shadow-sm bg-white overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-gray-200">
            {/* Visual Column */}
            <div className="lg:col-span-6 bg-gray-100 border-b lg:border-b-0 lg:border-r border-gray-200 relative overflow-hidden min-h-[400px] flex items-center justify-center p-8">
              
              {/* Math graph paper background */}
              <div 
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)`,
                  backgroundSize: "40px 40px"
                }}
              ></div>

              <div className="relative z-10 w-full max-w-sm">
                 <div className="bg-white border border-gray-200 shadow-xl rounded-lg overflow-hidden">
                    <div className="border-b border-gray-100 bg-gray-50 px-4 py-3 flex justify-between items-center">
                      <div className="font-mono text-[10px] font-bold text-gray-400">QUANTA WALLET // BETA</div>
                      <div className="flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-red-400"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="text-center mb-6">
                        <div className="text-3xl font-black tracking-tight text-black">$142,050.00</div>
                        <div className="text-xs font-mono text-gray-500 mt-1 uppercase">PQC Secured Vault</div>
                      </div>
                      
                      <div className="space-y-3 mb-6">
                        <div className="border border-gray-100 bg-gray-50 rounded p-3 flex justify-between items-center">
                          <span className="font-mono text-xs font-bold text-gray-600">Send BTC</span>
                          <ArrowUpRight className="w-4 h-4 text-gray-400" />
                        </div>
                        <div className="border border-gray-100 bg-gray-50 rounded p-3 flex justify-between items-center">
                          <span className="font-mono text-xs font-bold text-gray-600">Receive Asset</span>
                          <ArrowUpRight className="w-4 h-4 text-gray-400" />
                        </div>
                      </div>

                      <div className="flex items-center gap-2 justify-center pt-4 border-t border-gray-100">
                        <div className="w-2 h-2 rounded-full bg-[#C4ED5F] animate-pulse"></div>
                        <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-black">
                          ML-DSA Signature Ready
                        </span>
                      </div>
                    </div>
                 </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 p-10 md:p-16 flex flex-col justify-center bg-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-[#C4ED5F]"></div>
                <span className="font-mono text-[10px] tracking-[0.2em] text-gray-500 uppercase font-bold">
                  Custody Solutions
                </span>
              </div>

              <h2 className="text-[2.5rem] md:text-[3.5rem] font-black tracking-tighter leading-[0.95] text-black mb-6">
                The world&apos;s first quantum-safe wallet.
              </h2>
              
              <p className="text-base text-gray-600 leading-relaxed font-medium mb-10">
                Current crypto wallets rely on ECDSA or EdDSA, which are mathematically broken by Shor's algorithm. Our reference wallet implementation demonstrates how to securely manage assets using ML-DSA (Dilithium) signatures without sacrificing user experience.
              </p>

              <div className="space-y-6 border-t border-gray-200 pt-8 mb-10">
                <div className="flex items-start gap-4">
                  <div className="font-mono font-bold text-xs text-gray-400 mt-1 w-6">01</div>
                  <div>
                    <h4 className="font-bold text-black text-sm mb-1">Stateful Hash-Based Signatures</h4>
                    <p className="text-xs text-gray-500">Integration with XMSS/LMS for absolute long-term storage security.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="font-mono font-bold text-xs text-gray-400 mt-1 w-6">02</div>
                  <div>
                    <h4 className="font-bold text-black text-sm mb-1">PQC Hardware Integration</h4>
                    <p className="text-xs text-gray-500">Compatible with next-generation smart cards and secure enclaves.</p>
                  </div>
                </div>
              </div>

              <div className="mt-auto">
                <a
                  href="#"
                  className="group flex items-center justify-between px-6 py-4 border border-gray-200 text-black font-bold text-xs uppercase tracking-widest hover:border-black transition-colors w-max min-w-[250px] bg-gray-50/50 hover:bg-white"
                >
                  <span>Request Alpha Access</span>
                  <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-black transition-colors" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
