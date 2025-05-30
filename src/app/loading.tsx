"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const typewriterText = "Welcome";

export default function Loading() {
  const [displayedText, setDisplayedText] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(typewriterText.slice(0, i + 1));
      i++;
      if (i === typewriterText.length) clearInterval(interval);
    }, 90);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ minHeight: "100vh" }}
    >
      {/* Animated Gradient Background */}
      <div className="fixed inset-0 -z-10 animate-gradient-move bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#24243e] opacity-95" />
      {/* Floating Neon Shapes */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-accent/20 blur-3xl rounded-full animate-pulse-slow" />
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-pink-500/20 blur-2xl rounded-full animate-pulse-slow2" />
        <div className="absolute top-10 right-1/4 w-40 h-40 bg-white/10 blur-2xl rounded-full animate-pulse-slow3" />
      </div>
      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-2xl rounded-3xl" />
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Spinning & Pulsing Avatar with Sparkles */}
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.08, 1] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear",
            repeatType: "loop",
          }}
          className="mb-8 rounded-full overflow-hidden border-8 border-accent shadow-2xl w-32 h-32 bg-black relative animate-pulse-avatar"
        >
          <Image
            src="/ab.jpg"
            alt="Abenezer Samuel"
            width={128}
            height={128}
            className="object-cover w-full h-full"
            priority
          />
          {/* Sparkles */}
          {[...Array(8)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute text-yellow-300 text-xl pointer-events-none"
              style={{
                top: "50%",
                left: "50%",
                transform: `rotate(${i * 45}deg) translate(60px, 0)`,
              }}
              animate={{
                opacity: [0.7, 1, 0.7],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.18,
              }}
            >
              ✨
            </motion.span>
          ))}
        </motion.div>
        {/* Glowing Animated Typewriter Text */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-accent to-pink-500 bg-clip-text text-transparent tracking-widest futuristic-font mb-4 drop-shadow-2xl animate-glow h-16"
        >
          {displayedText}
          <span className="text-accent animate-blink">|</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-200 font-medium mb-8 max-w-2xl mx-auto drop-shadow-lg"
        >
          Abenezer Samuel — Futuristic Graphics Designer
        </motion.p>
        {/* Orbiting Dots Animation */}
        <div className="relative w-24 h-24 flex items-center justify-center mb-8">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 rounded-full bg-accent shadow-lg"
              style={{
                top: "50%",
                left: "50%",
                marginTop: -8,
                marginLeft: -8,
                transform: `rotate(${i * 60}deg) translate(48px)`,
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.15,
              }}
            />
          ))}
        </div>
        {/* Futuristic Progress Bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.6, ease: "easeInOut" }}
          className="h-2 w-64 bg-gradient-to-r from-accent to-pink-500 rounded-full shadow-lg mb-2"
        />
        {/* Animated Loading Dots */}
        <div className="flex justify-center items-center gap-1 mb-2">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="w-2 h-2 rounded-full bg-accent block"
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.4, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-gray-400 mt-2 font-light tracking-wider text-center"
        >
          CRAFTING YOUR EXPERIENCE
        </motion.p>
      </div>
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
        .animate-pulse-slow3 {
          animation: pulse-slow 8s ease-in-out infinite;
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
        .animate-glow {
          text-shadow: 0 0 16px #3b82f6, 0 0 32px #ec4899, 0 0 8px #fff;
        }
        .animate-blink {
          animation: blink 1.1s steps(2, start) infinite;
        }
        @keyframes blink {
          to {
            opacity: 0;
          }
        }
        .animate-pulse-avatar {
          animation: pulse-avatar 2.2s infinite;
        }
        @keyframes pulse-avatar {
          0%,
          100% {
            box-shadow: 0 0 0 0 #3b82f6, 0 0 0 0 #ec4899;
          }
          50% {
            box-shadow: 0 0 32px 8px #3b82f6, 0 0 16px 4px #ec4899;
          }
        }
      `}</style>
    </motion.div>
  );
}
