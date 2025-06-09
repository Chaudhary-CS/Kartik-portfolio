// src/app/blog/page.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import BlogCard from "../../../components/BlogCard";

interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
}

export default function BlogIndex() {
  // 1. Read all the filenames in content/blog
  const blogDir = path.join(process.cwd(), "content/blog");
  const filenames = fs.readdirSync(blogDir).filter((f) => f.endsWith(".mdx"));

  // 2. Parse front-matter from each file
  const posts: PostMeta[] = filenames.map((filename) => {
    const fullPath = path.join(blogDir, filename);
    const source = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(source);
    return {
      slug: filename.replace(/\.mdx$/, ""),
      title: String(data.title),
      date: String(data.date),
      excerpt: data.excerpt ? String(data.excerpt) : undefined,
    };
  });

  // 3. Sort posts by date (newest first)
  posts.sort((a, b) => (a.date > b.date ? -1 : 1));

  return (
    <main className="max-w-3xl mx-auto py-12 px-4 space-y-8">
      <h1 className="text-4xl font-bold">Blog</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </div>
    </main>
  );
}
