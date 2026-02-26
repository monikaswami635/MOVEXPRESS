import React from 'react';
import { whychoosecards } from './common/Helper';

function Cards({ Icon, title, description }) {
  return (
    <>
      <article className="group flex flex-col text-center bg-[#F6F7F9] w-60 h-62.5 justify-center items-center px-7 rounded-2xl sm:max-w-72  hover:shadow-lg">
        <span className="grid justify-center group-hover:translate-x-3 ease-in-out duration-300">
          <Icon />
        </span>

        <small className="mt-4 text-xl font-medium">{title}</small>
        <p className="text-[17px] mt-3 text-gray-500 max-w-60 mx-auto">
          {description}
        </p>
      </article>
    </>
  );
}
function Whychoose() {
  return (
    <section className="px-7 py-4 min-h-152.5">
      <div>
        <h1 className="text-center text-4xl sm:text-5xl font-normal mt-14 text-[#010528] font-sans">
          Why Choose Our Man and Van Services?
        </h1>
        <p className="text-center max-w-235 mx-auto text-xl text-[#3B3B3B] mt-4">
          We offer a complete range of moving services designed to suit your
          needs
        </p>
      </div>

      <div className="flex justify-center items-center gap-5 mt-16 flex-wrap">
        {whychoosecards.map((item) => (
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

export default Whychoose;
