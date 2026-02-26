import React, { useState } from 'react';
import logo from '../assets/images/express-logo.webp';
import rightlogo from '../assets/images/logo-right.webp';
import { Link } from 'react-router-dom';
// import { BgGradient } from './common/Icon';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="flex justify-between sm:justify-between items-center w-full  px-5 sm:px-20 py-2 bg-primary text-white flex-wrap ">
        {/* <BgGradient className="absolute top-0 right-0 -z-10" /> */}
        <Link to="/" onClick={() => setIsOpen(false)}>
          <div className="flex items-center justify-center gap-2">
            <img
              src={logo}
              alt="express-logo"
              className="sm:h-14 sm:w-20 w-12"
            />
            <span className="flex flex-col">
              <i className="text-xl sm:text-4xl font-bold">MOVEXPRESS</i>
              <i className="text-sm">Expressly Delivered</i>
            </span>
          </div>
        </Link>

        {/* Menu Button  */}
        <button onClick={() => setIsOpen(true)} className="p-3 cursor-pointer">
          <img src={rightlogo} alt="rightlogo" />
        </button>

        {/* Curtain Menu  */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-[#F6C8F6] 
        font-semibold text-primary
        transform transition-transform duration-500 z-50
        ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-8 right-10 md:right-22 text-2xl px-2 lg:text-3xl h-14 w-14 rounded-2xl primary bg-primary text-white ">
            ✖
          </button>

          {/* Menu Content */}
          <ul class="flex flex-col items-center justify-center h-full space-y-8 text-2xl ">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="nav-style w-43">
              Home
            </Link>
            <Link
              to="/aboutus"
              onClick={() => setIsOpen(false)}
              className="nav-style w-43">
              About
            </Link>
            <Link
              to="/services"
              onClick={() => setIsOpen(false)}
              className="nav-style w-53">
              Services
            </Link>
            <Link
              to="/blogs"
              onClick={() => setIsOpen(false)}
              className="nav-style w-38">
              Blogs
            </Link>
            {/* <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="text-6xl hover:text-[#FA881E] font-medium">
              Contact
            </Link> */}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
