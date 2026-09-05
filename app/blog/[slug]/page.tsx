import { getPostBySlug, getAllPosts } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import Link from 'next/link';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { notFound } from 'next/navigation';
import ShareButton from '@/components/ShareButton';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost(props: { params: Promise<{ slug: string }> }) {
  try {
    const params = await props.params;
    const post = getPostBySlug(params.slug);
    
    return (
      <article className="min-h-screen bg-[#FAF9F5] font-sans">
        
        {/* Light Theme Post Hero Section */}
        <header className="relative pt-48 pb-16 md:pt-56 md:pb-24 overflow-hidden border-b border-gray-200">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Link href="/blog" className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-gray-500 hover:text-[#C04A2B] transition-colors mb-12">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
            
            <div className="flex flex-wrap items-center gap-6 mb-8 text-[11px] font-mono uppercase tracking-widest text-gray-500">
              <span className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-[#C04A2B]" /> {post.date}
              </span>
              <span className="w-1 h-1 rounded-full bg-gray-300"></span>
              <span className="flex items-center gap-2 text-[#141413]">
                <User className="w-3.5 h-3.5 text-[#C04A2B]" /> {post.author}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-[#141413] leading-[1.1] mb-6 tracking-tight">
              {post.title}
            </h1>
            
            {post.excerpt && (
              <p className="text-base md:text-lg text-gray-500 font-normal leading-relaxed max-w-3xl mb-8">
                {post.excerpt}
              </p>
            )}

            {post.image && (
              <div className="mt-10 md:mt-12 w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-gray-800/10 relative aspect-[21/9]">
                <img src={post.image} alt={post.title} className="object-cover w-full h-full" />
              </div>
            )}
          </div>
        </header>

        {/* Post Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="prose prose-lg md:prose-xl max-w-none text-gray-700 leading-relaxed
            prose-headings:font-display prose-headings:font-medium prose-headings:text-[#141413] prose-headings:tracking-tight
            prose-h1:text-3xl md:prose-h1:text-4xl prose-h1:mt-12 md:prose-h1:mt-16 prose-h1:mb-6 md:prose-h1:mb-8
            prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:mt-12 md:prose-h2:mt-16 prose-h2:mb-6
            prose-h3:text-xl md:prose-h3:text-2xl prose-h3:mt-8 md:prose-h3:mt-10 prose-h3:mb-4
            prose-p:mb-6 md:prose-p:mb-8
            prose-a:text-[#C04A2B] prose-a:no-underline hover:prose-a:underline hover:prose-a:text-[#141413]
            prose-blockquote:border-l-4 prose-blockquote:border-[#C04A2B] prose-blockquote:pl-6 prose-blockquote:py-2 prose-blockquote:bg-white/50 prose-blockquote:rounded-r-xl prose-blockquote:italic prose-blockquote:text-gray-600
            prose-strong:text-[#141413] prose-strong:font-semibold
            prose-code:text-[#C04A2B] prose-code:bg-[#e8e6dc]/30 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none
            prose-pre:rounded-xl md:prose-pre:rounded-2xl prose-pre:p-6 md:prose-pre:p-8 prose-pre:shadow-xl prose-pre:border prose-pre:border-gray-800
            [&_pre_code]:bg-transparent [&_pre_code]:text-inherit [&_pre_code]:p-0
            marker:text-[#C04A2B]">
            <MDXRemote 
              source={post.content} 
              options={{
                mdxOptions: {
                  rehypePlugins: [
                    [rehypePrettyCode, { theme: 'github-dark' }]
                  ]
                }
              }}
            />
          </div>

          {/* Footer Share/Actions */}
          <div className="mt-16 md:mt-20 pt-8 md:pt-10 border-t border-[#e8e6dc] flex flex-col sm:flex-row items-center justify-between gap-6">
            <ShareButton title={post.title} />
          </div>
        </div>

      </article>
    );
  } catch (e) {
    notFound();
  }
}
