import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa"; 
import { motion } from "framer-motion";
import { Link } from 'react-scroll'; 

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-4 px-6 mt-5 bg-transparent">
      <motion.div  whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }} 
        className="flex items-center gap-6 text-2xl text-white">
        <Link 
          to="about" 
          smooth={true} 
          duration={500} 
          className="cursor-pointer hover:text-purple-500 transition-transform duration-200 transform hover:scale-105"
        >
          About
        </Link>
        <Link 
          to="skills" 
          smooth={true} 
          duration={500} 
          className="cursor-pointer hover:text-purple-500 transition-transform duration-200 transform hover:scale-105"
        >
          Skills
        </Link>
        <Link 
          to="projects" 
          smooth={true} 
          duration={500} 
          className="cursor-pointer hover:text-purple-500 transition-transform duration-200 transform hover:scale-105"
        >
          Projects
        </Link>
        <Link 
          to="contact" 
          smooth={true} 
          duration={500} 
          className="cursor-pointer hover:text-purple-500 transition-transform duration-200 transform hover:scale-105"
        >
          Contact
        </Link>
      </motion.div>

      <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }} 
        className="flex items-center gap-6 text-2xl text-white"
      >
        <a 
          href="https://www.linkedin.com/in/shivanshmishra02/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="transition-transform duration-200 transform hover:scale-125 hover:text-blue-600"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a 
          href="https://github.com/Shivuu2803" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="transition-transform duration-200 transform hover:scale-125 hover:text-gray-400"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a 
          href="https://www.instagram.com/shivuu2803/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="transition-transform duration-200 transform hover:scale-125 hover:text-pink-500"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a 
          href="https://twitter.com/Shivansh149" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="transition-transform duration-200 transform hover:scale-125 hover:text-blue-400"
          aria-label="Twitter"
        >
          <FaTwitterSquare />
        </a>
      </motion.div>
    </nav>
  );
};

export default Navbar;
