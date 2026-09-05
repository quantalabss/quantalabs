import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';
import { ArrowUpRight, ChevronRight } from 'lucide-react';

export default function BlogTeaser() {
  const posts = getAllPosts();
  if (!posts || posts.length === 0) return null;
  
  // Reuse the same logic to find the featured post
  const featuredPost = posts.find(p => p.slug.includes('hybrid')) || posts[0];

  return (
    <section className="py-24 md:py-32 bg-transparent text-[#141413] font-sans border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 bg-white border border-gray-200 mb-6 shadow-sm">
            <span className="w-1.5 h-1.5 bg-[#C04A2B]"></span>
            <span className="text-[10px] tracking-[0.2em] text-gray-500 uppercase font-mono font-medium">
              Latest from the Blog
            </span>
          </div>
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-display font-medium tracking-tight leading-[1.1] text-[#141413] max-w-2xl">
            Engineering insights & <br className="hidden sm:block" />
            industry perspectives.
          </h2>
        </div>

        {/* Featured Post Card */}
        <Link href={`/blog/${featuredPost.slug}`} className="group block max-w-6xl mx-auto">
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

        <div className="mt-16 text-center">
          <Link href="/blog" className="inline-flex items-center gap-2 px-6 py-3 bg-[#141413] text-white text-[10px] font-mono uppercase tracking-widest hover:bg-[#C04A2B] transition-colors duration-300 shadow-md hover:shadow-lg">
            View All Articles <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
