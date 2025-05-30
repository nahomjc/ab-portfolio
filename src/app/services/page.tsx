"use client";

import { motion } from "framer-motion";
import Section from "../components/Section";

const services = [
  {
    title: "Brand Identity",
    description:
      "Create a unique and memorable brand identity that resonates with your target audience.",
    icon: "🎨",
  },
  {
    title: "UI/UX Design",
    description:
      "Design intuitive and engaging user interfaces that provide exceptional user experiences.",
    icon: "💻",
  },
  {
    title: "Print Design",
    description:
      "Design stunning print materials that make a lasting impression.",
    icon: "📄",
  },
  {
    title: "Social Media Graphics",
    description:
      "Create eye-catching social media content that drives engagement.",
    icon: "📱",
  },
  {
    title: "Motion Graphics",
    description:
      "Bring your ideas to life with dynamic and engaging motion graphics.",
    icon: "🎬",
  },
  {
    title: "Web Design",
    description:
      "Design modern and responsive websites that convert visitors into customers.",
    icon: "🌐",
  },
];

const Services = () => {
  return (
    <main className="pt-20">
      <Section>
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          My <span className="text-accent">Services</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gray-800 p-8 rounded-lg"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Let&apos;s work together to create something amazing. I&apos;m here
            to help bring your vision to life.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </Section>
    </main>
  );
};

export default Services;
