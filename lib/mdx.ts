import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content/blog');

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  image?: string;
  content: string;
};

export function getPostSlugs() {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }
  return fs.readdirSync(contentDirectory);
}

export function getPostBySlug(slug: string): BlogPost {
  const realSlug = slug.replace(/\.mdx?$/, '');
  
  // Try .mdx first, then .md
  let fullPath = path.join(contentDirectory, `${realSlug}.mdx`);
  if (!fs.existsSync(fullPath)) {
    fullPath = path.join(contentDirectory, `${realSlug}.md`);
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    title: data.title || realSlug,
    date: data.date || 'Unknown Date',
    author: data.author || 'QuantaLabs',
    excerpt: data.excerpt || '',
    image: data.image,
    content,
  };
}

export function getAllPosts(): BlogPost[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .filter(slug => slug.endsWith('.md') || slug.endsWith('.mdx'))
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
