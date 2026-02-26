import React from 'react';

function About({ heading }) {
  return (
    <>
      <section>
        <div className="bg-primary h-99.5 flex flex-col justify-center items-center px-7">
          <h1 className="text-4xl md:text-7xl text-white text-center">
            {heading}
          </h1>
          <small className="text-lg text-white text-center mt-4">
            Your Trusted Partner for Stress-Free Moving
          </small>
        </div>
      </section>
    </>
  );
}

export default About;
