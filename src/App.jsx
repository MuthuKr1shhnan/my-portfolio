import LoadingScreen from "./components/LoadingScreen";
import MobileMenu from "./components/MobileMenu";
import Navbar from "./components/Navbar";
import About from "./components/sections/About";
import { Contact } from "./components/sections/Contact";
import Home from "./components/sections/Home";
import Projects from "./components/sections/Projects";
import "./index.css";
import { useState } from "react";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100 overflow-x-hidden`}
      >
        <Navbar menuOpen ={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen ={menuOpen} setMenuOpen={setMenuOpen}/>
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
      </div>
    </>
  );
}

export default App;
