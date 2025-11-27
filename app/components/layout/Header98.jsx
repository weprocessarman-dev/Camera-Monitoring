"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header98() {
  return (
    <section id="relume" className="w-full" style={{height: '800px'}}>
      <div className="w-full h-full relative">
        <div className="relative z-10 flex h-full flex-col items-center justify-center p-8 text-center">
          <div className="w-full max-w-lg">
            <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
              Affordable 24/7 camera monitoring nationwide
            </h1>
            <p className="text-text-alternative md:text-md">
              Real-time surveillance with AI-powered threat detection and
              dedicated human monitoring agents. No long-term contracts, easy
              setup, and coverage across all USA states.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
            <a href="/contact-us" className="px-3 py-2.5 font-semibold transition-all duration-300 relative group" style={{color: 'white', textShadow: '0 0 10px rgba(255,255,255,0.8)'}}>
              <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#facc31] transition-all duration-500 group-hover:-top-1 group-hover:-left-1"></span>
              <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#facc31] transition-all duration-500 group-hover:-top-1 group-hover:-right-1"></span>
              <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#facc31] transition-all duration-500 group-hover:-bottom-1 group-hover:-left-1"></span>
              <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#facc31] transition-all duration-500 group-hover:-bottom-1 group-hover:-right-1"></span>
              Start Now
            </a>
          </div>
        </div>
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/hero/homebanner.jpeg"
            className="w-full h-full object-cover"
            alt="Camera monitoring home banner"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      </div>
    </section>
  );
}
