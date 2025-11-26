"use client";

import React from "react";

export function Layout149() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28" style={{backgroundColor: 'black'}}>
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="mb-12 md:mb-18 lg:mb-20">
            <div className="mx-auto flex max-w-lg flex-col items-center text-center">
              <p className="mb-3 font-semibold md:mb-4" style={{color: '#facc31'}}>Our Foundation</p>
              <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl" style={{color: 'white'}}>
                Built on reliability and real human care
              </h2>
              <p className="mb-5 md:mb-6 md:text-md" style={{color: 'white'}}>
                We started 24/7 Secure Monitor because businesses deserved
                better than complicated, expensive surveillance systems that
                left them in the dark. Our team believed that affordable
                monitoring and genuine human attention could work together, and
                that belief hasn't changed.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 py-2">
                <div className="flex flex-col items-center">
                  <svg className="w-12 h-12 mb-2" fill="#facc31" viewBox="0 0 24 24">
                    <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.4 16,13V16C16,16.6 15.6,17 15,17H9C8.4,17 8,16.6 8,16V13C8,12.4 8.4,11.5 9,11.5V10C9,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.2,9.2 10.2,10V11.5H13.8V10C13.8,9.2 12.8,8.2 12,8.2Z"/>
                  </svg>
                  <span className="text-xs" style={{color: 'white'}}>Certified</span>
                </div>
                <div className="flex flex-col items-center">
                  <svg className="w-12 h-12 mb-2" fill="#facc31" viewBox="0 0 24 24">
                    <path d="M12,2A3,3 0 0,1 15,5V7H19A1,1 0 0,1 20,8V19A1,1 0 0,1 19,20H5A1,1 0 0,1 4,19V8A1,1 0 0,1 5,7H9V5A3,3 0 0,1 12,2M12,4A1,1 0 0,0 11,5V7H13V5A1,1 0 0,0 12,4M6,9V18H18V9H6M8,11H16V13H8V11M8,15H13V17H8V15Z"/>
                  </svg>
                  <span className="text-xs" style={{color: 'white'}}>24/7 Watch</span>
                </div>
                <div className="flex flex-col items-center">
                  <svg className="w-12 h-12 mb-2" fill="#facc31" viewBox="0 0 24 24">
                    <path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/>
                  </svg>
                  <span className="text-xs" style={{color: 'white'}}>AI Detection</span>
                </div>
                <div className="flex flex-col items-center">
                  <svg className="w-12 h-12 mb-2" fill="#facc31" viewBox="0 0 24 24">
                    <path d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M21,9V7L15,1H5C3.89,1 3,1.89 3,3V7H9V9H3V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V9M7,3H13V7H7V3Z"/>
                  </svg>
                  <span className="text-xs" style={{color: 'white'}}>Nationwide</span>
                </div>
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
          </div>
        </div>
        <div>
          <img
            src="/assets/images/gallery/aboutusimage.jpg"
            className="size-full object-cover rounded-lg"
            alt="About us image"
          />
        </div>
      </div>
    </section>
  );
}
