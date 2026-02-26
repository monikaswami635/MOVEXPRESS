import React from 'react';
import { Calendersvg, Timesvg } from './common/Icon';

function Contactherosection({ heading }) {
  return (
    <>
      <section class="bg-primary h-99.5 flex flex-col justify-center items-center">
        <div class="flex justify-center items-center gap-15">
          <article class="flex justify-center items-center gap-3">
            <span>
              <Calendersvg />
            </span>
            <span>
              <p class="text-[16px] text-white">05 May, 2023</p>
            </span>
          </article>

          <article class="flex items-center justify-center gap-3">
            <span>
              <Timesvg />
            </span>
            <span>
              <p class="text-white text-[16px]">Read 10 Min</p>
            </span>
          </article>
        </div>
        <div>
          <h1 class="text-[50px] md:text-7xl font-normal text-white text-center md:w-207.5 md:leading-20 px-4 mt-4">
            {heading}
          </h1>
        </div>
      </section>
    </>
  );
}

export default Contactherosection;
