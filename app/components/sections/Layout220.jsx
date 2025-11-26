"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout220() {
  return (
    <section id="relume" className="bg-[black] px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src="/assets/images/hero/Cctvcamera.jpeg"
              className="w-full h-[500px] object-cover rounded-lg"
              alt="CCTV camera monitoring system"
            />
          </div>
          <div className="order-1 md:order-2">
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2 sm:grid-cols-2">
              <div>
                <div className="mb-3 md:mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#facc31] to-[#FFD700] rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6" fill="black" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl" style={{color: '#facc31'}}>
                  Smart threat detection
                </h3>
                <p style={{color: 'white'}}>AI learns your location and catches what matters most</p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#facc31] to-[#FFD700] rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6" fill="black" viewBox="0 0 24 24">
                      <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl" style={{color: '#facc31'}}>
                  Instant notifications
                </h3>
                <p style={{color: 'white'}}>Alerts reach you the moment something happens</p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#facc31] to-[#FFD700] rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6" fill="black" viewBox="0 0 24 24">
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl" style={{color: '#facc31'}}>
                  Professional verification
                </h3>
                <p style={{color: 'white'}}>Trained agents confirm every alert before you respond</p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#facc31] to-[#FFD700] rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6" fill="black" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V16h-2.67v2.09c-2.84-.48-5.09-2.8-5.48-5.66h2.1v-2.86H5.26c.4-2.85 2.64-5.18 5.48-5.66V6h2.67v1.91c2.84.48 5.08 2.81 5.48 5.66h-2.1v2.86h2.1c-.4 2.86-2.64 5.18-5.48 5.66z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl" style={{color: '#facc31'}}>
                  Affordable protection
                </h3>
                <p style={{color: 'white'}}>Real security that fits any business budget</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8 justify-end"> 
              <button className="px-3 py-2.5 font-semibold transition-all duration-300 relative group flex items-center gap-2" style={{color: 'white', textShadow: '0 0 10px rgba(255,255,255,0.8)'}}>
                <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#facc31] transition-all duration-500 group-hover:-top-1 group-hover:-left-1"></span>
                <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#facc31] transition-all duration-500 group-hover:-top-1 group-hover:-right-1"></span>
                <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#facc31] transition-all duration-500 group-hover:-bottom-1 group-hover:-left-1"></span>
                <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#facc31] transition-all duration-500 group-hover:-bottom-1 group-hover:-right-1"></span>
                Learn More <RxChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
