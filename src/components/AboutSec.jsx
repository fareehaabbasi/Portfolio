import React from "react";
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
      <div className="max-w-8xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-orange-500 uppercase tracking-[0.3em] text-sm font-semibold mb-3">
            About Me
          </p>

          <h2
            className={`text-4xl md:text-5xl font-bold ${colors.heading}`}
          >
            Turning Ideas Into{" "}
            <span className="text-orange-500">Digital Experiences</span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Image */}
          <div className="relative flex justify-center">
            
            {/* Decorative glow */}
            <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-orange-500/20 blur-3xl rounded-full" />

            {/* Image frame */}
            <div className="relative">
              <div className="absolute -inset-3 border-2 border-orange-500 rounded-3xl rotate-3 opacity-60" />

              <div className="relative w-72 h-80 md:w-96 md:h-[450px] rounded-3xl overflow-hidden border border-orange-500/30 shadow-2xl">
                <img
                  src={aboutImg}
                  alt="About Fareeha"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Experience badge */}
              <div
                className={`absolute -bottom-6 -right-6 md:-right-8 px-6 py-4 rounded-2xl border backdrop-blur-md shadow-xl ${colors.card}`}
              >
                <p className="text-2xl font-bold text-orange-500">
                  MERN
                </p>
                <p className={`text-sm ${colors.muted}`}>
                  Stack Developer
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-orange-500 font-semibold text-lg mb-3">
              Hello, I'm Fareeha 👋
            </p>

            <h3
              className={`text-3xl md:text-4xl font-bold leading-tight mb-6 ${colors.heading}`}
            >
              I build modern websites that are{" "}
              <span className="text-orange-500">
                simple, responsive & engaging.
              </span>
            </h3>

            <p
              className={`text-base md:text-lg leading-8 mb-5 ${colors.paragraph}`}
            >
              I'm a passionate web developer focused on creating clean,
              responsive and user-friendly digital experiences. I enjoy
              turning ideas and designs into functional websites that look
              great across every screen.
            </p>

            <p
              className={`text-base md:text-lg leading-8 mb-8 ${colors.paragraph}`}
            >
              My journey started with frontend development, and I'm
              continuously expanding my skills in the MERN stack. I love
              learning new technologies, solving problems and building
              projects that make an impact.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-3 mb-9">
              {[
                "HTML",
                "CSS",
                "Bootstrap",
                "JavaScript",
                "React",
                "Next.js",
                "Express.js",
                "Tailwind CSS",
                "Node.js",
                "MongoDB",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full border border-orange-500/30 text-orange-500 text-sm font-medium hover:bg-orange-500 hover:text-white transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-7 py-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold shadow-lg shadow-orange-500/20 hover:scale-105 transition-transform duration-300"
              >
                View My Work
              </a>

              <a
                href="#contact"
                className={`px-7 py-3 rounded-full border border-orange-500 text-orange-500 font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300`}
              >
                Let's Connect
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSec;
