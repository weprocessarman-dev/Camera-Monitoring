"use client";

import React from "react";
import { BiSolidStar } from "react-icons/bi";

export function Testimonial25() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28" style={{backgroundColor: 'black'}}>
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl" style={{color: 'white'}}>
            Real results
          </h2>
          <p className="md:text-md" style={{color: 'white'}}>Businesses trust us</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex w-full flex-col items-start justify-between border-2 border-yellow-400 p-6 md:p-8 bg-gray-900">
            <div className="mb-5 flex md:mb-6">
              <BiSolidStar className="size-6" style={{color: '#FFCC33'}} />
              <BiSolidStar className="size-6" style={{color: '#FFCC33'}} />
              <BiSolidStar className="size-6" style={{color: '#FFCC33'}} />
              <BiSolidStar className="size-6" style={{color: '#FFCC33'}} />
              <BiSolidStar className="size-6" style={{color: '#FFCC33'}} />
            </div>
            <blockquote className="md:text-md" style={{color: 'white'}}>
              We installed their system in an afternoon and slept better that
              night knowing someone was watching.
            </blockquote>
            <div className="mt-5 flex w-full flex-col items-start md:mt-6 md:w-fit md:flex-row md:items-center">
              <div>
                <img
                  src="/assets/images/icons/user1.jpg"
                  alt="Marcus Chen"
                  className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mb-0 md:mr-4"
                />
              </div>
              <div>
                <p className="font-semibold" style={{color: 'white'}}>Marcus Chen</p>
                <p style={{color: '#FFCC33'}}>Owner, retail store</p>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-start justify-between border-2 border-yellow-400 p-6 md:p-8 bg-gray-900">
            <div className="mb-5 flex md:mb-6">
              <BiSolidStar className="size-6" style={{color: '#FFCC33'}} />
              <BiSolidStar className="size-6" style={{color: '#FFCC33'}} />
              <BiSolidStar className="size-6" style={{color: '#FFCC33'}} />
              <BiSolidStar className="size-6" style={{color: '#FFCC33'}} />
              <BiSolidStar className="size-6" style={{color: '#FFCC33'}} />
            </div>
            <blockquote className="md:text-md" style={{color: 'white'}}>
              The alerts caught a break-in attempt before it happened. That's
              worth more than we paid for the whole year.
            </blockquote>
            <div className="mt-5 flex w-full flex-col items-start md:mt-6 md:w-fit md:flex-row md:items-center">
              <div>
                <img
                  src="/assets/images/icons/user2.jpg"
                  alt="Sarah Williams"
                  className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mb-0 md:mr-4"
                />
              </div>
              <div>
                <p className="font-semibold" style={{color: 'white'}}>Sarah Williams</p>
                <p style={{color: '#FFCC33'}}>Manager, warehouse</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
