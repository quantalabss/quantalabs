"use client";

import { Layers, BrainCircuit, ShieldCheck, ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function ServicesPreview() {
  const services = [
    {
      icon: ShieldCheck,
      title: "PQC Migration Framework",
      desc: "Architecting the transition from Shor-vulnerable ECDSA to NIST-finalized lattice-based cryptography (ML-DSA/ML-KEM) for systemic financial infrastructure.",
      href: "/services/pqc-migrations",
      badge: "Standardized",
    },
    {
      icon: Layers,
      title: "Lattice-Enabled L2s",
      desc: "Deploying sovereign, high-throughput rollups utilizing Falcon-512 signatures for transaction integrity and ZK-STARKs for verifiable state transitions.",
      href: "/services/appchains",
      badge: "Production",
    },
    {
      icon: BrainCircuit,
      title: "Deterministic AI Agents",
      desc: "Securing LLM-driven autonomous agents through consensus-level validation, ensuring non-deterministic AI outputs meet institutional safety standards.",
      href: "/services/ai-agents",
      badge: "Experimental",
    },
  ];

  return (
    <section className="py-24 bg-[#fafafa] border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 mb-16">
          <div className="max-w-2xl animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-extrabold text-black tracking-tighter mb-8 leading-tight">
              Deep-Tech Solutions <br className="hidden md:block" />for the Vanguard.
            </h2>
            <p className="text-lg md:text-xl text-gray-500 font-medium mb-10 leading-relaxed">
              We specialize in the engineering of sovereign infrastructure at the frontier of institutional cryptography. Our work ensures that the world&apos;s most critical data remains secure through the quantum transition.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center text-sm font-bold text-black border-b-[3px] border-[#00E599] pb-1 hover:text-[#00E599] transition-colors uppercase tracking-widest"
            >
              Explore Protocol Services <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>

        {/* 3 service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fade-in">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={index}
                href={service.href}
                className="group relative bg-white border border-gray-100 rounded-[2rem] p-10 hover:border-[#00E599] transition-all shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,229,153,0.1)] flex flex-col overflow-hidden"
              >
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#00E599]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative z-10 flex items-center justify-between mb-8">
                  <div className="bg-gray-50 w-14 h-14 rounded-2xl flex items-center justify-center group-hover:bg-black transition-all duration-300">
                    <Icon className="w-6 h-6 text-black group-hover:text-[#00E599] transition-colors" />
                  </div>
                  {service.badge && (
                    <span className="text-[10px] font-black px-3 py-1 rounded-full bg-gray-100 text-gray-500 border border-gray-200 group-hover:bg-[#00E599]/10 group-hover:text-[#00E599] group-hover:border-[#00E599]/20 transition-colors">
                      {service.badge}
                    </span>
                  )}
                </div>
                <h3 className="relative z-10 font-extrabold text-black text-2xl mb-4 tracking-tight group-hover:text-black transition-colors">{service.title}</h3>
                <p className="relative z-10 text-base text-gray-500 font-medium leading-relaxed flex-1 group-hover:text-gray-600 transition-colors">{service.desc}</p>
                <div className="relative z-10 mt-8 flex items-center gap-2 text-xs font-bold text-[#00E599] opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                  Technical Documentation <ArrowUpRight className="w-4 h-4" />
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
