import { color } from "framer-motion";
import heroPic from "../assets/HeroPic.png";
import { ArrowRight } from "lucide-react";

const HeroSec = (darkMode, toggleDarkMode) => {
  const lightColors = {
    navBg: "bg-linear-to-br from-orange-200 to-white",
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-800",
    textHover: "text-orange-500",
    textActive: "text-orange-600",
    indicator: "from-orange-500 to-amber-500",
    button: "from-orange-500 to-amber-500",
  };

  const darkColors = {
    navBg: "bg-linear-to-br from-orange-500 to-black",
    textPrimary: "text-white",
    textSecondary: "text-gray-800",
    textHover: "text-orange-500",
    textActive: "text-orange-300",
    indicator: "from-orange-500 to-amber-500",
    button: "from-orange-500 to-amber-500",
  };

  const colors = darkMode ? darkColors : lightColors;

  return (
    <section className="min-h-screen relative overflow-hidden max-w-7xl mx-auto px-6 md:px-20">
      {/* Name title */}
      <div className="flex flex-col md:flex-row justify-center md:justify-between md:pt-20 pt-20">
        <h5 className="font-bold md:text-left">
          HI, I'm <span className="text-orange-500">FAREEHA</span>
        </h5>
      </div>

      {/* Huge Text */}
      <h1
        className={`absolute
    inset-x-0
    top-24
    text-center
    font-frontend
    text-[clamp(5rem,20vw,24rem)]
    leading-[0.8]
    tracking-widest
    text-[#F5E6D3]
    whitespace-nowrap
    top-27
    md:top-28
    uppercase 
    `}
      >
        Frontend
      </h1>

      {/* Name title */}
      <div className="flex absolute left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-[5%] top-18 md:top-18 z-50 text-center md:flex-row md:px-10 lg:pt-55 md:pt-36 sm:pt-36 pt-23">
        <div className="bg-black">
          <h5 className="md:text-end text-center text-2xl md:text-4xl font-frontend">
            <span className="text-orange-500">DEVELOPER</span>
          </h5>
        </div>
      </div>

      {/* Hero Image */}
      <div
        className="
            absolute
            left-1/2
            top-[3rem]
            md:top-[1rem]
            lg:top-[-1rem]
            z-20
            -translate-x-1/2
            flex
            justify-center
            pointer-events-none
          "
      >
        <img
          src={heroPic}
          alt="Fareeha - Frontend Developer"
          className="
          w-[40vw]
          max-w-[250px]
          h-auto
          object-contain

          sm:w-[30vw]
          sm:max-w-[380px]

          md:w-[30vw]
          md:max-w-[520px]

          lg:w-[30vw]
          lg:max-w-[700px]

          xl:w-[48vw]
          xl:max-w-[800px]
        "
        />
      </div>

      {/* left text */}
      <div className="text-center md:text-left flex absolute md:left-16 left-1/2 -translate-x-1/2 md:translate-x-0 top-[240px] sm:top-[250px] md:top-[350px] lg:top-96 z-50 text-orange-100">
        {/* Main text */}
        <div>
          <h5 className="md:w-60 w-80 text-sm md:text-base">
            I BUILD MODERN, FAST & RESPONSIVE WEBSITES THAT HELP BUSINESSES
            GROW.
          </h5>

          <button className="mt-2 w-fit mx-auto md:mx-0 border text-sm rounded-lg border-orange-500 px-5 py-2 text-orange-500 flex items-center gap-3 font-extrabold">
            View My Work
            <ArrowRight className="text-lg text-orange-500" />
          </button>
        </div>
      </div>

      {/* right text */}
      {/* Mobile only text */}
        <div className="md:block hidden absolute top-24 left-1/2 -translate-x-1/2 w-60 text-center">
          <h5 className="text-sm">
            LET’S TURN IDEAS INTO DIGITAL EXPERIENCES.
          </h5>

          <h5 className="mt-3 text-orange-500 font-serif text-xl">
            FAREEHA ABBASI
          </h5>
        </div>
    </section>
  );
};

export default HeroSec;
