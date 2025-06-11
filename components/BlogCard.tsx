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
      <div className="border border-gray-700 rounded-lg p-6 hover:bg-gray-800 transition-colors">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-200 mb-3">{new Date(date).toLocaleDateString()}</p>
        <p className="text-gray-100">{excerpt}</p>
      </div>
    </Link>
  );
}
