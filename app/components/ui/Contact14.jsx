"use client";

import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";

export function Contact14() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28" style={{backgroundColor: 'black'}}>
      <div className="container">
        <div className="rb-12 mb-12 max-w-lg md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4" style={{color: '#facc31'}}>Reach</p>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl" style={{color: 'white'}}>
            Get in touch
          </h2>
          <p className="md:text-md" style={{color: 'white'}}>
            We're standing by to help you secure your business
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-[0.5fr_1fr] md:gap-x-20 md:gap-y-16">
          <div className="grid auto-cols-fr grid-cols-1 gap-x-4 gap-y-10">
            <div>
              <div className="mb-3 md:mb-4">
                <BiEnvelope className="size-8" style={{color: '#facc31'}} />
              </div>
              <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl" style={{color: 'white'}}>
                Email
              </h3>
              <p className="mb-2" style={{color: 'white'}}>Send us a message</p>
              <a className="underline" href="mailto:contact@securemonitor.com" style={{color: '#facc31'}}>
                contact@securemonitor.com
              </a>
            </div>
            <div>
              <div className="mb-3 md:mb-4">
                <BiPhone className="size-8" style={{color: '#facc31'}} />
              </div>
              <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl" style={{color: 'white'}}>
                Phone
              </h3>
              <p className="mb-2" style={{color: 'white'}}>Call our team directly</p>
              <a className="underline" href="tel:+18005550147" style={{color: '#facc31'}}>
                +1 (800) 555-0147
              </a>
            </div>
            <div>
              <div className="mb-3 md:mb-4">
                <BiMap className="size-8" style={{color: '#facc31'}} />
              </div>
              <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl" style={{color: 'white'}}>
                Office
              </h3>
              <p className="mb-2" style={{color: 'white'}}>1234 Sunset Boulevard, Los Angeles CA 90028 USA</p>
              <div className="mt-5 md:mt-6">
                <button className="px-3 py-2.5 font-semibold transition-all duration-300 relative group" style={{color: 'white'}}>
                  <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#facc31] transition-all duration-500 group-hover:-top-1 group-hover:-left-1"></span>
                  <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#facc31] transition-all duration-500 group-hover:-top-1 group-hover:-right-1"></span>
                  <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#facc31] transition-all duration-500 group-hover:-bottom-1 group-hover:-left-1"></span>
                  <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#facc31] transition-all duration-500 group-hover:-bottom-1 group-hover:-right-1"></span>
                  Get Directions →
                </button>
              </div>
            </div>
          </div>
          <div className="w-full h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.733!2d-118.3267434!3d34.0983425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bf07045279bf%3A0xf67a9a6797bdfae4!2sHollywood%20Blvd%2C%20Los%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1635959385076!5m2!1sen!2sus"
              className="w-full h-[500px] md:h-[600px] rounded-lg border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
