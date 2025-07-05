import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const projects = [
    {
      title: "LUMI - Alzheimer's and Elderly Care App",
      description: "React Native + Flask app with reminders, face detection, and live tracking for elderly care.",
      tech: ["python", "flask", "mongodb", "reactnative", "nativewindcss", "machine learning"],
      backendLink: "https://github.com/RaY8118/LUMI-Backend",
      frontentLink: "https://github.com/RaY8118/LUMI-Mobile-App",
      thumbnail: "https://res.cloudinary.com/dkyzhoqpb/image/upload/w_400,h_300,c_pad,b_auto,q_auto,f_auto/v1747924212/portfolio/z8cpb7ac6tyki304blac.png"
    },
    {
      title: "VoteVision",
      description: "Secure online voting system with face recognition using FastAPI and React.",
      tech: ["python", "fastapi", "postgres", "react", "typescript", "face recognition"],
      codeLink: "https://github.com/RaY8118/votevision",
      liveProj: "https://votevision.onrender.com",
      thumbnail: "https://res.cloudinary.com/dkyzhoqpb/image/upload/w_600,q_auto,f_auto/v1747921027/portfolio/xkmktd0m95oqdvcrccuz.png"
    },
    {
      title: "Crypto Portfolio",
      description: "Track your crypto investments with real-time data, charts, and portfolio management.",
      tech: ["python", "fastapi", "sqlite", "react", "typescript"],
      codeLink: "https://github.com/RaY8118/Crypto-Portfolio",
      liveProj: "https://crypto-portfolio-69v.pages.dev",
      thumbnail: "https://res.cloudinary.com/dkyzhoqpb/image/upload/w_600,q_auto,f_auto/v1751467238/crypto_jydeoe.png"
    },
    {
      title: "Attendance System using Face Recognition",
      description: "Flask-based attendance system with multi-camera face recognition and role-based access.",
      tech: ["python", "flask", "mysql", "machine learning"],
      codeLink: "https://github.com/RaY8118/Flask_Face_Recognition--multiple_Cameras",
      thumbnail: "https://res.cloudinary.com/dkyzhoqpb/image/upload/w_600,q_auto,f_auto/v1747922220/portfolio/i6yqvhmemagvbmxkkuud.png"
    },
    {
      title: "Hospital Management System",
      description: "MERN stack app for patient appointments, prescriptions, and admin doctor management.",
      tech: ["react", "nodejs", "express", "full-stack", "mongodb"],
      codeLink: "https://github.com/RaY8118/Hospital_Management_System",
      liveProj: "https://hospital-system-gmkt.onrender.com",
      thumbnail: "https://res.cloudinary.com/dkyzhoqpb/image/upload/w_600,q_auto,f_auto/v1747921027/portfolio/uxfdwlpo7xnsa5svylwd.png"
    },
    {
      title: "Smart Home Control",
      description: "A PWA to control IoT devices via Firebase with real-time updates and user auth.",
      tech: ["react", "esp32", "firebase", "IoT", "pwa-app"],
      codeLink: "https://github.com/RaY8118/SmartHomeControlV3",
      liveProj: "https://smart-home-control-v3.netlify.app",
      thumbnail: "https://res.cloudinary.com/dkyzhoqpb/image/upload/w_600,q_auto,f_auto/v1747921027/portfolio/wnwindgrxi1wcgulemub.png"
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20  text-white">
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
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
                  {project.frontentLink && (
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

