import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className=" fixed top-0 w-full bg-green-700 h-20 text-white flex justify-around items-center  md:flex-row md:items-center md:font-medium">
      <div className=" md:mx-0">Pranaya's Portfolio</div>
      <div className="md:hidden">
        <i className="fa-solid fa-bars" onClick={() => setIsOpen(!isOpen)}></i>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <ul
          className="md:hidden flex  flex-col justify-evenly absolute top-20 right-0 w-35 h-90 bg-green-800 space-y-2 py-4 transition" 
          
          
        >
          <li className="hover:text-gray-300 cursor-pointer text-center">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-gray-300 cursor-pointer text-center">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-gray-300 cursor-pointer text-center">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="hover:text-amber-200 text-center">
          <Link to="/services">Services</Link>
        </li>
          <li className="hover:text-gray-300 cursor-pointer text-center">
            <Link to="/contact">Contact Me</Link>
          </li>
        </ul>
      )}
      <ul className=" hidden md:flex justify-evenly space-x-10">
        <li className="hover:text-amber-200">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-amber-200">
          <Link to="/about">About</Link>
        </li>
        <li className="hover:text-amber-200">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="hover:text-amber-200">
          <Link to="/services">Services</Link>
        </li>
        <li className="hover:text-amber-200">
          <Link to="/contact">Contact Me</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
