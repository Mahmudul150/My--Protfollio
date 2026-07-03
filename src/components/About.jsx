import profileImage from "../assets/Image/profile--1.png";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>
            <img
              src={profileImage}
              alt="Profile"
              className="rounded-2xl shadow-xl w-full max-w-md mx-auto"
            />
          </div>

          {/* Right Side */}
          <div>

            <p className="text-gray-600 dark:text-gray-300 leading-8 mb-8">
              <span className="text-2xl text-black">I</span> 'm Mahmudul Hasan, a passionate Frontend Developer who enjoys
              building modern, responsive, and user-friendly websites. I have
              experience with React.js, Tailwind CSS, JavaScript, Firebase,
              Express.js, MongoDB, and Node.js.

              <br />
              <br />

              I love learning new technologies, solving programming problems,
              and creating clean UI with better user experience.
              <br />
              In my free time, I enjoy exploring new tech trends, watching programming tutorials, working on side projects, and sometimes listening to music or relaxing to refresh my mind.
            </p>

            

            {/* Career Objective */}

            <div className="mt-10 p-6 rounded-xl bg-slate-100 dark:bg-slate-800 transition-colors duration-300">

              <h4 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                Career Objective
              </h4>

              <p className="text-gray-600 dark:text-gray-300 leading-7">
                My goal is to become a skilled Full Stack Developer by
                continuously improving my knowledge and building real-world
                projects. I enjoy working with modern technologies and solving
                challenging problems while creating high-quality web
                applications.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;