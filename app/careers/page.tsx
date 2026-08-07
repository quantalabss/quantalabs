// CHANGED: Redesigned for Deep Tech Light Mode aesthetic.
// DATE: 2026-08-07 | VERSION: 4.0
import { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers | QuantaLabs",
  description:
    "Join the protocol engineering team securing the post-quantum future.",
};

const OPEN_POSITIONS = [
  {
    role: "AI Engineer",
    type: "FULL-TIME",
    location: "COIMBATORE / REMOTE",
    department: "AI INFRASTRUCTURE",
    id: "REQ-042",
  },
  {
    role: "Enterprise Sales Executive",
    type: "FULL-TIME",
    location: "REMOTE",
    department: "SALES",
    id: "REQ-043",
  },
  {
    role: "Cryptographic Engineer",
    type: "FULL-TIME",
    location: "COIMBATORE / REMOTE",
    department: "CORE PROTOCOL",
    id: "REQ-044",
  },
];

export default function CareersPage() {
  return (
    <div className="bg-transparent min-h-screen pt-32 pb-24 text-[#141413] font-sans selection:bg-[#C04A2B] selection:text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mb-16 pb-12 border-b border-gray-200">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 mb-8 shadow-sm">
            <span className="w-1.5 h-1.5 bg-[#C04A2B]"></span>
            <span className="text-[10px] tracking-[0.2em] text-gray-500 uppercase font-mono font-medium">Careers</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight text-[#141413] leading-[1.05]">
            Build the <br/><span className="text-gray-400">safeguards.</span>
          </h1>
          <p className="mt-8 text-lg text-gray-600 max-w-2xl font-normal leading-relaxed">
            We are actively recruiting the top 1% of protocol engineers, cryptographers, and distributed systems experts. Join the vanguard.
          </p>
        </div>

        {/* How to Apply notice */}
        <div className="bg-white border border-[#C04A2B] p-8 mb-12 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden group transition-colors">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>
          <div className="relative z-10">
            <p className="text-sm font-medium text-[#141413] mb-1">
              To apply for any position, email your resume & cover letter to:
            </p>
            <p className="text-xs text-gray-500 mt-1 font-normal">
              Include the role title and REQ number in the subject line.
            </p>
          </div>
          <a
            href="mailto:hr@quantalabs.cc"
            className="relative z-10 inline-flex items-center gap-2 px-6 py-3 bg-[#C04A2B] text-white font-mono text-[10px] uppercase tracking-widest hover:bg-[#141413] transition-all shadow-sm shrink-0"
          >
            hr@quantalabs.cc <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Job Board List */}
        <div className="flex flex-col gap-4">
          <div className="hidden md:grid grid-cols-12 gap-4 px-6 pb-2 border-b border-gray-200">
            <div className="col-span-6 font-mono text-[10px] text-gray-400 uppercase tracking-widest">Role</div>
            <div className="col-span-3 font-mono text-[10px] text-gray-400 uppercase tracking-widest">Department</div>
            <div className="col-span-3 font-mono text-[10px] text-gray-400 uppercase tracking-widest">Location</div>
          </div>

          {OPEN_POSITIONS.map((job) => (
            <a
              key={job.id}
              href={`mailto:hr@quantalabs.cc?subject=Application: ${encodeURIComponent(job.role)} – ${job.id}`}
              className="group flex flex-col md:grid md:grid-cols-12 gap-4 p-6 bg-white border border-[#C04A2B] transition-colors shadow-sm items-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-1 h-full bg-[#C04A2B] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-full md:col-span-6 relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-[9px] text-white bg-[#C04A2B] px-1.5 py-0.5 uppercase tracking-widest">
                    {job.id}
                  </span>
                  <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest border border-gray-200 px-1.5 py-0.5">
                    {job.type}
                  </span>
                </div>
                <h3 className="text-base font-display font-medium text-[#141413] group-hover:text-gray-600 transition-colors">
                  {job.role}
                </h3>
              </div>

              <div className="w-full md:col-span-3 text-sm text-gray-600 font-normal relative z-10">
                <span className="md:hidden font-mono text-[10px] uppercase text-gray-400 mr-2">Dept:</span>
                {job.department}
              </div>

              <div className="w-full md:col-span-3 flex items-center justify-between relative z-10">
                <div className="text-sm text-gray-600 font-normal">
                  <span className="md:hidden font-mono text-[10px] uppercase text-gray-400 mr-2">Loc:</span>
                  {job.location}
                </div>
                <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-[#141413] transition-colors" />
              </div>
            </a>
          ))}
        </div>

        {/* General Application Footer */}
        <div className="mt-12 pt-12 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-base font-display font-medium text-[#141413] mb-1">
              Don&apos;t see a fit?
            </h3>
            <p className="text-sm text-gray-500 font-normal">
              Send your resume anyway. We&apos;re always looking for exceptional talent.
            </p>
          </div>
          <a
            href="mailto:hr@quantalabs.cc?subject=Open Application – QuantaLabs"
            className="px-6 py-3 bg-white border border-gray-200 text-[#141413] font-mono text-[10px] uppercase tracking-widest hover:border-[#141413] transition-all shadow-sm shrink-0"
          >
            Submit Resume
          </a>
        </div>
      </div>
    </div>
  );
}
