import { motion } from "framer-motion";

const Projects = () => {
  const projectList = [
    {
      title: "Memory Saver App",
      img: "/logo.png", // put your image in public folder
      stack: ["HTML", "CSS", "JavaScript", "Firebase"],
      description:
        "A web app that stores your memories like photos and videos and unlocks them at a specific time you choose.",
      live: "https://personal-timecapsule-mmjs.netlify.app/",
      github: "https://github.com/your-github-repo",
    },
   
  ];

  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-12 lg:px-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projectList.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
          >
            {/* Image */}
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-56 object-cover"
            />

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-sm mb-4 text-gray-700 dark:text-gray-300">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-300 dark:bg-gray-700 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 duration-200"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 duration-200"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
