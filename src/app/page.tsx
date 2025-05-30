"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Loading from "./loading";
import Image from "next/image";
import ChatBox from "./components/ChatBox";
import { useRouter } from "next/navigation";

const portfolioImages = [
  {
    src: "https://images.unsplash.com/photo-1610899633022-80115f82e7ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxtLWpNQzlYMnJ2NHx8ZW58MHx8fHx8",
    label: "Brand Identity",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1674493990808-16171a384dcb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    label: "Print Campaign",
  },
  {
    src: "https://images.unsplash.com/photo-1591135820858-d86f20e2729c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    label: "Social Media",
  },
  {
    src: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    label: "Motion Graphics",
  },
  {
    src: "https://images.unsplash.com/photo-1550246140-29f40b909e5a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    label: "Logo Design",
  },
  {
    src: "https://images.unsplash.com/photo-1589708675132-6da149c8e8ad?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    label: "Poster Art",
  },
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Smooth scroll to portfolio section
  const scrollToPortfolio = () => {
    if (portfolioRef.current) {
      portfolioRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loading />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="pt-20"
          >
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center py-20 relative flex flex-col items-center"
              >
                {/* Fun animated client image */}
                <motion.div
                  className="mb-8 rounded-full overflow-hidden border-4 border-accent shadow-lg bg-black w-40 h-40 mx-auto animate-float"
                  initial={{ scale: 0.8, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 120, damping: 10 }}
                >
                  <Image
                    src="/ab.jpg"
                    alt="Abenezer Samuel"
                    width={160}
                    height={160}
                    className="object-cover w-full h-full"
                    priority
                  />
                </motion.div>
                <motion.h1
                  className="text-5xl md:text-7xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="text-accent">Welcome</span> to My World
                </motion.h1>

                <motion.p
                  className="text-xl text-gray-400 max-w-2xl mx-auto mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  I&apos;m Abenezer Samuel, a passionate professional dedicated
                  to creating exceptional experiences through design and
                  innovation.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-accent text-white rounded-lg font-medium
                             hover:bg-accent/90 transition-colors duration-300
                             flex items-center gap-2 shadow-lg"
                    onClick={scrollToPortfolio}
                  >
                    Get Started
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border-2 border-accent text-accent rounded-lg font-medium
                             hover:bg-accent/10 transition-colors duration-300
                             flex items-center gap-2 shadow-lg"
                    onClick={() => router.push("/portfolio")}
                  >
                    View Portfolio
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </motion.button>
                </motion.div>

                <motion.div
                  className="mt-16 flex justify-center cursor-pointer"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  onClick={scrollToPortfolio}
                >
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-gray-500"
                  >
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Portfolio Section Anchor */}
              <div ref={portfolioRef} className="pt-32" />

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-12"
              >
                {portfolioImages.map((img) => (
                  <motion.div
                    key={img.src}
                    whileHover={{ scale: 1.05, rotate: -2 }}
                    className="bg-gray-900 rounded-xl shadow-lg overflow-hidden flex flex-col items-center p-4 transition-all duration-300 border border-gray-800"
                  >
                    <Image
                      src={img.src}
                      alt={img.label}
                      width={320}
                      height={200}
                      className="object-cover w-full h-40 rounded-lg mb-4"
                    />
                    <span className="text-accent font-semibold text-lg mb-2">
                      {img.label}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <ChatBox />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
