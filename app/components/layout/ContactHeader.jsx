"use client";

import React from "react";

export function ContactHeader() {
  return (
    <section className="w-full" style={{height: '800px'}}>
      <div className="w-full h-full relative">
        <div className="relative z-10 flex h-full flex-col items-center justify-center p-8 text-center">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4" style={{color: '#FFCC33'}}>Get In Touch</p>
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl" style={{color: 'white', textShadow: '0 0 10px rgba(255,255,255,0.8)'}}>
              Contact Us
            </h1>
            <p className="md:text-md" style={{color: 'white'}}>
              Ready to secure your business? Get in touch with our security experts for a free consultation.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
            <button className="px-3 py-2.5 font-semibold transition-all duration-300 relative group" style={{color: 'white', textShadow: '0 0 10px rgba(255,255,255,0.8)'}}>
              <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#FFCC33] transition-all duration-500 group-hover:-top-1 group-hover:-left-1"></span>
              <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#FFCC33] transition-all duration-500 group-hover:-top-1 group-hover:-right-1"></span>
              <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#FFCC33] transition-all duration-500 group-hover:-bottom-1 group-hover:-left-1"></span>
              <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#FFCC33] transition-all duration-500 group-hover:-bottom-1 group-hover:-right-1"></span>
              Get Quote
            </button>
          </div>
        </div>
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/gallery/contactusbanner.jpg"
            className="w-full h-full object-cover object-center"
            alt="Contact banner"
            style={{minWidth: '100%', minHeight: '100%'}}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      </div>
    </section>
  );
}