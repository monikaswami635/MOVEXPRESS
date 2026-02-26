import React from 'react';
import { blogsectioncards } from './common/Helper';
import { Link } from 'react-router-dom';

function Cards({ img, title, description, button, Icon }) {
  return (
    <>
      <Link to="/contact" onClick={() => setIsOpen(false)}>
        <div className="group">
          <article className="overflow-hidden rounded-2xl ">
            <img
              src={img}
              alt="blogimage1"
              className="h-58 sm:h-96 w-96 transition-transform duration-500 ease in out group-hover:scale-105 object-cover rounded-2xl"
            />
          </article>
          <article className="max-w-92.5 w-full mt-4">
            <small className="text-[#1E1E1E] text-2xl font-medium">
              {title}
            </small>
            <p className="text-lg font-medium mt-2 text-gray-700">
              {description}
            </p>
          </article>
          <button className="flex justify-center items-center text-xl primary font-semibold mt-2">
            {button}
            <Icon />
          </button>
        </div>
      </Link>
    </>
  );
}

function Blognewsection() {
  return (
    <section className="px-7 py-2">
      <div>
        <h1 className="text-center text-4xl sm:text-5xl font-medium mt-10 text-[#010528] font-sans">
          Read Our Blog and News
        </h1>
        <p className="text-center mx-auto text-xl text-[#3B3B3B] mt-8">
          Whether you're looking for practical advice on maintaining a Smooth
          Moving
        </p>
      </div>

      <div className="mb-8 ">
        <div className="px-18 py-12 gap-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
          {blogsectioncards.map((item) => (
            <Cards
              key={item.id}
              img={item.img}
              title={item.title}
              description={item.description}
              button={item.button}
              Icon={item.Icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blognewsection;
