import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <section className="bg-black text-white">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/">
          <h3 className="text-2xl font-bold">
            <em>Abdun Noor</em>
          </h3>
        </Link>

        <ul className="flex justify-center items-center gap-10 py-4 font-semibold">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/projects">
            <li>Projects</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
