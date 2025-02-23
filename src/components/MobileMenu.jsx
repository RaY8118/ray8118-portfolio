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
      "name": "Contact",
      "link": "#contact"
    }
  ]
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-event-none"}
`}
    >
      {menuOpen && (
        <button
          onClick={() => SetMenuOpen(false)}
          className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer h-8 w-8"
          aria-label="Close Menu"
        >
          {" "}
          &times;
        </button>
      )}
      {navBarTitles.map((option, key) => (
        <React.Fragment key={key}>
          <a
            href={option.link}
            onClick={() => SetMenuOpen(false)}
            className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 
                  ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          >
            {option.name}
          </a>
        </ React.Fragment>
      ))}
    </div>
  );
};
