"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Cta53() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative">
        <div className="relative z-10 flex flex-col items-center p-8 md:p-12 lg:p-16">
          <div className="max-w-lg text-center">
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl" style={{color: 'white', textShadow: '0 0 10px rgba(255,255,255,0.8)'}}>
              Stop The Theft Today.
            </h2>
            <p className="md:text-md" style={{color: 'white', textShadow: '0 0 10px rgba(255,255,255,0.8)'}}>
              Pick a plan that fits your budget and get active protection tonight. No contacts to sign.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
            <a href="/contact-us" className="px-3 py-2.5 font-semibold transition-all duration-300 relative group flex items-center gap-2" style={{color: 'white', textShadow: '0 0 10px rgba(255,255,255,0.8)'}}>
              <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#facc31] transition-all duration-500 group-hover:-top-1 group-hover:-left-1"></span>
              <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#facc31] transition-all duration-500 group-hover:-top-1 group-hover:-right-1"></span>
              <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#facc31] transition-all duration-500 group-hover:-bottom-1 group-hover:-left-1"></span>
              <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#facc31] transition-all duration-500 group-hover:-bottom-1 group-hover:-right-1"></span>
              Get a Quote <RxChevronRight />
            </a>
          </div>
        </div>
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/hero/homebanner.jpeg"
            className="size-full object-cover"
            alt="Camera monitoring CTA background"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      </div>
    </section>
  );
}
