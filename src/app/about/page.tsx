"use client";

import { motion } from "framer-motion";
import Section from "../components/Section";

const skills = [
  { name: "UI/UX Design", level: 95 },
  { name: "Brand Identity", level: 90 },
  { name: "Print Design", level: 85 },
  { name: "Motion Graphics", level: 80 },
  { name: "Web Design", level: 85 },
];

const About = () => {
  return (
    <main className="pt-20">
      <Section className="min-h-screen flex items-center">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-accent">Me</span>
            </h1>
            <p className="text-gray-400 mb-6 text-lg">
              I&apos;m a passionate graphic designer with over 5 years of
              experience in creating compelling visual experiences. My approach
              combines creativity with strategic thinking to deliver designs
              that not only look great but also achieve business objectives.
            </p>
            <p className="text-gray-400 text-lg">
              When I&apos;m not designing, you can find me exploring new art
              exhibitions, experimenting with photography, or enjoying a good
              cup of coffee while sketching new ideas.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6">Skills</h2>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-accent">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-accent"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>
    </main>
  );
};

export default About;
