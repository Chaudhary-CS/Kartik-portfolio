// components/AboutPreview.tsx
import Link from 'next/link';

export default function AboutPreview() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-semibold mb-4">About Me</h2>
      <p className="text-gray-700">
        I’m a junior at Texas A&M University majoring in Computer Science with a passion 
        for data engineering, ML, and clarinet performance. I’ve interned at INTERA Inc., 
        led projects for the Aggie Data Science Club, and performed internationally with 
        TAMU ensembles.
      </p>
      <Link href="/about" className="mt-4 inline-block text-blue-600 hover:underline">
        Read more →
      </Link>
    </section>
  );
}
