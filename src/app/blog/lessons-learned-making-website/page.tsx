import LessonsLearnedClient from "./LessonsLearnedClient";

export default function LessonsLearnedPost() {
  const postData = {
    title: "The Lessons Learned from Making This Website",
    date: "January 23, 2025",
    readTime: "8 min read",
    author: "Sami Melhem",
    excerpt: "Five critical lessons I discovered while building my developer portfolio with Next.js, TypeScript, and modern web technologies - and how you can apply them to your own projects.",
    tags: ["Next.js", "TypeScript", "Portfolio Development", "Web Development", "Lessons Learned"]
  };

  return (
    <>
      {/* Static background that extends behind navbar but not footer */}
      <div 
        className="fixed top-0 left-0 right-0 bg-gradient-to-br from-gray-900 via-black to-blue-900 -z-10"
        style={{ 
          bottom: '80px',
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(79, 70, 229, 0.15) 1px, transparent 0),
            linear-gradient(to bottom right, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05)),
            linear-gradient(to bottom right, rgb(17, 24, 39), rgb(0, 0, 0), rgb(30, 58, 138))
          `,
          backgroundSize: '20px 20px, 100% 100%, 100% 100%'
        }}
      />
      <LessonsLearnedClient postData={postData} />
    </>
  );
} 