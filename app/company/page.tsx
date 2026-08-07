// CHANGED: Redesigned for Deep Tech Light Mode aesthetic and renamed to "About Us".
// DATE: 2026-08-07 | VERSION: 4.0
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | QuantaLabs",
  description:
    "Engineering sovereign infrastructure at the frontier of post-quantum cryptography.",
};

export default function AboutUsPage() {
  return (
    <div className="bg-transparent min-h-screen pt-32 pb-24 text-[#141413] font-sans selection:bg-[#C04A2B] selection:text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mb-16 pb-12 border-b border-gray-200">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 mb-8 shadow-sm">
            <span className="w-1.5 h-1.5 bg-[#C04A2B]"></span>
            <span className="text-[10px] tracking-[0.2em] text-gray-500 uppercase font-mono font-medium">About Us</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight text-[#141413] leading-[1.05]">
            QuantaLabs <br/><span className="text-gray-400">Private Limited.</span>
          </h1>
          <p className="mt-8 text-lg text-gray-600 max-w-2xl font-normal leading-relaxed">
            We are the protocol engineering lab building the execution layer for the autonomous AI economy, secured by post-quantum cryptography.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Sidebar Meta */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white border border-[#C04A2B] p-8 shadow-sm space-y-8 relative overflow-hidden group transition-colors">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>
              <div className="relative z-10">
                <h3 className="font-mono text-[10px] text-[#141413] font-medium uppercase tracking-widest mb-2">
                  Headquarters
                </h3>
                <p className="text-sm font-medium text-gray-600">
                  Coimbatore, Tamil Nadu<br />
                  India
                </p>
              </div>
              <div className="relative z-10">
                <h3 className="font-mono text-[10px] text-[#141413] font-medium uppercase tracking-widest mb-2">
                  Focus Areas
                </h3>
                <ul className="text-sm font-medium text-gray-600 space-y-2">
                  <li>Enterprise AI Integration</li>
                  <li>AI Autonomous Agents</li>
                  <li>NIST FIPS 203/204/205</li>
                  <li>Sovereign Blockchain</li>
                </ul>
              </div>
              <div className="relative z-10">
                <h3 className="font-mono text-[10px] text-[#141413] font-medium uppercase tracking-widest mb-2">
                  Entity ID
                </h3>
                <p className="text-[10px] font-mono text-[#141413] bg-white border border-gray-200 p-2 inline-block shadow-sm">
                  QL-IN-2026-9A
                </p>
              </div>
            </div>
          </div>

          {/* Main Article */}
          <div className="w-full lg:w-2/3">
            <article className="prose prose-gray max-w-none text-gray-600 font-normal leading-relaxed text-base">
              <h2 className="text-2xl font-display font-medium text-[#141413] mb-6">
                The Machine-to-Machine Economy
              </h2>
              <p className="mb-6">
                As AI models evolve into autonomous agents, the internet is transitioning into a Machine-to-Machine (M2M) economy. Agents must coordinate, transact, and execute logic with absolute deterministic finality, free from human intervention.
              </p>
              <p className="mb-6">
                QuantaLabs was founded to build the sovereign infrastructure for this new frontier. We engineer the cryptographic safeguards required to ensure that agent-to-agent transactions remain secure against both classical exploitation and future quantum adversaries.
              </p>

              <h2 className="text-2xl font-display font-medium text-[#141413] mt-12 mb-6">
                Our Mission
              </h2>
              <p className="mb-6">
                Our mission is to deploy QuantaChain—a lattice-secured (FIPS 203/204) blockchain designed specifically as the trust and execution layer for autonomous AI agents. We provide the protocol foundations for agents to securely own assets, sign transactions, and interact across decentralized networks.
              </p>

              <blockquote className="border-l-4 border-[#C04A2B] pl-6 my-10 py-4 italic text-lg text-[#141413] bg-white border border-y-gray-200 border-r-gray-200 shadow-sm relative overflow-hidden group">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>
                <div className="relative z-10 p-4">
                  &quot;We do not build speculative cryptography. We build the deterministic, mathematically verified infrastructure necessary for machines to trust each other.&quot;
                </div>
              </blockquote>

              <h2 className="text-2xl font-display font-medium text-[#141413] mt-12 mb-6">
                Enterprise AI Integration
              </h2>
              <p className="mb-6">
                While our research lab focuses on next-generation cryptographic protocols, our primary commercial engine is <strong>Enterprise AI Integration</strong>. We help Fortune 500 companies and government agencies seamlessly integrate deterministic, secure AI workflows into their existing infrastructure. 
              </p>
              <p className="mb-6">
                From custom LLM deployments and RAG architectures to fully autonomous internal agents, we build the bridges that allow traditional enterprises to operate at the speed of the AI economy—without compromising on data sovereignty or security.
              </p>

              <h2 className="text-2xl font-display font-medium text-[#141413] mt-12 mb-6">
                The QuantaLabs Difference
              </h2>
              <p className="mb-6">
                We sit at the intersection of applied AI engineering and advanced cryptography. Whether we are migrating your enterprise data lakes to autonomous AI workflows or orchestrating zero-knowledge agent networks on QuantaChain, we don&apos;t just write reports; we deploy sovereign, production-ready code.
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
