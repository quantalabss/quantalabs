import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "PQC Readiness Audit | QuantaLabs",
  description:
    "Download the QuantaLabs Post-Quantum Cryptography Readiness Assessment template to prepare your organization for the PQC migration.",
};

export default function PQCAuditPage() {
  const steps = [
    {
      title: "Inventory Assets",
      desc: "Identify all cryptographic dependencies and hardware across your infrastructure.",
    },
    {
      title: "Assess Vulnerability",
      desc: "Evaluate the quantum risk to your current encryption algorithms (e.g., RSA, ECC).",
    },
    {
      title: "Develop Roadmap",
      desc: "Plan a phased migration to NIST-approved post-quantum algorithms (Kyber, Dilithium).",
    },
    {
      title: "Execute Migration",
      desc: "Deploy hybrid cryptographic solutions to ensure defense-in-depth during the transition.",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <span className="font-serif text-3xl text-black group-hover:text-[#C4ED5F] transition-colors mb-4 relative z-10 leading-none inline-block">
              ⨂
            </span>
            <span className="font-bold tracking-widest text-sm uppercase text-gray-500">
              Service
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black tracking-tighter mb-6 leading-tight">
            <span className="text-[#C4ED5F]">Identify vulnerabilities</span>
            <br />
            before they materialize.
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            The transition to post-quantum cryptography is the largest
            infrastructure upgrade in history. Download our comprehensive
            readiness assessment template to begin mapping your organization&apos;s
            quantum risk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="bg-white border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-8 lg:p-12">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="font-serif text-3xl text-black group-hover:text-[#C4ED5F] transition-colors mb-4 relative z-10 leading-none inline-block">
                ⊛
              </span>
              Assessment Template
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              This `.docx` template provides a structured framework for CISO
              teams to inventory cryptographic assets, assess quantum
              vulnerability, and develop a migration roadmap compliant with NSA
              and CISA guidelines.
            </p>
            <a
              href="/QuantaLabs_PQC_Readiness_Assessment_Template.docx"
              download
              className="group flex items-center justify-center space-x-3 px-8 py-4 bg-[#C4ED5F] border-2 border-transparent text-black font-bold uppercase tracking-widest text-xs hover:bg-white hover:border-black transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] md:shadow-none hover:-translate-y-1 w-full sm:w-auto"
            >
              <span className="font-serif text-3xl text-black group-hover:text-[#C4ED5F] transition-colors mb-0 relative z-10 leading-none inline-block">
                ∝
              </span>
              <span>Download Template (.docx)</span>
            </a>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 text-black">
              The Migration Process
            </h3>
            <div className="space-y-6">
              {steps.map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#C4ED5F]/10 text-[#C4ED5F] flex items-center justify-center font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-black text-lg mb-1">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-10 bg-black text-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(196,237,95,1)]">
              <h4 className="font-bold text-lg mb-2">Need expert guidance?</h4>
              <p className="text-gray-400 mb-6 text-sm">
                Our protocol engineers can conduct a full architectural audit
                and implement hybrid Kyber/ECC infrastructure for your
                enterprise.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[#C4ED5F] font-bold hover:text-white transition-colors"
              >
                Contact our audit team <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
