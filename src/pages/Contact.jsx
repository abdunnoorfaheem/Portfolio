import React from 'react';
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";


const Contact = () => {
  return (
    <>

<footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-8 md:h-[100vh]">
        
        <div className="text-center md:text-left mb-8 md:mb-0 max-w-lg">
          <h2 className="text-3xl md:text-6xl font-extrabold text-white">Get in Touch with Confidence</h2>
          <p className="text-gray-400 mt-3 text-base leading-relaxed">
            Fill out the form below to connect with me, or call during business hours
            (9:00 a.m. - 6:00 p.m. BST, Sunday to Thursday).
          </p>
          <div className="mt-6 space-y-4">
            <div className="flex items-center space-x-4 text-white text-lg">
              <FaPhoneAlt className="text-xl" />
              <span className="font-semibold">+8801535452284</span>
            </div>
            <div className="flex items-center space-x-4 text-white text-lg">
              <FaEnvelope className="text-xl" />
              <span className="font-semibold">abdunnoor2450@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4 text-white text-lg">
              <FaSquareGithub className="text-xl" />
              <span className="font-semibold"><a href="https://github.com/abdunnoorfaheem">https://github.com/abdunnoorfaheem</a></span>
            </div>
          </div>
        </div>

       
        <div className="w-full md:w-1/2 bg-gray-800 p-8 rounded-xl shadow-xl">
          <form>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 mb-4 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 mb-4 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="Your Phone"
              className="w-full p-4 mb-4 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              placeholder="Your message here"
              className="w-full p-4 mb-4 bg-gray-700 text-white rounded-md h-40 focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <button
              type="submit"
              className="border-2 w-full hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:text-white transition-all duration-300 text-white py-4 rounded-4xl flex items-center justify-center font-bold text-lg shadow-md"
            >
              Send Message 
            </button>
          </form>
        </div>
      </div>
      
    </footer>

    
    
    </>
  
  );
};

export default Contact;
