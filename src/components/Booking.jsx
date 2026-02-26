import React from 'react';
import { Facebookicon, Learnmoreicon } from './common/Icon';
import { Instaicon } from './common/Icon';
import { Socialicon } from './common/Icon';

const cardStyle = 'w-full bg-whiteclr rounded-xl px-6 py-7';
const smallCardStyle = 'w-full bg-whiteclr rounded-2xl px-6 py-5';

const Booking = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-12 px-7 sm:px-8 lg:px-20 py-16  ">
      {/* LEFT SECTION */}
      <div className="w-full lg:w-2/3 overflow-y-auto hide-scrollbar h-auto xl:h-screen">
        <p className="text-base text-lightgray">
          With MovExpress, booking a Man and van service is simple, quick, and
          efficient. Follow the few steps below to book your van and hit the
          road quickly.
        </p>

        {/* SECTION 1 */}
        <h1 className="text-2xl font-semibold mt-4">
          Enter Your Pickup and Drop-off Location
        </h1>

        <p className="text-base text-lightgray mt-2">
          Start by providing the details of your move:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          <article className={cardStyle}>
            <small className="text-xl font-semibold">Pickup Postcode</small>
            <p className="text-base mt-2">
              This is the postcode of the place where you want the van picked
              up.
            </p>
          </article>

          <article className={cardStyle}>
            <small className="text-xl font-semibold">Drop-off Postcode</small>
            <p className="text-base mt-2">
              Enter the postcode of the drop-off location.
            </p>
          </article>
        </div>

        <p className="text-base text-lightgray mt-6">
          Our system will give the estimated travel duration and quote the fare
          immediately.
        </p>

        {/* SECTION 2 */}
        <h1 className="text-2xl font-semibold mt-6 text-grayclr">
          Choose the Right Van Size
        </h1>

        <p className="text-base text-lightgray mt-2">
          Choose the van size most appropriate for your move:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          <article className={cardStyle}>
            <small className="text-xl font-semibold">Small Van</small>
            <p className="text-base mt-2">
              Ideal for small moves or a few boxes (from £60).
            </p>
          </article>

          <article className={cardStyle}>
            <small className="text-xl font-semibold">Medium Van</small>
            <p className="text-base mt-2">
              Suitable for small furniture and several boxes (from £70).
            </p>
          </article>

          <article className={cardStyle}>
            <small className="text-xl font-semibold">Large Van</small>
            <p className="text-base mt-2">
              Ideal for transporting large furniture (from £80).
            </p>
          </article>

          <article className={cardStyle}>
            <small className="text-xl font-semibold">Luton Van</small>
            <p className="text-base mt-2">
              Best for house moves or office relocations (from £90).
            </p>
          </article>
        </div>

        {/* SECTION 3 */}
        <h1 className="text-2xl font-semibold mt-8 text-grayclr">
          Select Your Help Option
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          <article className={cardStyle}>
            <small className="text-xl font-semibold">No Help Needed</small>
            <p className="text-base mt-2">
              You load and unload the van yourself.
            </p>
          </article>

          <article className={cardStyle}>
            <small className="text-xl font-semibold">Driver + 1 Helper</small>
            <p className="text-base mt-2">
              The driver comes with one assistant.
            </p>
          </article>

          <article className={cardStyle}>
            <small className="text-xl font-semibold">
              Driver + 2 Assistants
            </small>
            <p className="text-base mt-2">
              Two assistants help transport items quickly.
            </p>
          </article>
        </div>

        {/* SECTION 4 */}
        <h1 className="text-2xl font-semibold mt-8 text-grayclr">
          Choose Your Moving Date and Time
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          <article className={cardStyle}>
            <small className="text-xl font-semibold">Today's Price</small>
            <p className="text-base mt-2">
              Book for today at the displayed rate.
            </p>
          </article>

          <article className={cardStyle}>
            <small className="text-xl font-semibold">Next Day</small>
            <p className="text-base mt-2">
              Move tomorrow at a slightly reduced price.
            </p>
          </article>

          <article className={cardStyle}>
            <small className="text-xl font-semibold">Custom Date & Time</small>
            <p className="text-base mt-2">
              Choose any convenient date and time.
            </p>
          </article>
        </div>

        {/* SECTION 5 */}
        <h1 className="text-2xl font-semibold mt-8 text-grayclr">
          Enter Your Contact Details
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          <input
            type="text"
            placeholder="First name & surname"
            className="w-full h-16 bg-whiteclr
             px-6 rounded-2xl text-lg font-semibold"
          />
          <input
            type="email"
            placeholder="Email address"
            className="w-full h-16 bg-whiteclr
             px-6 rounded-2xl text-lg font-semibold"
          />
          <input
            type="tel"
            placeholder="Phone number"
            className="w-full h-16 bg-whiteclr
             px-6 rounded-2xl text-lg font-semibold"
          />
        </div>
        <h1 className="text-grayclr text-[24px] font-semibold mt-4">
          You can choose to
        </h1>
        <h3 className="text-grayclr text-[18px] mt-4 font-semibold  ">
          Registration
        </h3>
        <p className="text-grayclr text-[16px] mt-2">
          Enter your data and plan your next trip; use the application to track{' '}
          <br /> your driver.
        </p>
        <h3 className="text-grayclr text-[18px] font-semibold mt-4">
          Become a guest
        </h3>
        <p className="text-grayclr text-[16px] mt-2">
          Make a reservation without creating a new account.
        </p>
      </div>

      {/* RIGHT SECTION */}
      <div className=" lg:w-1/3  flex-col gap-6 w-full sticky top-0 h-auto  xl:h-screen flex ">
        <article className="border-2 border-lightclr rounded-xl px-12 py-7 group hover:bg-gray-50 w-full">
          <small className="text-2xl font-semibold text-[#1E1E1E]">
            How to Make a Booking with Us?
          </small>
          <p className="text-lg mt-3 text-[#3D3F40]">
            With MovExpress, booking a Man and van service is simple, quick, and
            efficient. Follow the few steps below to book your van and hit the
            road quickly...
          </p>

          <button className="mt-4 font-semibold primary-color flex items-center ">
            Learn More
            <Learnmoreicon />
          </button>
        </article>

        <article className="border-2 border-lightclr rounded-xl px-12 py-7 group hover:bg-gray-50">
          <small className="text-2xl font-semibold text-[#1E1E1E]">
            {' '}
            How to Make a Booking with Us?
          </small>
          <p className="text-lg mt-3 text-[#3D3F40]">
            With MovExpress, booking a Man and van service is simple, quick, and
            efficient. Follow the few steps below to book your van and hit the
            road quickly...
          </p>

          <button className="mt-4 font-semibold primary-color flex items-center ">
            Learn More
            <Learnmoreicon />
          </button>
        </article>
        <article>
          <h4 className="text-center md:text-start text-grayclr text-[24px] font-semibold mt-5">
            Share this post
          </h4>
          <span className="flex justify-center md:justify-start gap-5 mt-4">
            {/* facebook-svg */}
            <Facebookicon />
            {/* instagram-svg */}
            <Instaicon />
            {/* svg */}
            <Socialicon />
          </span>
        </article>
      </div>
    </section>
  );
};

export default Booking;
