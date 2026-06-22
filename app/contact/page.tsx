import { Metadata } from "next";
import { Terminal, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | QuantaLabs",
  description: "Get in touch for CBOM audits and PQC migration services.",
};

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen pt-28 pb-24 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header */}
        <div className="border border-gray-200 shadow-sm bg-white mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-8 p-10 md:p-16 border-b lg:border-b-0 lg:border-r border-gray-200 bg-gray-50/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-[#C4ED5F]"></div>
                <span className="font-mono text-[10px] tracking-[0.2em] text-gray-500 uppercase font-bold">
                  Initiate Connection
                </span>
              </div>
              <h1 className="text-[3rem] md:text-[5rem] font-black tracking-tighter leading-[0.95] text-black">
                <span className="text-[#C4ED5F]">Secure your</span><br /><span className="relative inline-block mt-1">infrastructure.<span className="absolute bottom-1 left-0 w-full h-[6px] bg-[#C4ED5F] -z-10"></span></span>
              </h1>
            </div>

            <div className="lg:col-span-4 p-10 flex flex-col justify-end bg-black text-white relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
                  backgroundSize: "20px 20px"
                }}
              ></div>
              <span className="absolute top-8 right-8 text-[6rem] font-black text-[#C4ED5F]/10 leading-none select-none">∇</span>
              <p className="text-sm text-gray-300 font-medium relative z-10">
                Book a consultation with our protocol engineers to discuss your CBOM audit or PQC migration timeline.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Grid */}
        <div className="border border-gray-200 shadow-sm bg-white overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">

            {/* Contact Form */}
            <div className="lg:col-span-8 p-10 md:p-16 border-b lg:border-b-0 lg:border-r border-gray-200">

              <div className="flex items-center gap-2 mb-8">
                <Terminal className="w-5 h-5 text-gray-400" />
                <span className="font-mono text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  SYS.INPUT // CONTACT_FORM
                </span>
              </div>

              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2 relative">
                    <label className="font-mono text-[10px] font-bold text-gray-500 uppercase tracking-widest block">Full Name</label>
                    <input
                      type="text"
                      className="w-full bg-white border-b-2 border-gray-200 px-0 py-2 text-black focus:outline-none focus:border-black transition-colors rounded-none font-medium placeholder-gray-300"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2 relative">
                    <label className="font-mono text-[10px] font-bold text-gray-500 uppercase tracking-widest block">Work Email</label>
                    <input
                      type="email"
                      className="w-full bg-white border-b-2 border-gray-200 px-0 py-2 text-black focus:outline-none focus:border-black transition-colors rounded-none font-medium placeholder-gray-300"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-2 relative">
                  <label className="font-mono text-[10px] font-bold text-gray-500 uppercase tracking-widest block">Company Name</label>
                  <input
                    type="text"
                    className="w-full bg-white border-b-2 border-gray-200 px-0 py-2 text-black focus:outline-none focus:border-black transition-colors rounded-none font-medium placeholder-gray-300"
                    placeholder="Acme Financial Corp"
                  />
                </div>

                <div className="space-y-2 relative">
                  <label className="font-mono text-[10px] font-bold text-gray-500 uppercase tracking-widest block">Primary Objective</label>
                  <select className="w-full bg-white border-b-2 border-gray-200 px-0 py-2 text-black focus:outline-none focus:border-black transition-colors rounded-none font-medium appearance-none">
                    <option value="" disabled selected>Select an option...</option>
                    <option value="cbom">CBOM Audit (India DST Compliance)</option>
                    <option value="migration">PQC Migration & Engineering</option>
                    <option value="api">QuantaCipher API Access</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2 relative">
                  <label className="font-mono text-[10px] font-bold text-gray-500 uppercase tracking-widest block">Project Details</label>
                  <textarea
                    rows={4}
                    className="w-full bg-white border-b-2 border-gray-200 px-0 py-2 text-black focus:outline-none focus:border-black transition-colors rounded-none font-medium placeholder-gray-300 resize-none"
                    placeholder="Briefly describe your cryptographic infrastructure and timeline..."
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    className="group flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-black text-white font-bold hover:bg-[#C4ED5F] hover:text-black transition-colors text-xs uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(196,237,95,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
                  >
                    Transmit Request
                  </button>
                </div>
              </form>

            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-4 bg-gray-50 flex flex-col">

              <div className="p-10 border-b border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <h3 className="text-sm font-bold text-black">Direct Inquiries</h3>
                </div>
                <p className="text-sm font-medium text-gray-600 mb-2">For general questions and partnerships:</p>
                <a href="mailto:contact@quantalabs.cc" className="text-lg font-black text-black hover:text-[#8ab329] transition-colors underline decoration-2 underline-offset-4">
                  contact@quantalabs.cc
                </a>
              </div>

              <div className="p-10 border-b border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <h3 className="text-sm font-bold text-black">Headquarters</h3>
                </div>
                <address className="not-italic text-sm font-medium text-gray-600 leading-relaxed">
                  QuantaLabs Private Limited<br />
                  Coimbatore, Tamil Nadu<br />
                  India
                </address>
              </div>

              <div className="p-10 bg-[#C4ED5F] mt-auto relative overflow-hidden border-l border-black/10">
                <div 
                  className="absolute inset-0 opacity-30 pointer-events-none"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.15) 1px, transparent 1px)`,
                    backgroundSize: "24px 24px"
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
                    For secure transmission of vulnerability reports or sensitive infrastructural diagrams, use our public PGP key.
                  </p>
                  <a href="/quantalabs.asc" download="quantalabs.asc" className="inline-flex items-center gap-2 font-bold text-black text-xs uppercase tracking-widest hover:underline decoration-2 underline-offset-4">
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
