import React from 'react';
import { servicedesignedcards } from './common/Helper';

function Cards({ Icon, title, description }) {
  return (
    <>
      <article className="group flex flex-col justify-center items-center text-center bg-[#F6F7F9] h-58.5 md:w-71.75 rounded-2xl w-full sm:max-w-72 max-w-96 hover:shadow-lg">
        <span className="grid justify-center group-hover:translate-x-3 ease-in-out duration-500">
          <Icon />
        </span>
        <small className="mt-3 text-xl font-medium">{title}</small>
        <p className="text-lg mt-3 text-gray-500 max-w-60 mx-auto">
          {description}
        </p>
      </article>
    </>
  );
}

function Servicedesigned() {
  return (
    <section className="pb-14 px-7">
      <div>
        <h1 className="text-center text-4xl sm:text-5xl font-semibold mt-14 text-[#010528] font-sans">
          What We Do Best
        </h1>
        <p className="text-center max-w-235 mx-auto text-xl text-[#3B3B3B] mt-4">
          We offer a complete range of moving services designed to suit your
          needs
        </p>
      </div>

      <div className="flex justify-center items-center gap-5 mt-16 flex-wrap">
        {servicedesignedcards.map((item) => (
          <Cards
            key={item.id}
            Icon={item.Icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Servicedesigned;
