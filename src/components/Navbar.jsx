import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setNavVisible(true);
    }, 3000); // Slight delay for smooth transition
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-40 backdrop-blur-lg pt-5 shadow-lg transition-transform duration-700 ${
        navVisible ? "animate-slidetop" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 text-white text-2xl font-semibold">
          <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-2xl font-bold animate-[slideRight_4s_ease-in]">
            N
          </span>
          <div className="logo-text font-mono animate-[slideRight_4s_ease-in]">Nishant Bharati</div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-2xl">
          {["Home", "About", "Resume", "Projects", "Contact"].map((item, index) => (
            <Link
              key={item}
              to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
              className={`text-gray-300 hover:text-white transition-all duration-300 animate-slideDown`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div
          className="md:hidden flex items-center cursor-pointer z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-white">
              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-white">
              <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd"/>
            </svg>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4 text-center bg-gray-800 p-4 rounded-lg animate-slidebottom">
          {["Home", "About", "Resume", "Projects", "Contact"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="text-gray-300 hover:text-white transition-all duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};
