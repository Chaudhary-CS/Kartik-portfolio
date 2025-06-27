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

  return <LessonsLearnedClient postData={postData} />;
} 