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

  return (
    <>
      {/* Static background that extends behind navbar but not footer */}
      <div 
        className="fixed top-0 left-0 right-0 bg-gradient-to-br from-purple-900 via-black to-pink-900 -z-10"
        style={{ 
          bottom: '80px',
          backgroundImage: `
            radial-gradient(circle at 2px 2px, rgba(236, 72, 153, 0.1) 2px, transparent 0),
            linear-gradient(to bottom right, rgba(236, 72, 153, 0.05), rgba(147, 51, 234, 0.05)),
            linear-gradient(to bottom right, rgb(88, 28, 135), rgb(0, 0, 0), rgb(157, 23, 77))
          `,
          backgroundSize: '30px 30px, 100% 100%, 100% 100%'
        }}
      />
      <WhyBloggingMattersClient postData={postData} />
    </>
  );
} 