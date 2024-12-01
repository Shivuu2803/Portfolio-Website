import { useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTwitterSquare,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative">
      <div className="hidden md:flex items-center justify-between py-4 px-6 mt-5 bg-transparent">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-6 text-2xl text-white"
        >
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
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex items-center justify-between py-4 px-6 bg-transparent">
        <div className="text-2xl text-white">Portfolio</div>
        <button
          onClick={toggleMenu}
          className="text-white text-3xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-800 text-white flex flex-col items-center gap-6 py-6 z-10">
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={toggleMenu}
            className="cursor-pointer hover:text-purple-500 transition-transform duration-200 transform hover:scale-105"
          >
            About
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            onClick={toggleMenu}
            className="cursor-pointer hover:text-purple-500 transition-transform duration-200 transform hover:scale-105"
          >
            Skills
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            onClick={toggleMenu}
            className="cursor-pointer hover:text-purple-500 transition-transform duration-200 transform hover:scale-105"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={toggleMenu}
            className="cursor-pointer hover:text-purple-500 transition-transform duration-200 transform hover:scale-105"
          >
            Contact
          </Link>
          <div className="flex items-center gap-6 text-2xl">
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
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
