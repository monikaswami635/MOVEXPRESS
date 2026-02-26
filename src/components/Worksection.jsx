import React from 'react';
import { worksectioncards } from './common/Helper';
/* Card Component */
function Card({ Icon, name, title, description }) {
  return (
    <>
      <div className="group flex flex-col text-center bg-[#F6F7F9] md:w-71.75 h-65.5 py-8 rounded-2xl w-full sm:max-w-72 max-w-96 hover:shadow-lg">
        <article className="flex justify-center mb-4 group-hover:translate-x-3 ease-in-out duration-500">
          <Icon className="w-12 h-12" />
        </article>
        {/* Step Name */}
        <small className="text-lg text-gray-500">{name}</small>

        {/* Title */}
        <h3 className="mt-2 text-xl font-semibold text-[#010528]">{title}</h3>

        {/* Description */}
        <p className="text-base mt-4 text-gray-500 max-w-60 mx-auto leading-relaxed">
          {description}
        </p>
      </div>
    </>
  );
}

/* Work Section */
function Worksection() {
  return (
    <section className="px-7 py-10 ">
      {/* Heading */}
      <div>
        <h1 className="text-center text-4xl sm:text-5xl font-normal mt-14 text-[#010528]">
          Our Work Process
        </h1>

        <p className="text-center max-w-4xl mx-auto text-lg sm:text-xl text-[#3B3B3B] mt-4">
          Count on us as your dependable partner for exceptional moving
          solutions that turn spaces into pristine havens. Our dedicated team
          offers a wide array of services tailored to your unique requirements.
        </p>
      </div>

      {/* Cards */}
      <div className="flex justify-center items-center gap-6 mt-16 flex-wrap pb-8">
        {worksectioncards.map((item) => (
          <Card
            key={item.id}
            Icon={item.Icon}
            name={item.name}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Worksection;
