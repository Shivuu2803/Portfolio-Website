import { useState } from "react";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { SiExpress, SiMongodb } from "react-icons/si";
import {
  FaBootstrap,
  FaCss3Alt,
  FaFigma,
  FaHtml5,
  FaNodeJs,
} from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { motion } from "framer-motion";

const iconVariations = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Skills = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <div className="bg-gray-900 py-3 mt-10">
      <div className="border-b border-neutral-800 pb-24">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="my-10 text-center text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 py-4 "
        >
          Skills
        </motion.h1>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="flex flex-wrap items-center justify-center gap-8"
        >
          {[
            { icon: <FaHtml5 />, color: "text-orange-500", name: "HTML" },
            { icon: <FaCss3Alt />, color: "text-sky-600", name: "CSS" },
            { icon: <DiMysql />, color: "text-sky-600", name: "MySQL" },
            { icon: <SiMongodb />, color: "text-green-500", name: "MongoDB" },
            { icon: <SiExpress />, color: "text-sky-700", name: "Express" },
            { icon: <RiReactjsLine />, color: "text-cyan-400", name: "React" },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={iconVariations(index % 2 === 0 ? 2.5 : 6)}
              initial="initial"
              animate="animate"
              className="relative flex flex-col items-center rounded-2xl border-4 border-neutral-800 bg-gray-800 p-6 shadow-lg hover:shadow-xl transition-all duration-300 w-32 hover:bg-gray-700 transform hover:scale-105"
              onMouseEnter={() => setHoveredTech(item.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <div className={`${item.color} text-8xl`}>{item.icon}</div>
              <div
                className={`mt-2 text-white text-sm transition-opacity duration-300 ${
                  hoveredTech === item.name ? "opacity-100" : "opacity-0"
                }`}
              >
                {item.name}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <br />
        <br />

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="flex flex-wrap items-center justify-center gap-8"
        >
          {[
            {
              icon: <TbBrandReactNative />,
              color: "text-sky-500",
              name: "React Native",
            },
            { icon: <FaFigma />, color: "text-purple-500", name: "Figma" },
            {
              icon: <FaBootstrap />,
              color: "text-violet-700",
              name: "Bootstrap",
            },
            {
              icon: <RiTailwindCssFill />,
              color: "text-sky-400",
              name: "Tailwind CSS",
            },
            { icon: <FaNodeJs />, color: "text-green-500", name: "Nodejs" },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={iconVariations(index % 2 === 0 ? 2.5 : 6)}
              initial="initial"
              animate="animate"
              className="relative flex flex-col items-center rounded-2xl border-4 border-neutral-800 bg-gray-800 p-6 shadow-lg hover:shadow-xl transition-all duration-300 w-32 hover:bg-gray-700 transform hover:scale-105"
              onMouseEnter={() => setHoveredTech(item.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <div className={`${item.color} text-8xl`}>{item.icon}</div>
              <div
                className={`mt-2 text-white text-sm transition-opacity duration-300 ${
                  hoveredTech === item.name ? "opacity-100" : "opacity-0"
                }`}
              >
                {item.name}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
