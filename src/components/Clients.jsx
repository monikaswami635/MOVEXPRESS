import React from 'react';
import { clientscards } from './common/Helper';

function Cards({ img, name, title, Icon, description }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center max-w-96 sm:h-96  w-96 gap-1 bg-[#4B014B0A] px-6 py-5 sm:py-3 rounded-xl">
        <article className="flex justify-center gap-6 items-center sm:flex-col">
          <span>
            {' '}
            <img
              src={img}
              alt="person1"
              className="h-22 w-22 sm:h-28 sm:w-28"
            />
          </span>
          <span>
            <small className="text-xl mt-4 font-medium">{name}</small> <br />
            <small className="text-sm">{title}</small>
            <Icon />
          </span>
        </article>
        <p className="text-center max-w-96 mt-4">
          <i className="text-xl font-normal">{description}</i>
        </p>
      </div>
    </>
  );
}
function Clients() {
  return (
    <section className="px-7 min-h-207.5">
      <div className="pt-14">
        <h1 className="text-center text-4xl sm:text-5xl font-normal mt-10 text-[#010528] font-sans">
          Trusted by 12,000+ Happy Customers
        </h1>
        <p className="text-center max-w-2xl mx-auto text-xl text-[#3B3B3B] mt-4">
          Our Recent Projects section showcases some of the exceptional work
          we've done for our clients. From residential homes to commercial
          spaces.
        </p>
      </div>

      <div className="flex justify-center items-center gap-7 mt-14 flex-wrap">
        {clientscards.map((item) => (
          <Cards
            key={item.id}
            img={item.img}
            name={item.name}
            title={item.title}
            Icon={item.Icon}
            description={item.description}
          />
        ))}
      </div>

      <div className="mt-9 mb-9">
        <article className="flex justify-center items-center gap-4 flex-wrap">
          <p className="text-[#3B3B3B] font-semibold text-xl">
            Have you moved with us?
          </p>
          <button className="relative overflow-hidden bg-common text-white font-semibold px-11 py-5 rounded-xl group">
            <span className="absolute inset-0 bg-primary scale-0 group-hover:scale-100 transition-transform duration-500 ease-in-out origin-center rounded-xl"></span>
            <span className="relative z-10">Leave a Review</span>
          </button>
        </article>
      </div>
    </section>
  );
}

export default Clients;
