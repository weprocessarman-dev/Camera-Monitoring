"use client";

import { Button } from "@relume_io/relume-ui";
import React, { useRef } from "react";
import { RxChevronRight } from "react-icons/rx";
import { motion, useScroll, useTransform } from "framer-motion";

export function Layout361() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, 30]);

  return (
    <section ref={containerRef} id="relume" className="px-[5%] py-16 md:py-24 lg:py-28" style={{backgroundColor: 'black'}}>
      <div className="container">
        <div className="rb-12 mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4" style={{color: '#facc31'}}>Our Advantages</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl" style={{color: 'white'}}>
              Why Smart Businesses Switch to Us
            </h2>
            <p className="md:text-md" style={{color: 'white'}}>
              Most security options are too expensive or too slow. We fixed that. Here is why we win:
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-8">
          <motion.div 
            style={{ y: y1 }}
            className="border border-yellow-400 bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden"
          >
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
                Slash Security Costs
              </h3>
              <p style={{color: 'white'}}>
                Hiring physical guards burns cash. We give you better, awake-all-night protection for pennies on the dollar.
              </p>
            </div>
          </motion.div>
          <motion.div 
            style={{ y: y2 }}
            className="border border-yellow-400 bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden"
          >
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
                Freedom From Contracts
              </h3>
              <p style={{color: 'white'}}>
                We don't trap you with paperwork. We earn your business every single month. If you don't love it, you can leave.
              </p>
            </div>
          </motion.div>
          <motion.div 
            style={{ y: y3 }}
            className="border border-yellow-400 bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden"
          >
            <div className="flex items-center justify-center">
              <img
                src="/assets/images/gallery/services1.jpg"
                className="size-full object-cover"
                alt="Why choose us - Technology"
              />
            </div>
            <div className="p-6 md:p-8 lg:p-12">
              <p className="mb-2 text-sm font-semibold" style={{color: '#facc31'}}>Technology</p>
              <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl" style={{color: 'white'}}>
                We Act, We Don't Just Watch
              </h3>
              <p style={{color: 'white'}}>
                Standard cameras just record you getting robbed. We yell at the intruder and call the police before they break in.
              </p>
            </div>
          </motion.div>
          <motion.div 
            style={{ y: y4 }}
            className="border border-yellow-400 bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden"
          >
            <div className="flex items-center justify-center">
              <img
                src="/assets/images/gallery/services2.jpg"
                className="size-full object-cover"
                alt="Why choose us - Support"
              />
            </div>
            <div className="p-6 md:p-8 lg:p-12">
              <p className="mb-2 text-sm font-semibold" style={{color: '#facc31'}}>Support</p>
              <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl" style={{color: 'white'}}>
                Nationwide Reliability
              </h3>
              <p style={{color: 'white'}}>
                It doesn't matter if you are in New York or nowhere. We cover every inch of the US with the same rock-solid connection.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
