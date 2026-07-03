import { skills } from "../data/skills";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
            My Skills
          </h2>

          <p className="text-gray-500 dark:text-gray-300 mt-3">
            Technologies I use to build modern applications
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-12">

          {skills.map((section) => (
            <div key={section.category}>

              {/* Category Title */}
              <h3 className="text-2xl font-bold text-blue-600 mb-6">
                {section.category}
              </h3>

              {/* Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {section.items.map((skill) => (
                  <SkillCard key={skill.id} skill={skill} />
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