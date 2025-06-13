// components/BlogCard.tsx
import Link from "next/link";
import Image from "next/image";

export interface BlogCardProps {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  image?: string;
}

export default function BlogCard({ slug, title, date, excerpt, image }: BlogCardProps) {
  return (
    <Link 
        href={`/blog/${slug}`} 
        className="
            group block overflow-hidden rounded-xl border border-white/30
            transition-all hover:border-teal-400
            hover:shadow-[0_0_20px_rgba(20,184,166,0.6)]
        "
    >
      {image && (
        <div className="relative h-40 w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      )}

      <div className="p-6 bg-gray-900/50">
        <h3 className="text-2xl font-semibold mb-1 group-hover:text-teal-400 transition-colors">
            {title}
        </h3>
        <time className="block text-sm text-gray-300 mb-3">{date}</time>
        {excerpt && <p className="text-gray-200 mb-4">{excerpt}</p>}
      </div>
    </Link>
  );
}
