import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Hero.jpg";
import { motion } from "framer-motion";
import cvFile from "../assets/Shivansh_Mishra_CV.pdf";
import { Link } from 'react-scroll';

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black mt-10 py-4 border-b border-neutral-900">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between lg:p-12 max-w-6xl mx-auto">
        <div className="w-full lg:w-1/2 lg:pr-8">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-2 text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-400  to-purple-500 lg:text-8xl transition-transform duration-300 transform hover:scale-105 mt-0"
            >
              Shivansh Mishra
            </motion.h1>

            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-blue-500  to-purple-400 bg-clip-text text-5xl tracking-tight text-transparent mt-2"
            >
              Full Stack Developer
            </motion.span>

            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-4 font-medium tracking-tight text-lg text-gray-300 lg:text-xl text-center lg:text-left"
            > 
              {HERO_CONTENT}
            </motion.p>

            <div className="flex gap-4 mt-4">
              <Link
                to="contact" 
                smooth={true} 
                duration={500} 
                className="px-6 py-3 bg-gradient-to-r from-blue-600  to-gray-300 text-black font-semibold rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-l hover:shadow-2xl cursor-pointer"
              >
                Get in Touch
              </Link>

              <motion.a
                href={cvFile}
                download
                variants={container(1.5)}
                initial="hidden"
                animate="visible"
                className="flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-white text-black font-semibold rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-l hover:shadow-2xl"
              >
                Download CV
              </motion.a>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center h-[60vh] lg:h-[80vh]">
            <motion.img
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Shivansh Mishra"
              className="rounded-full border-8 border-gray-700 shadow-lg hover:shadow-2xl transition-shadow duration-300 w-80 h-80 lg:w-96 lg:h-96 mt-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
