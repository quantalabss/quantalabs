"use client";

import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Clock, ShieldCheck, BrainCircuit } from "lucide-react";

export default function ServicesPreview() {
  return (
    <div className="bg-transparent text-[#141413] font-sans">
      
      {/* 1. Value Proposition (ROI & Overhead) */}
      <section className="py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-mono text-gray-500 tracking-widest uppercase font-medium block mb-4">
              The QuantaLabs Advantage
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-medium tracking-tight text-black mb-6">
              Reduce overhead. Remove risk.
            </h2>
            <p className="text-lg text-gray-600 font-normal leading-relaxed">
              You don&apos;t need to build an expensive in-house cryptography or AI engineering team. We scope, build, and deploy the infrastructure so you can focus on your core business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-[#C04A2B] p-10 shadow-sm relative overflow-hidden group transition-all">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-display font-medium mb-3">Save Time & Resources</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Reduce operational overhead by automating your complex workflows with autonomous LLM agents. Let AI handle the heavy lifting.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-sm font-medium text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-black mr-3" /> Turnkey AI integration
                  </li>
                  <li className="flex items-center text-sm font-medium text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-black mr-3" /> Lower operational costs
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white border border-[#C04A2B] p-10 shadow-sm relative overflow-hidden group transition-all">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute top-0 right-0 w-1 h-full bg-transparent group-hover:bg-[#C04A2B] transition-colors"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-display font-medium mb-3">Eliminate Catastrophic Risk</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Protect your enterprise data from future quantum computing attacks with zero-downtime cryptographic upgrades that don&apos;t disrupt your current operations.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-sm font-medium text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-[#C04A2B] mr-3" /> FIPS-203/204 compliant
                  </li>
                  <li className="flex items-center text-sm font-medium text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-[#C04A2B] mr-3" /> Zero operational downtime
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Concrete Services List */}
      <section className="py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-16">
            <span className="text-[10px] font-mono text-gray-500 tracking-widest uppercase font-medium block mb-4">
              What We Sell
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-medium tracking-tight text-black">
              Engineering Services
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* AI Services */}
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-display font-medium">AI Integrations</h3>
              </div>
              <div className="space-y-4">
                {[
                  { title: "AI Chatbots & Virtual Assistants", desc: "Intelligent customer and internal support." },
                  { title: "Workflow Automation", desc: "Replace repetitive manual tasks with agentic loops." },
                  { title: "Knowledge Base Processing (RAG)", desc: "Turn your company documents into a searchable AI oracle." },
                  { title: "Custom AI Solutions", desc: "Bespoke model fine-tuning and deployment." }
                ].map((service, idx) => (
                  <div key={idx} className="p-6 bg-white border border-[#C04A2B] transition-all group flex items-start gap-5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1 h-full bg-transparent group-hover:bg-[#141413] transition-colors"></div>
                    <span className="text-[10px] font-mono font-medium text-gray-300 group-hover:text-[#141413] transition-colors pt-1">0{idx + 1}</span>
                    <div>
                      <h4 className="text-base font-medium text-black mb-1">{service.title}</h4>
                      <p className="text-sm text-gray-500">{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/contact" className="text-[10px] font-mono uppercase tracking-widest text-black hover:text-gray-500 flex items-center gap-2">
                  Discuss AI Services <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Cryptography Services */}
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-display font-medium">Post-Quantum Migrations</h3>
              </div>
              <div className="space-y-4">
                {[
                  { title: "PQC Migration Strategy", desc: "Comprehensive audit and timeline planning for your tech stack." },
                  { title: "Cryptographic Risk Assessment", desc: "Identify vulnerable ECDSA and RSA algorithms in production." },
                  { title: "Hybrid Cryptography Integration", desc: "Deploy Kyber and ML-DSA alongside legacy algorithms safely." },
                  { title: "Secure API Encryption", desc: "Quantum-safe tunneling for your external communications." }
                ].map((service, idx) => (
                  <div key={idx} className="p-6 bg-white border border-[#C04A2B] transition-all group flex items-start gap-5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1 h-full bg-transparent group-hover:bg-[#C04A2B] transition-colors"></div>
                    <span className="text-[10px] font-mono font-medium text-gray-300 group-hover:text-[#C04A2B] transition-colors pt-1">0{idx + 1}</span>
                    <div>
                      <h4 className="text-base font-medium text-black mb-1">{service.title}</h4>
                      <p className="text-sm text-gray-500">{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/contact" className="text-[10px] font-mono uppercase tracking-widest text-black hover:text-gray-500 flex items-center gap-2">
                  Discuss PQC Migrations <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
