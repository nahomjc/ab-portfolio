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

export default function GalleryPage() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <main className="pt-20 pb-20 bg-gradient-to-br from-black via-gray-900 to-black min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Gallery
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 8px 32px 0 rgba(59,130,246,0.15)",
              }}
              className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-gray-800 hover:border-accent transition-all duration-300 cursor-pointer group"
              onClick={() => setSelected(i)}
            >
              <Image
                src={img}
                alt={`Gallery image ${i + 1}`}
                width={600}
                height={400}
                className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
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
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelected(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-accent"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={galleryImages[selected]}
                  alt={`Gallery image ${selected + 1}`}
                  width={1200}
                  height={800}
                  className="object-contain w-full h-[70vh] bg-black"
                />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 text-white text-3xl bg-black/60 rounded-full px-3 py-1 hover:bg-accent transition-colors"
                  aria-label="Close"
                >
                  ×
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
