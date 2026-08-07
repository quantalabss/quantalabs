// CHANGED: Redesigned for Deep Tech Light Mode aesthetic.
// DATE: 2026-08-07 | VERSION: 4.0
import type { Metadata } from "next";
import {
  BrainCircuit,
  ShieldCheck,
  ArrowUpRight,
  MessageSquare,
  FileSearch,
  Server,
} from "lucide-react";
import Link from "next/link";

const ogImage = "/seo/image.png";

export const metadata: Metadata = {
  title: "Services | AI Engineering & PQC Migrations",
  description:
    "Quantalabs executes post-quantum cryptography migrations and deploys autonomous AI agent frameworks for institutional blockchain networks.",
  alternates: {
    canonical: "https://quantalabs.cc/services",
  },
  openGraph: {
    title: "Services | AI Engineering & PQC Migrations | Quantalabs",
    description:
      "PQC migrations and autonomous AI agents. Enterprise-grade protocol engineering by Quantalabs.",
    url: "https://quantalabs.cc/services",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Quantalabs Services | AI & PQC Engineering",
      },
    ],
  },
};

function ServiceCTA({
  headline,
  subline,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: {
  headline: string;
  subline: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <div className="mt-16 bg-white border border-[#C04A2B] p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative overflow-hidden shadow-sm group transition-colors">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-1 h-full bg-[#C04A2B]"></div>
      
      <div className="relative z-10 max-w-xl">
        <p className="text-[10px] font-mono tracking-[0.2em] uppercase mb-3 text-gray-500">
          Next Step
        </p>
        <h3 className="text-2xl md:text-3xl font-display font-medium tracking-tight mb-3 text-[#141413]">
          {headline}
        </h3>
        <p className="text-sm font-normal leading-relaxed text-gray-600">
          {subline}
        </p>
      </div>
      <div className="relative z-10 flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
        <Link
          href={primaryHref}
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#C04A2B] text-white font-mono text-xs uppercase tracking-widest hover:bg-[#141413] transition-all"
        >
          {primaryLabel} <ArrowUpRight className="w-4 h-4" />
        </Link>
        {secondaryLabel && secondaryHref && (
          <Link
            href={secondaryHref}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-[#141413] border border-gray-200 font-mono text-xs uppercase tracking-widest hover:border-[#141413] transition-all"
          >
            {secondaryLabel}
          </Link>
        )}
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div className="pt-24 min-h-screen pb-32 bg-transparent text-[#141413] font-sans selection:bg-[#C04A2B] selection:text-white">
      
      {/* ── PAGE HERO ──────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-center pt-12 md:pt-20 relative border-b border-gray-200 pb-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

        <div className="animate-fade-in relative z-10">
          <span className="text-gray-500 font-mono tracking-widest uppercase text-[10px] mb-6 block">
            Capabilities &amp; R&amp;D
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight text-[#141413] mb-8 leading-[1.05]">
            Engineering the <br />
            <span className="text-gray-400">Decentralized Future.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 font-normal leading-relaxed max-w-2xl mx-auto mb-10">
            From bespoke sovereign rollups to full-scale post-quantum algorithmic migrations, our engineering team architects the next generation of institutional networks.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "AI Engineering", href: "#ai-engineering", icon: BrainCircuit },
              { label: "PQC Migrations", href: "#pqc-migrations", icon: ShieldCheck },
            ].map(({ label, href, icon: Icon }) => (
              <a
                key={href}
                href={href}
                className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest px-5 py-2.5 bg-white border border-gray-200 text-gray-600 hover:text-[#141413] hover:border-gray-300 transition-all shadow-sm"
              >
                <Icon className="w-3.5 h-3.5 text-[#141413]" /> {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── PILLAR I: AI ENGINEERING ────────────────────────────── */}
      <section id="ai-engineering" className="bg-transparent py-24 overflow-hidden text-[#141413] border-y border-gray-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="w-full lg:w-1/2 animate-fade-in">
              <div className="bg-white border border-gray-200 w-14 h-14 flex items-center justify-center mb-8 shadow-sm">
                <BrainCircuit className="w-6 h-6 text-[#141413]" />
              </div>
              <h2 className="text-4xl font-display font-medium text-[#141413] mb-6 tracking-tight">
                AI Engineering &amp; Agents
              </h2>
              <p className="text-base text-gray-600 font-normal leading-relaxed mb-8">
                Integrate intelligent autonomy at the protocol level. We architect specialized nodes running LLM-driven deterministic agents performing predictive automated trading, risk-monitoring, and dynamic workflows.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "AI Chatbots & Virtual Assistants",
                  "Workflow Automation & Integrations",
                  "Custom AI Solutions",
                  "Knowledge Bases & Document Processing",
                  "AI Agent Frameworks"
                ].map((feat, i) => (
                  <div key={i} className="flex items-center text-gray-700 font-medium text-sm bg-white border border-gray-200 px-4 py-3.5 shadow-sm">
                    <span className="w-1.5 h-1.5 bg-gray-300 mr-3"></span>
                    {feat}
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-1/2 animate-fade-in">
              <div className="bg-black rounded-sm border border-gray-800 shadow-xl p-8 h-[450px] relative overflow-hidden font-mono text-xs flex flex-col justify-end">
                <div className="opacity-40 mb-auto">
                  <span className="text-gray-400 block">Initializing Agent Sequence...</span>
                  <span className="text-gray-400 block">Model: Qwen-3-72B</span>
                  <span className="text-gray-400 block">Risk Tolerance: Strict</span>
                  <span className="text-gray-400 block mt-4">--- STREAM ---</span>
                </div>
                <div className="space-y-4">
                  <div className="text-gray-300 flex gap-3">
                    <span className="text-blue-400/70 shrink-0">[14:02:01]</span>
                    <span>Analyzing mempool transactions...</span>
                  </div>
                  <div className="text-gray-300 flex gap-3">
                    <span className="text-yellow-400/70 shrink-0">[14:02:04]</span>
                    <span>Arbitrage opportunity identified in Liquidity Pool A.</span>
                  </div>
                  <div className="text-gray-300 flex gap-3">
                    <span className="text-blue-400/70 shrink-0">[14:02:05]</span>
                    <span>Calculating deterministic execution path...</span>
                  </div>
                  <div className="text-[#141413] font-medium bg-[#C04A2B]/10 border border-[#C04A2B]/20 p-4 mt-2 flex items-center gap-3">
                    <span className="text-[#C04A2B] animate-pulse">●</span> 
                    Executing Atomic Swap Tx: 0x8a92...b14e
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ServiceCTA
            headline="Deploy intelligence into your workflow."
            subline="Schedule a technical call with our AI integration team to scope your agent deployment timeline."
            primaryLabel="Schedule a Call"
            primaryHref="/contact"
          />
        </div>
      </section>

      {/* ── PILLAR II: PQC MIGRATIONS ────────────────────────── */}
      <section id="pqc-migrations" className="py-24 overflow-hidden relative border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="w-full lg:w-1/2 order-2 lg:order-1 animate-fade-in">
              <div className="bg-black rounded-sm border border-gray-800 shadow-xl overflow-hidden h-[450px] flex flex-col">
                <div className="bg-[#111111] border-b border-gray-800 p-4 flex items-center justify-between">
                  <div className="flex space-x-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                  </div>
                  <div className="text-gray-500 font-mono text-[10px] uppercase tracking-wider">
                    migration.sh
                  </div>
                  <div className="w-12" />
                </div>
                <div className="p-6 font-mono text-xs leading-relaxed overflow-hidden text-gray-300">
                  <div className="mb-2">
                    <span className="text-[#C04A2B]">root@quanta:~$</span> quanta-cli network upgrade --target pqc_falcon512
                  </div>
                  <div className="text-gray-400 mb-1">[INFO] Initiating mainnet state migration protocol...</div>
                  <div className="text-gray-400 mb-1">[INFO] Pausing mempool &amp; securing validator signatures...</div>
                  <div className="text-gray-400 mb-4">[INFO] Compiling WASM cryptographic primitives...</div>
                  
                  <div className="mb-1"><span className="text-blue-400/80">Loading module:</span> kyber_kem_v1.wasm [100%]</div>
                  <div className="mb-4"><span className="text-blue-400/80">Loading module:</span> falcon_512_sig.wasm [100%]</div>
                  
                  <div className="text-emerald-400/80 mb-1">✔ Cryptographic modules verified.</div>
                  <div className="text-emerald-400/80 mb-4">✔ Merkle-tree state recalculated.</div>
                  
                  <div className="font-semibold text-white mb-4 bg-[#111111] p-3 border border-gray-800">
                    Migration Complete. Network is now Post-Quantum Secure.
                  </div>
                  
                  <div>
                    <span className="text-[#C04A2B]">root@quanta:~$</span> <span className="animate-pulse">_</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 order-1 lg:order-2 animate-fade-in">
              <div className="bg-white border border-gray-200 w-14 h-14 flex items-center justify-center mb-8 shadow-sm">
                <ShieldCheck className="w-6 h-6 text-[#141413]" />
              </div>
              <h2 className="text-4xl font-display font-medium text-[#141413] mb-6 tracking-tight">
                PQC Migrations
              </h2>
              <p className="text-base text-gray-600 font-normal leading-relaxed mb-8">
                The quantum threat is imminent. We partner with legacy protocols to execute zero-downtime migrations from vulnerable ECDSA algorithms to NIST-standardized Post-Quantum schemes.
              </p>
              <ul className="space-y-3">
                {[
                  "PQC Migration Strategy",
                  "Cryptographic Risk Assessment",
                  "Hybrid Cryptography Integration",
                  "Secure API Encryption",
                ].map((feat, i) => (
                  <li key={i} className="flex items-center text-gray-700 font-medium text-sm bg-white border border-gray-200 px-4 py-3.5 w-max shadow-sm hover:border-[#C04A2B] transition-colors">
                    <span className="w-1.5 h-1.5 bg-[#C04A2B] mr-3"></span>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <ServiceCTA
            headline="Is your infrastructure quantum-vulnerable?"
            subline="We conduct free preliminary assessments. Get a report on your current cryptographic exposure before the threat arrives."
            primaryLabel="Request Free Audit"
            primaryHref="/contact"
            secondaryLabel="Read Research"
            secondaryHref="/research"
          />
        </div>
      </section>

      {/* ── HOW WE WORK ─────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 py-24 border-b border-gray-200">
        <div className="mb-16 text-center">
          <span className="text-gray-500 font-mono tracking-[0.2em] uppercase text-[10px] mb-4 block">
            Engagement Process
          </span>
          <h3 className="text-3xl font-display font-medium text-[#141413] tracking-tight">
            How We Work
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              step: "01",
              icon: MessageSquare,
              title: "Discovery Call",
              desc: "We start with a technical consultation to understand your protocol, its pain points, and your institutional objectives.",
            },
            {
              step: "02",
              icon: FileSearch,
              title: "Technical Scoping",
              desc: "Our engineers produce a detailed architecture proposal, timeline, and fixed-price engagement plan.",
            },
            {
              step: "03",
              icon: Server,
              title: "Build & Deploy",
              desc: "We execute end-to-end — from code to deployment — with full documentation and knowledge transfer.",
            },
          ].map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={i}
                className="p-8 bg-white border border-[#C04A2B] transition-colors group shadow-sm relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>
                <div className="relative z-10">
                  <span className="font-mono text-[10px] font-medium text-gray-400 mb-6 block tracking-widest uppercase">
                    PHASE {step.step}
                  </span>
                  <div className="w-12 h-12 bg-white border border-gray-200 flex items-center justify-center mb-6 shadow-sm group-hover:-translate-y-1 group-hover:bg-[#141413] transition-all">
                    <Icon className="w-5 h-5 text-[#141413] group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-xl font-display font-medium text-[#141413] mb-3 tracking-tight">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 font-normal text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── FINAL GLOBAL CTA ────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-white border border-[#C04A2B] p-12 md:p-24 text-center relative overflow-hidden shadow-sm group transition-colors">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>
          
          <span className="relative z-10 text-gray-500 font-mono tracking-widest uppercase text-[10px] mb-6 block">
            Enterprise Protocol Engineering
          </span>
          <h3 className="relative z-10 text-4xl md:text-5xl font-display font-medium text-[#141413] mb-6 tracking-tight">
            Ready to build <br className="md:hidden"/>the future?
          </h3>
          <p className="relative z-10 text-base text-gray-600 font-normal leading-relaxed max-w-2xl mx-auto mb-10">
            Our core engineering team is available for deep-tech
            consulting and end-to-end institutional development.
          </p>
          
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#C04A2B] text-white font-mono uppercase tracking-widest text-xs hover:bg-[#141413] transition-all shadow-sm hover:-translate-y-0.5"
            >
              Discuss Infrastructure <ArrowUpRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="/research"
              className="inline-flex items-center justify-center px-8 py-4 bg-white border border-gray-200 text-[#141413] font-mono uppercase tracking-widest text-xs hover:border-[#141413] transition-all"
            >
              Read Our Research
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
