import { Metadata } from "next";
import { ArrowUpRight, EyeOff, Scale, LayoutTemplate } from "lucide-react";

export const metadata: Metadata = {
  title: "Ornyx Protocol | QuantaLabs",
  description: "Privacy-first Real World Asset (RWA) protocol on Aztec Network.",
};

export default function OrnyxPage() {
  return (
    <div className="bg-white min-h-screen pt-28 pb-24 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="border border-gray-200 shadow-sm bg-white mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-8 p-10 md:p-16 border-b lg:border-b-0 lg:border-r border-gray-200 bg-gray-50/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-black"></div>
                <span className="font-mono text-[10px] tracking-[0.2em] text-gray-500 uppercase font-bold">
                  Ecosystem // L2 Privacy
                </span>
              </div>
              <h1 className="text-[3rem] md:text-[5rem] font-black tracking-tighter leading-[0.95] text-black">
                <span className="text-[#C4ED5F]">Ornyx</span> <span className="relative inline-block mt-1">Protocol.<span className="absolute bottom-1 left-0 w-full h-[6px] bg-[#C4ED5F] -z-10"></span></span>
              </h1>
            </div>
            
            <div className="lg:col-span-4 p-10 flex flex-col justify-end bg-[#C4ED5F] relative overflow-hidden">
               <div 
                className="absolute inset-0 opacity-[0.15] pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)`,
                  backgroundSize: "20px 20px"
                }}
              ></div>
              <span className="absolute top-8 right-8 text-[6rem] font-black text-black/10 leading-none select-none">∇</span>
              <p className="text-sm text-black font-medium relative z-10">
                A modular, compliance-ready protocol for tokenizing real-world assets on Aztec Network. Hold your assets privately while allowing regulators to audit holdings via cryptographic viewing keys.
              </p>
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="border border-gray-200 shadow-sm bg-white overflow-hidden mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="p-8">
              <EyeOff className="w-6 h-6 mb-4 text-[#C4ED5F]" />
              <h3 className="font-bold text-lg mb-2">Private Ownership</h3>
              <p className="text-sm text-gray-600">Individual holdings are encrypted. Only the holder can see their balance, shielding financial positions from market competitors.</p>
            </div>
            <div className="p-8">
              <Scale className="w-6 h-6 mb-4 text-black" />
              <h3 className="font-bold text-lg mb-2">Compliance by Design</h3>
              <p className="text-sm text-gray-600">Built-in KYC approval hooks via <code className="text-xs bg-gray-100 p-1">OryxCompliance</code> and selective disclosure for regulators.</p>
            </div>
            <div className="p-8">
              <LayoutTemplate className="w-6 h-6 mb-4 text-black" />
              <h3 className="font-bold text-lg mb-2">Modular Noir Contracts</h3>
              <p className="text-sm text-gray-600">Composable architecture featuring OryxAsset (Token), OryxRegistry (Catalog), and OryxCompliance (KYC/Viewing Keys).</p>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 shadow-sm bg-[#C4ED5F] p-10 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
             <h3 className="font-bold text-black mb-2">Aztec Foundation Grant Project</h3>
             <p className="text-sm text-black/70 font-medium max-w-2xl">
               Ornyx leverages Aztec's unique hybrid public/private state model. Total supply and metadata remain public for transparency, while balances and transfers remain strictly private.
             </p>
          </div>
          <a href="https://ornyx.xyz" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-[#C4ED5F] text-black font-bold text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-colors flex items-center gap-2 whitespace-nowrap border border-[#C4ED5F] hover:border-black">
            Visit Ornyx.xyz
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
}
