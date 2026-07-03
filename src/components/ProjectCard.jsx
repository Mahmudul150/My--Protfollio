import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  const {
    id,
    title,
    image,
    description,
    technologies,
    liveLink,
    clientGithub,
    serverGithub,
  } = project;

  return (
  <div className="w-full max-w-md bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
      {/* Project Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-contain bg-gray-100 dark:bg-slate-700"
      />

      {/* Content */}
      <div className="p-6">

        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
          {title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mt-3">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-5">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 mt-6">

          <a
            href={liveLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            <FaExternalLinkAlt />
            Live
          </a>

          <a
            href={clientGithub}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition"
          >
            <FaGithub />
            Client
          </a>

          {serverGithub && (
            <a
              href={serverGithub}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition"
            >
              <FaGithub />
              Server
            </a>
          )}

          <Link
            to={`/projects/${id}`}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
          >
            Details
          </Link>

        </div>

      </div>
    </div>
  );
};

export default ProjectCard;