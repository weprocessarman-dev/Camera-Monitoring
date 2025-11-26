"use client";

import { Button, useMediaQuery } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { RxChevronDown } from "react-icons/rx";

const useNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return {
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    isDropdownOpen,
    setIsDropdownOpen,
    scrolled,
    isMobile
  };
};

const NavLink = ({ href, children, className = "" }) => (
  <motion.a
    href={href}
    className={`relative px-4 py-2 text-white hover:text-white/80 transition-colors ${className}`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
    <motion.div
      className="absolute bottom-0 left-0 h-0.5 bg-white"
      initial={{ width: 0 }}
      whileHover={{ width: "100%" }}
      transition={{ duration: 0.3 }}
    />
  </motion.a>
);

export function Navbar13() {
  const { isMobileMenuOpen, setIsMobileMenuOpen, isDropdownOpen, setIsDropdownOpen, scrolled } = useNavbar();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-0 right-0 z-50"
    >
      <div className={`w-4/5 mx-auto px-6 lg:px-8 border border-white/50 transition-all duration-300 relative ${
        scrolled 
          ? "bg-black/20 backdrop-blur-md shadow-lg" 
          : "bg-black/10 backdrop-blur-md"
      }`}>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="/"
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img 
              src="/assets/images/gallery/HeaderLogo.svg" 
              alt="WeSurveil Logo" 
              className="h-10 w-auto"
            />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about-us">About Us</NavLink>
            <NavLink href="/contact-us">Contact Us</NavLink>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.a
              href="/contact-us"
              className="px-3 py-2.5 font-semibold transition-all duration-300 relative group"
              style={{color: 'white', textShadow: '0 0 10px rgba(255,255,255,0.8)'}}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#facc31] transition-all duration-500 group-hover:-top-1 group-hover:-left-1"></span>
              <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#facc31] transition-all duration-500 group-hover:-top-1 group-hover:-right-1"></span>
              <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#facc31] transition-all duration-500 group-hover:-bottom-1 group-hover:-left-1"></span>
              <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#facc31] transition-all duration-500 group-hover:-bottom-1 group-hover:-right-1"></span>
              Get Started
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <motion.span
                className="w-6 h-0.5 bg-white block"
                animate={{
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 6 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-6 h-0.5 bg-white block mt-1.5"
                animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-6 h-0.5 bg-white block mt-1.5"
                animate={{
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? -6 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white/10 backdrop-blur-md rounded-xl mt-4 border border-white/20"
            >
              <div className="px-6 py-4 space-y-4">
                <a href="/" className="block text-white/90 hover:text-white transition-colors py-2">
                  Home
                </a>
                <a href="/about-us" className="block text-white/90 hover:text-white transition-colors py-2">
                  About Us
                </a>
                <a href="/contact-us" className="block text-white/90 hover:text-white transition-colors py-2">
                  Contact Us
                </a>
                <motion.a
                  href="/contact-us"
                  className="w-full mt-4 px-6 py-3 bg-white text-[#042642] font-semibold rounded-full block text-center"
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
