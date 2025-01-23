import React from "react";
import img from "../assets/bg.png";

const Hero = () => {
  return (
    <section className="bg-black text-white min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2">
            <h1 className="text-5xl md:text-9xl font-bold tracking-wide">
              <i className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                Web Developer
              </i>
            </h1>
            <p className="text-lg md:text-2xl mt-5">
              Hello, I'm <strong>Md. Abdun Noor</strong>, a passionate Front-End
              Developer who specializes in crafting visually appealing,
              user-friendly websites and applications. With a deep understanding
              of modern web technologies, I bring design concepts to life
              through clean, responsive code that delivers seamless user
              experiences.
            </p>
            <div className="pt-8">
              <a
                href="/path-to-cv.pdf"
                download
                className="border-2 rounded-full py-3 px-8 text-lg font-medium hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:text-white transition-all duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
            <img
              src={img}
              alt=""
              className="w-3/4 md:w-2/3 hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
