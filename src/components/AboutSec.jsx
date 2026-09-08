import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/aboutImg.jpeg";

const AboutSec = ({ darkMode }) => {
  const lightColors = {
    section: "bg-white",
    heading: "text-gray-900",
    paragraph: "text-gray-600",
    muted: "text-gray-500",
    card: "bg-orange-50 border-orange-100",
  };

  const darkColors = {
    section: "bg-[#080808]",
    heading: "text-white",
    paragraph: "text-gray-300",
    muted: "text-gray-400",
    card: "bg-[#111111] border-orange-500/20",
  };

  const colors = darkMode ? darkColors : lightColors;

  return (
    <section
      id="about"
      className={`min-h-screen ${colors.section} transition-colors duration-500 overflow-hidden`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-orange-500 uppercase tracking-[0.3em] text-sm font-semibold mb-3">
            About Me
          </p>

          <h2 className={`text-4xl md:text-5xl font-bold ${colors.heading}`}>
            Turning Ideas Into{" "}
            <span className="text-orange-500">
              Digital Experiences
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            {/* Decorative glow */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute w-72 h-72 md:w-96 md:h-96 bg-orange-500/20 blur-3xl rounded-full"
            />

            <div className="relative">
              {/* Rotated Border */}
              <motion.div
                initial={{ rotate: -5, opacity: 0 }}
                whileInView={{ rotate: 3, opacity: 0.6 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -inset-3 border-2 border-orange-500 rounded-3xl"
              />

              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                className="relative w-72 h-80 md:w-96 md:h-[450px] rounded-3xl overflow-hidden border border-orange-500/30 shadow-2xl"
              >
                <img
                  src={aboutImg}
                  alt="About Fareeha"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Experience Badge */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.5,
                  type: "spring",
                  stiffness: 120,
                }}
                whileHover={{ y: -5 }}
                className={`absolute -bottom-6 -right-6 md:-right-8 px-6 py-4 rounded-2xl border backdrop-blur-md shadow-xl ${colors.card}`}
              >
                <p className="text-2xl font-bold text-orange-500">
                  MERN
                </p>

                <p className={`text-sm ${colors.muted}`}>
                  Stack Developer
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-orange-500 font-semibold text-lg mb-3 text-center sm:text-left"
            >
              Hello, I'm Fareeha Abbasi 👋
            </motion.p>

            <h3
              className={`text-3xl md:text-4xl font-bold leading-tight mb-6 text-center sm:text-left ${colors.heading}`}
            >
              I build modern websites that are{" "}
              <span className="text-orange-500">
                simple, responsive & engaging.
              </span>
            </h3>

            <p className={`text-base md:text-lg leading-8 mb-5 text-center sm:text-left ${colors.paragraph}`}>
              I'm a passionate web developer focused on creating clean,
              responsive and user-friendly digital experiences. I enjoy
              turning ideas and designs into functional websites that look
              great across every screen.
            </p>

            <p className={`text-base md:text-lg leading-8 mb-8 text-center sm:text-left ${colors.paragraph}`}>
              My journey started with frontend development, and I'm
              continuously expanding my skills in the MERN stack. I love
              learning new technologies, solving problems and building
              projects that make an impact.
            </p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center sm:justify-start"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="px-7 py-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold shadow-lg shadow-orange-500/20"
              >
                View My Work
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="px-7 py-3 rounded-full border border-orange-500 text-orange-500 font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300"
              >
                Let's Connect
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSec;

