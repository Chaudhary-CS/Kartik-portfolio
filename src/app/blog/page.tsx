// src/app/blog/page.tsx
import BlogListClient from "../../../components/BlogListClient";

interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  image?: string;
}

export default function BlogIndex() {
  // Define our blog posts manually since we're using React components instead of MDX
  const posts: PostMeta[] = [
    {
      slug: "lessons-learned-making-website",
      title: "The Lessons Learned from Making This Website",
      date: "2025-01-23",
      excerpt: "Five critical lessons I discovered while building my developer portfolio with Next.js, TypeScript, and modern web technologies - and how you can apply them to your own projects.",
      image: "gradient-gray-blue" // Custom gradient matching blog post background
    },
    {
      slug: "why-blogging-matters-today",
      title: "Why Blogging Matters in Today's Market",
      date: "2025-01-23",
      excerpt: "In an AI-driven job market where everyone has access to the same information, your unique perspective and ability to communicate complex ideas clearly has become your most valuable differentiator.",
      image: "gradient-purple-pink" // Custom gradient matching blog post background
    }
  ];

  // Sort posts by date (newest first)
  posts.sort((a, b) => (a.date > b.date ? -1 : 1));

  return <BlogListClient posts={posts} />;
}
