import { getPostBySlug, getAllPosts } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';

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
      <article className="pt-32 min-h-screen pb-32 bg-transparent font-sans">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gray-400 hover:text-[#C04A2B] transition-colors mb-16">
            <ArrowLeft className="w-4 h-4" /> Back to all posts
          </Link>
          
          <header className="mb-16 md:mb-24">
            <div className="flex items-center gap-4 mb-8 text-xs font-mono uppercase tracking-widest text-[#C04A2B]">
              <span className="bg-[#C04A2B]/10 px-3 py-1 rounded-full">{post.date}</span>
              <span className="text-gray-400">By {post.author}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-display font-medium text-[#141413] leading-[1.15] mb-6 tracking-tight">
              {post.title}
            </h1>
            {post.excerpt && (
              <p className="text-lg md:text-xl text-gray-500 font-normal leading-relaxed max-w-3xl">
                {post.excerpt}
              </p>
            )}
          </header>

          <div className="border-t border-gray-200 pt-16">
            <div className="text-lg md:text-xl text-gray-700 leading-relaxed space-y-8 [&>h1]:text-3xl md:[&>h1]:text-4xl [&>h1]:font-display [&>h1]:font-medium [&>h1]:mt-16 [&>h1]:mb-8 [&>h1]:tracking-tight [&>h2]:text-2xl md:[&>h2]:text-3xl [&>h2]:font-display [&>h2]:font-medium [&>h2]:mt-16 [&>h2]:mb-6 [&>h2]:tracking-tight [&>h3]:text-xl [&>h3]:font-display [&>h3]:font-medium [&>h3]:mt-10 [&>h3]:mb-4 [&>p]:mb-8 [&>ul]:list-disc [&>ul]:pl-8 [&>ul]:mb-8 [&>ul>li]:mb-3 [&>ol]:list-decimal [&>ol]:pl-8 [&>ol]:mb-8 [&>ol>li]:mb-3 [&>a]:text-[#C04A2B] [&>a]:underline [&>a]:underline-offset-4 hover:[&>a]:text-[#141413] [&>blockquote]:border-l-4 [&>blockquote]:border-[#C04A2B] [&>blockquote]:pl-6 [&>blockquote]:py-1 [&>blockquote]:italic [&>blockquote]:text-gray-600 [&>blockquote]:bg-gray-50 [&>blockquote]:rounded-r-lg [&>hr]:my-16 [&>hr]:border-gray-200 [&>code]:bg-gray-100 [&>code]:px-2 [&>code]:py-1 [&>code]:rounded-md [&>code]:text-[0.9em] [&>code]:font-mono [&>code]:text-[#C04A2B] [&>pre]:bg-[#141413] [&>pre]:text-gray-300 [&>pre]:p-8 [&>pre]:rounded-2xl [&>pre]:overflow-x-auto [&>pre]:font-mono [&>pre]:text-sm [&>pre>code]:bg-transparent [&>pre>code]:text-inherit [&>pre>code]:p-0">
              <MDXRemote source={post.content} />
            </div>
          </div>

        </div>
      </article>
    );
  } catch (e) {
    notFound();
  }
}
