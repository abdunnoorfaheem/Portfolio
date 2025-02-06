import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'
import Footer from './Footer'
import ProjectsList from '../components/ProjectsList'

const Home = () => {
  return (
    <>
    
   <Hero/>
   <AboutMe/>
   <Skills/>
   <ProjectsList/>
   <Footer/>
    </>
  )
}

export default Home;