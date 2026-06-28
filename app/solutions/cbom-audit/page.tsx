import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "CBOM Audit | QuantaLabs",
  description:
    "Cryptographic Bill of Materials readiness assessment for FIPS 203 compliance.",
};

export default function CBOMPage() {
  return (
    <div className="bg-white min-h-screen pt-28 pb-24 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-8 p-10 md:p-16 border-b-2 lg:border-b-0 lg:border-r-2 border-black bg-gray-50/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-[#C4ED5F]"></div>
                <span className="font-mono text-[10px] tracking-[0.2em] text-gray-500 uppercase font-bold">
                  Solutions // Regulatory Audit
                </span>
              </div>
              <h1 className="text-[3rem] md:text-[5rem] font-black tracking-tighter leading-[0.95] text-black">
                <span className="text-[#C4ED5F]">CBOM</span>{" "}
                <span className="relative inline-block mt-1">
                  Audit.
                  <span className="absolute bottom-1 left-0 w-full h-[6px] bg-[#C4ED5F] -z-10"></span>
                </span>
              </h1>
            </div>

            <div className="lg:col-span-4 p-10 flex flex-col justify-end bg-black text-white relative overflow-hidden">
              <span className="absolute top-8 right-8 text-[6rem] font-black text-white/5 leading-none select-none">
                ∑
              </span>
              <span className="font-serif text-3xl text-[#C4ED5F] mb-6 relative z-10 leading-none inline-block">
                ⨀
              </span>
              <p className="text-sm text-gray-300 font-medium relative z-10">
                A Cryptographic Bill of Materials (CBOM) is the fundamental
                prerequisite for post-quantum migration. We map, identify, and
                assess every cryptographic primitive across your enterprise
                infrastructure.
              </p>
            </div>
          </div>
        </div>

        {/* Threat Context */}
        <div className="mb-16">
          <div className="border-l-4 border-black pl-8 py-2 mb-8">
            <h2 className="text-2xl font-black mb-4">
              The &quot;Store Now, Decrypt Later&quot; Threat
            </h2>
            <p className="text-gray-600 font-medium leading-relaxed max-w-3xl">
              Adversaries are currently harvesting encrypted institutional data.
              When cryptographically-relevant quantum computers (CRQCs) come
              online, they will retroactively decrypt this data using
              Shor&apos;s algorithm. To mitigate this, regulatory bodies (such
              as the US NSA and India DST) have mandated the transition to NIST
              FIPS 203 (ML-KEM). The first step is knowing exactly what you need
              to upgrade.
            </p>
          </div>
        </div>

        {/* Methodology */}
        <h2 className="text-2xl font-black mb-8">Our Audit Methodology</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16">
          <div className="border-2 border-black p-8 bg-gray-50 hover:bg-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1">
            <div className="font-mono text-[10px] text-gray-400 font-bold mb-4">
              PHASE 01
            </div>
            <h3 className="font-bold mb-4">Discovery</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Automated and manual scanning of source code repositories, CI/CD
              pipelines, and runtime environments to isolate cryptographic
              libraries and API calls.
            </p>
          </div>

          <div className="border-2 border-black p-8 bg-gray-50 hover:bg-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1">
            <div className="font-mono text-[10px] text-gray-400 font-bold mb-4">
              PHASE 02
            </div>
            <h3 className="font-bold mb-4">Mapping</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Generation of the Cryptographic Bill of Materials (CBOM) adhering
              to CycloneDX specifications. We catalog every algorithm, key size,
              and certificate authority.
            </p>
          </div>

          <div className="border-2 border-black p-8 bg-gray-50 hover:bg-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1">
            <div className="font-mono text-[10px] text-gray-400 font-bold mb-4">
              PHASE 03
            </div>
            <h3 className="font-bold mb-4">Vulnerability Assessment</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              We flag vulnerable RSA, ECDSA, and Diffie-Hellman deployments,
              assessing the blast radius and prioritizing critical
              infrastructure for immediate hybridization.
            </p>
          </div>

          <div className="border-2 border-black p-8 bg-[#C4ED5F] transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1">
            <div className="font-mono text-[10px] text-black/60 font-bold mb-4">
              PHASE 04
            </div>
            <h3 className="font-bold mb-4">FIPS 203 Roadmap</h3>
            <p className="text-sm text-black/80 leading-relaxed">
              Delivery of a comprehensive, executive-ready migration strategy
              outlining exact engineering requirements to achieve compliance
              before regulatory deadlines.
            </p>
          </div>
        </div>

        {/* Deliverables */}
        <div className="border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white overflow-hidden mb-12 flex flex-col md:flex-row">
          <div className="p-10 md:w-1/3 border-b-2 md:border-b-0 md:border-r-2 border-black bg-gray-50">
            <span className="font-serif text-4xl text-black mb-4 block leading-none">
              §
            </span>
            <h3 className="text-xl font-black mb-2">Deliverables</h3>
            <p className="text-sm text-gray-600">
              What you receive upon audit completion.
            </p>
          </div>
          <div className="p-10 md:w-2/3">
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="font-serif text-xl text-black mt-[-4px] shrink-0 font-bold">
                  ✓
                </span>
                <div>
                  <h4 className="font-bold text-sm">Machine-Readable CBOM</h4>
                  <p className="text-sm text-gray-600">
                    CycloneDX formatted JSON/XML file for automated compliance
                    tracking.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="font-serif text-xl text-black mt-[-4px] shrink-0 font-bold">
                  ✓
                </span>
                <div>
                  <h4 className="font-bold text-sm">Quantum Risk Matrix</h4>
                  <p className="text-sm text-gray-600">
                    A prioritized list of vulnerable systems based on data
                    persistence and exposure.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="font-serif text-xl text-black mt-[-4px] shrink-0 font-bold">
                  ✓
                </span>
                <div>
                  <h4 className="font-bold text-sm">
                    Remediation Architecture
                  </h4>
                  <p className="text-sm text-gray-600">
                    Customized technical blueprints for upgrading TLS endpoints,
                    VPNs, and code signing pipelines.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-black flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-10 text-white">
          <div>
            <h3 className="font-bold mb-2">Ready to initiate an audit?</h3>
            <p className="text-sm text-gray-400">
              Avoid the regulatory rush. Connect with our protocol engineering
              team.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-8 py-4 bg-[#C4ED5F] border-2 border-transparent text-black font-bold text-xs uppercase tracking-widest hover:bg-white hover:border-black transition-all flex items-center justify-center gap-2 w-full md:w-auto"
          >
            Contact Sales
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
