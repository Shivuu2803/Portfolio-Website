import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaS, FaSquareTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="mb-0 flex items-center justify-between py-6">
      <motion.div className="flex flex-shrink-0 items-center">
        {/* <img className="mx-2 w-10" src={logo} alt="logo" /> */}
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, x: 1 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className="m-8 flex items-center justify-center gap-6 text-3xl"
      >
        <a href="https://www.linkedin.com/in/shivanshmishra02/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Shivuu2803">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/shivuu2803/">
          <FaInstagram />
        </a>
        <a href="https://x.com/Shivansh149">
          <FaSquareTwitter />
        </a>
      </motion.div>
    </nav>
  );
};

export default Navbar;
