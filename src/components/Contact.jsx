import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gnrhyca", 
        "template_rxlv37o", 
        form.current,
        "nl4ZKJTp4NpFRovFc" 
      )
      .then(() => {
  toast.success("Message sent successfully!", {
    duration: 3000,
  });

  form.current.reset();
})
.catch((error) => {
  console.log(error);

  toast.error("Failed to send message!", {
    duration: 3000,
  });
});
  };

  return (
    <section
      id="contact"
      className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* SECTION TITLE */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Contact Me
          </h2>

          <p className="text-gray-500 dark:text-gray-300 mt-3 text-sm sm:text-base">
            Feel free to contact me anytime. I'll try to respond as soon as
            possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* LEFT SIDE */}
          <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
              Get In Touch
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white p-3 rounded-full">
                  <FaEnvelope />
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Email
                  </h4>

                  <p className="text-gray-600 dark:text-gray-300 break-all">
                    mahmudulhasanmaruf282@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white p-3 rounded-full">
                  <FaPhone />
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Phone
                  </h4>

                  <p className="text-gray-600 dark:text-gray-300">
                    +8801854888150
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white p-3 rounded-full">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Location
                  </h4>

                  <p className="text-gray-600 dark:text-gray-300">
                    Chittagong, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-2xl shadow-lg">
            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-600"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-600"
              />

              <input
                type="text"
                name="title"
                placeholder="Subject"
                required
                className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-600"
              />

              <textarea
                rows="6"
                name="message"
                placeholder="Your Message"
                required
                className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
              >
                <FaPaperPlane />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;