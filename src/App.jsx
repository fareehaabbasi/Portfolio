import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";

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
      ? "relative overflow-hidden min-h-screen bg-gradient-to-br from-[#0d0d0d] via-black to-[#1a0d05]"
      : "relative overflow-hidden min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100"
  }
>
  {/* Top Right Glow */}
  <div className="absolute -top-40 -right-40 h-98 w-98 rounded-full bg-orange-500/70 blur-3xl"></div>

  {/* Bottom Left Glow */}
  <div className="absolute -bottom-40 -left-40 h-99 w-99 rounded-full bg-orange-500/70 blur-3xl"></div>

  {/* Your Content */}
  <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
</div>
  );
};

export default App;
