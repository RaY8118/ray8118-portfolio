import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "React Native",
    "Tailwind CSS",
  ];
  const backendSkills = [
    "Node.js",
    "Python",
    "Flask",
    "FastAPI",
    "Express",
    "Docker",
  ];
  const dbSkills = ["MySQL", "MongoDB", "PostgreSQL", "Firebase"];

  const techColors = {
    HTML: "#E34F26",
    CSS: "#264DE4",
    JavaScript: "#F7DF1E",
    React: "#61DAFB",
    "React Native": "#61DBFB",
    "Tailwind CSS": "#38BDF8",
    NodeJS: "#339933",
    Python: "#3776AB",
    Flask: "#000000",
    FastAPI: "#009688",
    Express: "#303030",
    Docker: "#0db7ed",
    MySQL: "#00758F",
    MongoDB: "#47A248",
    PostgreSQL: "#336791",
    Firebase: "#FFCA28",
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="bg-white/5 rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.3)]">
            <p className="text-gray-300 mb-6">
              👨‍💻 I'm a full-stack developer with a strong passion for backend development 🔧 and a growing interest in machine learning 🤖. Currently, I'm pursuing my B.Tech and continuously learning through hands-on projects.
            </p>
            <p className="text-gray-300 mb-6">
              🌱 <strong>Currently Learning:</strong> React Native (Expo) for mobile app development, advanced Python for backend systems, and MongoDB for data persistence.
            </p>
            <p className="text-gray-300 mb-6">
              🧠 <strong>Areas of Interest:</strong> Backend architecture, generative AI, and applying large language models (LLMs) to solve real-world problems.
            </p>
            <p className="text-gray-300 mb-6">
              ❓ <strong>Ask Me About:</strong> Python, backend development workflows, and the occasional JavaScript gotcha.
            </p>
            <p className="text-gray-300 mb-6">
              ⚡ <strong>Fun Fact:</strong> I work in Neovim with an anime-themed setup. Yes, it boosts productivity 😎.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      style={{
                        backgroundColor: techColors[tech] || "rgba(59,130,246,0.2)",
                        color: tech === "JavaScript" || tech === "Firebase" ? "#000" : "#fff",
                      }}
                      className="py-1 px-3 rounded-full text-sm transition-all hover:opacity-80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      style={{
                        backgroundColor: techColors[tech] || "rgba(59,130,246,0.2)",
                        color: tech === "JavaScript" || tech === "Firebase" ? "#000" : "#fff",
                      }}
                      className="py-1 px-3 rounded-full text-sm transition-all hover:opacity-80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Database</h3>
                <div className="flex flex-wrap gap-2">
                  {dbSkills.map((tech, key) => (
                    <span
                      key={key}
                      style={{
                        backgroundColor: techColors[tech] || "rgba(59,130,246,0.2)",
                        color: tech === "JavaScript" || tech === "Firebase" ? "#000" : "#fff",
                      }}
                      className="py-1 px-3 rounded-full text-sm transition-all hover:opacity-80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white/5 p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.3)]">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.Tech in Electronics and Computer Science</strong> – SAKEC (2021–2025)
                </li>
                <li>
                  <strong>Current CGPA:</strong> 9.02
                </li>
                <li>
                  <strong>Relevant Coursework:</strong> Data Structures, Web Development, IoT, Cloud Computing, and more.
                </li>
              </ul>
            </div>

            <div className="bg-white/5 p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.3)]">
              <h3 className="text-xl font-bold mb-4">Internships</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">Python Developer Intern – Oasis Infobyte</h4>
                  <p>
                    Built desktop GUI applications using Tkinter and PyQt5, and integrated REST APIs for dynamic data handling.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">Full-Stack Developer Intern – SAKEC</h4>
                  <p>
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

