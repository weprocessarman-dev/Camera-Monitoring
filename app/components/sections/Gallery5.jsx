"use client";

import React from "react";

export function Gallery5() {
    return (
        <section id="gallery-bento" className="bg-[#4c3c0d] px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container">
                <div className="mb-12 text-center md:mb-18 lg:mb-20">
                    <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl" style={{ color: 'white' }}>
                        Our Services
                    </h2>
                    <p className="md:text-md" style={{ color: 'white' }}>
                        Professional Camera Monitoring That Actually Stops Crime
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-[1200px] md:h-[800px]">
                    {/* Large item */}
                    <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl group">
                        <img
                            src="/assets/images/gallery/services1.jpg"
                            alt="Service 1"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <h3 className="text-white text-2xl font-bold">Comprehensive Monitoring</h3>
                        </div>
                    </div>

                    {/* Medium item */}
                    <div className="relative overflow-hidden rounded-2xl group">
                        <img
                            src="/assets/images/gallery/services2.jpg"
                            alt="Service 2"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <h3 className="text-white text-xl font-bold">Remote Access</h3>
                        </div>
                    </div>

                    {/* Medium item */}
                    <div className="relative overflow-hidden rounded-2xl group">
                        <img
                            src="/assets/images/gallery/services3.jpg"
                            alt="Service 3"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <h3 className="text-white text-xl font-bold">24/7 Support</h3>
                        </div>
                    </div>
                </div>

                {/* Second row for mobile/extra items if needed, or just keep it simple with 3 main ones for bento feel, 
            but let's add a bottom row of smaller ones to use all images */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 h-[400px]">
                    <div className="relative overflow-hidden rounded-2xl group">
                        <img
                            src="/assets/images/gallery/services4.jpg"
                            alt="Service 4"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <h3 className="text-white text-xl font-bold">AI Detection</h3>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-2xl group">
                        <img
                            src="/assets/images/gallery/services5.jpg"
                            alt="Service 5"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <h3 className="text-white text-xl font-bold">Cloud Storage</h3>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-2xl group">
                        <img
                            src="/assets/images/gallery/services6.jpg"
                            alt="Service 6"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <h3 className="text-white text-xl font-bold">Installation</h3>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
