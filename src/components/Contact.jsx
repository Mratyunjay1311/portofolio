import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-12 lg:px-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Contact Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl mx-auto bg-white dark:bg-gray-800 shadow-lg p-8 rounded-xl"
      >
        <div className="space-y-6">

          {/* Email */} 
          <div>
            <p className="text-lg font-semibold">Email:</p>
            <a
              href="brahman.mratyunjay1311@gmail.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              brahman.mratyunjay1311@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div>
            <p className="text-lg font-semibold">Phone:</p>
            <a
              href="tel:+917300881306"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              +91 7300881306
            </a>
          </div>

          {/* GitHub */}
          <div>
            <p className="text-lg font-semibold">GitHub:</p>
            <a
              href="https://github.com/masai-course/mratyunjay_mishra_fs42_520026"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              https://github.com/your-github
            </a>
          </div>

          {/* LinkedIn */}
          <div>
            <p className="text-lg font-semibold">LinkedIn:</p>
            <a
              href="https://www.linkedin.com/in/mratyunjay-mishra/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              https://linkedin.com/in/mratyunjay-mishra
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
