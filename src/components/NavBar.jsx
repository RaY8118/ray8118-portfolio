import { useEffect } from "react";

export const NavBar = ({ menuOpen, SetMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            {" "}
            RaY8118{" "}
          </a>
          {!menuOpen && (
            <div
              className="w-8 h-8 flex items-center justify-center relative cursor-pointer z-50 md:hidden"
              onClick={() => SetMenuOpen(true)}
            >
              &#9776;
            </div>
          )}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transistion-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transistion-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transistion-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transistion-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
