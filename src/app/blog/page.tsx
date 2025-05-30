"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const posts = [
  {
    title: "The Power of Branding in Modern Design",
    date: "2024-06-01",
    excerpt:
      "Discover how strong branding can elevate your business and create lasting impressions in the digital age.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Tips for Creating Eye-Catching Posters",
    date: "2024-05-20",
    excerpt:
      "Learn the secrets behind designing posters that grab attention and communicate your message effectively.",
    image:
      "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Social Media Graphics: Trends for 2024",
    date: "2024-05-10",
    excerpt:
      "Stay ahead of the curve with the latest trends in social media graphics and content creation.",
    image:
      "https://images.unsplash.com/photo-1591135820858-d86f20e2729c?auto=format&fit=crop&w=800&q=80",
  },
];

export default function BlogPage() {
  return (
    <main className="pt-20 pb-20 bg-gradient-to-br from-black via-gray-900 to-black min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Blog
        </h1>
        <div className="grid gap-10 md:grid-cols-2">
          {posts.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-gray-900/80 rounded-2xl overflow-hidden shadow-xl border-2 border-gray-800 hover:border-accent transition-all duration-300 group cursor-pointer"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors duration-300">
                  {post.title}
                </h2>
                <p className="text-gray-400 text-sm mb-2">{post.date}</p>
                <p className="text-gray-300 mb-2 line-clamp-2 min-h-[48px]">
                  {post.excerpt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
