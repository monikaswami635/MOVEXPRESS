import React from 'react';
import footerlogo from '../assets/images/express-logo.webp';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import {
  Messageicon,
  Facebookicon,
  Instaicon,
  Socialicon,
} from './common/Icon';

function Footer() {
  return (
    <footer className="bg-lightclr px-7">
      <div
        className="max-w-7xl mx-auto px-6 py-14 
                      grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* ===== Column 1 - About ===== */}
        <div>
          <div className="flex items-center gap-3">
            <img src={footerlogo} alt="footer-logo" className="h-14 w-14" />
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div>
                <h2 className="text-2xl font-bold primary">MOVEXPRESS</h2>
                <p className="text-sm primary-color">Expressly Delivered</p>
              </div>
            </Link>
          </div>

          <p className="text-gray-700 mt-6 text-[16px] leading-7">
            At MoveXpress we understand that moving can be quite demanding and
            stressful. That’s why we are dedicated to making the process smooth
            and seamless for you.
          </p>

          <div className="flex gap-4 mt-6">
            <Facebookicon />
            <Instaicon />
            <Socialicon />
          </div>
        </div>

        {/* ===== Column 2 - Quick Links ===== */}
        <div>
          <h3 className="text-xl font-semibold text-primary mb-5">
            Quick Links
          </h3>

          <ul className="space-y-4 font-medium text-gray-800">
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/aboutus' },
              { name: 'Services', path: '/services' },
              { name: 'Become a Driver', path: '/' },
              { name: 'Blogs', path: '/blogs' },
            ].map((item, index) => (
              <li key={index}>
                <HashLink
                  smooth
                  to={item.path}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }
                  className="footer-style">
                  {item.name}
                </HashLink>
              </li>
            ))}
          </ul>
        </div>

        {/* ===== Column 3 - Small Print ===== */}
        <div>
          <h3 className="text-xl font-semibold text-primary mb-5">
            Small Print
          </h3>

          <ul className="space-y-4 font-medium text-gray-800">
            {[
              'Terms Of Service',
              'Privacy & Policies',
              'Movers Conduct Policy',
              'Damaged or Missing Items Policy',
              'How Pay Works',
            ].map((item, index) => (
              <li key={index}>
                <HashLink to="/" className="footer-style">
                  {item}
                </HashLink>
              </li>
            ))}
          </ul>
        </div>

        {/* ===== Column 4 - Contact ===== */}
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold text-primary mb-5 ">
            Contact Info
          </h3>

          <p className=" footer-address">
            6566 Union Street, San Francisco CA 65456, United States
          </p>

          <a href="tel:+15551234567" className="footer-tel hover:after:w-36">
            (555) 123-4567
          </a>

          <button
            className="mt-6 w-46 h-16.5 relative overflow-hidden 
                             bg-common text-white font-semibold 
                             rounded-xl group transition-all duration-300">
            <span
              className="absolute inset-0 bg-primary scale-0 
                             group-hover:scale-100 transition-transform 
                             duration-500 origin-center rounded-xl"></span>

            <span className="relative z-10 flex items-center justify-center gap-2 text-[16px]">
              Chat with Us
              <Messageicon />
            </span>
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#4B014B66] mt-8">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-primary font-semibold text-sm">
          © Copyright 2026, All Rights Reserved by MoveXpress.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
