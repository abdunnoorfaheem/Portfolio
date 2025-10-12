import React from 'react';
import { motion } from 'framer-motion';
import html from '../assets/html.png';
import css from '../assets/css.png';
import bootstrap from '../assets/bootstrap.png';
import tailwindcss from '../assets/tailwindcss.png';
import react from '../assets/react.png';
import redux from '../assets/redux.png';
import nextjs from '../assets/nextjs.png';
import firebase from '../assets/firebase.png';
import git from '../assets/git.png';
import js from '../assets/js.jpeg';


const skillImages = [
  { name: 'HTML', src: html },
  { name: 'CSS', src: css },
  { name: 'Bootstrap', src: bootstrap },
  { name: 'TailwindCSS', src: tailwindcss },
  { name: 'JavaScript', src: js },
  { name: 'React', src: react },
  { name: 'Redux', src: redux },
  { name: 'Next.js', src: nextjs },
  { name: 'Firebase', src: firebase },
  { name: 'Git & Github', src: git },
];

const Skills = () => {
  
  return (
  <>
  <section className=''>
      <div className="relative bg-black text-white py-20 px-6 sm:px-10 lg:px-20 overflow-hidden ">
    <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-80 "></div>
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative z-10 text-center mb-12"
    >
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-wide mb-6">My Skills</h1>
      <p className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto font-semibold">Mastering the tools and technologies that build the future of the web. Here’s a glimpse of my expertise : </p>
    </motion.div>

    <motion.ul
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
      className="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6"
    >
      {skillImages.map((skill, index) => (
        <motion.li
          key={index}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          className="flex flex-col items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-center rounded-xl shadow-md py-6 px-4 transform transition-all duration-300 hover:shadow-lg hover:from-pink-500 hover:to-yellow-500" 
        >
          <img src={skill.src} alt={skill.name} className="w-16 h-16 mb-4" />
          <span className="text-base sm:text-lg lg:text-xl">{skill.name}</span>
        </motion.li>
      ))}
    </motion.ul>

    <div className="absolute top-10 left-10 w-20 h-20 sm:w-40 sm:h-40 bg-purple-500 rounded-full blur-3xl opacity-40 animate-pulse"></div>
    <div className="absolute bottom-20 right-20 w-32 h-32 sm:w-64 sm:h-64 bg-indigo-700 rounded-full blur-2xl opacity-50 animate-pulse"></div>
  </div>
  </section>
  </>
  );
};

export default Skills;
