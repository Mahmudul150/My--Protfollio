import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-slate-900 dark:bg-black text-white py-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold text-white">
          Mahmudul Hasan
        </h2>

        <p className="mt-3 text-gray-300 dark:text-gray-400">
          Frontend Developer | React Developer
        </p>

        {/* <div className="my-6">
          <div className="flex gap-6 mt-10 text-3xl">
          
                        <a
                          href="https://github.com/Mahmudul150"
                          target="_blank"
                          rel="noreferrer"
                          className="text-gray-700 dark:text-gray-200 hover:text-blue-600 transition"
                        >
                          <FaGithub />
                        </a>
          
                        <a
                          href="https://www.linkedin.com/in/mahmudul-hasan-maruf-3287383b9/"
                          target="_blank"
                          rel="noreferrer"
                          className="text-gray-700 dark:text-gray-200 hover:text-blue-600 transition"
                        >
                          <FaLinkedin />
                        </a>
          
                        <a
                          href="https://facebook.com/yourusername"
                          target="_blank"
                          rel="noreferrer"
                          className="text-gray-700 dark:text-gray-200 hover:text-blue-600 transition"
                        >
                          <FaFacebook />
                        </a>
          
                      </div>
        </div> */}
        <div className="my-6 flex justify-center">
  <div className="flex items-center justify-center gap-6 text-3xl flex-wrap">

    <a
      href="https://github.com/Mahmudul150"
      target="_blank"
      rel="noreferrer"
      className="text-gray-700 dark:text-gray-200 hover:text-blue-600 transition transform hover:scale-110"
    >
      <FaGithub />
    </a>

    <a
      href="https://www.linkedin.com/in/mahmudul-hasan-maruf-3287383b9/"
      target="_blank"
      rel="noreferrer"
      className="text-gray-700 dark:text-gray-200 hover:text-blue-600 transition transform hover:scale-110"
    >
      <FaLinkedin />
    </a>

    <a
      href="https://facebook.com/yourusername"
      target="_blank"
      rel="noreferrer"
      className="text-gray-700 dark:text-gray-200 hover:text-blue-600 transition transform hover:scale-110"
    >
      <FaFacebook />
    </a>

  </div>
</div>

        <hr className="border-gray-300 dark:border-gray-700 mb-6" />

        <p className="text-gray-300 dark:text-gray-500">
          © {new Date().getFullYear()} Mahmudul Hasan. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;