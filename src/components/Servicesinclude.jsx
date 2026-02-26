import React from 'react';
import { servicesincludecards } from './common/Helper';
function Cards({ Icon, title, description }) {
  return (
    <>
      <article className="group flex flex-col justify-center text-start gap-2 px-4 bg-white  w-95 h-72 sm:w-72 rounded-2xl hover:shadow-lg">
        <span className="group-hover:translate-x-4 ease-in-out duration-500">
          <Icon />
        </span>
        <small className="text-[20px] font-medium">{title}</small>
        <small className="text-[16px] pt-1 text-gray-700">{description}</small>
      </article>
    </>
  );
}
function Servicesinclude() {
  return (
    <section className="px-7 bg-[#F6F7F9] py-24 ">
      <div>
        <h1 className="text-center text-4xl sm:text-5xl font-normal text-[#010528] font-sans">
          Our Man and Van Services Include
        </h1>
        <p className="text-center max-w-3xl mx-auto text-lg text-[#3B3B3B] mt-4">
          Expert Moving Services Designed to Make Your Life Easier
        </p>
      </div>

      <div className="mt-14 flex justify-center items-center gap-6 flex-wrap">
        {servicesincludecards.map((item) => (
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

export default Servicesinclude;
