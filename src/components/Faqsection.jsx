import React, { useState } from 'react';
import { faqData } from './common/Helper';

function Faqsection() {
  const [activeId, setActiveId] = useState(null);

  const toggle = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="bg-[#F6F7F9] py-28 px-7">
      <div>
        <h1 className="text-center text-4xl sm:text-5xl font-medium text-[#010528]">
          Frequently Asked Questions
        </h1>

        <p className="text-center max-w-4xl mx-auto text-xl text-[#3B3B3B] mt-8">
          If you are booking a man and van in London with a pickup or dropoff
          location within the congestion charge zone, an additional £15.00 will
          be added to your quotes.
        </p>
      </div>

      <div className="flex flex-col justify-center items-center mt-12">
        {faqData.map((item) => (
          <div
            key={item.id}
            className="mt-3 px-4   sm:px-10 py-4 rounded-2xl mx-auto w-87.5 sm:w-162.5 border border-[#0000001F] transition-all duration-500 cursor-pointer hover:bg-white">
            {/* Header */}
            <div
              onClick={() => toggle(item.id)}
              className="flex justify-between items-center">
              <strong className="font-semibold text-xl md:text-2xl">
                {item.question}
              </strong>

              <button
                className={`text-4xl transition-transform duration-500 ${
                  activeId === item.id ? 'rotate-0' : 'rotate-0'
                }`}>
                {activeId === item.id ? '+' : '-'}
              </button>
            </div>
            {/* Content */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                activeId === item.id
                  ? 'max-h-40 opacity-100 mt-3'
                  : 'max-h-0 opacity-0'
              }`}>
              <p className="text-[16px] text-[#3D3F40]">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Faqsection;
