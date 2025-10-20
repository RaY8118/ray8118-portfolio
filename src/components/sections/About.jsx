import { RevealOnScroll } from "../RevealOnScroll";
import aboutData from "../data/about.json"

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-teal-300 via-cyan-200 to-white  bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="glass-card rounded-xl p-8 border border-gray-700 shadow-xl hover:shadow-teal-500/20 transition-all duration-300 transform hover:-translate-y-1">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              👨‍💻 I'm a passionate Full-Stack Developer with a significant focus on crafting robust and scalable backend systems 🔧. My journey in software development is driven by a desire to build efficient solutions, from intricate API designs to powerful data processing pipelines. I recently completed my B.Tech and am continuously expanding my expertise through hands-on projects and exploring cutting-edge technologies.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              🌱 <strong>Currently Deepening Expertise In:</strong> Advanced Java for Data Structures & Algorithms and enterprise-grade backend development with Spring Boot, continuously improving my Python skills, and actively working with Go, a language I thoroughly enjoy.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              🧠 <strong>Core Interests:</strong> Designing resilient backend architectures, exploring the potential of generative AI, and leveraging Large Language Models (LLMs) to innovate and solve complex real-world challenges.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              ❓ <strong>Let's Connect About:</strong> Python, Go, Java (Spring Boot), backend development best practices, API design, system scalability, and the fascinating world of AI/ML applications.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              ⚡ <strong>Fun Fact:</strong> My coding environment is a highly customized Neovim setup, often themed with anime aesthetics – a unique blend that fuels my productivity and creativity 😎.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              <div className="inner-glass-card rounded-xl p-6 border border-gray-700 shadow-md hover:shadow-teal-500/20 transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-2xl font-bold mb-5 text-teal-300">Frontend</h3>
                <div className="flex flex-wrap gap-3">
                  {aboutData.frontend.map((tech, key) => (
                    <span
                      key={key}
                      style={{
                        backgroundColor: tech.color || "#4A5568", // Default gray if no color
                        color: tech.color && (tech.color === "#F7DF1E" || tech.color === "#61DAFB") ? "#1A202C" : "#FFFFFF",
                      }}
                      className="py-1.5 px-4 rounded-full text-sm font-medium transition-all hover:scale-105"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="inner-glass-card rounded-xl p-6 border border-teal-600 shadow-lg hover:shadow-teal-500/40 transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-2xl font-bold mb-5 text-teal-400">Backend</h3>
                <div className="flex flex-wrap gap-3">
                  {aboutData.backend.map((tech, key) => (
                    <span
                      key={key}
                      style={{
                        backgroundColor: tech.color || "#4A5568",
                        color: tech.color && (tech.color === "#F7DF1E" || tech.color === "#61DAFB") ? "#1A202C" : "#FFFFFF",
                      }}
                      className="py-1.5 px-4 rounded-full text-sm font-medium transition-all hover:scale-105"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="inner-glass-card rounded-xl p-6 border border-gray-700 shadow-md hover:shadow-teal-500/20 transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-2xl font-bold mb-5 text-teal-300">Database</h3>
                <div className="flex flex-wrap gap-3">
                  {aboutData.database.map((tech, key) => (
                    <span
                      key={key}
                      style={{
                        backgroundColor: tech.color || "#4A5568",
                        color: tech.color && (tech.color === "#F7DF1E" || tech.color === "#61DAFB") ? "#1A202C" : "#FFFFFF",
                      }}
                      className="py-1.5 px-4 rounded-full text-sm font-medium transition-all hover:scale-105"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div className="glass-card p-6 rounded-xl border border-gray-700 shadow-md hover:shadow-teal-500/20 transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-5 text-teal-300">Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-3">
                <li>
                  <strong>B.Tech in Electronics and Computer Science</strong> – SAKEC (2021–2025)
                </li>
                <li>
                  <strong>Current CGPA:</strong> 9.05
                </li>
                <li>
                  <strong>Relevant Coursework:</strong> Data Structures, Web Development, IoT, Cloud Computing, and more.
                </li>
              </ul>
            </div>

            <div className="glass-card p-6 rounded-xl border border-gray-700 shadow-md hover:shadow-teal-500/20 transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-5 text-teal-300">Internships</h3>
              <div className="space-y-5 text-gray-300">
                <div>
                  <h4 className="font-semibold text-lg">Python Developer Intern – Oasis Infobyte</h4>
                  <p className="text-base">
                    Built desktop GUI applications using Tkinter and PyQt5, and integrated REST APIs for dynamic data handling.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg">Full-Stack Developer Intern – SAKEC</h4>
                  <p className="text-base">
                    Worked on a hospital management system using the MERN stack. Implemented user authentication, handled CRUD operations, and participated in testing and debugging phases.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

