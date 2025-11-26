"use client";

import React from "react";

export function Contact26() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28" style={{backgroundColor: '#4c3c0d'}}>
      <div className="container">
        <div className="rb-12 mx-auto mb-12 flex max-w-lg flex-col justify-center text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4" style={{color: 'white'}}>Coverage</p>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl" style={{color: 'white'}}>
            Nationwide
          </h2>
          <p className="md:text-md" style={{color: 'white'}}>
            We monitor businesses across all fifty states
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 items-center gap-x-12 gap-y-12 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col items-center justify-start text-center">
            <div className="mb-6 md:mb-8 group" style={{width: '650px', height: '400px'}}>
              <img
                src="/assets/images/gallery/denveroffice.jpg"
                className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
                alt="Denver office"
              />
            </div>
            <h3 className="mb-3 text-2xl font-bold leading-[1.4] md:text-3xl lg:mb-4 lg:text-4xl" style={{color: 'white'}}>
              Denver
            </h3>
            <p className="text-center" style={{color: 'white'}}>
              1847 Blake Street, Denver CO 80202 USA
            </p>
            <div className="mt-5 md:mt-6">
              <button className="px-3 py-2.5 font-semibold transition-all duration-300 relative group" style={{color: 'black'}}>
                <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-black transition-all duration-500 group-hover:-top-1 group-hover:-left-1"></span>
                <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-black transition-all duration-500 group-hover:-top-1 group-hover:-right-1"></span>
                <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-black transition-all duration-500 group-hover:-bottom-1 group-hover:-left-1"></span>
                <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-black transition-all duration-500 group-hover:-bottom-1 group-hover:-right-1"></span>
                Get Directions →
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start text-center">
            <div className="mb-6 md:mb-8 group" style={{width: '650px', height: '400px'}}>
              <img
                src="/assets/images/gallery/miamioffice.jpg"
                className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
                alt="Miami office"
              />
            </div>
            <h3 className="mb-3 text-2xl font-bold leading-[1.4] md:text-3xl lg:mb-4 lg:text-4xl" style={{color: 'white'}}>
              Miami
            </h3>
            <p className="text-center" style={{color: 'white'}}>
              401 Biscayne Boulevard, Miami FL 33132 USA
            </p>
            <div className="mt-5 md:mt-6">
              <button className="px-3 py-2.5 font-semibold transition-all duration-300 relative group" style={{color: 'black'}}>
                <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-black transition-all duration-500 group-hover:-top-1 group-hover:-left-1"></span>
                <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-black transition-all duration-500 group-hover:-top-1 group-hover:-right-1"></span>
                <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-black transition-all duration-500 group-hover:-bottom-1 group-hover:-left-1"></span>
                <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-black transition-all duration-500 group-hover:-bottom-1 group-hover:-right-1"></span>
                Get Directions →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
