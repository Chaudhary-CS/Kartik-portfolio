// components/BlogCard.tsx
import Link from "next/link";

export interface BlogCardProps {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
}

export default function BlogCard({ slug, title, date, excerpt }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <article className="block p-6 border rounded-lg hover:shadow-lg transition-shadow">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <time className="text-sm text-gray-500">{date}</time>
        {excerpt && <p className="mt-2 text-gray-700">{excerpt}</p>}
      </article>
    </Link>
  );
}
