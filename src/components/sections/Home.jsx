import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";

const Home = () => {
  return (
    <section
      id="star"
      className="flex justify-center items-center min-h-screen relative "
    >
       <section className="star" id="home" >
        <span className="st"></span>
        <span className="st"></span>
        <span className="st"></span>
        <span className="st"></span>
        <span className="st"></span>
        <span className="st"></span>
        <span className="st"></span>
        <span className="st"></span>
        <span className="st"></span>
        <span className="st"></span>
    </section>
    <RevealOnScroll>
      <div className="text-center z-10 px-4 " >
        <h1 className="text-5xl md:text-7xl bg-gradient-to-r from-blue-500 to-purple-500 font-bold bg-clip-text text-transparent leading-tight hover-underline relative">
          Hi! I'm Muthu Krishnan.S
        </h1>
        <p className="text-sm md:text-xl mt-4 mx-auto max-w-lg text-gray-300 ">
        "I'm a front-end developer passionate about crafting intuitive UI/UX, smooth interactions, and delightful user experiences."
        </p>
        <div className="flex justify-center space-x-4 mt-8">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
      </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;
