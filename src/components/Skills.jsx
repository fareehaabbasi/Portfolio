import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Palette,
  Braces,
  Atom,
  Server,
  Database,
  GitBranch,
  GitFork,
} from "lucide-react";

const SkillsSec = ({ darkMode }) => {
  const [currentSkill, setCurrentSkill] = useState(0);

  const lightColors = {
    section: "bg-gray-50",
    heading: "text-gray-900",
    text: "text-gray-600",
    card: "bg-white border-gray-200",
    iconBg: "bg-orange-50",
  };

  const darkColors = {
    section: "bg-[#0b0b0b]",
    heading: "text-white",
    text: "text-gray-400",
    card: "bg-[#111111] border-white/10",
    iconBg: "bg-orange-500/10",
  };

  const colors = darkMode ? darkColors : lightColors;

  const skills = [
    {
      name: "HTML",
      description: "Semantic and structured web pages",
      icon: Code2,
    },
    {
      name: "CSS",
      description: "Modern and responsive styling",
      icon: Palette,
    },
    {
      name: "JavaScript",
      description: "Interactive web experiences",
      icon: Braces,
    },
    {
      name: "React",
      description: "Modern user interfaces",
      icon: Atom,
    },
    {
      name: "Node.js",
      description: "Backend and server-side development",
      icon: Server,
    },
    {
      name: "MongoDB",
      description: "Database management",
      icon: Database,
    },
    {
      name: "Git",
      description: "Version control and collaboration",
      icon: GitBranch,
    },
    {
      name: "GitHub",
      description: "Code hosting and collaboration",
      icon: GitFork,
    },
  ];

  // Mobile Auto Slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [skills.length]);

  return (
    <section
      id="skills"
      className={`min-h-screen ${colors.section} transition-colors duration-500 overflow-hidden`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-18 md:py-18">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-orange-500 uppercase tracking-[0.3em] text-sm font-semibold mb-3">
            My Expertise
          </p>

          <h2
            className={`text-4xl md:text-5xl font-bold ${colors.heading}`}
          >
            Skills &{" "}
            <span className="text-orange-500">
              Technologies
            </span>
          </h2>

          <p
            className={`max-w-2xl mx-auto mt-5 leading-7 ${colors.text}`}
          >
            The technologies and tools I use to transform ideas into
            modern, responsive and functional digital experiences.
          </p>
        </motion.div>


        {/* ================= MOBILE SLIDER ================= */}

        <div className="sm:hidden">

          <div className="relative h-[230px] w-full">

            <AnimatePresence mode="wait">
              {(() => {
                const skill = skills[currentSkill];
                const Icon = skill.icon;

                return (
                  <motion.div
                    key={skill.name}

                    initial={{
                      opacity: 0,
                      x: 100,
                    }}

                    animate={{
                      opacity: 1,
                      x: 0,
                    }}

                    exit={{
                      opacity: 0,
                      x: -100,
                    }}

                    transition={{
                      duration: 0.6,
                      ease: "easeInOut",
                    }}

                    className={`absolute inset-0 p-7 rounded-2xl border ${colors.card} overflow-hidden`}
                  >

                    {/* Glow */}
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.15, 0.3, 0.15],
                      }}

                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}

                      className="absolute -top-10 -right-10 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl"
                    />


                    {/* Icon */}
                    <motion.div
                      initial={{ scale: 0.7, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.2,
                      }}

                      className={`relative w-14 h-14 flex items-center justify-center rounded-xl ${colors.iconBg} mb-5`}
                    >
                      <Icon
                        size={28}
                        className="text-orange-500"
                      />
                    </motion.div>


                    {/* Content */}
                    <h3
                      className={`relative text-xl font-bold mb-2 ${colors.heading}`}
                    >
                      {skill.name}
                    </h3>

                    <p
                      className={`relative text-sm leading-6 ${colors.text}`}
                    >
                      {skill.description}
                    </p>


                    {/* Bottom Line */}
                    <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-orange-500 to-amber-500" />

                  </motion.div>
                );
              })()}
            </AnimatePresence>

          </div>


          {/* Slider Indicators */}
          <div className="flex justify-center items-center gap-2 mt-8">

            {skills.map((_, index) => (
              <motion.div
                key={index}

                animate={{
                  width:
                    index === currentSkill
                      ? 24
                      : 8,

                  opacity:
                    index === currentSkill
                      ? 1
                      : 0.35,
                }}

                transition={{
                  duration: 0.3,
                }}

                className="h-2 rounded-full bg-orange-500"
              />
            ))}

          </div>

        </div>


        {/* ================= DESKTOP / TABLET GRID ================= */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}

          variants={{
            hidden: {},

            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}

          className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >

          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}

                variants={{
                  hidden: {
                    opacity: 0,
                    y: 40,
                  },

                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}

                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}

                transition={{
                  duration: 0.3,
                }}

                className={`group relative p-6 rounded-2xl border ${colors.card} overflow-hidden cursor-default`}
              >

                {/* Hover Glow */}
                <div
                  className="
                    absolute
                    -top-10
                    -right-10
                    w-24
                    h-24
                    bg-orange-500/10
                    rounded-full
                    blur-2xl
                    group-hover:bg-orange-500/20
                    transition-all
                    duration-500
                  "
                />


                {/* Icon */}
                <div
                  className={`relative w-14 h-14 flex items-center justify-center rounded-xl ${colors.iconBg} mb-5`}
                >

                  <Icon
                    size={28}
                    className="
                      text-orange-500
                      transition-transform
                      duration-300
                      group-hover:scale-110
                      group-hover:rotate-3
                    "
                  />

                </div>


                {/* Content */}
                <h3
                  className={`relative text-xl font-bold mb-2 ${colors.heading}`}
                >
                  {skill.name}
                </h3>

                <p
                  className={`relative text-sm leading-6 ${colors.text}`}
                >
                  {skill.description}
                </p>


                {/* Bottom Line */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-1
                    w-0
                    bg-gradient-to-r
                    from-orange-500
                    to-amber-500
                    group-hover:w-full
                    transition-all
                    duration-500
                  "
                />

              </motion.div>
            );
          })}

        </motion.div>

      </div>
    </section>
  );
};

export default SkillsSec;
