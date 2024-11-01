import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    emailjs
      .send(
        "service_j6z60sz",
        "template_tvdxb85",
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        "Rwla8CsAciCFjhYwG"
      )
      .then(
        (result) => {
          console.log("Message sent:", result.text);
          setIsSent(true);
          setForm({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.error("Failed to send message:", error);
          setError("Failed to send your message. Please try again later.");
        }
      )
      .catch((error) => {
        console.error("Catch error:", error);
        setError("Failed to send your message. Please try again later.");
      });
  };

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 py-4"
      >
        Get in Touch
      </motion.h2>

      {isSent && (
        <p className="text-center text-cyan-400 mb-4">
          Thank you! Your message has been sent successfully.
        </p>
      )}

      {error && <p className="text-center text-red-400 mb-4">{error}</p>}

      <motion.form
        onSubmit={handleSubmit}
        className="mt-10 max-w-lg mx-auto space-y-6 bg-gradient-to-br from-neutral-800 to-neutral-900 p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 border border-neutral-700 rounded-lg bg-neutral-800 text-neutral-300 focus:outline-none focus:ring-2 focus:ring-cyan-600 transition-shadow duration-300 hover:shadow-md"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 border border-neutral-700 rounded-lg bg-neutral-800 text-neutral-300 focus:outline-none focus:ring-2 focus:ring-cyan-600 transition-shadow duration-300 hover:shadow-md"
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          className="w-full p-3 border border-neutral-700 rounded-lg bg-neutral-800 text-neutral-300 focus:outline-none focus:ring-2 focus:ring-cyan-600 transition-shadow duration-300 hover:shadow-md"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          className="w-full p-3 border border-neutral-700 rounded-lg bg-neutral-800 text-neutral-300 h-32 focus:outline-none focus:ring-2 focus:ring-cyan-600 transition-shadow duration-300 hover:shadow-md"
          required
        ></textarea>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 w-full bg-blue-400 text-white rounded-full hover:bg-blue-500 shadow-md hover:shadow-lg transition-all duration-300"
        >
          Send Message
        </motion.button>
      </motion.form>
    </div>
  );
};

export default Contact;
