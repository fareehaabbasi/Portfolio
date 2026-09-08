import React from "react";
import { motion } from "framer-motion";
import {
  Monitor,
  Smartphone,
  Code2,
  Layout,
  Gauge,
  Wrench,
} from "lucide-react";

const ServicesSec = ({ darkMode }) => {
  const lightColors = {
    section: "bg-white",
    heading: "text-gray-900",
    text: "text-gray-600",
    card: "bg-gray-50 border-gray-200",
  };

  const darkColors = {
    section: "bg-[#080808]",
    heading: "text-white",
    text: "text-gray-400",
    card: "bg-[#111111] border-white/10",
  };

  const colors = darkMode ? darkColors : lightColors;

  const services = [
    {
      icon: Monitor,
      number: "01",
      title: "Web Development",
      description:
        "Building modern, functional and responsive websites tailored to your business or personal brand.",
    },
    {
      icon: Smartphone,
      number: "02",
      title: "Responsive Design",
      description:
        "Creating websites that look and work perfectly across desktops, tablets and mobile devices.",
    },
    {
      icon: Layout,
      number: "03",
      title: "Landing Pages",
      description:
        "Designing clean and engaging landing pages focused on presenting your product, service or idea.",
    },
    {
      icon: Code2,
      number: "04",
      title: "Frontend Development",
      description:
        "Turning designs and ideas into interactive user interfaces using modern frontend technologies.",
    },
    {
      icon: Gauge,
      number: "05",
      title: "Website Optimization",
      description:
        "Improving website performance, responsiveness and overall user experience for better results.",
    },
    {
      icon: Wrench,
      number: "06",
      title: "Website Maintenance",
      description:
        "Fixing bugs, making updates and keeping your website running smoothly and efficiently.",
    },
  ];

  return (
    <section
      id="services"
      className={`${colors.section} transition-colors duration-500 overflow-hidden`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-18 md:py-18">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-orange-500 uppercase tracking-[0.3em] text-sm font-semibold mb-3">
            What I Do
          </p>

          <h2
            className={`text-4xl md:text-5xl font-bold ${colors.heading}`}
          >
            Services I{" "}
            <span className="text-orange-500">Offer</span>
          </h2>

          <p
            className={`max-w-2xl mx-auto mt-5 leading-7 ${colors.text}`}
          >
            I help turn ideas into clean, responsive and engaging
            digital experiences that are built with both users and
            businesses in mind.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.number}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 50,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                whileHover={{
                  y: -10,
                }}
                transition={{
                  duration: 0.4,
                }}
                className={`group relative p-7 rounded-2xl border ${colors.card} overflow-hidden`}
              >
                {/* Background Glow */}
                <div
                  className="
                    absolute
                    -top-16
                    -right-16
                    w-40
                    h-40
                    rounded-full
                    bg-orange-500/10
                    blur-3xl
                    group-hover:bg-orange-500/20
                    transition-all
                    duration-500
                  "
                />

                {/* Number */}
                <div className="absolute top-6 right-7">
                  <span className="text-5xl font-bold text-orange-500/10 group-hover:text-orange-500/20 transition-colors duration-500">
                    {service.number}
                  </span>
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                  }}
                  className="
                    relative
                    w-14
                    h-14
                    rounded-xl
                    bg-orange-500/10
                    flex
                    items-center
                    justify-center
                    mb-6
                  "
                >
                  <Icon
                    size={28}
                    className="text-orange-500"
                  />
                </motion.div>

                {/* Title */}
                <h3
                  className={`relative text-xl font-bold mb-3 ${colors.heading}`}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className={`relative text-sm leading-7 ${colors.text}`}
                >
                  {service.description}
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

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className={`mb-5 ${colors.text}`}>
            Have a project in mind?
          </p>

          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.05,
              y: -3,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              inline-flex
              items-center
              gap-2
              px-7
              py-3
              rounded-full
              bg-gradient-to-r
              from-orange-500
              to-amber-500
              text-white
              font-semibold
              shadow-lg
              shadow-orange-500/20
            "
          >
            Let's Work Together
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesSec;

