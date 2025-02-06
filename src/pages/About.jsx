import React from 'react'

import { motion } from "framer-motion";
import { Link } from "react-router";
import Footer from './Footer';

const About = () => {
  return (
    <>
    
    <section className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-16 lg:h-[100vh] md:flex justify-center items-center">
      <div className="container mx-auto px-6 lg:px-12">
       
        <motion.h2
          className="text-5xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.15 }}
        >
          About Me
        </motion.h2>
        
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-lg leading-relaxed text-center">
            I’m a passionate <span className="font-bold text-emerald-400">Frontend Developer</span> dedicated to crafting
            visually stunning and user-friendly web experiences. With expertise
            in modern technologies like <span className="font-bold text-sky-400">React</span>, <span className="font-bold text-yellow-400">JavaScript</span>, and <span className="font-bold text-indigo-400">Tailwind CSS</span>, 
            I transform ideas into responsive, seamless interfaces.  
          </p>
          <p className="text-lg leading-relaxed text-center mt-4">
            Over the years, I’ve honed my skills working on dynamic websites, e-commerce platforms, 
            and interactive dashboards. My focus is on delivering clean, efficient code while solving 
            real-world challenges. Beyond coding, I stay inspired by exploring design trends, contributing 
            to open-source projects, and mentoring upcoming developers.
          </p>
          <p className="text-lg leading-relaxed text-center mt-4">
            Every project is an opportunity to innovate, learn, and create meaningful digital experiences. 
            Let’s build something extraordinary together!
          </p>
        </motion.div>

        
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link to="/contact">
          <a
            href="#contact"
            className="inline-block border-2 rounded-full py-3 px-8 text-lg font-medium hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:text-white transition-all duration-300"
          >
            Get in Touch
          </a>
          </Link>
        </motion.div>
      </div>
    </section>
    
    
    </>
  )
}

export default About;