import { ShieldCheck, Download, FileText } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "PQC Readiness Audit | QuantaLabs",
  description: "Download the QuantaLabs Post-Quantum Cryptography Readiness Assessment template to prepare your organization for the PQC migration.",
};

export default function PQCAuditPage() {
  const steps = [
    { title: "Inventory Assets", desc: "Identify all cryptographic dependencies and hardware across your infrastructure." },
    { title: "Assess Vulnerability", desc: "Evaluate the quantum risk to your current encryption algorithms (e.g., RSA, ECC)." },
    { title: "Develop Roadmap", desc: "Plan a phased migration to NIST-approved post-quantum algorithms (Kyber, Dilithium)." },
    { title: "Execute Migration", desc: "Deploy hybrid cryptographic solutions to ensure defense-in-depth during the transition." },
  ];

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <ShieldCheck className="w-6 h-6 text-[#C4ED5F]" />
            <span className="font-bold tracking-widest text-sm uppercase text-gray-500">Service</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black tracking-tighter mb-6 leading-tight">
            <span className="text-[#C4ED5F]">Identify vulnerabilities</span><br />before they materialize.
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            The transition to post-quantum cryptography is the largest infrastructure upgrade in history. 
            Download our comprehensive readiness assessment template to begin mapping your organization's quantum risk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <FileText className="text-[#C4ED5F] w-6 h-6" />
              Assessment Template
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              This `.docx` template provides a structured framework for CISO teams to inventory cryptographic assets, assess quantum vulnerability, and develop a migration roadmap compliant with NSA and CISA guidelines.
            </p>
            <a 
              href="/QuantaLabs_PQC_Readiness_Assessment_Template.docx" 
              download
              className="group flex items-center justify-center space-x-3 px-8 py-4 bg-[#C4ED5F] text-black rounded-full font-bold hover:bg-black hover:text-white transition-all shadow-lg hover:scale-105 active:scale-95 w-full sm:w-auto"
            >
              <Download className="w-5 h-5" />
              <span>Download Template (.docx)</span>
            </a>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 text-black">The Migration Process</h3>
            <div className="space-y-6">
              {steps.map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#C4ED5F]/10 text-[#C4ED5F] flex items-center justify-center font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-black text-lg mb-1">{step.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-6 bg-black text-white rounded-2xl">
              <h4 className="font-bold text-lg mb-2">Need expert guidance?</h4>
              <p className="text-gray-400 mb-6 text-sm">
                Our protocol engineers can conduct a full architectural audit and implement hybrid Kyber/ECC infrastructure for your enterprise.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-[#C4ED5F] font-bold hover:text-white transition-colors">
                Contact our audit team <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

function ArrowUpRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}
