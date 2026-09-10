import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  ArrowUpRight,
  GitFork,
  MessageCircle,
  Sparkles,
} from "lucide-react";

// LinkedIn icon — lucide-react ke export error se bachne ke liye
const LinkedInIcon = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.28 2.38 4.28 5.48v6.26ZM5.32 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.54 20.45H7.1V9H3.54v11.45Z" />
  </svg>
);

const contactItems = [
  {
    label: "Email Me",
    text: "Let's discuss your project",
    href: "mailto:abbasifareeha9@gmail.com",
    icon: Mail,
    external: false,
  },
  {
    label: "WhatsApp",
    text: "Let's have a quick chat",
    href: "https://wa.me/923323792133",
    icon: MessageCircle,
    external: true,
  },
  {
    label: "LinkedIn",
    text: "Let's connect professionally",
    href: "https://www.linkedin.com/in/fareeha-abbasi2005/",
    icon: LinkedInIcon,
    external: true,
  },
  {
    label: "GitHub",
    text: "Explore my projects",
    href: "https://github.com/fareehaabbasi",
    icon: GitFork,
    external: true,
  },
];

const ContactSec = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white px-6 py-16 text-black dark:bg-black dark:text-white md:px-10 md:py-20"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-orange-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-500">
            <Sparkles size={15} />
            Let's Work Together
          </div>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Have a project
            <span className="relative ml-2 inline-block text-orange-500">
              in mind?
              <span className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-orange-500" />
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of something great.
          </p>
        </motion.div>

        {/* Main Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-xl dark:border-white/10 dark:bg-white/[0.03] md:p-10"
        >
          {/* Top Orange Line */}
          <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-orange-500 to-transparent" />

          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left Side */}
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
                Get in touch
              </p>

              <h3 className="max-w-lg text-3xl font-bold leading-tight sm:text-4xl">
                Let's turn your idea into something{" "}
                <span className="text-orange-500">amazing.</span>
              </h3>

              <p className="mt-5 max-w-lg text-sm leading-7 text-gray-600 dark:text-gray-400">
                Whether you have a new project, a business idea, or simply want
                to connect, feel free to reach out. I'd love to hear from you.
              </p>

              {/* Contact Options */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {contactItems.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noreferrer" : undefined}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="group relative flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 transition-all duration-300 hover:border-orange-500/40 hover:shadow-lg hover:shadow-orange-500/10 dark:border-white/10 dark:bg-white/[0.03]"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                        <Icon size={20} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="font-semibold">{item.label}</p>
                        <p className="mt-1 truncate text-xs text-gray-500 dark:text-gray-400">
                          {item.text}
                        </p>
                      </div>

                      <ArrowUpRight
                        size={17}
                        className="text-gray-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-orange-500"
                      />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Right CTA */}
            <div className="relative flex min-h-[350px] items-center justify-center overflow-hidden rounded-3xl border border-orange-500/20 bg-orange-500/[0.04] p-8">
              {/* Decorative Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute h-64 w-64 rounded-full border border-orange-500/10 border-dashed"
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute h-48 w-48 rounded-full border border-orange-500/15"
              />

              <div className="relative z-10 text-center">
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.05 }}
                  className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-xl shadow-orange-500/30"
                >
                  <Mail size={28} />
                </motion.div>

                <p className="text-sm font-medium text-orange-500">
                  Have a project in mind?
                </p>

                <h4 className="mt-2 text-3xl font-bold">
                  Let's talk.
                </h4>

                <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-gray-600 dark:text-gray-400">
                  Tell me about your idea and let's see how we can bring it to
                  life.
                </p>

                <motion.a
                  href="mailto:abbasifareeha9@gmail.com"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-7 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600"
                >
                  Start a Conversation
                  <ArrowUpRight size={17} />
                </motion.a>
              </div>
            </div>
          </div>

          {/* Bottom Orange Line */}
          <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />

          {/* Copyright */}
          <p className="pt-6 text-center text-xs text-gray-500 dark:text-gray-500">
            © {new Date().getFullYear()} Fareeha Abbasi. Built with React &
            Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSec;

