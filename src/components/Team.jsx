import React from 'react';
import { teamsectioncards } from './common/Helper';

function Cards({ Icon, title, description }) {
  return (
    <>
      <article className="group flex flex-col text-center  px-5 py-7 rounded-2xl w-full sm:max-w-72 max-w-96 hover:shadow-lg">
        <span className="grid justify-center group-hover:translate-x-4 ease-in-out duration-500">
          <Icon />
        </span>
        <small className="mt-4 text-xl font-medium">{title}</small>
        <p className="text-[16px] mt-4 text-gray-500 max-w-60 mx-auto">
          {description}
        </p>
      </article>
    </>
  );
}

function Team() {
  return (
    <section className=" mt-7 md:mt-10 px-7">
      <div className="flex justify-center flex-wrap items-center gap-5  py-14">
        {teamsectioncards.map((item) => (
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
export default Team;
