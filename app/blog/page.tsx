import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | QuantaLabs',
  description: 'Deep-tech insights into post-quantum cryptography and autonomous AI agents.',
};

export default function BlogIndex() {
  const posts = getAllPosts();
  
  if (!posts || posts.length === 0) {
    return <div className="min-h-screen pt-32 text-center text-gray-500">No posts found.</div>;
  }

  // Force the Hybrid Migration post to be featured
  const featuredPost = posts.find(p => p.slug.includes('hybrid')) || posts[0];
  const regularPosts = posts.filter(p => p.slug !== featuredPost.slug);

  return (
    <div className="min-h-screen bg-transparent text-[#141413] font-sans pb-32">
      {/* Light Theme Hero Section */}
      <div className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-gray-200 pb-12">
            <div className="max-w-3xl">
              <span className="text-gray-500 font-mono tracking-widest uppercase text-[10px] mb-6 block">
                Research & Updates
              </span>
              <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight mb-6 leading-[1.05] text-[#141413]">
                The <span className="text-gray-400">QuantaLabs</span> Blog.
              </h1>
              <p className="text-lg md:text-xl text-gray-500 font-normal leading-relaxed">
                Technical guides, research, and deep-dives into M2M economies, cryptography, and QuantaCipher architecture.
              </p>
            </div>
            <div className="hidden md:block mb-2">
              <div className="text-[10px] font-mono uppercase tracking-widest text-gray-400 text-right">
                Total Articles <br/>
                <span className="text-[#141413] text-lg">{posts.length}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Featured Post */}
        <Link href={`/blog/${featuredPost.slug}`} className="group block mb-16 md:mb-24">
          <article className="bg-white shadow-sm border border-[#e8e6dc] transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-[#C04A2B] overflow-hidden flex flex-col lg:flex-row">
            
            <div className="w-full lg:w-1/2 relative min-h-[300px] lg:min-h-[450px] overflow-hidden bg-gray-100">
              <img 
                src={featuredPost.image || "/images/blog/hybrid-hero.jpg"} 
                alt={featuredPost.title} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/10"></div>
              
              <div className="absolute top-4 right-4 md:top-8 md:right-8 z-20">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 backdrop-blur-md border border-white flex items-center justify-center transform group-hover:scale-110 group-hover:bg-[#C04A2B] group-hover:border-[#C04A2B] transition-all duration-300 shadow-sm">
                  <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-[#141413] group-hover:text-white transition-colors" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 z-20">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#C04A2B] text-white text-[10px] font-mono uppercase tracking-widest shadow-sm">
                  Featured Article
                </span>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 p-8 md:p-14 flex flex-col justify-center bg-white relative">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 text-[10px] md:text-[11px] font-mono uppercase tracking-widest text-gray-400 mb-4 md:mb-6">
                  <span className="text-[#C04A2B] font-semibold">{featuredPost.date}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                  <span>{featuredPost.author}</span>
                </div>
                <h2 className="text-2xl md:text-4xl font-display font-medium text-[#141413] mb-4 md:mb-6 leading-tight md:leading-[1.1] group-hover:text-[#C04A2B] transition-colors duration-300">
                  {featuredPost.title}
                </h2>
                <p className="text-sm md:text-base text-gray-500 leading-relaxed line-clamp-3 md:line-clamp-4 mb-6 md:mb-8">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center text-[10px] md:text-[11px] font-mono uppercase tracking-widest text-[#141413] group-hover:text-[#C04A2B] font-semibold transition-colors">
                  Read Full Post <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
            
          </article>
        </Link>

        {/* Regular Posts Grid */}
        <div className="flex items-center justify-between border-b border-[#e8e6dc] pb-4 mb-8 md:mb-10">
          <h3 className="text-xl md:text-2xl font-display font-medium text-[#141413]">Recent Publications</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {regularPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex h-full">
              <article className="flex flex-col h-full w-full bg-white border border-[#e8e6dc] overflow-hidden hover:border-[#C04A2B] hover:shadow-lg transition-all duration-500 relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>
                
                {post.image && (
                  <div className="h-48 md:h-56 w-full border-b border-[#e8e6dc] overflow-hidden relative z-10">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                )}
                
                <div className="p-6 md:p-8 flex flex-col flex-grow relative z-10">
                  <div className="flex items-center justify-between mb-4 md:mb-6">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400">
                      {post.date}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-[#C04A2B] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300" />
                  </div>
                  <h2 className="text-lg md:text-xl font-display font-medium text-[#141413] mb-3 md:mb-4 leading-snug group-hover:text-[#C04A2B] transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 md:line-clamp-4 mb-6 md:mb-8 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto pt-4 md:pt-6 border-t border-gray-100 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest">
                    <span className="text-gray-400">{post.author}</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
