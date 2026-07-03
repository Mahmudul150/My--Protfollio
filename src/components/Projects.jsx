import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
            My Projects
          </h2>

          <p className="text-gray-500 dark:text-gray-300 mt-3">
            Some of my recent works.
          </p>
        </div>

        <div
  className={`grid gap-8 ${
    projects.length === 1
      ? "grid-cols-1 place-items-center"
      : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
  }`}
>
  {projects.map((project) => (
    <ProjectCard key={project.id} project={project} />
  ))}
</div>

      </div>
    </section>
  );
};

export default Projects;