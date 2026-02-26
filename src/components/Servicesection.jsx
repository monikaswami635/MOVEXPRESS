import React from 'react';
import { Arrowicon } from './common/Icon';
import { Link } from 'react-router-dom';
import { servicesectioncards } from './common/Helper';

function Card({ Icon, title, description, isSpecial }) {
  return (
    <>
      <Link to="/servicedetails" onClick={() => setIsOpen(false)}>
        <div className="group topservices-card">
          <article className="flex justify-between items-center">
            <span
              className={`transition-transform duration-500 ease-in-out group-hover:translate-x-6 ${
                isSpecial
                  ? 'group-hover:rotate-360'
                  : 'group-hover:translate-x-0'
              }`}>
              <Icon />
            </span>
            <span className="arrowicon-style">
              <Arrowicon />
            </span>
          </article>
          <article className="pt-5">
            <small className="text-2xl font-semibold">{title}</small>
            <p className="text-gray-500 text-[18px] pt-4">{description}</p>
          </article>
        </div>{' '}
      </Link>
    </>
  );
}

function Servicesection() {
  return (
    <section className="flex-wrap pt-14 px-7 py-6 sm:py-8 bg-[#F6F7F9] min-h-274.25">
      {/* 1st */}
      <div>
        <h1 className="text-center text-4xl sm:text-5xl font-normal sm:mt-10 text-[#010528] font-sans">
          Our Top Rated Services
        </h1>
        <p className="text-center max-w-250 mx-auto text-xl text-[#3B3B3B] mt-6">
          Count on us as your dependable partner for exceptional Moving
          solutions that turn spaces into pristine havens. Our dedicated team
          offers a wide array of services tailored to your unique requirements.
        </p>
      </div>

      <div className="flex flex-col mx-auto">
        <div className="flex justify-center items-center mt-20 gap-6 flex-wrap max-w-300 mx-auto">
          {servicesectioncards.map((item) => (
            <Card
              key={item.id}
              Icon={item.Icon}
              title={item.title}
              description={item.description}
              isSpecial={item.id === 2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Servicesection;
