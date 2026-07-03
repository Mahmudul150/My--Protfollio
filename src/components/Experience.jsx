import { experience } from "../data/experience";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white">
            Experience
          </h2>

          <p className="text-gray-500 dark:text-gray-300 mt-3">
            My professional experience and practical work.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6 sm:space-y-8">
          {experience.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-4 sm:p-6"
            >
              {/* RESPONSIVE FLEX */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">

                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-600 text-white shrink-0 self-start">
  <FaBriefcase className="text-xl" />
</div>

                {/* Content */}
                <div className="flex-1 min-w-0">

                  <h3 className="text-lg sm:text-2xl font-bold text-gray-800 dark:text-white break-words">
                    {item.position}
                  </h3>

                  <h4 className="text-sm sm:text-lg text-blue-600 font-semibold mt-1 break-words">
                    {item.company}
                  </h4>

                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-300 mt-2 text-sm sm:text-base">
                    <FaCalendarAlt />
                    <span>{item.duration}</span>
                  </div>

                  <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-6 sm:leading-7 break-words">
                    {item.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {item.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;