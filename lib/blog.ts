export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  tags: string[];
  featured?: boolean;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "ecdsa-liability-2026",
    title: "Why Your Crypto Startup's ECDSA Keys Are a Liability in 2026",
    excerpt:
      "Three papers dropped in one week of March 2026 that fundamentally rewrote the quantum threat timeline. Google reduced the qubit requirement from 9M to 500K. A second paper put it at 10,000. Here is what that means for every ECDSA-secured blockchain.",
    date: "April 2026",
    readTime: "12 min read",
    author: "QuantaLabs",
    tags: ["Post-Quantum", "ECDSA", "Falcon-512", "Security"],
    featured: true,
  },
  {
    slug: "cbom-india-compliance-guide",
    title: "What is a Cryptographic Bill of Materials (CBOM) — And Why Every Indian Fintech Needs One Before FY 2027-28",
    excerpt: "India's Department of Science and Technology mandate requires Cryptographic Bill of Materials (CBOM) submissions from FY 2027-28. Most Indian CTOs don't know what it is. Here is exactly what your organisation needs to do.",
    date: "May 2026",
    readTime: "8 min read",
    author: "QuantaLabs",
    tags: ["Post-Quantum", "Security", "CBOM"],
    featured: false,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
