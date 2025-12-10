import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-12 lg:px-20 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12"
      >
        About Me
      </motion.h2>

      <div className="max-w-4xl mx-auto space-y-10">

        {/* Education */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow"
        >
          <h3 className="text-2xl font-semibold mb-4">Education</h3>

          <div className="space-y-3">
            <div>
              <p className="font-medium text-lg">Masai School, Bengaluru</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Software Development (Dec 2024 - Ongoing)</p>
            </div>

            <div>
              <p className="font-medium text-lg">Dr. Bhimrao Ambedkar University, Agra</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Bachelor of Science (Mathematics)</p>
            </div>
          </div>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 40 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow"
        >
          <h3 className="text-2xl font-semibold mb-4">Technical Skills</h3>

          <div className="flex flex-wrap gap-3">
            {[
              "HTML", "CSS", "JavaScript", "React", "Node.js", "Express",
              "MongoDB", "Firebase", "Git", "GitHub", "Tailwind CSS"
            ].map((skill, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
