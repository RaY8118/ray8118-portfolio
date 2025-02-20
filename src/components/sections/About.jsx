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
    "NodeJS",
    "Python",
    "Flask",
    "Express",
    "MySQL",
    "MongoDB",
    "Firebase",
    "Docker",
  ];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>
          <div className="bg-blue-500/5 rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.3)]">
            <p className="text-gray-300 mb-6">
              👨‍💻 Full-Stack Developer | Passionate about backend development 🔧
              and exploring machine learning 🤖. Currently honing my skills as a
              student 📚.
            </p>
            <p className="text-gray-300 mb-6">
              🌱 Tech Stack: Currently learning React Native (Expo) for mobile
              apps, Python 🐍 for backend development, and MongoDB for
              databases.
            </p>
            <p className="text-gray-300 mb-6">
              🧠 Interests: Backend architecture, machine learning, and
              generative AI applications—leveraging LLMs for real-world use
              cases.
            </p>
            <p className="text-gray-300 mb-6">
              ❓ Ask me about: Python, backend development, and maybe some
              JavaScript.
            </p>
            <p className="text-gray-300 mb-6">
              ⚡ Fun fact: I have an anime-themed setup 🎨!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      className="bg-blue-500/20 text-white py-1 px-3 rounded-full text-sm transition-all hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                      key={key}
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
                      className="bg-blue-500/20 text-white py-1 px-3 rounded-full text-sm transition-all hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                      key={key}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-blue-500/5 p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.3)]">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> B.Tech in Electronics and Computer Science</strong> -
                  SAKEC (2021-2025)
                </li>
                <li>
                  <span className="font-semibold">Current CGPA:9.02</span>
                </li>
                <li>
                  <span className="font-semibold">Relevent course work: </span>{" "}
                  Data Structures, Web Development, Iot, Cloud Computing...
                </li>
              </ul>
            </div>

            <div className="bg-blue-500/5 p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.3)]">
              <h3 className="text-xl font-bold mb-4">Internships</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Python Programmer Intern - Oasis Infobyte
                  </h4>
                  <p>
                    Developed GUI application using Tkinter and PyQt5 and worked
                    with REST APIs for data{" "}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Full-Stack Development Intern - SAKEC{" "}
                  </h4>
                  <p>
                    Contributed to a hospital management system using the MERN
                    stack, implementing user authentication & authorization, and
                    performing testing/debugging.
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
