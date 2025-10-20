import React from "react";

export const MobileMenu = ({ menuOpen, SetMenuOpen }) => {
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
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-teal-900/90 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}`}
    >
      {menuOpen && (
        <button
          onClick={() => SetMenuOpen(false)}
          className="absolute top-6 right-6 text-white hover:text-teal-300 focus:outline-none z-50 transition-colors duration-300"
          aria-label="Close Menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      )}
      <nav className="flex flex-col items-center">
        {navBarTitles.map((option, key) => (
          <a
            key={key}
            href={option.link}
            onClick={() => SetMenuOpen(false)}
            className={`text-3xl font-bold text-white my-4 hover:text-teal-200 transition-colors duration-300 transform 
                    ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            style={{ transitionDelay: `${key * 50}ms` }}
          >
            {option.name}
          </a>
        ))}
      </nav>
    </div>
  );
};
