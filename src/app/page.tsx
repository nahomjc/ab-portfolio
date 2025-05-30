"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Loading from "./loading";
import ChatBox from "./components/ChatBox";

const showcaseImages = [
  "https://images.unsplash.com/photo-1610899633022-80115f82e7ef?w=900&auto=format&fit=crop&q=80",
  "https://plus.unsplash.com/premium_photo-1674493990808-16171a384dcb?q=80&w=1964&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1591135820858-d86f20e2729c?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1964&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1550246140-29f40b909e5a?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1589708675132-6da149c8e8ad?q=80&w=1964&auto=format&fit=crop",
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <main className="relative min-h-screen overflow-x-hidden">
        {/* Animated Gradient Background */}
        <div className="fixed inset-0 -z-10 animate-gradient-move bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#24243e] opacity-95" />
        {/* Floating Neon Shapes */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-accent/20 blur-3xl rounded-full animate-pulse-slow" />
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-pink-500/20 blur-2xl rounded-full animate-pulse-slow2" />
        </div>
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center min-h-[90vh] text-center relative z-10 pt-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <motion.div
              initial={{ scale: 0.8, rotate: -8 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 10 }}
              className="mx-auto mb-6 rounded-full overflow-hidden border-8 border-accent shadow-2xl w-44 h-44 bg-black animate-float"
            >
              <Image
                src="/ab.jpg"
                alt="Abenezer Samuel"
                width={176}
                height={176}
                className="object-cover w-full h-full"
                priority
              />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-accent to-pink-500 bg-clip-text text-transparent tracking-widest futuristic-font mb-4 drop-shadow-lg">
              Abenezer Samuel
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-2xl md:text-3xl text-gray-200 font-medium mb-8 max-w-2xl mx-auto drop-shadow-lg"
            >
              Futuristic <span className="text-accent">Graphics Designer</span>{" "}
              crafting visual experiences for tomorrow.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-6">
              <motion.a
                href="#about"
                whileHover={{ scale: 1.08, boxShadow: "0 0 24px #3B82F6" }}
                className="px-10 py-4 bg-accent text-white rounded-xl font-bold text-lg shadow-xl hover:bg-accent/90 transition-colors duration-300 futuristic-font tracking-wider border-2 border-accent/60"
              >
                Get Started
              </motion.a>
              <motion.a
                href="/portfolio"
                whileHover={{ scale: 1.08, boxShadow: "0 0 24px #ec4899" }}
                className="px-10 py-4 border-2 border-pink-500 text-pink-500 rounded-xl font-bold text-lg shadow-xl hover:bg-pink-500/10 transition-colors duration-300 futuristic-font tracking-wider"
              >
                View Portfolio
              </motion.a>
            </div>
          </motion.div>
          {/* Animated Down Arrow */}
          <motion.div
            animate={{ y: [0, 18, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-10 flex justify-center"
          >
            <span className="text-accent text-4xl drop-shadow-lg">↓</span>
          </motion.div>
        </section>
        {/* Showcase Strip */}
        <section className="w-full py-8 overflow-x-auto select-none">
          <div className="flex gap-8 items-center justify-center animate-marquee">
            {showcaseImages.map((img, i) => (
              <motion.div
                key={img}
                whileHover={{ scale: 1.08, rotate: [0, 2, -2, 0] }}
                className="rounded-2xl overflow-hidden shadow-lg border-2 border-accent/40 bg-white/10 backdrop-blur-lg w-56 h-36 flex-shrink-0 cursor-pointer transition-all duration-300"
              >
                <Image
                  src={img}
                  alt={`Showcase ${i + 1}`}
                  width={224}
                  height={144}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            ))}
          </div>
        </section>
        {/* About & Specialties Cards */}
        <section
          id="about"
          className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-stretch gap-8 py-20 px-4 relative"
        >
          {/* Vertical Accent Divider */}
          <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-1 bg-gradient-to-b from-accent via-pink-500 to-transparent rounded-full opacity-60 z-0" />
          {/* About Me Card */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, type: "spring" }}
            viewport={{ once: true }}
            className="relative z-10 flex-1 rounded-3xl bg-white/10 backdrop-blur-lg border-2 border-accent/60 shadow-2xl p-10 flex flex-col items-center text-center min-h-[340px]"
          >
            <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 border-2 border-accent shadow-lg">
              <svg
                className="w-8 h-8 text-accent"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-accent mb-2 futuristic-font">
              About Me
            </h2>
            <p className="text-gray-100 text-lg mb-3">
              I blend creativity and technology to deliver stunning visuals that
              inspire and engage.
            </p>
            <p className="text-gray-400 italic text-base mb-2">
              &quot;Design is the silent ambassador of your brand.&quot;
            </p>
          </motion.div>
          {/* Specialties Card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, type: "spring", delay: 0.2 }}
            viewport={{ once: true }}
            className="relative z-10 flex-1 rounded-3xl bg-white/10 backdrop-blur-lg border-2 border-pink-500/60 shadow-2xl p-10 flex flex-col items-center text-center min-h-[340px]"
          >
            <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-pink-500/20 border-2 border-pink-500 shadow-lg">
              <svg
                className="w-8 h-8 text-pink-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z"
                />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-pink-500 mb-2 futuristic-font">
              Specialties
            </h2>
            <ul className="text-gray-100 text-lg space-y-3 mt-2 text-left mx-auto max-w-xs">
              <li className="flex items-center gap-3">
                <span className="text-pink-500">★</span> Brand Identity & Logo
                Design
              </li>
              <li className="flex items-center gap-3">
                <span className="text-pink-500">★</span> Poster & Print Art
              </li>
              <li className="flex items-center gap-3">
                <span className="text-pink-500">★</span> Social Media Graphics
              </li>
              <li className="flex items-center gap-3">
                <span className="text-pink-500">★</span> Motion Graphics
              </li>
              <li className="flex items-center gap-3">
                <span className="text-pink-500">★</span> Futuristic Visuals
              </li>
            </ul>
          </motion.div>
        </section>
        {/* Custom Animations & Styles */}
        <style jsx global>{`
          .futuristic-font {
            font-family: "Orbitron", "Montserrat", "Segoe UI", Arial, sans-serif;
            letter-spacing: 0.04em;
          }
          @keyframes gradient-move {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
          .animate-gradient-move {
            background-size: 200% 200%;
            animation: gradient-move 12s ease-in-out infinite;
          }
          .animate-pulse-slow {
            animation: pulse-slow 4s ease-in-out infinite;
          }
          .animate-pulse-slow2 {
            animation: pulse-slow 6s ease-in-out infinite;
          }
          @keyframes pulse-slow {
            0%,
            100% {
              opacity: 0.5;
              transform: scale(1);
            }
            50% {
              opacity: 1;
              transform: scale(1.15);
            }
          }
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          @keyframes float {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-20px);
            }
          }
        `}</style>
      </main>
      <ChatBox />
    </>
  );
}
