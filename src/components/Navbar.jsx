import React, { useState, useEffect } from 'react';
import logo from '../assets/images/express-logo.webp';
import rightlogo from '../assets/images/logo-right.webp';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll only when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <nav className="flex justify-between items-center w-full px-5 sm:px-20 py-2 bg-primary text-white">
      {/* Logo */}
      <Link to="/" onClick={() => setIsOpen(false)}>
        <div className="flex items-center gap-2">
          <img src={logo} alt="express-logo" className="sm:h-14 sm:w-20 w-12" />
          <span className="flex flex-col">
            <i className="text-xl sm:text-4xl font-bold">MOVEXPRESS</i>
            <i className="text-sm">Expressly Delivered</i>
          </span>
        </div>
      </Link>

      {/* Menu Button */}
      <button onClick={() => setIsOpen(true)} className="p-3 cursor-pointer">
        <img src={rightlogo} alt="menu-icon" />
      </button>

      {/* Curtain Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#F6C8F6]
        overflow-y-auto overflow-x-hidden hide-scrollbar
        font-semibold text-primary
        transform transition-transform duration-500 z-50
        ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-8 right-10 md:right-28 text-2xl h-14 w-14 rounded-2xl bg-primary text-white">
          ✖
        </button>

        {/* Menu Content */}
        <ul className="flex flex-col items-center justify-center h-full space-y-8 text-2xl">
          <li>
            <Link to="/" onClick={() => setIsOpen(false)} className="nav-style">
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/aboutus"
              onClick={() => setIsOpen(false)}
              className="nav-style">
              About
            </Link>
          </li>

          <li>
            <Link
              to="/services"
              onClick={() => setIsOpen(false)}
              className="nav-style">
              Services
            </Link>
          </li>

          <li>
            <Link
              to="/blogs"
              onClick={() => setIsOpen(false)}
              className="nav-style">
              Blogs
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
