import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import projectsData from "../data/projects.json"

export const Projects = () => {

  return (
    <section id="projects" className="min-h-screen py-20  text-white">
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/5 p-4 rounded-2xl border border-white/10 shadow-md hover:shadow-blue-600/30 transition-all"
              >
                {project.thumbnail && (
                  <img
                    src={project.thumbnail}
                    alt={`${project.title} thumbnail`}
                    className="rounded-lg mb-4 w-full h-40 object-cover"
                    loading="lazy"
                  />
                )}
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-3 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/20 text-white py-1 px-3 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.codeLink && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-blue-600 hover:bg-blue-500 text-sm rounded"
                    >
                      Code
                    </a>
                  )}
                  {project.liveProj && (
                    <a
                      href={project.liveProj}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-green-600 hover:bg-green-500 text-sm rounded"
                    >
                      Live
                    </a>
                  )}
                  {project.frontendLink && (
                    <a
                      href={project.frontentLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-purple-600 hover:bg-purple-500 text-sm rounded"
                    >
                      Frontend
                    </a>
                  )}
                  {project.backendLink && (
                    <a
                      href={project.backendLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-pink-600 hover:bg-pink-500 text-sm rounded"
                    >
                      Backend
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

