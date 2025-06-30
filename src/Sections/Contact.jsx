import {Mail, Phone, MessageCircle, Linkedin, MapPin, Send} from "lucide-react";
import {useRef} from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id", // ✅ Replace with your real EmailJS Service ID
        "your_template_id", // ✅ Replace with your real EmailJS Template ID
        form.current,
        "your_public_key" // ✅ Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          alert("Failed to send. Try again.");
        }
      );
  };

  return (
    <section className="mt-16 mx-[2%] lg:mx-[5%]">
      <h2 className="text-3xl font-bold text-gray-800  text-center mb-8">
        Contact Information
      </h2>
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-2 items-start border rounded-lg mb-16">
        {/* Contact Info */}

       <div className="flex flex-col gap-5 shadow-xl shadow-blue-400 rounded-lg h-full p-3">
  {/* Email */}
  <a
    href="mailto:emonsheikhkhalid2@gmail.com"
    className="hover:underline"
  >
    <h1 className="flex items-center gap-3 text-black bg-blue-100 hover:bg-blue-300 hover:scale-102 transition-transform py-4 justify-center px-2 rounded-full border-2 border-blue-400 backdrop-blur-3xl font-semibold">
      <Mail className="text-blue-600" />
      emonsheikhkhalid2@gmail.com
    </h1>
  </a>

  {/* Phone */}
  <a
    href="tel:+8801915367729"
    className="hover:underline"
  >
    <h1 className="flex items-center gap-3 text-black bg-blue-100 hover:bg-blue-300 hover:scale-102 transition-transform py-4 justify-center px-2 rounded-full border-2 border-blue-400 backdrop-blur-3xl font-semibold">
      <Phone className="text-green-600" />
      +8801915367729
    </h1>
  </a>

  {/* WhatsApp */}
  <a
    href="https://wa.me/8801915367729"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline"
  >
    <h1 className="flex items-center gap-3 text-black bg-blue-100 hover:bg-blue-300 hover:scale-102 transition-transform py-4 justify-center px-2 rounded-full border-2 border-blue-400 backdrop-blur-3xl font-semibold">
      <MessageCircle className="text-emerald-600" />
      WhatsApp
    </h1>
  </a>

  {/* LinkedIn */}
  <a
    href="https://linkedin.com/in/yourusername"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline"
  >
    <h1 className="flex items-center gap-3 text-black bg-blue-100 hover:bg-blue-300 hover:scale-102 transition-transform py-4 justify-center px-2 rounded-full border-2 border-blue-400 backdrop-blur-3xl font-semibold">
      <Linkedin className="text-blue-700" />
      linkedin.com/in/yourusername
    </h1>
  </a>

  {/* Location (non-clickable) */}
  <div>
    <h1 className="flex items-center gap-3 text-black bg-blue-100 py-4 justify-center px-2 rounded-full border-2 border-blue-400 backdrop-blur-3xl font-semibold">
      <MapPin className="text-red-600" />
      Gulshan, Dhaka, Bangladesh
    </h1>
  </div>
</div>

        {/* Email Form */}
        <div className="p-3 rounded-lg shadow-xl shadow-blue-400 h-full">
          <form onSubmit={sendEmail} ref={form} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                name="from_name"
                required
                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">
                Your Email
              </label>
              <input
                type="email"
                name="from_email"
                required
                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">
                Message
              </label>
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
