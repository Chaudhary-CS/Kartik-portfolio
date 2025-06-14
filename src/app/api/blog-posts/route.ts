import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function GET() {
  try {
    const blogDir = path.join(process.cwd(), 'content/blog');
    const files = fs.readdirSync(blogDir).filter((f) => f.endsWith('.mdx'));
    
    const posts = files.map((fname) => {
      const src = fs.readFileSync(path.join(blogDir, fname), 'utf-8');
      const { data } = matter(src);
      return { 
        slug: fname.replace(/\.mdx$/, ''),
        date: String(data.date),
        title: String(data.title)
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);

    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return NextResponse.json({ error: 'Failed to load blog posts' }, { status: 500 });
  }
} 