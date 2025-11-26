"use client";

import React from "react";

export function Gallery5() {
  return (
    <section id="relume" className="bg-[#FFCC33] px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl" style={{color: 'black'}}>
            Our Services
          </h2>
          <p className="md:text-md" style={{color: 'black'}}>
            Professional camera monitoring and security solutions
          </p>
        </div>
        <div className="grid grid-cols-2 items-start justify-center gap-6 md:gap-8 lg:grid-cols-3">
          <a href="#" className="h-80 overflow-hidden rounded-lg">
            <img
              src="/assets/images/gallery/services1.jpg"
              alt="Security monitoring service 1"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </a>
          <a href="#" className="h-96 overflow-hidden rounded-lg">
            <img
              src="/assets/images/gallery/services2.jpg"
              alt="Security monitoring service 2"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </a>
          <a href="#" className="h-72 overflow-hidden rounded-lg">
            <img
              src="/assets/images/gallery/services3.jpg"
              alt="Security monitoring service 3"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </a>
          <a href="#" className="h-88 overflow-hidden rounded-lg">
            <img
              src="/assets/images/gallery/services4.jpg"
              alt="Security monitoring service 4"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </a>
          <a href="#" className="h-64 overflow-hidden rounded-lg">
            <img
              src="/assets/images/gallery/services5.jpg"
              alt="Security monitoring service 5"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </a>
          <a href="#" className="h-80 overflow-hidden rounded-lg">
            <img
              src="/assets/images/gallery/services6.jpg"
              alt="Security monitoring service 6"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
