"use client";

import React, { useState, useEffect } from "react";

const SlidingCounter = ({ digits, suffix = "" }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center">
      {digits.split('').map((digit, index) => (
        <div key={index} className="relative overflow-hidden h-20 md:h-32 lg:h-40">
          <div className={`flex flex-col transition-transform duration-1000 ease-out ${animate ? '-translate-y-[90%]' : 'translate-y-0'}`}>
            {[0,1,2,3,4,5,6,7,8,9].map(num => (
              <span key={num} className="h-20 md:h-32 lg:h-40 flex items-center">
                {num}
              </span>
            ))}
          </div>
        </div>
      ))}
      <span>{suffix}</span>
    </div>
  );
};

export function Stats55() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28" style={{backgroundColor: 'black'}}>
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold" style={{color: 'white'}}>
            Our Impact in Numbers
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-[0.5fr_1fr] lg:items-center lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4" style={{color: '#FFCC33'}}>Numbers</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl" style={{color: 'white'}}>
              What we've built matters
            </h2>
            <p className="md:text-md" style={{color: 'white'}}>
              Real results from real work. These numbers tell the story of
              businesses protected and incidents prevented across the nation.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <button className="px-3 py-2.5 font-semibold transition-all duration-300 relative group" style={{color: 'white', textShadow: '0 0 10px rgba(255,255,255,0.8)'}}>
                <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#FFCC33] transition-all duration-500 group-hover:-top-1 group-hover:-left-1"></span>
                <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#FFCC33] transition-all duration-500 group-hover:-top-1 group-hover:-right-1"></span>
                <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#FFCC33] transition-all duration-500 group-hover:-bottom-1 group-hover:-left-1"></span>
                <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#FFCC33] transition-all duration-500 group-hover:-bottom-1 group-hover:-right-1"></span>
                Learn More
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 py-2 md:grid-cols-2">
            <div className="flex flex-col justify-center border-2 border-yellow-400 p-8 text-center bg-gray-900">
              <div className="mb-2 text-10xl font-bold leading-[1.3] md:text-[4rem] lg:text-[5rem]" style={{color: '#FFCC33'}}>
                <SlidingCounter digits="12" suffix="+" />
              </div>
              <h3 className="text-md font-bold leading-[1.4] md:text-xl" style={{color: 'white'}}>
                Years in business
              </h3>
            </div>
            <div className="flex flex-col justify-center border-2 border-yellow-400 p-8 text-center bg-gray-900">
              <div className="mb-2 text-10xl font-bold leading-[1.3] md:text-[4rem] lg:text-[5rem]" style={{color: '#FFCC33'}}>
                <SlidingCounter digits="50" suffix="K+" />
              </div>
              <h3 className="text-md font-bold leading-[1.4] md:text-xl" style={{color: 'white'}}>
                Cameras monitored daily
              </h3>
            </div>
            <div className="flex flex-col justify-center border-2 border-yellow-400 p-8 text-center bg-gray-900">
              <div className="mb-2 text-10xl font-bold leading-[1.3] md:text-[4rem] lg:text-[5rem]" style={{color: '#FFCC33'}}>
                <SlidingCounter digits="98" suffix="%" />
              </div>
              <h3 className="text-md font-bold leading-[1.4] md:text-xl" style={{color: 'white'}}>
                Customer satisfaction rate
              </h3>
            </div>
            <div className="flex flex-col justify-center border-2 border-yellow-400 p-8 text-center bg-gray-900">
              <div className="mb-2 text-10xl font-bold leading-[1.3] md:text-[4rem] lg:text-[5rem]" style={{color: '#FFCC33'}}>
                <SlidingCounter digits="2400" suffix="+" />
              </div>
              <h3 className="text-md font-bold leading-[1.4] md:text-xl" style={{color: 'white'}}>
                Incidents prevented yearly
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
