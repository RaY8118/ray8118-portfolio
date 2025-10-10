import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative py-20"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text text-transparent leading-tight">
            Parth Ghadi
          </h1>
          <p className="text-gray-300 text-2xl md:text-3xl font-semibold mb-4 max-w-2xl mx-auto">
            Full-Stack Developer <span className="text-purple-300">|</span> Backend Focused
          </p>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Crafting robust and scalable solutions with a deep passion for backend development, machine learning, and generative AI.
          </p>
          <div className="flex justify-center space-x-4 mt-8">
            <a
              href="#projects"
              className="bg-purple-600 text-white py-3 px-8 rounded-full font-semibold shadow-lg hover:bg-purple-700 transition-all duration-300 transform hover:-translate-y-1"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-purple-600 text-purple-300 py-3 px-8 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
