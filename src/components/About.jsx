import aboutImg from "../assets/about.jpg";
import { motion } from "framer-motion";
import { ABOUT_TEXT1, ABOUT_TEXT2, ABOUT_TEXT3 } from "../constants/index";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 bg-gradient-to-r from-gray-800 via-gray-900 to-black mt-10 pt-2">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-10 text-center text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 py-4"
      >
        About Me
      </motion.h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8 flex items-center justify-center"
        >
          <img
            className="rounded-2xl h-[80vh] shadow-lg transition-transform duration-300 transform hover:scale-105"
            src={aboutImg}
            alt="About"
          />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8 flex flex-col justify-center"
        >
          <div className="lg:justify-start">
            <p className="my-3 max-w-xl py-4 text-lg text-gray-300 leading-relaxed">
              {ABOUT_TEXT1}
            </p>
            <p className="my-3 max-w-xl py-4 text-lg text-gray-300 leading-relaxed">
              {ABOUT_TEXT2}
            </p>
            <p className="my-3 max-w-xl py-4 text-lg text-gray-300 leading-relaxed">
              {ABOUT_TEXT3}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
