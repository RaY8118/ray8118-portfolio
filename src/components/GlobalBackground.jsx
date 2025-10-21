import { useEffect, useState } from "react";

export const GlobalBackground = () => {
  const curlCommands = [
    `> curl -X GET https://ray8118.pages.dev`,
    `> curl -X GET https://ray8118.pages.dev/projects`,
    `> curl -X POST https://ray8118.pages.dev/contact -d "message=Hello"`,
    `> fetch('/api/skills')`,
    `> ping -c 3 ray8118.pages.dev`,
  ];

  const [currentCmd, setCurrentCmd] = useState(curlCommands[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * curlCommands.length);
      setCurrentCmd(curlCommands[randomIndex]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="w-full h-full bg-[radial-gradient(circle,rgba(0,255,255,0.5)_1px,transparent_1px)] bg-[length:40px_40px] animate-pulse-dots"></div>
      <div
        className="w-full h-full absolute inset-0 bg-[radial-gradient(circle,rgba(0,255,255,0.3)_1px,transparent_1px)] bg-[length:40px_40px] animate-pulse-dots"
        style={{ animationDelay: "1s", transform: "scale(1.01)" }}
      ></div>

      <pre className="absolute bottom-10 left-10 text-sm md:text-lg text-teal-300/60 font-mono tracking-wide select-none animate-cmd-fade">
        {currentCmd}
        <span className="animate-blink">█</span>
      </pre>
    </div>
  );
};
