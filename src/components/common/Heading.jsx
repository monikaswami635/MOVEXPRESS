import React from 'react';

export const HeroHeading = ({ content, className }) => {
  return (
    <h1
      className={`text-[35px] sm:text-[58px] md:text-7xl font-bold leading-tight sm:mt-12 ${className}`}>
      {content}
    </h1>
  );
};

//buttonclasses

export const buttonclasses = () => {
  return (
    <div className="grid justify-center items-center mt-12">
      <button className="relative overflow-hidden bg-common text-white font-semibold px-11 py-5 rounded-xl group">
        {/* Center Fill Layer */}
        <span className="absolute inset-0 bg-primary scale-0 group-hover:scale-100 transition-transform duration-500 ease-in-out origin-center rounded-xl"></span>

        {/* Button Text */}
        <span className="relative z-10">Get a Quote</span>
      </button>
    </div>
  );
};

// SERVICES-BUTTON

export const servicesbutton = () => {
  return (
    <div className="grid justify-center items-center mt-12">
      <button className="relative overflow-hidden bg-common text-white font-semibold px-11 py-5 rounded-xl group">
        {/* Center Fill Layer */}
        <span className="absolute inset-0 bg-lightclr scale-0 group-hover:scale-100 transition-transform duration-500 ease-in-out origin-center rounded-xl"></span>

        {/* Button Text */}
        <span className="relative z-10">Get a Quote</span>
      </button>
    </div>
  );
};
