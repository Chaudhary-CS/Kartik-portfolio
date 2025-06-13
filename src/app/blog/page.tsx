// src/app/blog/page.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import BlogListClient from "../../../components/BlogListClient";

interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  image?: string;
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
      image: data.image ? String(data.image) : undefined,
    };
  });

  // 3. Sort posts by date (newest first)
  posts.sort((a, b) => (a.date > b.date ? -1 : 1));

  return <BlogListClient posts={posts} />;
}
