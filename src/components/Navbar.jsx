import React from "react";
import { Link } from "react-router";
import { FaBars } from "react-icons/fa6";
import { useState } from 'react';
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {

  let [menuShow,setMenuShow ]=useState(false);

  let handleMenu = () => {
    setMenuShow(!menuShow);
  };

  // console.log(menuShow);
  

  return (
    <section className="bg-black text-white sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-8 ">
        <Link to="/">
          <h3 className="text-2xl font-bold">
            <em>Abdun Noor</em>
          </h3>
        </Link>

        <ul className={`lg:flex lg:gap-12 lg:static lg:items-center  ${menuShow ? "absolute top-12 left-0 duration-700 ease-in-out w-full bg-white text-black text-center text-xl": "absolute top-12 -left-96  font-semibold"}`}>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/projects">
            <li>Projects</li>
          </Link>

          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
        <div onClick={handleMenu} className="lg:hidden text-red">
          {menuShow === true ? <RxCross1 /> : <FaBars />}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
