"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { BiCheck } from "react-icons/bi";

export function Pricing19() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28" style={{backgroundColor: 'black'}}>
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4" style={{color: '#facc31'}}>Simple</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl" style={{color: 'white'}}>
            Get A Quote
          </h1>
          <p className="md:text-md" style={{color: 'white'}}>
            Scale up or down whenever you need. Cancel anytime.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="flex h-full flex-col justify-between border border-yellow-400 px-6 py-8 md:p-8" style={{backgroundColor: '#1a1a1a'}}>
            <div>
              <div className="rb-4 mb-4 flex flex-col items-end justify-end">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-lg">B</span>
                </div>
              </div>
              <h3 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl" style={{color: 'white'}}>
                $19
              </h3>
              <p style={{color: 'white'}}>or $190 yearly</p>
              <div className="my-8 h-px w-full shrink-0 bg-yellow-400" />
              <p style={{color: 'white'}}>Includes</p>
              <div className="mb-8 mt-4 grid grid-cols-1 gap-y-4 py-2">
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" style={{color: '#facc31'}} />
                  </div>
                  <p style={{color: 'white'}}>Up to two cameras</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" style={{color: '#facc31'}} />
                  </div>
                  <p style={{color: 'white'}}>Real-time alerts</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" style={{color: '#facc31'}} />
                  </div>
                  <p style={{color: 'white'}}>Basic reporting</p>
                </div>
              </div>
            </div>
            <div>
              <button className="w-full px-3 py-2.5 font-semibold transition-all duration-300 relative group" style={{color: 'white', textShadow: '0 0 10px rgba(255,255,255,0.8)'}}>
                <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#facc31] transition-all duration-500 group-hover:-top-1 group-hover:-left-1"></span>
                <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#facc31] transition-all duration-500 group-hover:-top-1 group-hover:-right-1"></span>
                <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#facc31] transition-all duration-500 group-hover:-bottom-1 group-hover:-left-1"></span>
                <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#facc31] transition-all duration-500 group-hover:-bottom-1 group-hover:-right-1"></span>
                Get started
              </button>
            </div>
          </div>
          <div className="flex h-full flex-col justify-between border border-yellow-400 px-6 py-8 md:p-8" style={{backgroundColor: '#1a1a1a'}}>
            <div>
              <div className="rb-4 mb-4 flex flex-col items-end justify-end">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-lg">P</span>
                </div>
              </div>
              <h3 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl" style={{color: 'white'}}>
                $29
              </h3>
              <p style={{color: 'white'}}>or $290 yearly</p>
              <div className="my-8 h-px w-full shrink-0 bg-yellow-400" />
              <p style={{color: 'white'}}>Includes</p>
              <div className="mb-8 mt-4 grid grid-cols-1 gap-y-4 py-2">
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" style={{color: '#facc31'}} />
                  </div>
                  <p style={{color: 'white'}}>Up to five cameras</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" style={{color: '#facc31'}} />
                  </div>
                  <p style={{color: 'white'}}>AI threat detection</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" style={{color: '#facc31'}} />
                  </div>
                  <p style={{color: 'white'}}>Human verification</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" style={{color: '#facc31'}} />
                  </div>
                  <p style={{color: 'white'}}>Advanced reporting</p>
                </div>
              </div>
            </div>
            <div>
              <button className="w-full px-3 py-2.5 font-semibold transition-all duration-300 relative group" style={{color: 'white', textShadow: '0 0 10px rgba(255,255,255,0.8)'}}>
                <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#facc31] transition-all duration-500 group-hover:-top-1 group-hover:-left-1"></span>
                <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#facc31] transition-all duration-500 group-hover:-top-1 group-hover:-right-1"></span>
                <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#facc31] transition-all duration-500 group-hover:-bottom-1 group-hover:-left-1"></span>
                <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#facc31] transition-all duration-500 group-hover:-bottom-1 group-hover:-right-1"></span>
                Get started
              </button>
            </div>
          </div>
          <div className="flex h-full flex-col justify-between border border-yellow-400 px-6 py-8 md:p-8" style={{backgroundColor: '#1a1a1a'}}>
            <div>
              <div className="rb-4 mb-4 flex flex-col items-end justify-end">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-lg">E</span>
                </div>
              </div>
              <h3 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl" style={{color: 'white'}}>
                $49
              </h3>
              <p style={{color: 'white'}}>or $490 yearly</p>
              <div className="my-8 h-px w-full shrink-0 bg-yellow-400" />
              <p style={{color: 'white'}}>Includes</p>
              <div className="mb-8 mt-4 grid grid-cols-1 gap-y-4 py-2">
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" style={{color: '#facc31'}} />
                  </div>
                  <p style={{color: 'white'}}>Unlimited cameras</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" style={{color: '#facc31'}} />
                  </div>
                  <p style={{color: 'white'}}>Full AI monitoring</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" style={{color: '#facc31'}} />
                  </div>
                  <p style={{color: 'white'}}>Dedicated agent</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" style={{color: '#facc31'}} />
                  </div>
                  <p style={{color: 'white'}}>Custom reporting</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" style={{color: '#facc31'}} />
                  </div>
                  <p style={{color: 'white'}}>Priority support</p>
                </div>
              </div>
            </div>
            <div>
              <button className="w-full px-3 py-2.5 font-semibold transition-all duration-300 relative group" style={{color: 'white', textShadow: '0 0 10px rgba(255,255,255,0.8)'}}>
                <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#facc31] transition-all duration-500 group-hover:-top-1 group-hover:-left-1"></span>
                <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#facc31] transition-all duration-500 group-hover:-top-1 group-hover:-right-1"></span>
                <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#facc31] transition-all duration-500 group-hover:-bottom-1 group-hover:-left-1"></span>
                <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#facc31] transition-all duration-500 group-hover:-bottom-1 group-hover:-right-1"></span>
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
