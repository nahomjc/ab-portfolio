"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  "https://images.unsplash.com/photo-1610899633022-80115f82e7ef?w=900&auto=format&fit=crop&q=80",
  "https://plus.unsplash.com/premium_photo-1674493990808-16171a384dcb?q=80&w=1964&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1591135820858-d86f20e2729c?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1964&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1550246140-29f40b909e5a?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1589708675132-6da149c8e8ad?q=80&w=1964&auto=format&fit=crop",
];

// Fun random heights for images
const funHeights = ["h-64", "h-80", "h-72", "h-60", "h-96", "h-56"];

export default function GalleryPage() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <main className="relative pt-20 pb-20 min-h-screen overflow-x-hidden">
      {/* Animated Gradient Background */}
      <div className="fixed inset-0 -z-10 animate-gradient-move bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#24243e] opacity-90" />
      {/* Floating Neon Shapes */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-accent/20 blur-3xl rounded-full animate-pulse-slow" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-500/20 blur-2xl rounded-full animate-pulse-slow2" />
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center bg-gradient-to-r from-white to-accent bg-clip-text text-transparent tracking-wide futuristic-font">
          Gallery
        </h1>
        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img}
              initial={{ opacity: 0, y: 40, rotate: -4 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{
                duration: 0.7,
                delay: i * 0.13,
                type: "spring",
                bounce: 0.45,
              }}
              whileHover={{
                scale: 1.05,
                rotate: [0, 2, -2, 0],
                boxShadow: "0 0 32px 0 #3B82F6, 0 0 8px 2px #fff2",
                y: [0, -8, 0],
                transition: {
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
              className={`mb-6 break-inside-avoid rounded-3xl overflow-hidden shadow-2xl border border-accent/40 bg-white/10 backdrop-blur-lg transition-all duration-300 cursor-pointer group relative ${
                funHeights[i % funHeights.length]
              }`}
              style={{ boxShadow: "0 4px 32px 0 rgba(59,130,246,0.15)" }}
              onClick={() => setSelected(i)}
            >
              <div className="relative w-full h-full">
                <Image
                  src={img}
                  alt={`Gallery image ${i + 1}`}
                  fill
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                />
                {/* Futuristic Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
                {/* Fun Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                  <span className="text-accent text-5xl drop-shadow-lg animate-bounce-slow">
                    ✨
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 px-4 py-2 rounded-xl bg-black/40 backdrop-blur-md border border-accent text-accent font-semibold text-lg shadow-lg futuristic-font tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-300">
                  Cinematic Shot #{i + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selected !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-2xl z-50 flex items-center justify-center p-4"
              onClick={() => setSelected(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-4xl w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-accent/80 bg-white/10 backdrop-blur-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={galleryImages[selected]}
                  alt={`Gallery image ${selected + 1}`}
                  width={1600}
                  height={1000}
                  className="object-contain w-full h-[80vh] bg-black"
                />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 text-white text-3xl bg-black/60 rounded-full px-3 py-1 hover:bg-accent transition-colors border-2 border-accent/60 shadow-lg"
                  aria-label="Close"
                >
                  ×
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* Custom Animations */}
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
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 1.8s infinite;
        }
      `}</style>
    </main>
  );
}
