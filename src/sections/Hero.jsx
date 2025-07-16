import React from "react";

const Hero = () => {
  return (
    <section className="bg-white px-6 py-16 md:py-24 text-center">
      <h1 className="text-3xl md:text-5xl font-cursive text-gray-900 mb-12">
        We're Getting Married
      </h1>

      <div className="space-y-12 max-w-3xl mx-auto text-left">
        {/* Traditional Wedding */}
        <div className="border-l-4 border-maroon pl-6">
          <h2 className="text-xl font-bold text-maroon uppercase mb-1">
            Traditional
          </h2>
          <p className="tracking-widest text-sm text-black mb-4">MARRIAGE</p>

          <div className="mb-4">
            <p className="text-xs text-gray-500 font-medium uppercase">
              Date & Time
            </p>
            <p className="text-xl font-semibold text-maroon">
              Friday 25th July, 2025 | 1:00PM
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-500 font-medium uppercase">Venue</p>
            <p className="text-lg font-semibold text-maroon">
              Bloom Event Center, Kabayi, Mararaba
            </p>
          </div>
        </div>

        {/* White Wedding */}
        <div className="border-l-4 border-maroon pl-6">
          <h2 className="text-xl font-bold text-maroon uppercase mb-1">
            White
          </h2>
          <p className="tracking-widest text-sm text-black mb-4">WEDDING</p>

          <div className="mb-4">
            <p className="text-xs text-gray-500 font-medium uppercase">
              Date & Time
            </p>
            <p className="text-xl font-semibold text-maroon">
              Saturday 26th July, 2025 | 10:00AM
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-500 font-medium uppercase">Venue</p>
            <p className="text-lg font-semibold text-maroon">
              SS Peter & Paul Catholic Church, Nyanya, Abuja
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
