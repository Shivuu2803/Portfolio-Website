import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { useState } from "react";

const Project = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filterProjects = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects = PROJECTS.filter((project) =>
    selectedCategory === "all" || project.category === selectedCategory
  );

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 py-4"
      >
        Projects
      </motion.h1>

      <div className="flex justify-center mb-10">
        {["all", "frontend", "backend", "fullstack", "design"].map((category) => (
          <button
            key={category}
            onClick={() => filterProjects(category)}
            className={`mx-2 rounded-full px-6 py-3 text-lg font-semibold transition duration-300 ${
              selectedCategory === category
                ? "bg-purple-500 text-white shadow-lg"
                : "bg-neutral-700 text-neutral-300 hover:bg-gray-600 hover:text-white"
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="max-h-[600px] overflow-y-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 p-4">
          {filteredProjects.map((Project, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.5 }}
              className="rounded-lg border border-neutral-800 bg-neutral-900 p-6 shadow-lg hover:shadow-xl transition duration-300"
            >
              <img
                src={Project.image}
                alt={Project.title}
                className="mb-4 h-40 w-full rounded-lg object-cover transition-transform duration-300 hover:scale-105"
              />
              <h6 className="mb-2 text-xl font-semibold text-sky-300">{Project.title}</h6>
              <p className="mb-4 text-neutral-400">{Project.description}</p>
              <div className="flex flex-wrap mb-4">
                {Project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mb-2 rounded-full bg-emerald-900 px-3 py-1 text-sm font-medium text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-col space-y-2">
                <div className="flex space-x-2">
                  {Project.github && (
                    <a
                      href={Project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="flex-1 rounded-full bg-fuchsia-600 px-3 py-2 text-md font-medium text-white transition duration-300 hover:bg-fuchsia-800">
                        GitHub
                      </button>
                    </a>
                  )}
                  {Project.canva && (
                    <a
                      href={Project.canva}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="flex-1 rounded-full bg-pink-600 px-3 py-2 text-md font-medium text-white transition duration-300 hover:bg-pink-400">
                        Canva
                      </button>
                    </a>
                  )}
                  {Project.hostedLink && (
                    <a
                      href={Project.hostedLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="flex-1 rounded-full bg-blue-600 px-3 py-2 text-md font-medium text-white transition duration-300 hover:bg-blue-900">
                        Live Demo
                      </button>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
