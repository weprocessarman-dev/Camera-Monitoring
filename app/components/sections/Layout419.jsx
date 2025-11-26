"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout419() {
  return (
    <section id="relume" className="pt-24 md:pt-0">
      <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-y-0">
        <div>
          <div className="md:sticky md:top-0 md:gap-y-0">
            <div className="flex flex-col items-end md:h-screen md:justify-center">
              <div className="mx-[5%] max-w-md md:ml-[5vw] md:mr-12 lg:mr-20">
                <p className="mb-3 font-semibold md:mb-4" style={{color: '#FFCC33'}}>24/7 Monitoring</p>
                <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl" style={{color: 'white'}}>
                  Advanced security solutions for your peace of mind
                </h2>
                <p className="md:text-md" style={{color: 'white'}}>
                  Professional monitoring services with AI-powered threat detection, instant alerts, and dedicated security agents ensuring your property is protected around the clock.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <button className="px-3 py-2.5 font-semibold transition-all duration-300 relative group" style={{color: 'white', textShadow: '0 0 10px rgba(255,255,255,0.8)'}}>
                    <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#FFCC33] transition-all duration-500 group-hover:-top-1 group-hover:-left-1"></span>
                    <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#FFCC33] transition-all duration-500 group-hover:-top-1 group-hover:-right-1"></span>
                    <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#FFCC33] transition-all duration-500 group-hover:-bottom-1 group-hover:-left-1"></span>
                    <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#FFCC33] transition-all duration-500 group-hover:-bottom-1 group-hover:-right-1"></span>
                    Get Quote
                  </button>
                  <button className="px-3 py-2.5 font-semibold transition-all duration-300 relative group flex items-center gap-2" style={{color: 'white', textShadow: '0 0 10px rgba(255,255,255,0.8)'}}>
                    <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#FFCC33] transition-all duration-500 group-hover:-top-1 group-hover:-left-1"></span>
                    <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#FFCC33] transition-all duration-500 group-hover:-top-1 group-hover:-right-1"></span>
                    <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#FFCC33] transition-all duration-500 group-hover:-bottom-1 group-hover:-left-1"></span>
                    <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#FFCC33] transition-all duration-500 group-hover:-bottom-1 group-hover:-right-1"></span>
                    Learn More <RxChevronRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="sticky top-0 flex h-screen flex-col justify-center border-t border-t-border-primary px-[5%] py-10 md:px-10" style={{backgroundColor: 'black'}}>
            <div className="w-full">
              <div className="mb-6 md:mb-8 h-96 md:h-[500px]">
                <img
                  src="/assets/images/gallery/cctv1.jpg"
                  alt="Real-time monitoring system"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="mb-3 text-md font-bold md:mb-4 md:text-2xl" style={{color: '#FFCC33'}}>
                Real-time Monitoring
              </h3>
              <p style={{color: 'white'}}>
                Advanced AI algorithms continuously monitor your property, detecting unusual activities and potential threats in real-time with 99.9% accuracy.
              </p>
            </div>
          </div>
          <div className="sticky top-0 flex h-screen flex-col justify-center border-t border-t-border-primary px-[5%] py-10 md:px-10" style={{backgroundColor: 'black'}}>
            <div className="w-full">
              <div className="mb-6 md:mb-8 h-96 md:h-[500px]">
                <img
                  src="/assets/images/gallery/cctv2.jpg"
                  alt="Instant alert system"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="mb-3 text-md font-bold md:mb-4 md:text-2xl" style={{color: '#FFCC33'}}>
                Instant Alerts
              </h3>
              <p style={{color: 'white'}}>
                Receive immediate notifications via SMS, email, or mobile app when suspicious activity is detected, ensuring you're always informed.
              </p>
            </div>
          </div>
          <div className="sticky top-0 flex h-screen flex-col justify-center border-t border-t-border-primary px-[5%] py-10 md:px-10" style={{backgroundColor: 'black'}}>
            <div className="w-full">
              <div className="mb-6 md:mb-8 h-96 md:h-[500px]">
                <img
                  src="/assets/images/gallery/cctv3.jpg"
                  alt="Professional verification"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="mb-3 text-md font-bold md:mb-4 md:text-2xl" style={{color: '#FFCC33'}}>
                Expert Verification
              </h3>
              <p style={{color: 'white'}}>
                Trained security professionals verify every alert before contacting you, reducing false alarms and ensuring genuine threats are prioritized.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
