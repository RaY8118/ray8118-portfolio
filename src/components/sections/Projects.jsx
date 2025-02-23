import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const projects = [
    {
      "title": "Attendance System using Face Recognition",
      "description": "A Flask-based web application that leverages face recognition technology to manage attendance.It supports multiple cameras, role-based access for students,teachers and admins, and utilized a MySQL, database for data management.",
      "tech": ["python", "flask", "mysql", "machine learning"],
      "codeLink": "https://github.com/RaY8118/Flask_Face_Recognition--multiple_Cameras"
    },
    {
      "title": "Hospital Management System",
      "description": "A MERN stack web application that allows patients to log in, schedule appointments, and view prescription. The ssystem features a responsive design with Tailwind CSS,and admin dashboard for managing doctors, and information on common diseases.",
      "tech": ["react", "nodejs", "express", "full-stack", "mongodb"],
      "codeLink": "https://github.com/RaY8118/Hospital_Management_System",
      "liveProj": "https://hospital-system-gmkt.onrender.com"
    },
    {
      "title": "Smart Home Control",
      "description": "A React-based Progressive Web App(PWA) that enables users to manage IoT devices through Firebase. It features user authentication, secure device control, providing a seamless and app-like experience. Built with React, Firebase, and React Router, this project showcases modern web development practices and PWA features.",
      "tech": ["react", "esp32", "firebase", "IoT", "pwa-app"],
      "codeLink": "https://github.com/RaY8118/SmartHomeControlV3",
      "liveProj": "https://smart-home-control-v3.netlify.app"
    },
    {
      "title": "LUMI - Alzheimer's and Elderly Care App",
      "description": "LUMI is a comprehensive solution designed to asssit Alzheimer's an elderly patients by providing essential support through technology. Built with React Native (Expo) for the frontend and Flask for the backend, the app offers features such as task management, face and object detection, and real-time location tracking. It leverages MongoDB for data storage and integrates advanced capabilities to enhance caregiving, ensuring safety and assistance for users facing memory challenges.",
      "tech": ["python", "flask", "mongodb", "reactnative", "nativewindcss", "machine learning",],
      "backendLink": "https://github.com/RaY8118/LUMI-Backend",
      "frontentLink": "https://github.com/RaY8118/LUMI-Mobile-App",
    }

  ]

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((option, index) => (
              <React.Fragment key={index}>
                <div className="bg-blue-700/5 p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.3)] transition-all">
                  <h3 className="text-xl font-bold mb-2">
                    {option.title}
                  </h3>
                  <p className="text-gray-200 mb-4">{option.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {option.tech?.map(
                      (tech, key) => (
                        <span
                          className="bg-blue-500/20 text-white py-1 px-3 rounded-full text-sm transition-all hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                          key={key}
                        >
                          {tech}
                        </span>
                      ),
                    )}
                  </div>
                  <div className="flex justify-between items-center">
                    {
                      option.codeLink && (
                        <a href={option.codeLink}
                          className="text-blue-400 hover:text-gray-300 transition-colors my-4"
                          target="_blank"
                          rel="noopener noreferrer">
                          View Project
                        </a>
                      )
                    }
                    {
                      option.liveProj && (
                        <a href={option.liveProj}
                          className="text-blue-400 hover:text-gray-300 transition-colors my-4"
                          target="_blank"
                          rel="noopener noreferrer">
                          View Live Project
                        </a>
                      )
                    }
                    {
                      option.frontentLink && option.backendLink && (
                        <>
                          <a href={option.frontentLink}
                            className="text-blue-400 hover:text-gray-300 transition-colors my-4"
                            target="_blank"
                            rel="noopener noreferrer">
                            View Project (Frontend)
                          </a>

                          <a href={option.backendLink}
                            className="text-blue-400 hover:text-gray-300 transition-colors my-4"
                            target="_blank"
                            rel="noopener noreferrer">
                            View Project (Backend)
                          </a>

                        </>
                      )
                    }
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
