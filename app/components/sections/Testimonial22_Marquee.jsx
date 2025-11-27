"use client";

import React from "react";
import { motion } from "framer-motion";

export function Testimonial22_Marquee() {
    const testimonials = [
        {
            quote: "We installed their system last year and haven't had a single incident go unnoticed.",
            name: "Marcus Chen",
            role: "Manager, retail store",
            avatar: "/assets/images/icons/user1.jpg",
            rating: 5
        },
        {
            quote: "Setup took one afternoon and we've been running smooth ever since.",
            name: "Sarah Williams",
            role: "Owner, restaurant",
            avatar: "/assets/images/icons/user2.jpg",
            rating: 5
        },
        {
            quote: "Their monitoring team caught a break-in attempt before it happened.",
            name: "James Rodriguez",
            role: "Director, warehouse",
            avatar: "/assets/images/icons/user3.jpg",
            rating: 5
        },
        {
            quote: "I sleep better knowing my business is watched by professionals.",
            name: "Emily Davis",
            role: "CEO, Tech Startup",
            avatar: "/assets/images/icons/user1.jpg",
            rating: 5
        },
    ];

    // Duplicate for infinite loop
    const duplicatedTestimonials = [...testimonials, ...testimonials];

    return (
        <section className="py-20 overflow-hidden" style={{ backgroundColor: '#4c3c0d' }}>
            <div className="max-w-7xl mx-auto mb-16 px-4">
                <div className="text-center">
                    <h2 className="text-6xl font-bold mb-4" style={{ color: 'white' }}>
                        Real Stories
                    </h2>
                    <p className="text-xl" style={{ color: 'white' }}>Businesses trust us</p>
                </div>
            </div>

            <div className="flex overflow-hidden">
                <motion.div
                    className="flex gap-8 px-4"
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 20,
                        ease: "linear",
                        repeat: Infinity
                    }}
                    style={{ width: "max-content" }}
                >
                    {duplicatedTestimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-black rounded-2xl p-8 relative overflow-hidden group hover:scale-105 transition-transform duration-300 w-[400px] flex-shrink-0"
                            style={{
                                background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)'
                            }}
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-full -translate-y-16 translate-x-16"></div>

                            <div className="relative z-10">
                                <div className="flex mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5" fill="#facc31" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
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
                </motion.div>
            </div>
        </section>
    );
}
