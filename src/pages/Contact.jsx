import React from 'react';
import  { useRef } from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sgegzdr",   
        "template_it3hzl2",  
        form.current,
        "Egl8xkmq8HgxvhSa7"   
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Try again.");
        }
      );
  };

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-2">
      <div className="max-w-[1320px]  mx-auto flex flex-col md:flex-row items-center justify-between px-8 md:h-[100vh]">
        
        
        <div className="text-center md:text-left mb-8 md:mb-0 max-w-lg">
          <h2 className="text-3xl md:text-6xl font-extrabold text-white">
            Get in Touch with Confidence
          </h2>
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
              <span className="font-semibold">
                <a
                  href="https://github.com/abdunnoorfaheem"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/abdunnoorfaheem
                </a>
              </span>
            </div>
          </div>
        </div>

       
        <div className="w-full md:w-1/2 bg-gray-800 p-8 rounded-xl shadow-xl">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="w-full p-4 mb-4 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="w-full p-4 mb-4 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="text"
              name="user_phone"
              placeholder="Your Phone"
              className="w-full p-4 mb-4 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              name="message"
              placeholder="Your message here"
              className="w-full p-4 mb-4 bg-gray-700 text-white rounded-md h-40 focus:ring-2 focus:ring-blue-400"
              required
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
  );
};

export default Contact;
