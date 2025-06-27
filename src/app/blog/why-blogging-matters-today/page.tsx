import WhyBloggingMattersClient from "./WhyBloggingMattersClient";

export default function WhyBloggingMattersPost() {
  const postData = {
    title: "Why Blogging Matters in Today's Market",
    date: "January 23, 2025",
    readTime: "7 min read",
    author: "Sami Melhem",
    excerpt: "In an AI-driven job market where everyone has access to the same information, your unique perspective and ability to communicate complex ideas clearly has become your most valuable differentiator.",
    tags: ["Career Development", "Technical Writing", "Communication", "Professional Growth", "AI Impact"]
  };

  return <WhyBloggingMattersClient postData={postData} />;
} 