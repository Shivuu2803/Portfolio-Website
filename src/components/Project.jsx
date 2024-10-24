import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((Project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={Project.image}
                width={200}
                height={150}
                alt={Project.title}
                className="mb-6 rounded"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{Project.title}</h6>
              <p className="mb-4 text-neutral-400">{Project.description}</p>
              {Project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-md font-medium text-sky-300"
                >
                  {tech}
                </span>
              ))}
              <div className="ml-0">
                {Project.github && (
                  <a
                    href={Project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="mr-2 mt-4 rounded-xl bg-neutral-900 px-3 py-2 text-md font-medium text-pink-300">
                      View on GitHub
                    </button>
                  </a>
                )}
                {Project.canva && (
                  <a
                    href={Project.canva}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="mr-2 mt-4 rounded-xl bg-neutral-900 px-3 py-2 text-md font-medium text-green-300">
                      View on Canva
                    </button>
                  </a>
                )}
                {Project.hostedLink && (
                  <a
                    href={Project.hostedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="mr-2 mt-4 rounded-xl bg-neutral-900 px-3 py-2 text-md font-medium text-blue-300">
                      View Live
                    </button>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
