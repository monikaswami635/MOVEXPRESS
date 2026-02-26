import React from 'react';
import { customersectioncards } from './common/Helper';

function Card({ Icon, title, description }) {
  return (
    <>
      <div className="mt-12 flex justify-center items-center gap-6 flex-wrap">
        <article className="group flex flex-col justify-center text-center items-center gap-2 bg-white  w-95 h-60 sm:h-72 sm:w-72 rounded-2xl transition hover:duration-300 ease in out hover:scale-100 hover:shadow-lg">
          <span className="group-hover:scale-110 ease-in-out duration-500">
            <Icon />
          </span>
          <small className="text-3xl primary font-medium max-w-48">
            {title}
          </small>
          <small className="text-xl px-2 pt-3 text-gray-700">
            {description}
          </small>
        </article>
      </div>
    </>
  );
}
function Customersection() {
  return (
    <section className=" px-7 bg-[#F6F7F9] py-24 min-h-215.5">
      <div>
        <h1 className="text-center text-4xl sm:text-5xl font-normal mt-10 text-[#010528] font-sans">
          Why Customer Trust MoveXpress
        </h1>
        <p className="text-center max-w-3xl mx-auto text-lg text-[#3B3B3B] mt-4">
          Our customers trust MoveXpress because we treat every move like it’s
          our own. With a dedicated team, secure handling, and reliable service,
          we ensure your belongings are in safe hands from start to finish.
        </p>
      </div>

      <div className="mt-12 flex justify-center items-center gap-6 flex-wrap">
        {customersectioncards.map((item) => (
          <Card
            key={item.id}
            Icon={item.Icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <div className="grid justify-center items-center mt-12">
        <button className="relative overflow-hidden bg-common text-white font-semibold px-11 py-5 rounded-xl group">
          {/* Center Fill Layer */}
          <span className="absolute inset-0 bg-primary scale-0 group-hover:scale-100 transition-transform duration-500 ease-in-out origin-center rounded-xl"></span>

          {/* Button Text */}
          <span className="relative z-10">Get a Quote</span>
        </button>
      </div>
    </section>
  );
}

export default Customersection;
