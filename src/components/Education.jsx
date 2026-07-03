// import { education } from "../data/education";
// const Education = () => {
//   return (
//     <div className="space-y-8">
//   {education.map((item) => (
//     <div
//       key={item.id}
//       className="bg-slate-50 dark:bg-slate-800 p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition"
//     >
//       <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
//         <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
//           {item.degree}
//         </h3>

//         <span className="text-sm sm:text-base text-blue-600 font-medium">
//           {item.duration}
//         </span>
//       </div>

//       <p className="text-gray-600 dark:text-gray-300 mt-3">
//         {item.institution}
//       </p>

//       <p className="text-blue-600 mt-2">
//         {item.result}
//       </p>

//       <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-4 leading-7">
//         {item.description}
//       </p>
//     </div>
//   ))}
// </div>
//   );
// };

// export default Education;





// import { education } from "../data/education";

// const Education = () => {
//   return (
//     <section className="py-10 sm:py-14">
//       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="space-y-8">
//           {education.map((item) => (
//             <div
//               key={item.id}
//               className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
//             >
//               {/* Top */}
//               <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
//                 <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
//                   {item.degree}
//                 </h3>

//                 <span className="inline-block bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-semibold">
//                   {item.duration}
//                 </span>
//               </div>

//               {/* Institution */}
//               <p className="mt-4 text-lg font-medium text-gray-700 dark:text-gray-300">
//                 {item.institution}
//               </p>

//               {/* Result */}
//               <p className="mt-2 text-blue-600 dark:text-blue-400 font-semibold">
//                 {item.result}
//               </p>

//               {/* Description */}
//               <p className="mt-6 text-gray-600 dark:text-gray-300 leading-8 text-justify">
//                 {item.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Education;




import { education } from "../data/education";

const Education = () => {
  return (
    <section
      id="education"
      className="py-16 bg-slate-50 dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Education
          </h2>

          <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My academic background 
          </p>
        </div>

        {/* Education Cards */}
        <div className="space-y-8">
          {education.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {item.degree}
                </h3>

                <span className="inline-block bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-semibold">
                  {item.duration}
                </span>
              </div>

              <p className="mt-4 text-lg font-medium text-gray-700 dark:text-gray-300">
                {item.institution}
              </p>

              <p className="mt-2 text-blue-600 dark:text-blue-400 font-semibold">
                {item.result}
              </p>

              <p className="mt-6 text-gray-600 dark:text-gray-300 leading-8 text-justify">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;