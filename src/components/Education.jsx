const Education = () => {
  return (
    <section
      id="education"
      className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* SECTION TITLE */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Education
        </h2>

        {/* TIMELINE / CARD */}
        <div className="space-y-8">

          {/* CARD 1 */}
          <div className="bg-slate-50 dark:bg-slate-800 p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">

              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
                Diploma in Engineering (Computer Science)
              </h3>

              <span className="text-sm sm:text-base text-blue-600 font-medium">
                2022 - Present
              </span>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mt-3">
              Feni Polytechnic Institute, Feni
            </p>

            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-4 leading-7">
              Studying core computer science subjects including programming,
              web development, database systems, networking, and software engineering fundamentals.
              Currently focusing on MERN stack development and modern frontend technologies.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-slate-50 dark:bg-slate-800 p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">

              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
                Secondary School Certificate (SSC)
              </h3>

              <span className="text-sm sm:text-base text-blue-600 font-medium">
                2021
              </span>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mt-3">
              Science Group
            </p>

            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-4 leading-7">
              Completed SSC with a strong foundation in mathematics, physics, and computer basics,
              which helped build my interest in software development.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;