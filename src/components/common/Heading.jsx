import React from 'react';

export const HeroHeading = ({ content, className }) => {
  return (
    <h1
      className={`text-[35px] sm:text-[58px] md:text-7xl font-bold leading-tight sm:mt-12 ${className}`}>
      {content}
    </h1>
  );
};
