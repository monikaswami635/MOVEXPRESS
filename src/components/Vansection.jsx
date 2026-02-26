import React from 'react';

function Vansection() {
  return (
    <>
      <section className="min-h-139">
        <div className="bg-primary h-145 grid justify-center items-center mx-auto px-7">
          <article>
            <h1 className="text-white text-5xl max-w-150 text-center leading-14">
              Ready to book your Man & Van Service ?
            </h1>
            <div className="grid justify-center items-center mt-12">
              <button className="relative overflow-hidden bg-common text-white font-semibold h-15.25 w-77.25 rounded-xl group">
                {/* Center Fill Layer */}
                <span className="absolute inset-0 bg-lightclr scale-0 group-hover:scale-100 transition-transform duration-500 ease-in-out origin-center rounded-xl"></span>

                {/* Button Text */}
                <span className="relative z-10">Get Instant Quote Now</span>
              </button>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

export default Vansection;
