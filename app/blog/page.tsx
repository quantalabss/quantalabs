import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | QuantaLabs",
  description: "Latest insights on post-quantum cryptography, CBOMs, and sovereign infrastructure.",
};

export default function BlogPage() {
  return (
    <div className="bg-white min-h-screen pt-28 pb-24 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header */}
        <div className="border border-gray-200 shadow-sm bg-white mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-8 p-10 md:p-16 border-b lg:border-b-0 lg:border-r border-black/10 bg-[#C4ED5F] relative">
              <div 
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.15) 1px, transparent 1px)`,
                  backgroundSize: "24px 24px"
                }}
              ></div>
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="w-2 h-2 bg-black"></div>
                <span className="font-mono text-[10px] tracking-[0.2em] text-black/60 uppercase font-bold">
                  QuantaLabs Intelligence
                </span>
              </div>
              <h1 className="text-[3rem] md:text-[5rem] font-black tracking-tighter leading-[0.95] text-black relative z-10">
                The Protocol<br/>Blog.
              </h1>
            </div>
            <div className="lg:col-span-4 p-10 flex flex-col justify-end bg-[#C4ED5F] relative overflow-hidden border-l border-black/10">
              <div
                className="absolute inset-0 opacity-[0.15] pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)`,
                  backgroundSize: "20px 20px"
                }}
              ></div>
              <span className="absolute top-8 right-8 text-[6rem] font-black text-black leading-none select-none">λ</span>
              <p className="text-sm text-black font-medium relative z-10">
                Analysis, engineering updates, and regulatory insights from the frontier of post-quantum cryptography.
              </p>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="border border-gray-200 shadow-sm bg-white overflow-hidden">
          <div className="grid grid-cols-1">
            {blogPosts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={`group flex flex-col md:flex-row md:items-stretch hover:bg-gray-50 transition-colors ${index !== blogPosts.length - 1 ? 'border-b border-gray-200' : ''}`}
              >
                {/* Meta Column */}
                <div className="w-full md:w-64 p-8 border-b md:border-b-0 md:border-r border-gray-200 flex flex-row md:flex-col justify-between md:justify-start items-center md:items-start bg-gray-50/30 group-hover:bg-white transition-colors">
                  <span className="font-mono text-[10px] font-bold text-gray-400">
                    {post.date}
                  </span>
                  <div className="flex flex-col gap-2 mt-0 md:mt-4">
                    {post.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="font-mono text-[9px] font-bold uppercase tracking-widest text-black bg-[#C4ED5F] px-2 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content Column */}
                <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
                  <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 group-hover:text-[#8ab329] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-600 font-medium leading-relaxed max-w-3xl">
                    {post.excerpt}
                  </p>
                </div>

                {/* Action Column */}
                <div className="w-full md:w-24 p-6 border-t md:border-t-0 md:border-l border-gray-200 flex items-center justify-center bg-white group-hover:bg-[#C4ED5F] transition-colors">
                  <ArrowUpRight className="w-6 h-6 text-gray-300 group-hover:text-black transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
