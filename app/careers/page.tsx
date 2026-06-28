import { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers | QuantaLabs",
  description:
    "Join the protocol engineering team securing the post-quantum future.",
};

const OPEN_POSITIONS = [
  {
    role: "Senior Cryptography Engineer (Rust)",
    type: "FULL-TIME",
    location: "COIMBATORE / REMOTE",
    department: "CORE PROTOCOL",
    id: "REQ-042",
  },
  {
    role: "Protocol Auditor (ZKP/PQC)",
    type: "FULL-TIME",
    location: "REMOTE (INDIA ONLY)",
    department: "SECURITY",
    id: "REQ-043",
  },
  {
    role: "Blockchain Systems Architect",
    type: "FULL-TIME",
    location: "COIMBATORE",
    department: "INFRASTRUCTURE",
    id: "REQ-044",
  },
  {
    role: "Developer Relations Engineer",
    type: "FULL-TIME",
    location: "REMOTE",
    department: "ECOSYSTEM",
    id: "REQ-045",
  },
];

export default function CareersPage() {
  return (
    <div className="bg-white min-h-screen pt-28 pb-24 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-8 p-10 md:p-16 border-b-2 lg:border-b-0 lg:border-r-2 border-black bg-[#C4ED5F] relative">
              <div
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.15) 1px, transparent 1px)`,
                  backgroundSize: "24px 24px",
                }}
              ></div>
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="w-2 h-2 bg-black"></div>
                <span className="font-mono text-[10px] tracking-[0.2em] text-black/60 uppercase font-bold">
                  Careers & Recruitment
                </span>
              </div>
              <h1 className="text-[3rem] md:text-[5rem] font-black tracking-tighter leading-[0.95] text-black relative z-10">
                Build the
                <br />
                safeguards.
              </h1>
            </div>
            <div className="lg:col-span-4 p-10 flex flex-col justify-end bg-[#C4ED5F] relative overflow-hidden border-l-2 border-black">
              <div
                className="absolute inset-0 opacity-[0.15] pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)`,
                  backgroundSize: "20px 20px",
                }}
              ></div>
              <span className="absolute top-8 right-8 text-[6rem] font-black text-black leading-none select-none">
                ∏
              </span>
              <p className="text-sm text-black font-medium relative z-10">
                We are actively recruiting the top 1% of protocol engineers,
                cryptographers, and distributed systems experts. Join the
                vanguard.
              </p>
            </div>
          </div>
        </div>

        {/* How to Apply notice */}
        <div className="border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-[#C4ED5F]/10 px-8 py-5 mb-8 flex items-start gap-4">
          <span className="font-serif text-3xl text-black group-hover:text-[#C4ED5F] transition-colors mb-4 relative z-10 leading-none inline-block">
            Φ
          </span>
          <div>
            <p className="text-sm font-bold text-black mb-1">
              To apply for any position, email your resume & cover letter to:
            </p>
            <a
              href="mailto:hr@quantalabs.cc"
              className="font-mono text-sm font-bold text-black underline underline-offset-2 hover:no-underline"
            >
              hr@quantalabs.cc
            </a>
            <p className="text-xs text-black/60 mt-1 font-medium">
              Include the role title and REQ number in the subject line.
            </p>
          </div>
        </div>

        {/* Job Board Table */}
        <div className="border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white overflow-hidden">
          <div className="bg-gray-100 border-b-2 border-black px-8 py-4 hidden md:grid grid-cols-12 gap-4">
            <div className="col-span-5 font-mono text-[10px] font-bold text-gray-500 uppercase tracking-widest">
              Role
            </div>
            <div className="col-span-3 font-mono text-[10px] font-bold text-gray-500 uppercase tracking-widest">
              Department
            </div>
            <div className="col-span-3 font-mono text-[10px] font-bold text-gray-500 uppercase tracking-widest">
              Location
            </div>
            <div className="col-span-1"></div>
          </div>

          <div className="flex flex-col">
            {OPEN_POSITIONS.map((job, index) => (
              <a
                key={job.id}
                href={`mailto:hr@quantalabs.cc?subject=Application: ${encodeURIComponent(job.role)} – ${job.id}`}
                className={`group px-8 py-6 md:py-8 flex flex-col md:grid md:grid-cols-12 md:gap-4 md:items-center hover:bg-gray-50 transition-colors ${
                  index !== OPEN_POSITIONS.length - 1
                    ? "border-b-2 border-black"
                    : ""
                }`}
              >
                <div className="md:col-span-5 mb-4 md:mb-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-[9px] font-bold text-black bg-[#C4ED5F] px-1.5 py-0.5">
                      {job.id}
                    </span>
                    <span className="font-mono text-[9px] font-bold text-gray-400">
                      {job.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-black group-hover:text-[#8ab329] transition-colors">
                    {job.role}
                  </h3>
                </div>

                <div className="md:col-span-3 mb-2 md:mb-0">
                  <span className="font-mono text-xs font-bold text-gray-500 md:hidden mr-2">
                    DEPT:
                  </span>
                  <span className="text-sm font-bold text-black">
                    {job.department}
                  </span>
                </div>

                <div className="md:col-span-3 mb-4 md:mb-0">
                  <span className="font-mono text-xs font-bold text-gray-500 md:hidden mr-2">
                    LOC:
                  </span>
                  <span className="text-sm font-medium text-gray-600">
                    {job.location}
                  </span>
                </div>

                <div className="md:col-span-1 flex justify-end">
                  <div className="w-10 h-10 border-2 border-black bg-white flex items-center justify-center group-hover:bg-black group-hover:border-black transition-colors">
                    <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* General Application Footer */}
          <div className="bg-gray-50 border-t-2 border-black px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-bold text-black mb-1">
                Don&apos;t see a fit?
              </h3>
              <p className="text-sm text-gray-600">
                Send your resume anyway. We&apos;re always looking for
                exceptional talent.
              </p>
            </div>
            <a
              href="mailto:hr@quantalabs.cc?subject=Open Application – QuantaLabs"
              className="px-6 py-3 bg-[#C4ED5F] border-2 border-transparent text-black font-bold text-xs uppercase tracking-widest hover:bg-white hover:border-black transition-all whitespace-nowrap shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] md:shadow-none"
            >
              Submit Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
