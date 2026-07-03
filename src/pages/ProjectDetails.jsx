import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowLeft,
} from "react-icons/fa";

const ProjectDetails = () => {
  const { id } = useParams();

  const project = projects.find((item) => item.id === Number(id));

  if (!project) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-slate-100 dark:bg-slate-900">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
          Project Not Found
        </h2>
      </div>
    );
  }

  return (
    <section className="py-20 min-h-screen bg-slate-100 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">

        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 mb-8 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
        >
          <FaArrowLeft />
          Back Home
        </Link>

        {/* Project Image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full rounded-xl shadow-lg"
        />

        {/* Project Title */}
        <h1 className="text-3xl sm:text-4xl font-bold mt-8 text-gray-800 dark:text-white">
          {project.title}
        </h1>

        {/* Short Description */}
        <p className="text-gray-600 dark:text-gray-300 mt-5 leading-8">
          {project.description}
        </p>

        {/* Project Overview */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Project Overview
          </h2>

          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6">
            <p className="text-gray-600 dark:text-gray-300 leading-8">
              {project.overview}
            </p>
          </div>
        </div>

        {/* Challenges */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Challenges Faced
          </h2>

          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6">
            <ul className="list-disc pl-5 space-y-3">
              {project.challenges.map((challenge, index) => (
                <li
                  key={index}
                  className="text-gray-600 dark:text-gray-300 leading-7"
                >
                  {challenge}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Technologies Used
          </h2>

          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-10">

          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg flex items-center gap-2 transition"
          >
            <FaExternalLinkAlt />
            Live Site
          </a>

          <a
            href={project.clientGithub}
            target="_blank"
            rel="noreferrer"
            className="border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-800 px-5 py-3 rounded-lg flex items-center gap-2 transition"
          >
            <FaGithub />
            Client
          </a>

          {project.serverGithub && (
            <a
              href={project.serverGithub}
              target="_blank"
              rel="noreferrer"
              className="border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-800 px-5 py-3 rounded-lg flex items-center gap-2 transition"
            >
              <FaGithub />
              Server
            </a>
          )}

        </div>

      </div>
    </section>
  );
};

export default ProjectDetails;