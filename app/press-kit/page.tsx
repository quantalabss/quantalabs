import Image from "next/image";
import Link from "next/link";
import { Download, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Press Kit & Brand Assets | Quantalabs",
  description: "Official Quantalabs logos, brand assets, and media guidelines.",
};

export default function PressKit() {
  return (
    <main className="min-h-screen bg-[#FAF9F5] text-[#141413] selection:bg-[#C04A2B] selection:text-[#FAF9F5] flex flex-col">
      <Navbar />
      
      <div className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 w-full">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gray-500 mb-12">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#C04A2B]">Press Kit</span>
        </div>

        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-6">
            Brand Assets
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl font-sans leading-relaxed">
            Download official Quantalabs logos and brand assets for media, press, and partnerships. 
            Please do not modify, distort, or alter the colors of our logo.
          </p>
        </div>

        {/* Logo Section */}
        <div className="space-y-12">
          <section>
            <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-gray-400 font-medium mb-6">Primary Mark</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Logo Preview Card */}
              <div className="bg-white border border-gray-200 rounded-xl p-12 flex items-center justify-center aspect-square md:aspect-auto shadow-sm">
                <svg
                  width="128"
                  height="128"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-32 h-32"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 2H18L17 7L22 6V18L17 17L18 22H6L7 17L2 18V6L7 7Z M9 9V15H15V9H9Z"
                    fill="#C04A2B"
                  />
                </svg>
              </div>

              {/* Downloads */}
              <div className="flex flex-col justify-center space-y-8">
                <div>
                  <h3 className="text-xl font-display font-medium mb-2">Quantalabs Cross</h3>
                  <p className="text-sm text-gray-500 mb-6">
                    Our primary brand mark. Designed with an algorithmic cross pattée form and precise geometric cuts. 
                    Best used for avatars, social media (PFPs), and partner lockups.
                  </p>
                </div>

                <div className="space-y-3">
                  <a 
                    href="/logo/quanta-logo-new.svg" 
                    download
                    className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg hover:border-[#C04A2B] hover:text-[#C04A2B] transition-colors group"
                  >
                    <div className="flex flex-col">
                      <span className="font-medium text-sm">Vector (SVG)</span>
                      <span className="text-xs text-gray-400 group-hover:text-[#C04A2B]/70 transition-colors">Infinitely scalable, recommended for web and print.</span>
                    </div>
                    <Download className="w-5 h-5 text-gray-300 group-hover:text-[#C04A2B] transition-colors" />
                  </a>

                  <a 
                    href="/logo/quantalabs-logo-transparent.png" 
                    download
                    className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg hover:border-[#C04A2B] hover:text-[#C04A2B] transition-colors group"
                  >
                    <div className="flex flex-col">
                      <span className="font-medium text-sm">Transparent PNG</span>
                      <span className="text-xs text-gray-400 group-hover:text-[#C04A2B]/70 transition-colors">High-res 512x512 with proper padding.</span>
                    </div>
                    <Download className="w-5 h-5 text-gray-300 group-hover:text-[#C04A2B] transition-colors" />
                  </a>

                  <a 
                    href="/logo/quantalabs-logo-white-bg.png" 
                    download
                    className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg hover:border-[#C04A2B] hover:text-[#C04A2B] transition-colors group"
                  >
                    <div className="flex flex-col">
                      <span className="font-medium text-sm">White Background PNG</span>
                      <span className="text-xs text-gray-400 group-hover:text-[#C04A2B]/70 transition-colors">Ideal for social media profiles (Twitter, LinkedIn).</span>
                    </div>
                    <Download className="w-5 h-5 text-gray-300 group-hover:text-[#C04A2B] transition-colors" />
                  </a>
                </div>
              </div>

            </div>
          </section>

          <section className="mt-20 border-t border-gray-200 pt-16">
            <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-gray-400 font-medium mb-8">Brand Colors</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <div className="h-24 bg-[#141413] w-full" />
                <div className="p-4">
                  <div className="font-medium text-sm mb-1">Charcoal</div>
                  <div className="font-mono text-xs text-gray-500 uppercase">#141413</div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <div className="h-24 bg-[#C04A2B] w-full" />
                <div className="p-4">
                  <div className="font-medium text-sm mb-1">Rust Red</div>
                  <div className="font-mono text-xs text-gray-500 uppercase">#C04A2B</div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <div className="h-24 bg-[#FAF9F5] border-b border-gray-100 w-full" />
                <div className="p-4">
                  <div className="font-medium text-sm mb-1">Parchment</div>
                  <div className="font-mono text-xs text-gray-500 uppercase">#FAF9F5</div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <div className="h-24 bg-white border-b border-gray-100 w-full" />
                <div className="p-4">
                  <div className="font-medium text-sm mb-1">Pure White</div>
                  <div className="font-mono text-xs text-gray-500 uppercase">#FFFFFF</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
