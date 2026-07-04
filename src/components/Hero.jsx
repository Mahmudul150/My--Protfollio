import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";

import profileImage from "../assets/Image/picture--4.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-slate-50 dark:bg-slate-900 pt-24 pb-10 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT SIDE */}
          <div className="text-center lg:text-left">
            <p className="text-blue-600 font-semibold text-base sm:text-lg">
              Hello, I'm
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-3 text-gray-900 dark:text-white">
              Mahmudul Hasan
            </h1>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-4 text-gray-600 dark:text-gray-300">
              Full Stack Developer
            </h2>

            <p className="mt-6 text-sm sm:text-base leading-7 text-gray-600 dark:text-gray-300">
              I build modern, responsive and user-friendly responsive web applications
              using Next.js, React.js.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-8">
              <a
                // href="/resume"
                download
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition"
              >
                <FaDownload />
                Download Resume
              </a>

              <a
                href="#contact"
                className="border-2 border-blue-600 text-blue-600 dark:text-white hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg transition text-center"
              >
                Contact Me
              </a>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex justify-center lg:justify-start gap-6 mt-10 text-2xl sm:text-3xl">
              <a
                href="https://github.com/Mahmudul150"
                target="_blank"
                rel="noreferrer"
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/mahmudul-hasan-maruf-3287383b9/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.facebook.com/md.mahmudul.hasan.723956"
                target="_blank"
                rel="noreferrer"
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 transition"
              >
                <FaFacebook />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex justify-center">
            <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-700 blur-md opacity-60 animate-[spin_8s_linear_infinite]"></div>

              {/* Rotating Border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-700 animate-[spin_8s_linear_infinite]"></div>

              {/* Background */}
              <div className="absolute inset-[6px] rounded-full bg-slate-50 dark:bg-slate-900"></div>

              {/* Image */}
              <img
                src={profileImage}
                alt="Profile"
                className="absolute inset-[12px] w-[calc(100%-24px)] h-[calc(100%-24px)] rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;