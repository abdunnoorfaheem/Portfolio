import React from 'react';
import img from '../assets/bg.png';

const Hero = () => {
  return (
    <section className="bg-black text-white">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            
          <div className="w-[50%]">
            <h1 className="text-6xl"><i>Web Developer</i></h1>
            <p className="text-xl mt-3">Skill in Frontend Development</p>
           </div>
           <div className=""><img src={img} alt="" /></div> 

            </div> 
        </div>
    </section>
  )
}

export default Hero;