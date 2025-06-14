"use client";
import MDXContent from "../../../../content/blog/second-post.mdx";
import ContactIcons from "../../../../components/ContactIcons";

export default function SecondPostPage() {
  return (
    <main className="relative min-h-screen flex flex-col text-white">
      {/* Dark overlay */}
      <div className="fixed inset-0 bg-black/50" />
      
      <div className="relative z-10 flex-1 max-w-4xl mx-auto py-12 px-4">
        <MDXContent />
      </div>
      
      <ContactIcons />
    </main>
  );
}
