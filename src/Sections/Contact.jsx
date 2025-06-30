import {Mail, Phone, MessageCircle, Linkedin, MapPin, Send} from "lucide-react";
import {useRef, useState} from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import {motion} from "framer-motion";

const containerVariants = {
  hidden: {opacity: 0, y: 40},
  visible: {opacity: 1, y: 0, transition: {duration: 0.7, ease: "easeOut"}},
};

const Contact = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        "service_vr5s7nk",
        "template_8lr0vam",
        form.current,
        "L0kuzBfo2LgYfL91p"
      )
      .then(
        () => {
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Thank you for reaching out. I will reply soon.",
            timer: 3000,
            showConfirmButton: false,
          });
          form.current.reset();
          setSending(false);
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Failed to send message. Please try again later.",
            confirmButtonColor: "#d33",
          });
          console.error(error.text);
          setSending(false);
        }
      );
  };

  return (
    <motion.section
      className="mt-16 mx-[2%] lg:mx-[5%]"
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.3}}
      variants={containerVariants}
    >
      <motion.h2
        className="text-3xl font-bold text-gray-800 text-center mb-10 tracking-wide"
        variants={containerVariants}
      >
        Contact Information
      </motion.h2>

      <motion.div
        className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 p-4 items-start border rounded-2xl max-w-5xl shadow-lg shadow-blue-200"
        variants={containerVariants}
      >
        <motion.div
          className="flex flex-col gap-6 p-6 bg-white rounded-2xl h-full shadow-md border border-blue-300 hover:shadow-blue-400 transition-shadow duration-300"
          variants={containerVariants}
        >
          <a
            href="mailto:emonsheikhkhalid2@gmail.com"
            className="flex items-center gap-4 text-blue-700 font-semibold hover:text-blue-900 transition"
          >
            <Mail size={24} />
            <span className="truncate">emonsheikhkhalid2@gmail.com</span>
          </a>

          <a
            href="tel:+8801915367729"
            className="flex items-center gap-4 text-green-700 font-semibold hover:text-green-900 transition"
          >
            <Phone size={24} />
            +8801915367729
          </a>

          <a
            href="https://wa.me/8801915367729"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-emerald-700 font-semibold hover:text-emerald-900 transition"
          >
            <MessageCircle size={24} />
            WhatsApp
          </a>

          <a className="flex items-center gap-4 text-blue-800 font-semibold hover:text-blue-900 transition">
            <Linkedin size={24} />
            LinkedIn
          </a>

          <div className="flex items-center gap-4 text-red-600 font-semibold">
            <MapPin size={24} />
            Gulshan, Dhaka, Bangladesh
          </div>
        </motion.div>

        <motion.div
          className="bg-white p-6 rounded-2xl shadow-md border border-blue-300"
          variants={containerVariants}
        >
          <form
            onSubmit={sendEmail}
            ref={form}
            className="space-y-5"
            aria-label="Contact form"
          >
            <h3 className="text-2xl font-semibold text-gray-800 text-center md:block hidden mb-6">
              Send Me a Message
            </h3>

            <label className="block">
              <span className="text-gray-700 font-medium">Your Name</span>
              <input
                type="text"
                name="from_name"
                required
                placeholder="John Doe"
                className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 focus:outline-none transition"
                disabled={sending}
              />
            </label>

            <label className="block">
              <span className="text-gray-700 font-medium">Your Email</span>
              <input
                type="email"
                name="from_email"
                required
                placeholder="john@example.com"
                className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 focus:outline-none transition"
                disabled={sending}
              />
            </label>

            <label className="block">
              <span className="text-gray-700 font-medium">Message</span>
              <textarea
                name="message"
                required
                rows="5"
                placeholder="Write your message..."
                className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 focus:outline-none transition resize-none"
                disabled={sending}
              ></textarea>
            </label>

            <motion.button
              type="submit"
              disabled={sending}
              className="w-full flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.95}}
              aria-live="polite"
            >
              <Send size={20} />
              {sending ? "Sending..." : "Send"}
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
