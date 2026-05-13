"use client";

import { Landmark, ShieldCheck, Cpu, FlaskConical, Globe, Zap } from "lucide-react";

export default function CompanyPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-2 mb-6">
              <div className="h-px w-8 bg-[#00E599]"></div>
              <span className="text-[#00E599] font-black tracking-[0.2em] text-xs uppercase">Corporate Identity</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-black tracking-tighter mb-8 leading-tight">
              QuantaLabs <br />
              <span className="text-gray-300">Private Limited.</span>
            </h1>
            <p className="text-xl text-gray-500 font-medium leading-relaxed">
              A deep-technology research and protocol engineering lab specializing in the transition to a post-quantum digital economy.
            </p>
          </div>
        </div>
      </section>

      {/* Institutional Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-black text-black tracking-tight mb-8">Institutional Framework</h2>
              <div className="space-y-6">
                <div className="p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                      <Landmark className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <h3 className="font-bold text-black">Private Limited Entity</h3>
                      <p className="text-xs text-gray-400 font-mono uppercase tracking-widest">Formalized Infrastructure</p>
                    </div>
                  </div>
                  <p className="text-gray-600 font-medium leading-relaxed">
                    QuantaLabs is a registered private limited company structured to provide the legal and operational continuity required by the global financial sector. Our corporate architecture ensures long-term stewardship of the post-quantum standards we develop.
                  </p>
                </div>

                <div className="p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                      <FlaskConical className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <h3 className="font-bold text-black">Research-First Ethos</h3>
                      <p className="text-xs text-gray-400 font-mono uppercase tracking-widest">Protocol Engineering</p>
                    </div>
                  </div>
                  <p className="text-gray-600 font-medium leading-relaxed">
                    We operate as a frontier technology lab, sitting at the intersection of lattice-based cryptography and high-frequency distributed systems. Our work is driven by academic rigor and production-ready implementation.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-black text-black tracking-tight mb-8">Our Core Mission</h2>
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-[#00E599]/10 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-[#00E599]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-black mb-2 tracking-tight">Securing Systemic Infrastructure</h4>
                    <p className="text-gray-500 font-medium leading-relaxed">
                      Providing the cryptographic foundations required to protect national and global financial systems from quantum-scale adversarial threats.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-[#00E599]/10 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-[#00E599]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-black mb-2 tracking-tight">Zero-Latency Security</h4>
                    <p className="text-gray-500 font-medium leading-relaxed">
                      Transitioning PQC research into high-performance, verifiable codebases capable of handling institutional transaction volumes without performance drag.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-[#00E599]/10 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-[#00E599]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-black mb-2 tracking-tight">Global Interoperability</h4>
                    <p className="text-gray-500 font-medium leading-relaxed">
                      Building decentralized protocols that maintain state sovereignty while ensuring connectivity between legacy and quantum-secure systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Section */}
      <section className="py-24 bg-black text-white rounded-[3rem] mx-4 mb-8 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00E599] opacity-10 blur-[100px] -mr-48 -mt-48"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
                Global by <span className="text-[#00E599]">Design.</span>
              </h2>
              <p className="text-gray-400 text-lg font-medium leading-relaxed mb-10">
                Operating as a remote-first protocol lab, QuantaLabs serves a global client base of financial institutions, government agencies, and research bodies from across the world.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-8">
                <div>
                  <p className="text-[10px] font-mono text-[#00E599] uppercase tracking-widest mb-1">Architecture</p>
                  <p className="text-sm font-bold">Remote-First</p>
                </div>
                <div className="h-10 w-px bg-white/10 hidden md:block"></div>
                <div>
                  <p className="text-[10px] font-mono text-[#00E599] uppercase tracking-widest mb-1">Operations</p>
                  <p className="text-sm font-bold">Global / 24-7</p>
                </div>
                <div className="h-10 w-px bg-white/10 hidden md:block"></div>
                <div>
                  <p className="text-[10px] font-mono text-[#00E599] uppercase tracking-widest mb-1">Support</p>
                  <p className="text-sm font-bold text-white hover:text-[#00E599] transition-colors">
                    <a href="mailto:contact@quantalabs.cc">contact@quantalabs.cc</a>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative group">
                <div className="absolute inset-0 bg-[#00E599]/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border border-[#00E599]/30 flex items-center justify-center relative">
                    <Globe className="w-12 h-12 md:w-20 md:h-20 text-[#00E599] animate-pulse" />
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
