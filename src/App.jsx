import "./App.css";
import "./index.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { NavBar } from "./components/NavBar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import BlogSection from "./components/sections/BlogSection";
import { Contact } from "./components/sections/Contact";
import { useState } from "react";
import { ToastContainer } from "react-toastify"
function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, SetMenuOpen] = useState(false);
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}  text-text-light font-comfortaa glass-effect`}
      >

        <NavBar menuOpen={menuOpen} SetMenuOpen={SetMenuOpen} />
        <MobileMenu menuOpen={menuOpen} SetMenuOpen={SetMenuOpen} />
        <Home />
        <About />
        <Projects />
        <BlogSection />
        <Contact />
        <ToastContainer position="top-center" />
      </div>
    </>
  );
}

export default App;
