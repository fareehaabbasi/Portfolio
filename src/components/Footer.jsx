import React from "react";
import { ArrowUp, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black px-6 py-7 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 sm:flex-row">

        {/* Copyright */}
        <p className="text-center text-xs text-gray-500 transition-colors duration-300 hover:text-gray-300 sm:text-left">
          © {currentYear}{" "}
          <span className="font-medium text-gray-300">
            Fareeha Abbasi
          </span>
          . All rights reserved.
        </p>

        {/* Built With */}
        <p className="flex items-center gap-1.5 text-xs text-gray-500">
          Built with
          <Heart
            size={13}
            className="fill-orange-500 text-orange-500 transition-transform duration-300 hover:scale-125"
          />
          using{" "}
          <span className="text-gray-400">React</span>
          <span className="text-gray-700">&</span>
          <span className="text-gray-400">Tailwind CSS</span>
        </p>

        {/* Back To Top */}
        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          aria-label="Back to top"
          className="group flex h-9 w-9 items-center justify-center rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-500 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:bg-orange-500 hover:text-white hover:shadow-lg hover:shadow-orange-500/20"
        >
          <ArrowUp
            size={16}
            className="transition-transform duration-300 group-hover:-translate-y-0.5"
          />
        </button>
      </div>

      {/* Bottom Orange Glow Line */}
      <div className="mx-auto mt-6 h-px max-w-6xl bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />
    </footer>
  );
};

export default Footer;
