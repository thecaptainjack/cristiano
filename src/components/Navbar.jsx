import React, { useState } from 'react';
import { Link } from "react-router-dom";
import navimg from "../images/navsvg.svg";
import { HiMenu, HiX } from "react-icons/hi";   // install if not already:  npm install react-icons

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-1000 px-6 py-4 border-b-2 border-gray-500 text-white">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img src={navimg} className="h-6" alt="logo" />
        </Link>

        {/* Hamburger Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-3xl md:hidden"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-lg uppercase font-light tracking-widest">
          <Link to="/" className="hover:text-yellow-400 transition duration-300">Home</Link>
          <Link to="/brands" className="hover:text-yellow-400 transition duration-300">Brands</Link>
          <Link to="/muesiem" className="hover:text-yellow-400 transition duration-300">MUSEUM</Link>
          <Link to="/carrier" className="hover:text-yellow-400 transition duration-300">CAREER</Link>
          <Link to="/partners" className="hover:text-yellow-400 transition duration-300">PARTNERS</Link>
        </div>
      </div>

      {/* Mobile Links */}
      {open && (
        <div className="mt-4 flex flex-col gap-4 md:hidden text-center text-lg uppercase font-light tracking-widest">
          <Link to="/" onClick={() => setOpen(false)} className="hover:text-yellow-400">Home</Link>
          <Link to="/brands" onClick={() => setOpen(false)} className="hover:text-yellow-400">Brands</Link>
          <Link to="/muesiem" onClick={() => setOpen(false)} className="hover:text-yellow-400">MUSEUM</Link>
          <Link to="/carrier" onClick={() => setOpen(false)} className="hover:text-yellow-400">CAREER</Link>
          <Link to="/partners" onClick={() => setOpen(false)} className="hover:text-yellow-400">PARTNERS</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
