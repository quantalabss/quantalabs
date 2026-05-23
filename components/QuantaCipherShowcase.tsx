"use client";

import { Download, Shield, Key, Server, Lock, ShieldCheck, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function QuantaCipherShowcase() {
  const features = [
    { icon: Shield, title: "NIST Kyber-1024", desc: "Enterprise-grade post-quantum key encapsulation for secure transit.", tag: "NIST Standard" },
    { icon: Server, title: "Zero-Trust Architecture", desc: "We never see your plaintext data or private keys. End-to-end encryption via WASM.", tag: "Zero-Trust" },
    { icon: Lock, title: "Hybrid Cryptography", desc: "Combines ECC and Kyber for defense-in-depth security against classical and quantum threats.", tag: "FIPS Compliant" },
    { icon: Key, title: "Developer APIs", desc: "Drop-in SDKs for Node.js, Python, and Browser. Secure your data in 15 minutes.", tag: "Developer First" },
  ];

  return (
    <section className="py-24 md:py-32 bg-gray-50 text-black relative border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Copy */}
          <div className="flex flex-col animate-fade-in order-2 lg:order-1">
            <div className="flex items-center space-x-3 mb-4">
              <ShieldCheck className="w-5 h-5 text-[#00E599]" />
              <span className="font-bold tracking-widest text-xs uppercase text-gray-400">First-Party Products</span>
            </div>
            
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#00E599]/10 border border-[#00E599]/20 w-fit mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E599] animate-pulse"></span>
              <span className="text-[10px] font-black text-[#00E599] uppercase tracking-wider">Enterprise API Gateway</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-6 leading-tight text-black">
              QuantaCipher
            </h2>

            <p className="text-xl md:text-2xl font-bold text-gray-700 mb-6 leading-relaxed">
              Zero-Trust Post-Quantum Security for your Applications.
            </p>

            <p className="text-lg text-gray-500 mb-8 leading-relaxed font-medium">
              Protect your enterprise applications from &quot;Store Now, Decrypt Later&quot; attacks. QuantaCipher provides a fully managed, zero-trust API gateway secured by NIST&apos;s ML-KEM (Kyber-1024) standard. 
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link 
                href="http://localhost:3000" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center space-x-3 px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-[#00E599] hover:text-black transition-all hover:scale-105 active:scale-95 shadow-lg shadow-black/10"
              >
                <span>Visit QuantaCipher</span>
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
               {features.map((opt, i) => {
                 const Icon = opt.icon;
                 return (
                   <div key={i} className="flex flex-col space-y-3">
                     <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#00E599]/5 border-2 border-[#00E599] text-[#00E599] transition-all">
                       <Icon className="w-5 h-5" />
                     </div>
                     <div className="flex items-center space-x-2">
                        <h4 className="font-bold text-black text-sm">{opt.title}</h4>
                        {opt.tag && (
                          <span className="text-[8px] font-black px-1.5 py-0.5 rounded-sm bg-[#00E599] text-black uppercase tracking-tighter">{opt.tag}</span>
                        )}
                     </div>
                     <p className="text-xs text-gray-500 font-medium leading-relaxed">{opt.desc}</p>
                   </div>
                 )
               })}
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="relative lg:h-[700px] w-full flex items-center justify-center animate-fade-in order-1 lg:order-2">
             <div className="relative w-full max-w-md bg-white rounded-2xl border border-gray-200 shadow-2xl p-8 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#00E599]"></div>
                
                <div className="flex items-center justify-between mb-8">
                    <div className="font-bold text-xl tracking-tighter">QuantaCipher</div>
                    <div className="px-2 py-1 bg-gray-100 rounded text-xs font-mono text-gray-500">v1.0.0</div>
                </div>

                <div className="space-y-6">
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                        <div className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-2">API Keys</div>
                        <div className="flex items-center justify-between">
                            <span className="font-mono text-sm font-bold text-gray-700">qz_live_8f9...2b1a</span>
                            <span className="px-2 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded">ACTIVE</span>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                        <div className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-2">Usage</div>
                        <div className="flex justify-between items-end mb-2">
                            <span className="text-2xl font-bold text-black">12.4M</span>
                            <span className="text-xs font-bold text-gray-400 uppercase">Requests</span>
                        </div>
                        <div className="w-full bg-gray-200 h-1.5 rounded-full">
                            <div className="bg-[#00E599] h-1.5 rounded-full w-3/4"></div>
                        </div>
                    </div>

                    <div className="bg-gray-900 text-gray-300 p-4 rounded-xl font-mono text-xs overflow-x-auto shadow-inner">
                        <div className="text-[#00E599] mb-2">// Secure payload</div>
                        <div><span className="text-pink-400">const</span> encrypted <span className="text-pink-400">=</span> <span className="text-blue-400">await</span> qc.encrypt(&#123;</div>
                        <div className="pl-4">data: <span className="text-yellow-300">&apos;sensitive_record&apos;</span></div>
                        <div>&#125;);</div>
                    </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
