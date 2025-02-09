//////Normal From Top to Botton Interaction

// // import React from "react";

// // const MobileMenu = ({ menuOpen, setMenuOpen }) => {
// //   return (
// //     <div
// //       className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,.8)] z-40 flex flex-col items-center justify-center transition-all duration-800 ease ${
// //         menuOpen
// //           ? "h-screen opacity-100 pointer-events-auto"
// //           : "h-0 opacity-0 pointer-events-none"
// //       }`}
// //     >
// //       <button
// //         onClick={() => setMenuOpen(false)}
// //         className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
// //         aria-label="Close menu"
// //       >
// //         &times;
// //       </button>
// //       <a
// //         href="#home"
// //         className="text-gray-400 text-2xl hover:text-white  transition-colors mb-10 "
// //         onClick={() => setMenuOpen(false)}

// //       >
// //         Home
// //       </a>
// //       <a
// //         href="#projects"
// //         className="text-gray-400 text-2xl hover:text-white transition-colors mb-10"
// //         onClick={() => setMenuOpen(false)}
// //       >
// //         Projects
// //       </a>
// //       <a
// //         href="#about"
// //         className="text-gray-400 text-2xl hover:text-white transition-colors mb-10"
// //         onClick={() => setMenuOpen(false)}
// //       >
// //         About
// //       </a>
// //       <a
// //         href="#contact"
// //         className="text-gray-400 text-2xl hover:text-white transition-colors mb-10"
// //         onClick={() => setMenuOpen(false)}
// //       >
// //         Contact
// //       </a>
// //     </div>
// //   );
// // };

// // export default MobileMenu;
//////GPT From Right to Left Interaction

// import React from "react";

// const MobileMenu = ({ menuOpen, setMenuOpen }) => {
//   return (
//     <div
//       className={`fixed top-0 left-0 w-full h-screen bg-[rgba(10,10,10,.8)] z-40 flex flex-col items-center justify-center transition-transform duration-800 ease-in-out ${
//         menuOpen ? "translate-x-0" : "translate-x-full"
//       }`}
//     >
//       <button
//         onClick={() => setMenuOpen(false)}
//         className="absolute top-6 right-6 text-3xl focus:outline-none cursor-pointer "
//         aria-label="Close menu"
        
//       >
//       <span className="text-red" style={{color:"hsl(0, 100%, 70%)"}}>&times;</span>  
//       </button>
//       <a
//         href="#home"
//         className="text-gray-400 text-2xl hover:text-white transition-colors mb-10"
//         onClick={() => setMenuOpen(false)}
//       >
//         Home
//       </a>
//       <a
//         href="#projects"
//         className="text-gray-400 text-2xl hover:text-white transition-colors mb-10"
//         onClick={() => setMenuOpen(false)}
//       >
//         Projects
//       </a>
//       <a
//         href="#about"
//         className="text-gray-400 text-2xl hover:text-white transition-colors mb-10"
//         onClick={() => setMenuOpen(false)}
//       >
//         About
//       </a>
//       <a
//         href="#contact"
//         className="text-gray-400 text-2xl hover:text-white transition-colors mb-10"
//         onClick={() => setMenuOpen(false)}
//       >
//         Contact
//       </a>
//     </div>
//   );
// };

// export default MobileMenu;

//////GPT Active ancher tag color changing on scroll
import React, { useState, useEffect } from "react";

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section"); // Assuming each section is wrapped in a <section> tag
      let currentSection = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 80 && rect.bottom >= 80) {
          currentSection = section.getAttribute("id");
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClasses = (id) =>
    `text-2xl mb-10 ${
      activeSection === id ? "text-white-400" : "text-gray-600"
    } hover:text-white transition-colors`;

  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen bg-[rgba(10,10,10,.8)] z-40 flex flex-col items-center justify-center transition-transform duration-800 ease-in-out ${
        menuOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-3xl focus:outline-none cursor-pointer"
        aria-label="Close menu"
      >
        <span style={{ color: "hsl(0, 100%, 70%)" }}>&times;</span>
      </button>
      <a
        href="#home"
        className={linkClasses("home")}
        onClick={() => setMenuOpen(false)}
      >
        Home
      </a>
      <a
        href="#projects"
        className={linkClasses("projects")}
        onClick={() => setMenuOpen(false)}
      >
        Projects
      </a>
      <a
        href="#about"
        className={linkClasses("about")}
        onClick={() => setMenuOpen(false)}
      >
        About
      </a>
      <a
        href="#contact"
        className={linkClasses("contact")}
        onClick={() => setMenuOpen(false)}
      >
        Contact
      </a>
    </div>
  );
};

export default MobileMenu;
