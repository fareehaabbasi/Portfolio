import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import HeroSec from "./components/HeroSec";
import AboutSec from "./components/AboutSec";
import Skills from "./components/Skills";
import ServicesOffer from "./components/ServicesOffer";
import Project from "./components/Project";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });

    document.documentElement.classList.add("dark");
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div
      className={
        darkMode
          ? "relative overflow-hidden bg-gradient-to-br from-[#0d0d0d] via-black to-[#1a0d05]"
          : "relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-100"
      }
    >
      {/* Top Right Glow */}
      <div className="absolute -top-40 -right-40 h-98 w-98 rounded-full bg-orange-500/70 blur-3xl" />

      {/* Bottom Left Glow */}
      <div className="absolute -bottom-40 -left-40 h-99 w-99 rounded-full bg-orange-500/70 blur-3xl" />

      {/* Navbar */}
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      {/* Hero */}
      <HeroSec darkMode={darkMode} />

      {/* About */}
      <AboutSec darkMode={darkMode} />

      {/* Skills */}
      <Skills darkMode={darkMode} />

      {/* Services */}
      <ServicesOffer darkMode={darkMode} />

      {/* Project */}
      <Project darkMode={darkMode} />
    </div>
  );
};

export default App;
