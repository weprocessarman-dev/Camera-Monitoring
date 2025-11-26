"use client";

import React from "react";

export function Cta54() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28" style={{backgroundColor: 'black'}}>
      <div className="container relative">
        <div className="relative z-10 flex flex-col items-center p-8 md:p-12 lg:p-16">
          <div className="max-w-lg text-center">
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl" style={{color: 'white'}}>
              Get your free demo today
            </h2>
            <p className="md:text-md" style={{color: 'white'}}>
              See how 24/7 Secure Monitor protects your business with live
              monitoring and AI detection.
            </p>
          </div>
          <div className="mx-auto mt-6 max-w-sm md:mt-8">
            <form className="rb-4 mb-4 grid max-w-sm grid-cols-1 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 bg-transparent border-2 border-yellow-400 rounded-lg focus:outline-none focus:border-yellow-300 transition-colors"
                style={{color: 'white'}}
              />
              <button className="px-3 py-2.5 font-semibold transition-all duration-300 relative group" style={{color: 'white', textShadow: '0 0 10px rgba(255,255,255,0.8)'}}>
                <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#facc31] transition-all duration-500 group-hover:-top-1 group-hover:-left-1"></span>
                <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#facc31] transition-all duration-500 group-hover:-top-1 group-hover:-right-1"></span>
                <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#facc31] transition-all duration-500 group-hover:-bottom-1 group-hover:-left-1"></span>
                <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#facc31] transition-all duration-500 group-hover:-bottom-1 group-hover:-right-1"></span>
                Request Demo
              </button>
            </form>
            <p className="text-xs" style={{color: 'white'}}>
              By clicking Request Demo you're confirming that you agree with our
              Terms and Conditions.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/gallery/ctaimage.jpg"
            className="size-full object-cover"
            alt="CTA background"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
      </div>
    </section>
  );
}
