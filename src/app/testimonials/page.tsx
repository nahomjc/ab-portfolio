"use client";

import { motion } from "framer-motion";
import Section from "../components/Section";

const testimonials = [
  {
    quote:
      "Working with this designer was an absolute pleasure. They understood our vision perfectly and delivered beyond our expectations.",
    author: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechStart Inc.",
  },
  {
    quote:
      "The attention to detail and creative approach resulted in a brand identity that truly represents our company values.",
    author: "Michael Chen",
    role: "Founder",
    company: "Innovate Labs",
  },
  {
    quote:
      "Our website redesign has significantly improved our conversion rates. The user experience is now seamless and engaging.",
    author: "Emily Rodriguez",
    role: "CEO",
    company: "Growth Solutions",
  },
  {
    quote:
      "The social media campaign was a huge success. The designs were fresh, modern, and perfectly aligned with our brand.",
    author: "David Kim",
    role: "Social Media Manager",
    company: "Fashion Forward",
  },
];

const Testimonials = () => {
  return (
    <main className="pt-20">
      <Section>
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Client <span className="text-accent">Testimonials</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 p-8 rounded-lg"
            >
              <div className="text-4xl text-accent mb-4">&ldquo;</div>
              <p className="text-lg text-gray-300 mb-6">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-xl">
                  {testimonial.author[0]}
                </div>
                <div className="ml-4">
                  <h3 className="font-bold">{testimonial.author}</h3>
                  <p className="text-gray-400 text-sm">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
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
          <h2 className="text-2xl font-bold mb-4">Want to Be Next?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join the list of satisfied clients who have transformed their brand
            with our design services.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </Section>
    </main>
  );
};

export default Testimonials;
