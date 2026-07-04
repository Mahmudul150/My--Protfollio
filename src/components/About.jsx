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
              <span className="text-2xl   dark:bg-slate-900 transition-colors">I</span> 'm Mahmudul Hasan, a passionate Full Stack Developer who enjoys
              building modern, responsive, and user-friendly websites. I have
              experience with React.js, Tailwind CSS, JavaScript, TypeScript,
              Express.js, Postgresql, and Node.js.

              <br />
              <br />

              I love learning new technologies, solving programming problems,
              and creating clean UI with better user experience.
              <br />
              In my free time, I enjoy exploring new tech trends, watching programming tutorials, working on side projects, and sometimes listening to music or relaxing to refresh my mind.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;