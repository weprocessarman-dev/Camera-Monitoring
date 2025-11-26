"use client";

import React from "react";
import { BiLogoDribbble, BiLogoLinkedinSquare } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

export function Team6() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28" style={{backgroundColor: 'black'}}>
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4" style={{color: '#FFCC33'}}>Team</p>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl" style={{color: 'white'}}>
            Our team
          </h2>
          <p className="md:text-md" style={{color: 'white'}}>
            Experienced professionals watching your location
          </p>
        </div>
        <div className="grid grid-cols-1 items-start justify-center gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-4">
          <div className="flex flex-col text-center">
            <div className="relative mb-5 size-full overflow-hidden pt-[66%] md:mb-6 md:pt-[100%] group">
              <img
                src="/assets/images/team/team1.jpg"
                alt="David Torres"
                className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-md font-semibold md:text-lg" style={{color: 'white'}}>David Torres</h5>
              <h6 className="md:text-md" style={{color: '#FFCC33'}}>Lead monitor</h6>
            </div>
            <p style={{color: 'white'}}>
              Twelve years in security operations. Knows every angle and every
              threat pattern.
            </p>
            <div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center">
              <a href="#">
                <BiLogoLinkedinSquare className="size-6" style={{color: '#FFCC33'}} />
              </a>
              <a href="#">
                <FaXTwitter className="size-6 p-0.5" style={{color: '#FFCC33'}} />
              </a>
              <a href="#">
                <BiLogoDribbble className="size-6" style={{color: '#FFCC33'}} />
              </a>
            </div>
          </div>
          <div className="flex flex-col text-center">
            <div className="relative mb-5 size-full overflow-hidden pt-[66%] md:mb-6 md:pt-[100%] group">
              <img
                src="/assets/images/team/team2.jpg"
                alt="Elena Vasquez"
                className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-2"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-md font-semibold md:text-lg" style={{color: 'white'}}>
                Elena Vasquez
              </h5>
              <h6 className="md:text-md" style={{color: '#FFCC33'}}>Senior monitor</h6>
            </div>
            <p style={{color: 'white'}}>
              Trained response specialist with expertise in retail and
              hospitality environments.
            </p>
            <div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center">
              <a href="#">
                <BiLogoLinkedinSquare className="size-6" style={{color: '#FFCC33'}} />
              </a>
              <a href="#">
                <FaXTwitter className="size-6 p-0.5" style={{color: '#FFCC33'}} />
              </a>
              <a href="#">
                <BiLogoDribbble className="size-6" style={{color: '#FFCC33'}} />
              </a>
            </div>
          </div>
          <div className="flex flex-col text-center">
            <div className="relative mb-5 size-full overflow-hidden pt-[66%] md:mb-6 md:pt-[100%] group">
              <img
                src="/assets/images/team/team3.jpg"
                alt="Michael Park"
                className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-md font-semibold md:text-lg" style={{color: 'white'}}>Michael Park</h5>
              <h6 className="md:text-md" style={{color: '#FFCC33'}}>Monitoring agent</h6>
            </div>
            <p style={{color: 'white'}}>
              Five years of incident response and real-time threat assessment
              experience.
            </p>
            <div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center">
              <a href="#">
                <BiLogoLinkedinSquare className="size-6" style={{color: '#FFCC33'}} />
              </a>
              <a href="#">
                <FaXTwitter className="size-6 p-0.5" style={{color: '#FFCC33'}} />
              </a>
              <a href="#">
                <BiLogoDribbble className="size-6" style={{color: '#FFCC33'}} />
              </a>
            </div>
          </div>
          <div className="flex flex-col text-center">
            <div className="relative mb-5 size-full overflow-hidden pt-[66%] md:mb-6 md:pt-[100%] group">
              <img
                src="/assets/images/team/team4.jpg"
                alt="Jessica Brown"
                className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-1"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-md font-semibold md:text-lg" style={{color: 'white'}}>
                Jessica Brown
              </h5>
              <h6 className="md:text-md" style={{color: '#FFCC33'}}>Monitoring agent</h6>
            </div>
            <p style={{color: 'white'}}>
              Specializes in warehouse and logistics facility surveillance
              protocols.
            </p>
            <div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center">
              <a href="#">
                <BiLogoLinkedinSquare className="size-6" style={{color: '#FFCC33'}} />
              </a>
              <a href="#">
                <FaXTwitter className="size-6 p-0.5" style={{color: '#FFCC33'}} />
              </a>
              <a href="#">
                <BiLogoDribbble className="size-6" style={{color: '#FFCC33'}} />
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-14 w-full max-w-md text-center md:mt-20 lg:mt-24">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl" style={{color: 'white'}}>
            Ready to secure your location?
          </h4>
          <p className="md:text-md" style={{color: 'white'}}>Get professional monitoring for your business</p>
          <div className="mt-6 flex items-center justify-center gap-x-4 text-center md:mt-8">
            <button className="px-3 py-2.5 font-semibold transition-all duration-300 relative group" style={{color: 'white', textShadow: '0 0 10px rgba(255,255,255,0.8)'}}>
              <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#FFCC33] transition-all duration-500 group-hover:-top-1 group-hover:-left-1"></span>
              <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#FFCC33] transition-all duration-500 group-hover:-top-1 group-hover:-right-1"></span>
              <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#FFCC33] transition-all duration-500 group-hover:-bottom-1 group-hover:-left-1"></span>
              <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#FFCC33] transition-all duration-500 group-hover:-bottom-1 group-hover:-right-1"></span>
              Get Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
