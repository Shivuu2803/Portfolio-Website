import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black py-8 mt-10">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="max-w-6xl mx-auto px-4"
      >
        <motion.div
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.4 }}
          className="h-1 bg-gradient-to-r from-blue-500 via-purple-400 to-purple-500 mx-auto mb-6"
        ></motion.div>

        <div className="text-center text-gray-300 space-y-4">
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-xl lg:text-2xl font-semibold bg-gradient-to-r from-white via-purple-300 to-purple-500 bg-clip-text text-transparent"
          >
            Let’s Create Something Extraordinary Together
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="text-sm lg:text-base"
          >
            Based in{" "}
            <span className="text-purple-400">
              Moradabad, Uttar Pradesh, India
            </span>
            . Open for freelance projects and collaborations.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="text-sm lg:text-base"
          >
            Email:{" "}
            <span className="text-sky-400">shivanshmishradpsmbd@gmail.com</span>{" "}
            | Phone: <span className="text-sky-400">+91-7906676220</span>
          </motion.p>
        </div>

        <motion.div
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.6 }}
          className="h-1 bg-gradient-to-r from-blue-500 via-purple-400 to-purple-500 mx-auto mt-6"
        ></motion.div>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="text-sm text-gray-500 mt-4 text-center"
        >
          &copy; {new Date().getFullYear()} Shivansh Mishra. Built with ❤️.
        </motion.p>
      </motion.div>
    </footer>
  );
};

export default Footer;
