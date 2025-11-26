"use client";

import { Button, Input } from "@relume_io/relume-ui";
import React from "react";

export function Cta52() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28" style={{backgroundColor: 'black'}}>
      <div className="container">
        <div className="flex flex-col items-center border border-yellow-400 p-8 md:p-12 lg:p-16" style={{backgroundColor: '#1a1a1a'}}>
          <div className="max-w-lg text-center">
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl" style={{color: 'white'}}>
              Get your free demo today
            </h2>
            <p className="md:text-md" style={{color: 'white'}}>
              See how our monitoring works for your business
            </p>
          </div>
          <div className="mx-auto mt-6 max-w-sm md:mt-8">
            <form className="rb-4 mb-4 grid max-w-sm grid-cols-1 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-4">
              <input 
                id="email" 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-3 border border-yellow-400 bg-black text-white placeholder-gray-400 focus:outline-none focus:border-yellow-300"
              />
              <button className="px-3 py-2.5 font-semibold transition-all duration-300 relative group" style={{color: 'white', textShadow: '0 0 10px rgba(255,255,255,0.8)'}}>
                <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#facc31] transition-all duration-500 group-hover:-top-1 group-hover:-left-1"></span>
                <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#facc31] transition-all duration-500 group-hover:-top-1 group-hover:-right-1"></span>
                <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#facc31] transition-all duration-500 group-hover:-bottom-1 group-hover:-left-1"></span>
                <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#facc31] transition-all duration-500 group-hover:-bottom-1 group-hover:-right-1"></span>
                Sign up
              </button>
            </form>
            <p className="text-xs" style={{color: 'white'}}>
              By clicking Sign Up you're confirming that you agree with our
              Terms and Conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
