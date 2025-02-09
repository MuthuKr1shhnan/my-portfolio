// import React, { useEffect } from "react";

// const Navbar = ({menuOpen, setMenuOpen}) => {
//     useEffect(() => {document.body.style.overflow = menuOpen ? "hidden" : ""}, [menuOpen]);
//   return (
//     <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
//       <div className="max-w-5xl mx-auto px-4 ">
//         <div className="flex items-center justify-between h-16">
//           <a href="#home" className="font-mono text-xl font-bold text-white">
//             MK<span className="text-blue-500">.tech</span>
//           </a>
//           <div className={`w-7 h-5 relative cursor-pointer md:hidden ${menuOpen ? "opacity-0": "opacity-100"} ` }onClick={() => setMenuOpen(!menuOpen)}>
//             &#9776;
//           </div>
//           <div className="hidden md:flex items:center space-x-8">
//             <a
//               href="#home"
//               className="text-gray-400 hover:text-white  transition-colors "
//             >Home</a>
//             <a href="#projects" className="text-gray-400 hover:text-white transition-colors ">Projects</a>
//             <a href="#about" className="text-gray-400 hover:text-white transition-colors ">About</a>
//             <a href="#contact" className="text-gray-400 hover:text-white transition-colors ">Contact</a>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useEffect, useState } from "react";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // Adjust threshold for better activation timing
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
        <div className="border border-gray-800 p-2 rounded-full" ><a  href="#home" className="font-mono text-4xl font-bold text-white ">
            M<span className="text-blue-500">K</span>
          </a></div>
          
          <div
            className={`w-7 h-5 relative cursor-pointer md:hidden  ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            &#9776;
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {["home", "about","projects" , "contact"].map((id,idx) => (
              <a
                key={idx}
                href={`#${id}`}
                className={`transition-colors ${
                  activeSection === id ? "text-white font-bold" : "text-gray-400"
                }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
