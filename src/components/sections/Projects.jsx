import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";

const Projects = () => {
  return (
    <section
      id='projects'
      className='min-h-screen flex items-center justify-center py-20'
    >
      <RevealOnScroll>
        <div className='max-w-5xl mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>
            Intagram-Clone
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
              <h3 className='text-xl font-bold mb-2'>Instagram</h3>
              <p className='text-gray-400 mb-4'>
                Built a sleek UI with interactions, now integrating Supabase for
                backend features.
              </p>
              <div className='flex flex-wrap gap-2 mb-4'>
                {["React", "Chakra Ui"].map((tech, key) => (
                  <span
                    key={key}
                    className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                  hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                  '
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className='flex justify-between items-center'>
                <a
                  href='https://muthukr1shhnan.github.io/insta/'
                  className='text-blue-400 hover:text-blue-300 transition-colors my-4'
                  target='_blank'
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className='
            glass p-6 rounded-xl border border-white/10 
            hover:-translate-y-1 hover:border-blue-500/30
            hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
            transition-all
          '
            >
              <h3 className='text-xl font-bold mb-2'> Weather Site </h3>
              <p className='text-gray-400 mb-4'>
                I've built a weather app using an API, added a title effect to
                the weather card, implemented error handling, and designed a
                clean, user-friendly UI.{" "}
              </p>
              <div className='flex flex-wrap gap-2 mb-4'>
                {["Html", "Css"].map((tech, key) => (
                  <span
                    key={key}
                    className='
                    bg-blue-500/10 text-blue-500 py-1 px-3 
                    rounded-full text-sm
                    transition
                    hover:bg-blue-500/20 hover:-translate-y-0.5
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                  '
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className='flex justify-between items-center '>
                <a
                  href='https://muthukr1shhnan.github.io/weatherapp/'
                  className='text-blue-400 hover:text-blue-300 transition-colors my-4'
                  target='_blank'
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className='
            glass p-6 rounded-xl border border-white/10 
            hover:-translate-y-1 hover:border-blue-500/30
            hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
            transition-all
          '
            >
              <h3 className='text-xl font-bold mb-2'>Score Card Ui</h3>
              <p className='text-gray-400 mb-4'>
                A highly responsive UI designed for optimal performance and
                adaptability.
              </p>
              <div className='flex flex-wrap gap-2 mb-4'>
                {["Css", "Html"].map((tech) => (
                  <span
                    key={tech}
                    className='
                    bg-blue-500/10 text-blue-500 py-1 px-3 
                    rounded-full text-sm
                    transition
                    hover:bg-blue-500/20 hover:-translate-y-0.5
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                  '
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className='flex justify-between items-center'>
                <a
                  href='https://muthukr1shhnan.github.io/ScoreCard/'
                  className='text-blue-400 hover:text-blue-300 transition-colors my-4'
                  target='_blank'
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className='
            glass p-6 rounded-xl border border-white/10 
            hover:-translate-y-1 hover:border-blue-500/30
            hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
            transition-all
          '
            >
              <h3 className='text-xl font-bold mb-2'>Movie Ticket Booking</h3>
              <p className='text-gray-400 mb-4'>
                A frontend task with HTML, CSS, and JavaScript, featuring
                drag-and-drop and error handling.
              </p>
              <div className='flex flex-wrap gap-2 mb-4'>
                {["Java Script", "Css", "Html"].map((tech, key) => (
                  <span
                    key={key}
                    className='
                    bg-blue-500/10 text-blue-500 py-1 px-3 
                    rounded-full text-sm
                    transition
                    hover:bg-blue-500/20 hover:-translate-y-0.5
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                  '
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className='flex justify-between items-center'>
                <a
                  href='https://muthukr1shnan.github.io/Movie-Ticket-Booking/'
                  className='text-blue-400 hover:text-blue-300 transition-colors my-4'
                  target='_blank'
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
