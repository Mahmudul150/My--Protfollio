import { skills } from "../data/skills";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 dark:text-white">
            My Skills
          </h2>

          <p className="mt-3 text-slate-600 dark:text-slate-400">
            Technologies I use to build modern applications
          </p>
        </div>

        {/* 3 Column */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skills.map((section) => (
            <div
              key={section.category}
              className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8"
            >
              <h3 className="text-3xl font-bold text-violet-600 dark:text-violet-400 mb-8">
                {section.category}
              </h3>

              <div className="space-y-7">
                {section.items.map((skill) => (
                  <SkillCard
                    key={skill.id}
                    skill={skill}
                  />
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;