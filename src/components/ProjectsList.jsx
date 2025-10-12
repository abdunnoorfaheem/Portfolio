import React from 'react';
import { motion } from 'framer-motion';
import projectOne from '../assets/projectOne.png';
import projectTwo from '../assets/projectTwo.png';
import projectThree from '../assets/projectThree.png';
import projectFour from '../assets/projectFour.png';


const projects = [
  {
    id: 1,
    title: "WoodenAura",
    image: projectOne,
    github: "https://github.com/abdunnoorfaheem",
    live: "https://wooden-aura.vercel.app/",
  },
  {
    id: 2,
    title: "Bank Application",
    image: projectTwo,
    github: "https://github.com/abdunnoorfaheem",
    live: "https://bank-application-nine.vercel.app/",
  },
  {
    id: 3,
    title: "Geometries Genius",
    image: projectThree,
    github: "https://github.com/abdunnoorfaheem",
    live: "https://geometries-genius.netlify.app/",
  },
  {
    id: 4,
    title: "cartivo",
    image: projectFour,
    github: "https://github.com/abdunnoorfaheem",
    live: "https://cartivo-pink.vercel.app/",
  },
];

const ProjectsList = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-black text-white py-16">
      <div className="container mx-auto text-center">
        <motion.h1 
          className="text-4xl md:text-6xl font-extrabold mb-16 tracking-widest text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Projects
        </motion.h1>
        <div className="grid md:grid-cols-3 gap-12 px-6">
          {projects.map((project) => (
            <motion.div 
              key={project.id} 
              className="relative group bg-gray-800 p-6 rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: project.id * 0.2 }}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg group-hover:opacity-75 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                <div className="flex space-x-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:text-white transition-all duration-300">Github</a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className=" text-white px-4 py-2 rounded-lg hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:text-white transition-all duration-300">Live Demo</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
       
      </div>
    </section>
  );
};

export default ProjectsList;
