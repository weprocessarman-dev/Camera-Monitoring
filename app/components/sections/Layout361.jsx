"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout361() {
  return (
    <section id="relume" className="style= {{bg-black}} px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4" style={{color: '#facc31'}}>Advantages</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl" style={{color: 'white'}}>
              Why businesses choose us
            </h2>
            <p className="md:text-md" style={{color: 'white'}}>
              Protection that works without getting in your way
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-8">
          <div className="border border-border-primary">
            <div className="flex items-center justify-center">
              <img
                src="/assets/images/gallery/whychoose1.jpg"
                className="size-full object-cover"
                alt="Why choose us - Safety"
              />
            </div>
            <div className="p-6 md:p-8 lg:p-12">
              <p className="mb-2 text-sm font-semibold" style={{color: '#facc31'}}>Safety</p>
              <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl" style={{color: 'white'}}>
                Your location stays protected every single day
              </h3>
              <p style={{color: 'white'}}>
                Cameras watch while your team focuses on running the business.
                Incidents get caught and handled before they escalate into real
                problems.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <button className="px-3 py-2.5 font-semibold transition-all duration-300 relative group flex items-center gap-2" style={{color: 'white', textShadow: '0 0 10px rgba(255,255,255,0.8)'}}>
                  <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#facc31] transition-all duration-500 group-hover:-top-1 group-hover:-left-1"></span>
                  <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#facc31] transition-all duration-500 group-hover:-top-1 group-hover:-right-1"></span>
                  <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#facc31] transition-all duration-500 group-hover:-bottom-1 group-hover:-left-1"></span>
                  <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#facc31] transition-all duration-500 group-hover:-bottom-1 group-hover:-right-1"></span>
                  Get Quote <RxChevronRight />
                </button>
              </div>
            </div>
          </div>
          <div className="border border-border-primary">
            <div className="flex items-center justify-center">
              <img
                src="/assets/images/gallery/whychoose2.jpg"
                className="size-full object-cover"
                alt="Why choose us - Simplicity"
              />
            </div>
            <div className="p-6 md:p-8 lg:p-12">
              <p className="mb-2 text-sm font-semibold" style={{color: '#facc31'}}>Simplicity</p>
              <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl" style={{color: 'white'}}>
                Setup takes hours and works immediately after
              </h3>
              <p style={{color: 'white'}}>
                Our technicians handle everything from installation to testing.
                You get a working system without weeks of waiting or complicated
                training sessions.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <button className="px-3 py-2.5 font-semibold transition-all duration-300 relative group flex items-center gap-2" style={{color: 'white', textShadow: '0 0 10px rgba(255,255,255,0.8)'}}>
                  <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#facc31] transition-all duration-500 group-hover:-top-1 group-hover:-left-1"></span>
                  <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#facc31] transition-all duration-500 group-hover:-top-1 group-hover:-right-1"></span>
                  <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#facc31] transition-all duration-500 group-hover:-bottom-1 group-hover:-left-1"></span>
                  <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#facc31] transition-all duration-500 group-hover:-bottom-1 group-hover:-right-1"></span>
                  Contact Us <RxChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
