import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex items-center justify-center gap-5 text-2xl">

      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noreferrer"
        className="text-gray-700 dark:text-gray-200 hover:text-blue-600 transition duration-300"
      >
        <FaGithub />
      </a>

      <a
        href="https://linkedin.com/in/yourusername"
        target="_blank"
        rel="noreferrer"
        className="text-gray-700 dark:text-gray-200 hover:text-blue-600 transition duration-300"
      >
        <FaLinkedin />
      </a>

      <a
        href="https://facebook.com/yourusername"
        target="_blank"
        rel="noreferrer"
        className="text-gray-700 dark:text-gray-200 hover:text-blue-600 transition duration-300"
      >
        <FaFacebook />
      </a>

      <a
        href="mailto:your@email.com"
        className="text-gray-700 dark:text-gray-200 hover:text-blue-600 transition duration-300"
      >
        <FaEnvelope />
      </a>

    </div>
  );
};

export default SocialLinks;