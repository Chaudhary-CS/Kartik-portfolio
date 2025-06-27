// components/BlogCard.tsx
import Link from "next/link";

export interface BlogCardProps {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  image?: string;
}

export default function BlogCard({ slug, title, date, excerpt, image }: BlogCardProps) {
  // Define gradient backgrounds that match blog post backgrounds
  const getGradientClass = (imageType?: string) => {
    switch (imageType) {
      case 'gradient-gray-blue':
        return 'bg-gradient-to-br from-gray-900 via-black to-blue-900';
      case 'gradient-purple-pink':
        return 'bg-gradient-to-br from-purple-900 via-black to-pink-900';
      default:
        return 'bg-gradient-to-br from-gray-800 to-gray-900';
    }
  };

  return (
    <Link 
        href={`/blog/${slug}/`} 
        className="
            group block h-full w-full min-h-[400px]
            transition-all hover:scale-[1.02]
        "
    >
      <div className={`relative w-full h-full flex flex-col ${getGradientClass(image)}`}>
        {/* Full gradient background that fills entire card */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.1) 1px, transparent 0)',
            backgroundSize: '20px 20px'
          }}></div>
        </div>

        {/* Content overlay */}
        <div className="relative z-10 p-6 flex flex-col justify-between h-full min-h-[400px]">
          <div className="flex-1 flex flex-col justify-center text-center">
            <h3 className="text-2xl font-semibold mb-3 group-hover:text-teal-400 transition-colors text-white">
                {title}
            </h3>
            <time className="block text-sm text-gray-300 mb-4">{date}</time>
            {excerpt && (
              <p className="text-gray-200 leading-relaxed line-clamp-4 max-w-none">
                {excerpt}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
