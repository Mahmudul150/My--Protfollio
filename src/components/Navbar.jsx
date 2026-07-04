import {  useEffect,useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X ,Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
const [darkMode, setDarkMode] = useState(
  () => localStorage.getItem("theme") === "dark"
);
useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}, [darkMode]);



const toggleTheme = () => {
  setDarkMode((prev) => !prev);
};

  
  const navItems = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Skills", path: "#skills" },
    { name: "Services", path: "#services"},
    { name: "Education", path: "#education" },
    { name: "Projects", path: "#projects" },
    { name: "Contact", path: "#contact" },
  ];


  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-slate-900 shadow-md z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600 dark:text-white tracking-wide"
        >
          <img className="w-10 h-10 rounded-2xl dark:text-white tracking-wide" src="/logo.png" alt="" />
        </Link>
        

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.path}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        {/* darkmode button */}
         <button
        onClick={toggleTheme}
           className="
    hidden md:flex items-center justify-center
    p-2 rounded-full ml-4 transition
    bg-slate-900 text-white border border-slate-900
    hover:bg-slate-800
    dark:bg-yellow-400 dark:text-slate-900 dark:border-yellow-400
    dark:hover:bg-yellow-300
  "     
     >
  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
</button>

        {/* Hire Me Button */}
        <a
          href="#contact"
          className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Hire Me
        </a>
         
        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t shadow">
          <ul className="flex flex-col items-center py-5 gap-5 font-medium">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.path}
                  onClick={() => setOpen(false)}
                  className="text-gray-700 dark:text-gray-200 hover:text-blue-600"
                >
                  {item.name}
                </a>
              </li>
            ))}

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Hire Me
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;