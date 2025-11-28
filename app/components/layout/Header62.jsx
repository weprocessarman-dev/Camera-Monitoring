"use client";

import React from "react";

export function Header62() {
  return (
    <section id="relume" className="w-full" style={{height: '800px'}}>
      <div className="w-full h-full relative">
        <div className="relative z-10 flex h-full flex-col items-center justify-center p-8 text-center">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4" style={{color: '#facc31'}}>ABOUT US</p>
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl" style={{color: 'white', textShadow: '0 0 10px rgba(255,255,255,0.8)'}}>
              We Built This For Businesses Like Yours.
            </h1>
            <p className="md:text-md" style={{color: 'white'}}>
              We started 24/7 Secure Monitor for one reason: real security was too expensive. We watched small businesses get priced out of the protection they deserved, and we decided to fix it.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
            <button className="px-3 py-2.5 font-semibold transition-all duration-300 relative group" style={{color: 'white', textShadow: '0 0 10px rgba(255,255,255,0.8)'}}>
              <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#facc31] transition-all duration-500 group-hover:-top-1 group-hover:-left-1"></span>
              <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#facc31] transition-all duration-500 group-hover:-top-1 group-hover:-right-1"></span>
              <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#facc31] transition-all duration-500 group-hover:-bottom-1 group-hover:-left-1"></span>
              <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#facc31] transition-all duration-500 group-hover:-bottom-1 group-hover:-right-1"></span>
              Learn More
            </button>
          </div>
        </div>
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/gallery/aboutbanner.jpg"
            className="w-full h-full object-cover"
            alt="About banner"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      </div>
    </section>
  );
}
