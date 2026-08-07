// CHANGED: Redesigned for Deep Tech Light Mode aesthetic.
// DATE: 2026-08-07 | VERSION: 4.0
import { Metadata } from "next";
import ContactPageForm from "@/components/ContactPageForm";

export const metadata: Metadata = {
  title: "Contact | QuantaLabs",
  description: "Get in touch for CBOM audits and PQC migration services.",
};

export default function ContactPage() {
  return (
    <div className="bg-transparent min-h-screen pt-32 pb-24 text-[#141413] font-sans selection:bg-[#C04A2B] selection:text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mb-16 pb-12 border-b border-gray-200">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 mb-8 shadow-sm">
            <span className="w-1.5 h-1.5 bg-[#C04A2B]"></span>
            <span className="text-[10px] tracking-[0.2em] text-gray-500 uppercase font-mono font-medium">Initiate Connection</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight text-[#141413] leading-[1.05]">
            Secure your <br/><span className="text-gray-400">infrastructure.</span>
          </h1>
          <p className="mt-8 text-lg text-gray-600 max-w-2xl font-normal leading-relaxed">
            Book a consultation with our protocol engineers to discuss your CBOM audit or PQC migration timeline.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Form Side */}
          <div className="w-full lg:w-2/3">
            <ContactPageForm />
          </div>

          {/* Info Side */}
          <div className="w-full lg:w-1/3 flex flex-col gap-12">
            <div>
              <h3 className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-3">Direct Inquiries</h3>
              <a href="mailto:contact@quantalabs.cc" className="text-lg font-medium text-[#141413] hover:text-[#C04A2B] transition-colors border-b border-gray-300 pb-1">
                contact@quantalabs.cc
              </a>
            </div>

            <div>
              <h3 className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-3">Headquarters</h3>
              <address className="not-italic text-sm font-normal text-gray-600 leading-relaxed">
                QuantaLabs Private Limited<br />
                Coimbatore, Tamil Nadu<br />
                India
              </address>
            </div>

            <div className="bg-white border border-[#C04A2B] p-6 shadow-sm relative overflow-hidden group transition-colors">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>
              <h3 className="relative z-10 font-mono text-[10px] text-[#141413] font-medium uppercase tracking-widest mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#C04A2B]"></span> PGP Key
              </h3>
              <p className="text-xs font-normal text-gray-600 mb-4 leading-relaxed">
                For secure transmission of vulnerability reports or sensitive infrastructural diagrams.
              </p>
              <a
                href="/quantalabs.asc"
                download="quantalabs.asc"
                className="relative z-10 inline-flex items-center justify-center px-4 py-2 bg-white border border-gray-200 text-[#141413] font-mono text-[10px] uppercase tracking-widest hover:border-[#C04A2B] hover:text-[#C04A2B] transition-all w-full"
              >
                Download Key
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
