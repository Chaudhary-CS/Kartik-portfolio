// components/AboutPreview.tsx
import Link from 'next/link';

export default function AboutPreview() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-white">
      <h2 className="text-3xl font-semibold mb-4">About Me</h2>
      <p className="mb-6">
        I'm a junior at Texas A&M University majoring in Computer Science with a passion for data engineering, ML, and clarinet performance. I've interned at INTERA Inc., led projects for the Aggie Data Science Club, and performed internationally with TAMU ensembles.
      </p>
      <Link href="/about" className="hover:underline">
        Read more →
      </Link>
    </div>
  );
}
