import React from 'react';
import Hero from '../components/Hero'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'
import Footer from './Footer'
import ProjectsList from '../components/ProjectsList'
import Contact from './Contact'

const Home = () => {
  return (
    <>
    
   <Hero/>
   <AboutMe/>
   <Skills/>
   <ProjectsList/>
   <Contact/>
    </>
  )
}

export default Home;