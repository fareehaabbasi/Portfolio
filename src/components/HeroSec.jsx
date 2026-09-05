// import { color } from "framer-motion";
import heroPic from "../assets/HeroPic.png";
import { ArrowRight } from "lucide-react";

const HeroSec = ({darkMode, toggleDarkMode}) => {
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
    <section className="min-h-[400px]
    sm:min-h-screen relative overflow-hidden max-w-7xl mx-auto px-6 md:px-20">
     {/* FRONTEND + DEVELOPER */}
<div
  className="
    absolute
    top-28
    md:top-34
    left-1/2
    -translate-x-1/2
    z-10
    md:w-max
  "
>
  {/* HI, I'M FAREEHA */}
  <div
    className="
      absolute
      left-0
      top-[-1.4rem]
      sm:top-[-2rem]
      md:top-[-2rem]
      lg:top-[-3rem]

      font-bold
      text-xs
      sm:text-sm
      md:text-base
      lg:text-lg

      whitespace-nowrap
    "
  >
    HI, I'M <span className="text-orange-500">FAREEHA</span>
  </div>

  {/* FRONTEND */}
  <h1
    className="
      font-frontend
      text-[clamp(5rem,20vw,24rem)]
      leading-[0.8]
      tracking-widest
      text-[#F5E6D3]
      whitespace-nowrap
      uppercase
    "
  >
    Frontend
  </h1>

  {/* DEVELOPER */}
  <div
    className="
      absolute
      right-0
      bottom-[-0.02em]
      translate-x-[5%]
      bg-black
      z-30
    "
  >
    <h5
      className="
        font-frontend
        text-orange-500
        font-bold
        leading-none
        text-[clamp(1.5rem,4vw,4rem)]
        whitespace-nowrap
      "
    >
      DEVELOPER
    </h5>
  </div>
</div>

    {/* HERO IMAGE */}
<div
  className="
    absolute
    left-1/2
    -translate-x-1/2

    top-[2.5rem]
    sm:top-[-0.2rem]
    md:top-[1rem]
    lg:top-[-2rem]
    xl:top-[-3rem]

    z-20
    flex
    justify-center
    pointer-events-none
  "
>
  <img
    src={heroPic}
    alt="Fareeha - Frontend Developer"
    className="
      h-auto
      object-contain

      w-[42vw]
      max-w-[220px]

      sm:w-[40vw]
      sm:max-w-[290px]

      md:w-[38vw]
      md:max-w-[400px]

      lg:w-[34vw]
      lg:max-w-[600px]

      xl:w-[38vw]
      xl:max-w-[700px]

      /* bottom crop */
      [clip-path:inset(0_0_40px_0)]

      sm:[clip-path:inset(0_0_100px_0)]

      md:[clip-path:inset(0_0_0_0)]
    "
  />
</div>

      {/* left text */}
      <div className="text-center sm:text-left flex absolute md:left-16 sm:left-40 left-1/2 -translate-x-1/2 md:translate-x-0 top-[250px] sm:top-[260px] md:top-[350px] lg:top-96 z-30 text-orange-100">
        {/* Main text */}
        <div>
          <h5 className="sm:w-60 w-80 text-sm md:text-base">
            I BUILD MODERN, FAST & RESPONSIVE WEBSITES THAT HELP BUSINESSES
            GROW.
          </h5>

          <button className="mt-2 w-fit mx-auto sm:mx-0 border text-sm rounded-lg border-orange-500 px-5 py-2 text-orange-500 flex items-center gap-3 font-extrabold">
            View My Work
            <ArrowRight className="text-lg text-orange-500" />
          </button>
        </div>
      </div>

      {/* right text */}
      {/* Mobile only text */}
      <div className="sm:block hidden absolute right-0 -translate-x-24 sm:-translate-x-14 w-60 text-right top-[240px] sm:top-[260px] md:top-[350px] lg:top-96 z-50 text-orange-100">
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
