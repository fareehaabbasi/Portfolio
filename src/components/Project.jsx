import React from "react";
import image1 from "../assets/project/Image-1.png";
import image2 from "../assets/project/Image-2.png";
import image3 from "../assets/project/Image-3.png";
import image4 from "../assets/project/Image-4.png";
// import image5 from "../assets/project/Image-5.png";
// import image6 from "../assets/project/Image-6.png";

import { motion } from "framer-motion";
import {
  GitFork,
  ExternalLink,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const Project = ({ darkMode }) => {
  const projects = [
    {
      number: "01",
      title: "SupportFlow",
      category: "MERN Stack • Hackathon",
      image: image1,
      description:
        "A customer support management platform where customers can create support tickets and agents can manage, respond to, and resolve requests efficiently.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/fareehaabbasi/Final-FemHackathon",
      live: "https://final-fem-hackathon-txsk.vercel.app/",
    },

    {
      number: "02",
      title: "Meltem Sea Food Redesign",
      category: "Next.js • Internship Project",
      image: image2,
      description:
        "A modern seafood website redesign created during my frontend internship, focused on responsive layouts, clean visual design, and smooth user interactions.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/fareehaabbasi/Meltem-sea-food-redesign",
      live: "https://meltem-sea-food-redesign.vercel.app/",
    },

    {
      number: "03",
      title: "Saylani Mass IT Hub Portal",
      category: "Frontend • Community Portal",
      image: image3,
      description:
        "A community portal for Saylani Mass IT Hub students and staff, providing dedicated spaces for lost and found items, complaints, and volunteer registration.",
      tech: ["React", "Supabase", "Tailwind CSS"],
      github: "https://github.com/fareehaabbasi/FemHack-2026",
      live: "https://beamish-trifle-ff71ff.netlify.app/",
    },

    {
      number: "04",
      title: "Blog Website",
      category: "Next.js • Frontend",
      image: image4,
      description:
        "A modern blog platform built with Next.js featuring organized content, categories, pagination, and a responsive interface designed for a smooth reading experience.",
      tech: ["Next.js", "React", "Tailwind CSS"],
      github: "https://github.com/fareehaabbasi/Blog-website-with-next-js",
      live: "https://blog-website-with-next-js-yfct-26ysh7tgo.vercel.app/blogs",
    },

    {
      number: "05",
      title: "Post Application",
      category: "Frontend • Hackathon",
      // image: image5,
      description:
        "A post management web application with authentication, post creation, post details, and Supabase integration, built as a hands-on hackathon project.",
      tech: ["HTML", "CSS", "JavaScript", "Supabase"],
      github: "https://github.com/fareehaabbasi/Post-appliction-2nd-Hackathon",
      live: "https://chimerical-kangaroo-f03563.netlify.app/",
    },

    {
      number: "06",
      title: "Interview GenAI",
      category: "MERN Stack • In Progress",
      // image: image6,
      description:
        "An AI-focused full-stack project built with the MERN stack and React, currently under development with features designed around an AI-powered interview experience.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      github:
        "https://github.com/fareehaabbasi/Interview-GENAi-Full-stack_project",
      live: null,
    },
  ];

  return (
    <section
      id="projects"
      className={`relative py-16 md:py-24 overflow-hidden ${
        darkMode ? "bg-black text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Background Glow */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-orange-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 mb-5 rounded-full border border-orange-500/30 bg-orange-500/5 text-orange-500 text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            My Recent Work
          </span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Featured{" "}
            <span className="text-orange-500">Projects</span>
          </h2>

          <p
            className={`max-w-2xl mx-auto mt-5 text-sm sm:text-base leading-7 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            A collection of projects I've built through hackathons,
            internships, and hands-on development.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-12 md:space-y-20">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.article
                key={project.title}
                initial={{
                  opacity: 0,
                  y: 100,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`group relative overflow-hidden rounded-3xl border ${
                  darkMode
                    ? "bg-white/[0.035] border-white/10 hover:border-orange-500/40"
                    : "bg-gray-50 border-gray-200 hover:border-orange-400/50"
                } transition-all duration-500`}
              >
                {/* Orange glow */}
                <div className="absolute -top-32 -right-32 w-72 h-72 rounded-full bg-orange-500/10 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div
                  className={`relative grid lg:grid-cols-2 ${
                    isEven ? "" : "lg:[&>*:first-child]:order-2"
                  }`}
                >
                  {/* IMAGE */}
                  <div className="relative min-h-[280px] sm:min-h-[350px] lg:min-h-[420px] overflow-hidden">
                    {/* Image */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Number */}
                    <span className="absolute top-6 left-6 text-6xl sm:text-7xl font-black text-white/10 select-none">
                      {project.number}
                    </span>

                    {/* Category */}
                    <div className="absolute bottom-6 left-6">
                      <span className="inline-flex px-4 py-2 rounded-full bg-orange-500 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-orange-500/20">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="relative flex flex-col justify-center p-7 sm:p-9 lg:p-12">
                    {/* Number + line */}
                    <div className="flex items-center gap-3 mb-5">
                      <span className="text-orange-500 text-sm font-bold tracking-[0.2em]">
                        PROJECT {project.number}
                      </span>

                      <div className="h-px w-12 bg-orange-500/50" />
                    </div>

                    {/* Title */}
                    <h3
                      className={`text-3xl sm:text-4xl font-bold leading-tight ${
                        darkMode ? "text-white" : "text-gray-900"
                      } group-hover:text-orange-500 transition-colors duration-300`}
                    >
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p
                      className={`mt-5 text-sm sm:text-base leading-7 ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mt-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium ${
                            darkMode
                              ? "bg-white/5 text-gray-300 border border-white/10"
                              : "bg-white text-gray-700 border border-gray-200"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-3 mt-8">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold ${
                          darkMode
                            ? "bg-white/5 border border-white/10 text-white hover:bg-white/10"
                            : "bg-white border border-gray-200 text-gray-800 hover:bg-gray-100"
                        } transition-colors`}
                      >
                        <GitFork className="w-4 h-4" />
                        GitHub
                      </motion.a>

                      {project.live && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.97 }}
                          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/20 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </motion.a>
                      )}
                    </div>

                    {/* Arrow */}
                    <ArrowUpRight className="absolute bottom-8 right-8 w-7 h-7 text-orange-500/20 group-hover:text-orange-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </div>
                </div>

                {/* Bottom orange line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.article>
            );
          })}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16 md:mt-20"
        >
          <p
            className={`text-sm mb-4 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Want to explore more of my work?
          </p>

          <motion.a
            href="https://github.com/fareehaabbasi"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-lg shadow-orange-500/20 transition-colors"
          >
            <GitFork className="w-5 h-5" />
            Explore My GitHub
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
