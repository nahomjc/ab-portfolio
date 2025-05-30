"use client";

import { motion, AnimatePresence } from "framer-motion";
import Section from "../components/Section";
import { useState } from "react";
import { FiExternalLink, FiGithub, FiX } from "react-icons/fi";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Brand Identity",
    category: "Branding",
    image:
      "https://images.unsplash.com/photo-1610899633022-80115f82e7ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxtLWpNQzlYMnJ2NHx8ZW58MHx8fHx8",
    description: "Complete brand identity design for a tech startup",
    longDescription:
      "A comprehensive brand identity project that included logo design, color palette, typography, and brand guidelines. The project helped establish a strong visual presence for the client in the competitive tech market.",
    technologies: ["Figma", "Adobe Illustrator", "Brand Guidelines"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/example",
  },
  {
    id: 2,
    title: "Print Campaign",
    category: "Print",
    image:
      "https://plus.unsplash.com/premium_photo-1674493990808-16171a384dcb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Print advertising campaign for a luxury brand",
    longDescription:
      "A high-impact print campaign including posters, flyers, and magazine ads for a luxury brand. Focused on elegant layouts and premium finishes.",
    technologies: ["Adobe InDesign", "Photoshop", "Print Production"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/example",
  },
  {
    id: 3,
    title: "Social Media",
    category: "Digital",
    image:
      "https://images.unsplash.com/photo-1591135820858-d86f20e2729c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Social media campaign for a fashion brand",
    longDescription:
      "A vibrant and engaging social media campaign with custom graphics, stories, and posts to boost brand awareness and engagement.",
    technologies: ["Photoshop", "Illustrator", "Social Media"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/example",
  },
  {
    id: 4,
    title: "Motion Graphics",
    category: "Animation",
    image:
      "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Animated explainer video for a product launch",
    longDescription:
      "A dynamic explainer video using motion graphics to communicate product features in a fun and memorable way.",
    technologies: ["After Effects", "Premiere Pro", "Animation"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/example",
  },
  {
    id: 5,
    title: "Logo Design",
    category: "Branding",
    image:
      "https://images.unsplash.com/photo-1550246140-29f40b909e5a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Minimalist logo for a modern business",
    longDescription:
      "A clean and modern logo design that captures the essence of the brand with simplicity and elegance.",
    technologies: ["Illustrator", "Branding"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/example",
  },
  {
    id: 6,
    title: "Poster Art",
    category: "Print",
    image:
      "https://images.unsplash.com/photo-1589708675132-6da149c8e8ad?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Artistic poster for a music event",
    longDescription:
      "A bold and colorful poster design for a music festival, featuring custom illustrations and creative typography.",
    technologies: ["Photoshop", "Illustrator", "Poster Design"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/example",
  },
];

const categories = ["All", "Branding", "Print", "Digital", "Animation"];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <main className="pt-20 pb-20 bg-gradient-to-br from-black via-gray-900 to-black min-h-screen">
      <Section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            My <span className="text-accent">Portfolio</span>
          </h1>
          <p className="text-gray-400 text-center text-lg mb-12 max-w-2xl mx-auto">
            A collection of my best work showcasing expertise in graphic design,
            branding, print, and animation.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shadow-md backdrop-blur-md border border-gray-700/40
                  ${
                    selectedCategory === category
                      ? "bg-accent text-white shadow-lg shadow-accent/20"
                      : "bg-gray-800/60 text-gray-300 hover:bg-gray-700/60"
                  }
                `}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                  boxShadow: "0 8px 32px 0 rgba(59,130,246,0.15)",
                }}
                className="group bg-gray-900/80 rounded-2xl overflow-hidden cursor-pointer border-2 border-gray-800 hover:border-accent transition-all duration-300 shadow-xl"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-accent/80 text-white px-3 py-1 rounded-full text-xs font-semibold shadow">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-2 line-clamp-2 min-h-[48px]">
                    {project.description}
                  </p>
                  <div className="flex gap-2 flex-wrap mt-2">
                    {project.technologies?.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative bg-gray-900/95 backdrop-blur-lg rounded-2xl max-w-3xl w-full p-8 border-2 border-accent shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <FiX size={28} />
              </button>

              <div className="relative aspect-video bg-gray-800 rounded-lg mb-8 overflow-hidden">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2 text-accent">
                    {selectedProject.title}
                  </h2>
                  <span className="bg-accent/80 text-white px-3 py-1 rounded-full text-xs font-semibold shadow">
                    {selectedProject.category}
                  </span>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  {selectedProject.longDescription}
                </p>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-accent">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies?.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-2.5 bg-accent text-white rounded-lg hover:opacity-90 transition-opacity shadow-lg"
                  >
                    <FiExternalLink />
                    Live Demo
                  </a>
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-2.5 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors shadow-lg"
                  >
                    <FiGithub />
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Portfolio;
