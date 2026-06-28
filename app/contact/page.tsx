import { Metadata } from "next";
import ContactPageForm from "@/components/ContactPageForm";

export const metadata: Metadata = {
  title: "Contact | QuantaLabs",
  description: "Get in touch for CBOM audits and PQC migration services.",
};

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen pt-28 pb-24 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-8 p-10 md:p-16 border-b-2 lg:border-b-0 lg:border-r-2 border-black bg-gray-50/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-[#C4ED5F]"></div>
                <span className="font-mono text-[10px] tracking-[0.2em] text-gray-500 uppercase font-bold">
                  Initiate Connection
                </span>
              </div>
              <h1 className="text-[3rem] md:text-[5rem] font-black tracking-tighter leading-[0.95] text-black">
                <span className="text-[#C4ED5F]">Secure your</span>
                <br />
                <span className="relative inline-block mt-1">
                  infrastructure.
                  <span className="absolute bottom-1 left-0 w-full h-[6px] bg-[#C4ED5F] -z-10"></span>
                </span>
              </h1>
            </div>

            <div className="lg:col-span-4 relative bg-[#C4ED5F] flex flex-col items-center justify-center p-6 overflow-hidden">
              <div
                className="absolute inset-0 opacity-40 pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.15) 1px, transparent 1px)`,
                  backgroundSize: "24px 24px",
                }}
              ></div>
              <div className="relative z-10 flex flex-col items-center justify-center h-full py-8">
                <span className="text-[7rem] font-black text-black leading-none select-none mb-8 tracking-tighter">
                  ∇
                </span>
                <div className="w-full bg-white/90 backdrop-blur-sm border-2 border-black p-4 font-medium text-sm text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mt-auto text-center leading-relaxed">
                  Book a consultation with our protocol engineers to discuss your
                  CBOM audit or PQC migration timeline.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Grid */}
        <div className="border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Contact Form */}
            <div className="lg:col-span-8 p-10 md:p-16 border-b-2 lg:border-b-0 lg:border-r-2 border-black">
              <div className="flex items-center gap-2 mb-8">
                <span className="font-serif text-3xl text-black group-hover:text-[#C4ED5F] transition-colors mb-4 relative z-10 leading-none inline-block">
                  Ξ
                </span>
                <span className="font-mono text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  SYS.INPUT // CONTACT_FORM
                </span>
              </div>
              <ContactPageForm />
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-4 bg-gray-50 flex flex-col">
              <div className="p-10 border-b-2 border-black">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-serif text-3xl text-black group-hover:text-[#C4ED5F] transition-colors mb-4 relative z-10 leading-none inline-block">
                    Γ
                  </span>
                  <h3 className="text-sm font-bold text-black">
                    Direct Inquiries
                  </h3>
                </div>
                <p className="text-sm font-medium text-gray-600 mb-2">
                  For general questions and partnerships:
                </p>
                <a
                  href="mailto:contact@quantalabs.cc"
                  className="text-lg font-black text-black hover:text-[#8ab329] transition-colors underline decoration-2 underline-offset-4"
                >
                  contact@quantalabs.cc
                </a>
              </div>

              <div className="p-10 border-b-2 border-black">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-serif text-3xl text-black group-hover:text-[#C4ED5F] transition-colors mb-4 relative z-10 leading-none inline-block">
                    Δ
                  </span>
                  <h3 className="text-sm font-bold text-black">Headquarters</h3>
                </div>
                <address className="not-italic text-sm font-medium text-gray-600 leading-relaxed">
                  QuantaLabs Private Limited
                  <br />
                  Coimbatore, Tamil Nadu
                  <br />
                  India
                </address>
              </div>

              <div className="p-10 bg-[#C4ED5F] mt-auto relative overflow-hidden border-l border-black/10">
                <div
                  className="absolute inset-0 opacity-30 pointer-events-none"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.15) 1px, transparent 1px)`,
                    backgroundSize: "24px 24px",
                  }}
                ></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 bg-black"></div>
                    <h3 className="font-mono text-[10px] font-bold text-black uppercase tracking-widest">
                      PGP Key
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-black/70 mb-6 leading-relaxed">
                    For secure transmission of vulnerability reports or
                    sensitive infrastructural diagrams, use our public PGP key.
                  </p>
                  <a
                    href="/quantalabs.asc"
                    download="quantalabs.asc"
                    className="inline-flex items-center gap-2 font-bold text-black text-xs uppercase tracking-widest hover:underline decoration-2 underline-offset-4"
                  >
                    Download Key
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
