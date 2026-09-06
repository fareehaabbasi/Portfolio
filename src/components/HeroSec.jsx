import { motion } from "framer-motion";
import heroPic from "../assets/HeroPic.png";
import { ArrowRight } from "lucide-react";

const HeroSec = ({ darkMode, toggleDarkMode }) => {
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
    <section
      className="min-h-[400px]
      sm:min-h-screen relative overflow-hidden max-w-8xl mx-auto px-7 md:px-20"
    >
      {/* FRONTEND + DEVELOPER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
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
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: "easeOut",
          }}
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
        </motion.div>

        {/* FRONTEND */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`
    font-frontend
    text-[clamp(5rem,20vw,24rem)]
lg:text-[clamp(5rem,19vw,20rem)]
    leading-[0.8]
    tracking-widest
    ${darkMode ? "text-[#F5E6D3]" : "text-orange-500"}
    whitespace-nowrap
    uppercase
    transition-colors
    duration-500
  `}
        >
          Frontend
        </motion.h1>

        {/* DEVELOPER */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
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
        </motion.div>
      </motion.div>

      {/* HERO IMAGE */}
      <motion.div
        initial={{ opacity: 0, y: 45, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 1.3,
          delay: 0.25,
          ease: [0.22, 1, 0.36, 1],
        }}
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

            [clip-path:inset(0_0_40px_0)]

            sm:[clip-path:inset(0_0_100px_0)]

            md:[clip-path:inset(0_0_0_0)]
          "
        />
      </motion.div>

      {/* LEFT TEXT */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.9,
          delay: 0.75,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`
          text-center
          sm:text-left
          flex
          absolute
          xl:left-32
          md:left-20
          md:left-11
          sm:left-40
          left-1/2
          -translate-x-1/2
          md:translate-x-0
          top-[250px]
          sm:top-[260px]
          md:top-[350px]
          xl:top-[490px]
          lg:top-96
          z-30
          ${darkMode ? "text-[#F5E6D3]" : "text-black-500"}
        `}
      >
        <div>
          <h5 className="xl:w-96 sm:w-60 w-80 text-sm md:text-base xl:text-xl">
            I BUILD MODERN, FAST & RESPONSIVE WEBSITES THAT HELP BUSINESSES
            GROW.
          </h5>

          <motion.button
            whileHover={{
              scale: 1.05,
              x: 4,
            }}
            whileTap={{
              scale: 0.96,
            }}
            transition={{
              duration: 0.2,
            }}
            className="
              mt-2
              w-fit
              mx-auto
              sm:mx-0
              border
              text-sm
              rounded-lg
              border-orange-500
              xl:px-8
              px-5
              xl:py-4
              py-2
              text-orange-500
              flex
              items-center
              gap-3
              font-extrabold
              xl:text-lg
            "
          >
            View My Work
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowRight className="text-lg text-orange-500" />
            </motion.span>
          </motion.button>
        </div>
      </motion.div>

      {/* RIGHT TEXT */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.9,
          delay: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          sm:block
          hidden
          absolute
          right-0
          -translate-x-24
          sm:-translate-x-20
          xl:-translate-x-32
          w-60
          text-right
          top-[240px]
          sm:top-[260px]
          md:top-[350px]
          xl:top-[490px]
          lg:top-96
          z-50
          text-orange-100
        "
      >
        <h5 className="text-sm xl:text-base xl:text-xl">
          LET’S TURN IDEAS INTO DIGITAL EXPERIENCES.
        </h5>

        <motion.h5
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.2,
          }}
          className="mt-3 text-orange-500 font-serif text-xl xl:text-2xl font-bold"
        >
          FAREEHA ABBASI
        </motion.h5>
      </motion.div>
    </section>
  );
};

export default HeroSec;

