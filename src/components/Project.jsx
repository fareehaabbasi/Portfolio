import React from "react";
import image1 from "../assets/project/Image-1.png";
import image2 from "../assets/project/Image-2.png";
import image3 from "../assets/project/Image-3.png";
import image4 from "../assets/project/Image-4.png";
import image5 from "../assets/project/Image-5.png";

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
      github:
        "https://github.com/fareehaabbasi/Final-FemHackathon",
      live:
        "https://final-fem-hackathon-txsk.vercel.app/",
    },

    {
      number: "02",
      title: "Meltem Sea Food Redesign",
      category: "Next.js • Internship Project",
      image: image2,
      description:
        "A modern seafood website redesign created during my frontend internship, focused on responsive layouts, clean visual design, smooth animations, and engaging user interactions.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
      github:
        "https://github.com/fareehaabbasi/Meltem-sea-food-redesign",
      live:
        "https://meltem-sea-food-redesign.vercel.app/",
    },

    {
      number: "03",
      title: "Saylani Mass IT Hub Portal",
      category: "Frontend • Community Portal",
      image: image3,
      description:
        "A community portal for Saylani Mass IT Hub students and staff, providing dedicated spaces for lost and found items, complaints, and volunteer registration.",
      tech: ["React", "Supabase", "Tailwind CSS"],
      github:
        "https://github.com/fareehaabbasi/FemHack-2026",
      live:
        "https://beamish-trifle-ff71ff.netlify.app/",
    },

    {
      number: "04",
      title: "Blog Website",
      category: "Next.js • Frontend",
      image: image4,
      description:
        "A modern blog platform built with Next.js featuring organized content, categories, pagination, and a responsive interface designed for a smooth reading experience.",
      tech: ["Next.js", "React", "Tailwind CSS"],
      github:
        "https://github.com/fareehaabbasi/Blog-website-with-next-js",
      live:
        "https://blog-website-with-next-js-yfct-26ysh7tgo.vercel.app",
    },

    {
      number: "05",
      title: "Restaurant Presentation",
      category: "Frontend • Restaurant Website",
      image: image5,
      description:
        "A visually engaging restaurant website designed to present the brand, menu, and dining experience through a clean, responsive, and user-friendly interface.",
      tech: ["HTML", "CSS", "JavaScript"],
      github:
        "https://github.com/fareehaabbasi/Restaurant-presentation-project",
      live: "https://resturant-kitchen-resturant-project.netlify.app/",
    },

    {
      number: "06",
      title: "Interview GenAI",
      category: "MERN Stack • In Progress",
      image: null,
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
      className={`relative overflow-hidden py-24 md:py-32 ${
        darkMode
          ? "bg-black text-white"
          : "bg-white text-gray-900"
      }`}
    >
      {/* Background Glow */}

      <motion.div
        animate={{
          x: [0, 100, -60, 0],
          y: [0, -50, 40, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-40 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[150px]"
      />

      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">

        {/* SECTION HEADING */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-16 text-center md:mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/5 px-4 py-2 text-sm font-medium text-orange-500 backdrop-blur-md"
          >
            <Sparkles className="h-4 w-4" />
            My Recent Work
          </motion.div>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Featured{" "}
            <span className="relative text-orange-500">
              Projects

              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "70%" }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.4,
                  duration: 0.7,
                }}
                className="absolute -bottom-2 left-1/2 h-[3px] -translate-x-1/2 rounded-full bg-orange-500 shadow-[0_0_12px_rgba(249,115,22,0.8)]"
              />
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
            className={`mx-auto mt-7 max-w-2xl text-sm leading-7 sm:text-base ${
              darkMode
                ? "text-gray-400"
                : "text-gray-600"
            }`}
          >
            A collection of projects I've built through
            hackathons, internships, and hands-on development.
          </motion.p>
        </motion.div>

        {/* PROJECT LIST */}

        <div className="space-y-20 md:space-y-28">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.article
                key={project.title}
                initial={{
                  opacity: 0,
                  y: 80,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -8,
                }}
                className={`group relative overflow-hidden rounded-[2rem] border backdrop-blur-xl transition-all duration-500 ${
                  darkMode
                    ? "border-white/10 bg-white/[0.035] hover:border-orange-500/40 hover:bg-white/[0.055]"
                    : "border-gray-200 bg-gray-50/80 hover:border-orange-400/50 hover:bg-white"
                }`}
              >
                {/* Card Glow */}

                <div className="pointer-events-none absolute -right-40 -top-40 h-[400px] w-[400px] rounded-full bg-orange-500/10 blur-[120px] opacity-0 transition-all duration-700 group-hover:opacity-100" />

                {/* Border Glow */}

                <div className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-0 ring-1 ring-orange-500/30 transition-opacity duration-500 group-hover:opacity-100" />

                <div
                  className={`relative grid lg:grid-cols-2 ${
                    !isEven
                      ? "lg:[&>*:first-child]:order-2"
                      : ""
                  }`}
                >

                  {/* IMAGE */}

                  <div className="relative min-h-[300px] overflow-hidden sm:min-h-[390px] lg:min-h-[500px]">

                    {project.image ? (
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 h-full w-full object-cover"
                        whileHover={{
                          scale: 1.1,
                        }}
                        transition={{
                          duration: 1,
                          ease: "easeOut",
                        }}
                      />
                    ) : (
                      <div
                        className={`absolute inset-0 flex items-center justify-center ${
                          darkMode
                            ? "bg-zinc-950"
                            : "bg-gray-100"
                        }`}
                      >
                        <div className="text-center">
                          <Sparkles className="mx-auto mb-3 h-9 w-9 text-orange-500" />

                          <p
                            className={`text-sm ${
                              darkMode
                                ? "text-gray-500"
                                : "text-gray-400"
                            }`}
                          >
                            Project Preview
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Gradient */}

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />

                    {/* Hover Tint */}

                    <div className="absolute inset-0 bg-orange-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Number */}

                    <motion.div
                      initial={{
                        opacity: 0,
                        x: -30,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.2,
                        duration: 0.6,
                      }}
                      className="absolute left-6 top-5"
                    >
                      <span className="select-none text-8xl font-black leading-none tracking-tighter text-white/10 sm:text-9xl">
                        {project.number}
                      </span>
                    </motion.div>

                    {/* Category */}

                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.3,
                        duration: 0.5,
                      }}
                      className="absolute bottom-6 left-6 right-6"
                    >
                      <span className="inline-flex items-center rounded-full border border-white/20 bg-black/60 px-4 py-2 text-xs font-semibold text-white shadow-xl backdrop-blur-md sm:text-sm">
                        <span className="mr-2 h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_12px_rgba(249,115,22,1)]" />

                        {project.category}
                      </span>
                    </motion.div>
                  </div>

                  {/* CONTENT */}

                  <div className="relative flex flex-col justify-center p-7 sm:p-10 lg:p-14">

                    {/* Label */}

                    <motion.div
                      initial={{
                        opacity: 0,
                        x: -20,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.15,
                        duration: 0.5,
                      }}
                      className="mb-5 flex items-center gap-3"
                    >
                      <span className="text-xs font-bold tracking-[0.3em] text-orange-500 sm:text-sm">
                        PROJECT {project.number}
                      </span>

                      <span className="h-px w-10 bg-orange-500/40" />
                    </motion.div>

                    {/* Title */}

                    <motion.h3
                      initial={{
                        opacity: 0,
                        y: 15,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.2,
                        duration: 0.6,
                      }}
                      className={`text-3xl font-bold leading-tight transition-all duration-300 sm:text-4xl ${
                        darkMode
                          ? "text-white group-hover:text-orange-500"
                          : "text-gray-900 group-hover:text-orange-500"
                      }`}
                    >
                      {project.title}
                    </motion.h3>

                    {/* Description */}

                    <motion.p
                      initial={{
                        opacity: 0,
                        y: 15,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.3,
                        duration: 0.6,
                      }}
                      className={`mt-5 max-w-xl text-sm leading-7 sm:text-base ${
                        darkMode
                          ? "text-gray-400"
                          : "text-gray-600"
                      }`}
                    >
                      {project.description}
                    </motion.p>

                    {/* Tech Stack */}

                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 15,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.4,
                        duration: 0.6,
                      }}
                      className="mt-7 flex flex-wrap gap-2"
                    >
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{
                            opacity: 0,
                            scale: 0.8,
                          }}
                          whileInView={{
                            opacity: 1,
                            scale: 1,
                          }}
                          viewport={{
                            once: true,
                          }}
                          transition={{
                            delay:
                              0.45 + techIndex * 0.05,
                            duration: 0.35,
                          }}
                          whileHover={{
                            y: -3,
                            scale: 1.05,
                          }}
                          className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-all duration-300 ${
                            darkMode
                              ? "border-white/10 bg-white/5 text-gray-300 hover:border-orange-500/40 hover:bg-orange-500/10 hover:text-orange-400"
                              : "border-gray-200 bg-white text-gray-700 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600"
                          }`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>

                    {/* Buttons */}

                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.5,
                        duration: 0.6,
                      }}
                      className="mt-9 flex flex-wrap gap-3"
                    >
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{
                          scale: 1.04,
                          y: -3,
                        }}
                        whileTap={{
                          scale: 0.96,
                        }}
                        className={`group/button inline-flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                          darkMode
                            ? "border-white/10 bg-white/5 text-white hover:border-orange-500/40 hover:bg-orange-500/10"
                            : "border-gray-200 bg-white text-gray-800 hover:border-orange-300 hover:bg-orange-50"
                        }`}
                      >
                        <GitFork className="h-4 w-4 transition-transform duration-300 group-hover/button:rotate-12" />

                        GitHub

                        <ArrowUpRight className="h-3.5 w-3.5 opacity-50 transition-all duration-300 group-hover/button:translate-x-1 group-hover/button:-translate-y-1 group-hover/button:opacity-100" />
                      </motion.a>

                      {project.live && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{
                            scale: 1.04,
                            y: -3,
                          }}
                          whileTap={{
                            scale: 0.96,
                          }}
                          className="group/button inline-flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:bg-orange-600 hover:shadow-orange-500/40"
                        >
                          <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover/button:rotate-6" />

                          Live Demo

                          <ArrowUpRight className="h-3.5 w-3.5 transition-all duration-300 group-hover/button:translate-x-1 group-hover/button:-translate-y-1" />
                        </motion.a>
                      )}
                    </motion.div>

                    {/* Decorative Arrow */}

                    <div className="absolute bottom-8 right-8 hidden sm:block">
                      <ArrowUpRight
                        className={`h-9 w-9 transition-all duration-500 ${
                          darkMode
                            ? "text-white/10 group-hover:text-orange-500"
                            : "text-gray-200 group-hover:text-orange-500"
                        } group-hover:-translate-y-2 group-hover:translate-x-2`}
                      />
                    </div>
                  </div>
                </div>

                {/* Bottom Accent */}

                <div className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.8)] transition-all duration-700 group-hover:w-full" />
              </motion.article>
            );
          })}
        </div>

        {/* GITHUB CTA */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mt-24 text-center md:mt-32"
        >
          <p
            className={`mb-5 text-sm ${
              darkMode
                ? "text-gray-400"
                : "text-gray-600"
            }`}
          >
            Want to explore more of my work?
          </p>

          <motion.a
            href="https://github.com/fareehaabbasi"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.06,
              y: -3,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="group inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 font-semibold text-white shadow-xl shadow-orange-500/20 transition-all duration-300 hover:bg-orange-600 hover:shadow-orange-500/40"
          >
            <GitFork className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />

            Explore My GitHub

            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;

