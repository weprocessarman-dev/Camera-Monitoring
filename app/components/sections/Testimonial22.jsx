"use client";

import React from "react";
import { RxStar } from "react-icons/rx";

export function Testimonial22() {
  const testimonials = [
    {
      quote: "We installed their system last year and haven't had a single incident go unnoticed. The alerts reach us instantly and the team knows exactly what they're looking at.",
      name: "Marcus Chen",
      role: "Manager, retail store",
      avatar: "/assets/images/icons/user1.jpg",
      rating: 5
    },
    {
      quote: "Setup took one afternoon and we've been running smooth ever since. No complicated training, no hidden fees. Just solid protection that works.",
      name: "Sarah Williams",
      role: "Owner, restaurant",
      avatar: "/assets/images/icons/user2.jpg",
      rating: 5
    },
    {
      quote: "Their monitoring team caught a break-in attempt before it happened. The response was immediate and professional. Worth every penny.",
      name: "James Rodriguez",
      role: "Director, warehouse",
      avatar: "/assets/images/icons/user3.jpg",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-4" style={{backgroundColor: '#FFCC33'}}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold mb-4" style={{color: 'black'}}>
            Real Stories
          </h2>
          <p className="text-xl" style={{color: 'black'}}>Businesses trust us</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-black rounded-2xl p-8 relative overflow-hidden group hover:scale-105 transition-transform duration-300"
              style={{
                background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)'
              }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
              
              <div className="relative z-10">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="#FFCC33" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                
                <blockquote className="text-white text-lg leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center">
                  <div className="relative">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-yellow-400"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full border-2 border-black"></div>
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
