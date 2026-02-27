import React, { useState } from 'react';
import {
  BgGradient,
  Licensedinsured,
  Onestar,
  TrustedacrossLondon,
} from './common/Icon';
// import { HeroHeading } from './common/Heading';
import { Heroformicon } from './common/Icon';
import { Fullstar } from './common/Icon';
import { Halfstar } from './common/Icon';

function Hersection() {
  const [formData, setFormData] = useState({
    pickup: '',
    destination: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form Submitted:', formData);

    // Example: API call here
    // axios.post("/api/quote", formData)

    alert('Form submitted successfully!');
    if (!formData.pickup || !formData.destination) {
      alert('Please fill all fields');
      return;
    }
    alert('Form submitted successfully!');
  };
  return (
    <>
      <div className=" h-[0.3px]  bg-[#F0EAEA] "></div>
      <section className="flex flex-col lg:flex-row justify-between mx-auto lg:mx-0 lg:px-20 items-center bg-primary relative overflow-hidden  lg:gap-5  text-white">
        <BgGradient />

        {/* Left Content  */}
        <div className="sm:mt-10 mt-6 text-center lg:text-left">
          <span className="card-style">Move Smart.</span> <br />
          <span className="card-style">Move Easy.</span> <br />
          <span className="card-style">MoveXpress</span>
          <p className="text-lg sm:text-xl max-w-107.5 mt-6 mx-auto lg:mx-0">
            Book reliable, stress-free removals across London today.
          </p>
          <div className="w-full px-4 mt-10 block md:hidden">
            <div className="w-full max-w-162.5 mx-auto bg-white rounded-4xl p-6 relative z-10">
              {/* Header */}
              <article className="flex items-center justify-between">
                <span>
                  <h1 className="text-[#0C0E17] text-[28px] font-semibold">
                    Where to?
                  </h1>
                  <small className="text-[#0C0E17A3] text-[14px]">
                    Tell us your pickup and destination
                  </small>
                </span>

                <button className="px-4 h-9 bg-[#F6F6F6] text-textclr text-[12px] font-semibold rounded-2xl transition hover:scale-105">
                  1. General Info
                </button>
              </article>

              {/* Progress Bar */}
              <div className="h-2 bg-[#D5D5D5] mt-4 rounded-2xl">
                <div className="h-2 w-1/4 bg-primary rounded-2xl"></div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                {/* Pickup */}
                <div>
                  <label className="text-textclr text-[16px] font-bold">
                    Pickup Address
                  </label>

                  <div className="relative">
                    <input
                      type="text"
                      name="pickup"
                      value={formData.pickup}
                      onChange={handleChange}
                      placeholder="Enter Pickup Address"
                      className="w-full h-14 pl-14 pr-4 text-[15px] border-2 border-[#EEEFF3] rounded-xl text-[#8E91A0]  outline-none"
                    />
                    <Heroformicon />
                  </div>
                </div>
                {/* Address */}
                <div>
                  <label className="text-textclr text-[16px] font-bold">
                    Destination Address
                  </label>

                  <div className="relative ">
                    <input
                      type="text"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      placeholder="Enter Destination Address"
                      className="w-full h-14 pl-14 pr-4 text-[15px] border-2 border-[#EEEFF3] rounded-xl outline-none text-[#8E91A0]"
                    />
                    <Heroformicon />
                  </div>
                </div>
                {/* Map */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d55741.960181125185!2d75.7255896!3d29.1684289!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1771566303691!5m2!1sen!2sin"
                  className="w-full h-44 mt-6 object-cover rounded-xl"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                />

                {/* Distance Card */}
                <article className="flex justify-between items-center bg-[#24C68226] py-3 px-4 rounded-xl mt-4">
                  <span>
                    <h3 className="text-[#1BB172] text-[12px] font-semibold">
                      Distance
                    </h3>
                    <small className="text-[#1BB172] text-[12px]">
                      Between pickup and destination
                    </small>
                  </span>

                  <span className="text-[#1BB172] text-[14px] font-semibold">
                    1 mile
                  </span>
                </article>
                {/* Button */}
                <button
                  type="submit"
                  className="w-full h-14 text-[16px] font-semibold bg-common rounded-xl mt-4 ">
                  Show Quote
                </button>
              </form>
            </div>
          </div>
          {/* Icon Row  */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-5 items-center mt-10 mx-auto lg:mx-0">
            <article className="flex items-center gap-3">
              <span className="h-7 w-7">
                {/* Icon 1  */}
                <TrustedacrossLondon />
              </span>
              <span className="sm:text-lg font-semibold">
                Trusted across London
              </span>
            </article>

            <article className="flex items-center gap-3">
              <span className="h-7 w-7">
                {/* Icon 2 */}
                <Licensedinsured />
              </span>
              <span className=" sm:text-lg font-semibold">
                Licensed & Insured
              </span>
            </article>
          </div>
          {/* Hero Card  */}
          <div className="h-52 w-84 md:w-79.5 ml-6 bg-[#FA881E] -bottom-16 relative rounded-tl-lg rounded-tr-lg">
            <article className="flex flex-col items-center gap-2 py-5">
              <span className="flex justify-center items-center">
                <Onestar />
                <small className="text-[40px] font-semibold">Trustpilot</small>
              </span>

              {/* star-svgs */}
              <span className="flex justify-center items-center gap-1">
                <Fullstar />
                <Fullstar />
                <Fullstar />
                <Fullstar />
                <Halfstar />
              </span>
              <small className="text-[20px]">Rated 4.9/5.0</small>
            </article>
          </div>
        </div>

        {/* Right Image  */}
        <div className="w-full lg:w-1/2 px-4 lg:px-0 py-2">
          <div className="w-full max-w-xl lg:max-w-2xl mx-auto lg:mt-16 relative z-10 p-6 lg:p-8 bg-white rounded-3xl shadow-md hidden md:block">
            {/* Header */}
            <article className="flex items-center justify-between">
              <span>
                <h1 className="text-[#0C0E17] text-2xl lg:text-3xl font-semibold">
                  Where to?
                </h1>
                <small className="text-[#0C0E17A3] text-sm lg:text-base">
                  Tell us your pickup and destination
                </small>
              </span>

              <button className="px-4 py-2 bg-[#F6F6F6] text-textclr text-xs font-semibold rounded-xl transition hover:scale-105">
                1. General Info
              </button>
            </article>

            {/* Progress Bar */}
            <div className="h-2 bg-[#D5D5D5] mt-4 rounded-full">
              <div className="h-2 w-1/3 bg-primary rounded-full"></div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {/* Pickup */}
              <div>
                <label className="text-textclr text-base font-bold">
                  Pickup Address
                </label>

                <div className="relative mt-0.5">
                  <input
                    type="text"
                    name="pickup"
                    value={formData.pickup}
                    onChange={handleChange}
                    placeholder="Enter Pickup Address"
                    className="w-full border-2 border-[#EEEFF3] h-12 rounded-xl pl-16 pr-4 text-sm lg:text-base text-[#8E91A0]"
                  />

                  <span className="absolute left-3 top-6">
                    <Heroformicon />
                  </span>
                </div>
              </div>

              {/* Destination */}
              <div>
                <label className="text-textclr text-base font-bold">
                  Destination Address
                </label>

                <div className="relative mt-0.5">
                  <input
                    type="text"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    placeholder="Enter Pickup Address"
                    className="w-full border-2 border-[#EEEFF3] h-12 rounded-xl pl-16 pr-4 text-sm lg:text-base text-[#8E91A0]"
                  />

                  <span className="absolute left-3 top-6">
                    <Heroformicon />
                  </span>
                </div>
              </div>

              {/* Map */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d55741.960181125185!2d75.7255896!3d29.1684289!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1771566303691!5m2!1sen!2sin"
                className="w-full h-40 lg:h-48 object-cover rounded-xl"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              />

              {/* Distance Box */}
              <article className="flex justify-between items-center bg-[#24C68226] py-3 px-4 rounded-xl">
                <span>
                  <h3 className="text-[#1BB172] text-sm font-semibold">
                    Distance
                  </h3>
                  <small className="text-[#1BB172] text-xs">
                    Between pickup and destination
                  </small>
                </span>
                <small className="text-[#1BB172] text-sm">1 mile</small>
              </article>

              {/* Submit Button */}
              <button
                type="submit"
                className="relative overflow-hidden w-full h-15.25 text-base font-semibold rounded-xl bg-common text-white group">
                {/* Hover Background Layer */}
                <span className="absolute top-0 left-0 w-full h-full bg-primary translate-y-full transition-transform duration-700 ease-in-out group-hover:translate-y-0"></span>

                {/* Button Text */}
                <span className="relative z-10">Show Quote</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hersection;
