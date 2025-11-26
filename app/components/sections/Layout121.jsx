"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const AnimationSection = () => {
  const scrollSection = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollSection,
    offset: ["start 55%", "start start"],
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return React.createElement(
    "div",
    {
      className:
        "absolute left-8 right-auto top-[10%] h-3/4 w-0.5 bg-[#FFCC33]/15 md:left-8",
    },
    React.createElement(motion.div, {
      ref: scrollSection,
      className: "bg-[#FFCC33]",
      style: { height },
    }),
  );
};

export function Layout121() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-y-8 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div className="flex flex-col justify-center h-full">
            <p className="mb-3 font-semibold text-[#FFCC33] md:mb-4">Installation</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl" style={{color: 'white'}}>
              We handle setup from start to finish
            </h2>
            <p className="text-lg mb-8" style={{color: 'white'}}>
              Our certified technicians ensure seamless installation with zero downtime. From site assessment to final testing, we've got you covered.
            </p>
            <ul className="flex flex-col space-y-4">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#FFCC33] rounded-full"></div>
                <span style={{color: 'white'}}>Professional site evaluation</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#FFCC33] rounded-full"></div>
                <span style={{color: 'white'}}>Expert equipment installation</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#FFCC33] rounded-full"></div>
                <span style={{color: 'white'}}>Secure network configuration</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#FFCC33] rounded-full"></div>
                <span style={{color: 'white'}}>Complete system testing</span>
              </li>
            </ul>
          </div>
          <div className="relative">
            <AnimationSection />
            <div className="grid grid-cols-[max-content_1fr] gap-x-6 lg:gap-x-10">
              <div className="relative flex flex-col items-center justify-center py-10 w-16">
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#FFCC33] to-[#FFD700] rounded-2xl flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8" fill="black" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="py-10">
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl" style={{color: 'white'}}>
                  Site Assessment
                </h6>
                <p style={{color: 'white'}}>
                  Professional evaluation of your property to determine optimal camera placement and coverage areas for maximum security.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[max-content_1fr] gap-x-6 lg:gap-x-10">
              <div className="relative flex flex-col items-center justify-center py-10 w-16">
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#FFCC33] to-[#FFD700] rounded-2xl flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8" fill="black" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="py-10">
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl" style={{color: 'white'}}>
                  Equipment Installation
                </h6>
                <p style={{color: 'white'}}>
                  High-quality cameras and monitoring equipment installed by certified technicians with minimal disruption to your operations.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[max-content_1fr] gap-x-6 lg:gap-x-10">
              <div className="relative flex flex-col items-center justify-center py-10 w-16">
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#FFCC33] to-[#FFD700] rounded-2xl flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8" fill="black" viewBox="0 0 24 24">
                      <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="py-10">
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl" style={{color: 'white'}}>
                  Network Configuration
                </h6>
                <p style={{color: 'white'}}>
                  Secure network setup and configuration ensuring reliable connectivity and encrypted data transmission for your monitoring system.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[max-content_1fr] gap-x-6 lg:gap-x-10">
              <div className="relative flex flex-col items-center justify-center py-10 w-16">
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#FFCC33] to-[#FFD700] rounded-2xl flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8" fill="black" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="py-10">
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl" style={{color: 'white'}}>
                  System Testing
                </h6>
                <p style={{color: 'white'}}>
                  Comprehensive testing and quality assurance to ensure your monitoring system is fully operational and meets all requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
