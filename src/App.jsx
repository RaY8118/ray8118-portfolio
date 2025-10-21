import "./App.css";
import "./index.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { NavBar } from "./components/NavBar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Blog } from "./components/sections/Blog";
import { Contact } from "./components/sections/Contact";
import { useState } from "react";
import { ToastContainer } from "react-toastify"
import { GlobalBackground } from "./components/GlobalBackground";
function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, SetMenuOpen] = useState(false);
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <GlobalBackground />
      <div
        className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <NavBar menuOpen={menuOpen} SetMenuOpen={SetMenuOpen} />
        <MobileMenu menuOpen={menuOpen} SetMenuOpen={SetMenuOpen} />
        <Home />
        <About />
        <Projects />
        <Blog />
        <Contact />
        <ToastContainer position="top-center" />
      </div>
    </>
  );
}

export default App;
