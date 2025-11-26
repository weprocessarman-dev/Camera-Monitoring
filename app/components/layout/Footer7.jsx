"use client";

import React from "react";

export function Footer7() {
  return (
    <footer className="px-[5%] py-12 md:py-18 lg:py-20" style={{backgroundColor: 'black'}}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 md:pb-18 lg:pb-20">
          {/* About Us Column */}
          <div>
            <h3 className="text-xl font-bold mb-6" style={{color: '#FFCC33'}}>About Us</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors" style={{color: 'white'}}>Our Story</a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors" style={{color: 'white'}}>Team</a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors" style={{color: 'white'}}>Careers</a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors" style={{color: 'white'}}>Industries</a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors" style={{color: 'white'}}>Pricing</a>
              </li>
            </ul>
          </div>

          {/* Contact & Features Column */}
          <div>
            <h3 className="text-xl font-bold mb-6" style={{color: '#FFCC33'}}>Contact & Features</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors" style={{color: 'white'}}>Contact Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors" style={{color: 'white'}}>24/7 Monitoring</a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors" style={{color: 'white'}}>AI Detection</a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors" style={{color: 'white'}}>Real-time Alerts</a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors" style={{color: 'white'}}>Support</a>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-xl font-bold mb-6" style={{color: '#FFCC33'}}>Newsletter</h3>
            <p className="mb-4" style={{color: 'white'}}>Stay updated with security tips and product news</p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-3 border border-yellow-400 bg-black text-white placeholder-gray-400 focus:outline-none focus:border-yellow-300"
              />
              <button className="w-full px-3 py-2.5 font-semibold transition-all duration-300 relative group" style={{color: 'white', textShadow: '0 0 10px rgba(255,255,255,0.8)'}}>
                <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#FFCC33] transition-all duration-500 group-hover:-top-1 group-hover:-left-1"></span>
                <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#FFCC33] transition-all duration-500 group-hover:-top-1 group-hover:-right-1"></span>
                <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#FFCC33] transition-all duration-500 group-hover:-bottom-1 group-hover:-left-1"></span>
                <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#FFCC33] transition-all duration-500 group-hover:-bottom-1 group-hover:-right-1"></span>
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="h-px w-full bg-yellow-400" />
        
        <div className="flex flex-col-reverse items-center justify-between pb-4 pt-6 text-center text-sm md:flex-row md:pb-0 md:pt-8">
          <p className="mt-8 md:mt-0" style={{color: 'white'}}>© 2025 24/7 WeSurveil. All rights reserved.</p>
          <ul className="grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
            <li>
              <a href="#" className="hover:text-yellow-400 transition-colors" style={{color: 'white'}}>Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400 transition-colors" style={{color: 'white'}}>Terms of Service</a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400 transition-colors" style={{color: 'white'}}>Cookie Settings</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
