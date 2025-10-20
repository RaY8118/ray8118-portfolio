import { RevealOnScroll } from "../RevealOnScroll";
import projectsData from "../data/projects.json"

export const Projects = () => {
  const backendKeywords = [
    "python", "flask", "fastapi", "go", "java", "spring boot", "node.js", "express",
    "mongodb", "postgresql", "mysql", "sqlite", "docker", "machine learning", "gemini-embeddings", "face recognition"
  ];

  return (
    <section id="projects" className="min-h-screen py-20  text-white">
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-teal-300 via-cyan-200 to-white  bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsData.projects.map((project, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl border border-gray-700 shadow-lg hover:shadow-teal-500/20 transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
              >
                {project.thumbnail && (
                  <div className="relative w-full pb-[56.25%] mb-4 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"> {/* 16:9 Aspect Ratio */}
                    <img
                      src={project.thumbnail}
                      alt={`${project.title} thumbnail`}
                      className="absolute top-0 left-0 w-full h-full object-contain bg-gray-900"
                      loading="lazy"
                    />
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-base flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, key) => {
                    const isBackend = backendKeywords.includes(tech.toLowerCase());
                    return (
                      <span
                        key={key}
                        className={`py-1 px-3 rounded-full text-xs font-medium ${isBackend ? 'bg-teal-600 text-white' : 'bg-gray-700 text-gray-200'} transition-colors duration-200`}
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
                <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-gray-700">
                  {project.codeLink && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded-full transition-colors duration-200 flex items-center space-x-1"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                      <span>Code</span>
                    </a>
                  )}
                  {project.liveProj && (
                    <a
                      href={project.liveProj}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-green-600 hover:bg-green-500 text-white text-sm rounded-full transition-colors duration-200 flex items-center space-x-1"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span>Live</span>
                    </a>
                  )}
                  {project.frontendLink && (
                    <a
                      href={project.frontendLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm rounded-full transition-colors duration-200 flex items-center space-x-1"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L12 19.25L14.25 17M12 4.75V19.25M19.25 12H4.75" />
                      </svg>
                      <span>Frontend</span>
                    </a>
                  )}
                  {project.backendLink && (
                    <a
                      href={project.backendLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-teal-700 hover:bg-teal-600 text-white text-sm rounded-full transition-colors duration-200 flex items-center space-x-1"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                      <span>Backend</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

