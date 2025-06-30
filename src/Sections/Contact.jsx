import { Mail, Phone, MessageCircle, Linkedin, MapPin, Send } from "lucide-react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vr5s7nk",    // Your EmailJS Service ID
        "template_8lr0vam",   // Your EmailJS Template ID
        form.current,
        "L0kuzBfo2LgYfL91p"  // Your EmailJS Public Key
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
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Failed to send message. Please try again later.",
            confirmButtonColor: "#d33",
          });
          console.error(error.text);
        }
      );
  };

  return (
    <section className="mt-16 mx-[2%] lg:mx-[5%]">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
        Contact Information
      </h2>

      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 p-2 items-start border rounded-lg mb-16">
        <div className="flex flex-col gap-5 shadow-xl shadow-blue-400 rounded-lg h-full border-gray-300 border-2 p-3">
          <a href="mailto:emonsheikhkhalid2@gmail.com" className="hover:underline">
            <h1 className="flex items-center gap-3 text-black bg-blue-100 hover:bg-blue-300 hover:scale-102 transition-transform py-4 justify-center px-2 rounded-full border-2 border-blue-400 font-semibold">
              <Mail className="text-blue-600" />
              emonsheikhkhalid2@gmail.com
            </h1>
          </a>

          <a href="tel:+8801915367729" className="hover:underline">
            <h1 className="flex items-center gap-3 text-black bg-blue-100 hover:bg-blue-300 hover:scale-102 transition-transform py-4 justify-center px-2 rounded-full border-2 border-blue-400 font-semibold">
              <Phone className="text-green-600" />
              +8801915367729
            </h1>
          </a>

          <a
            href="https://wa.me/8801915367729"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            <h1 className="flex items-center gap-3 text-black bg-blue-100 hover:bg-blue-300 hover:scale-102 transition-transform py-4 justify-center px-2 rounded-full border-2 border-blue-400 font-semibold">
              <MessageCircle className="text-emerald-600" />
              WhatsApp
            </h1>
          </a>

          <a
            href="https://www.linkedin.com/in/emon-sheikh-khalid"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            <h1 className="flex items-center gap-3 text-black bg-blue-100 hover:bg-blue-300 hover:scale-102 transition-transform py-4 justify-center px-2 rounded-full border-2 border-blue-400 font-semibold">
              <Linkedin className="text-blue-700" />
              LinkedIn
            </h1>
          </a>

          <div>
            <h1 className="flex items-center gap-3 text-black bg-blue-100 py-4 justify-center px-2 rounded-full border-2 border-blue-400 font-semibold">
              <MapPin className="text-red-600" />
              Gulshan, Dhaka, Bangladesh
            </h1>
          </div>
        </div>

        <div className="p-3 rounded-lg shadow-xl shadow-blue-400 h-full border-gray-300 border-2">
          <form onSubmit={sendEmail} ref={form} className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-5 md:hidden">
              Send Email
            </h2>

            <div>
              <label className="text-sm font-medium text-gray-700">Your Name</label>
              <input
                type="text"
                name="from_name"
                required
                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Your Email</label>
              <input
                type="email"
                name="from_email"
                required
                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                required
                rows="4"
                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              <Send size={18} />
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;