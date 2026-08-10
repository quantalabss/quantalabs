import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';
import { ArrowUpRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | QuantaLabs',
  description: 'Research, updates, and deep-tech insights from the QuantaLabs team.',
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="pt-32 min-h-screen pb-32 bg-transparent text-[#141413] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16 md:mb-24 relative">
          <span className="text-gray-500 font-mono tracking-widest uppercase text-[10px] mb-6 block">
            Research & Updates
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight text-[#141413] mb-8 leading-[1.05]">
            The <span className="text-gray-400">QuantaLabs</span> Blog.
          </h1>
          <p className="text-lg md:text-xl text-gray-500 font-normal leading-relaxed max-w-2xl">
            Deep-tech insights into post-quantum cryptography, autonomous AI agents, and institutional blockchain infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <article className="h-full bg-white border border-[#e8e6dc] p-8 flex flex-col justify-between hover:border-[#C04A2B] transition-colors duration-500 shadow-sm hover:shadow-md relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400">
                      {post.date}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-[#C04A2B] transition-colors duration-300" />
                  </div>
                  <h2 className="text-2xl font-display font-medium text-[#141413] mb-4 leading-tight group-hover:text-[#C04A2B] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
                <div className="relative z-10 mt-8 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-widest text-[#C04A2B] uppercase">Read Article</span>
                  <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase">{post.author}</span>
                </div>
              </article>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
