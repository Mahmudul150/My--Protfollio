import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
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
            Feel free to contact me anytime. I’ll try to respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT SIDE - CONTACT INFO */}
          <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-2xl shadow-lg">

            <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
              Get In Touch
            </h3>

            <div className="space-y-6">

              {/* EMAIL */}
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white p-3 rounded-full shrink-0">
                  <FaEnvelope />
                </div>

                <div className="min-w-0">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Email
                  </h4>

                  <p className="text-gray-600 dark:text-gray-300 break-all">
                    mahmudulhasanmaruf282@gmail.com
                  </p>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white p-3 rounded-full shrink-0">
                  <FaPhone />
                </div>

                <div className="min-w-0">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Phone
                  </h4>

                  <p className="text-gray-600 dark:text-gray-300 break-all">
                    +8801854888150
                  </p>
                </div>
              </div>

              {/* LOCATION */}
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white p-3 rounded-full shrink-0">
                  <FaMapMarkerAlt />
                </div>

                <div className="min-w-0">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Location
                  </h4>

                  <p className="text-gray-600 dark:text-gray-300 break-all">
                    Chittagong, Bangladesh
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-2xl shadow-lg">

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-600"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-600"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-600"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
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