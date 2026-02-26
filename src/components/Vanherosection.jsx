import React from 'react';

function Vanservicesnav({ heading }) {
  return (
    <>
      <section>
        <div className="bg-primary h-99.5 flex flex-col justify-center items-center">
          <h1 className="text-4xl md:text-7xl text-white text-center">
            {heading}
          </h1>
          <small className="text-lg text-white text-center mt-4">
            Fast, Reliable & Affordable Moving Solutions
          </small>

          <div className="grid justify-center items-center mt-12">
            <button className="relative overflow-hidden bg-common text-white font-semibold px-11 py-5 rounded-xl group">
              {/* Center Fill Layer */}
              <span className="absolute inset-0 bg-lightclr scale-0 group-hover:scale-100 transition-transform duration-500 ease-in-out origin-center rounded-xl"></span>

              {/* Button Text */}
              <span className="relative z-10">Get a Quote</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Vanservicesnav;
