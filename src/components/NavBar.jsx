import React, { useEffect } from "react";

export const NavBar = ({ menuOpen, SetMenuOpen }) => {
  const navBarTitles = [
    {
      "name": "Home",
      "link": "#home"
    },
    {
      "name": "About",
      "link": "#about"
    },
    {
      "name": "Projects",
      "link": "#projects"
    },
    {
      "name": "Blogs",
      "link": "#blog"
    },
    {
      "name": "Contact",
      "link": "#contact"
    },
  ]
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-0 w-full z-40 bg-gray-900/80 backdrop-blur-md border-b border-gray-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-2xl font-extrabold text-white hover:text-gray-200 transition-colors duration-300">
            {" "}
            RaY8118{" "}
          </a>
          {!menuOpen && (
            <button
              className="w-8 h-8 flex items-center justify-center relative cursor-pointer z-50 md:hidden text-white focus:outline-none"
              onClick={() => SetMenuOpen(true)}
              aria-label="Open menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          )}
          <div className="hidden md:flex items-center space-x-6">
            {
              navBarTitles.map((option, key) => (
                <React.Fragment key={key}>
                  <a
                    href={option.link}
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                  >
                    {option.name}
                  </a>
                </React.Fragment>
              ))
            }
          </div>
        </div>
      </div>
    </nav>
  );
};
