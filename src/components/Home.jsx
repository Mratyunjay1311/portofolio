import { motion } from "framer-motion";

export default function Home({ onNavigate }) {
  return (
    <section className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center py-16 px-4 max-w-7xl mx-auto">
      {/* LEFT SIDE - Text Content */}
      <div className="space-y-8">
        <div>
          <motion.h1
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
          >
            Hi, I'm{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              Mratyunjay Mishra
            </span>
          </motion.h1>

          <motion.p
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-5 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed"
          >
            A passionate <span className="font-semibold text-gray-800 dark:text-gray-200">Full Stack Web Developer</span> focused on building elegant, performant, and user-centric web applications using modern technologies like React, Next.js, Node.js, and TypeScript.
          </motion.p>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-wrap gap-4"
        >
          <button
            onClick={() => onNavigate("projects")}
            className="px-7 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 hover:shadow-lg transition-all duration-200 shadow-md"
          >
            View My Work
          </button>

          <button
            onClick={() => onNavigate("contact")}
            className="px-7 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
          >
            Get In Touch
          </button>
        </motion.div>
      </div>

      {/* RIGHT SIDE - Profile Image */}
      <motion.div
        initial={{ scale: 0.88, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex justify-center md:justify-end"
      >
        <div className="relative">
          {/* Subtle background accent ring */}
          <div className="absolute inset-0 translate-x-4 translate-y-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-full blur-3xl -z-10"></div>
          
          <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
            <img
              src="/profile.png"
              alt="Mratyunjay Mishra"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}