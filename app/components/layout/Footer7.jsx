"use client";

import React, { useState } from "react";
import emailjs from '@emailjs/browser';

export function Footer7() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setSubmitStatus('Please enter your email address');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const templateParams = {
        from_email: email,
        to_email: 'developerarman777@gmail.com',
        subject: 'Newsletter Subscription',
        message: `New newsletter subscription from: ${email}`
      };

      await emailjs.send(
        'service_4lsx4ef',
        'template_b9gluv6',
        templateParams,
        'ip1uVtyOjnm_pjBgN'
      );

      setSubmitStatus('Successfully subscribed to newsletter!');
      setEmail('');
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('Error: Failed to subscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="px-[5%] py-12 md:py-18 lg:py-20" style={{backgroundColor: 'black'}}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 md:pb-18 lg:pb-20">
          {/* About Us Column */}
          <div>
            <h3 className="text-xl font-bold mb-6" style={{color: '#facc31'}}>OverView</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors" style={{color: 'white'}}>Home</a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors" style={{color: 'white'}}>About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors" style={{color: 'white'}}>Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Contact & Features Column */}
          <div>
            <h3 className="text-xl font-bold mb-6" style={{color: '#facc31'}}>Contact & Features</h3>
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
            <h3 className="text-xl font-bold mb-6" style={{color: '#facc31'}}>Newsletter</h3>
            <p className="mb-4" style={{color: 'white'}}>Stay updated with security tips and product news</p>
            <form className="space-y-3" onSubmit={handleNewsletterSubmit}>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email" 
                className="w-full px-4 py-3 border border-yellow-400 focus:outline-none focus:border-yellow-300"
                style={{backgroundColor: 'white', color: 'black'}}
                required
              />
              {submitStatus && (
                <div className={`text-sm p-2 rounded ${submitStatus.includes('Error') ? 'bg-red-900 text-red-300' : 'bg-green-900 text-green-300'}`}>
                  {submitStatus}
                </div>
              )}
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full px-3 py-2.5 font-semibold transition-all duration-300 relative group disabled:opacity-50" 
                style={{color: 'white', textShadow: '0 0 10px rgba(255,255,255,0.8)'}}
              >
                <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#facc31] transition-all duration-500 group-hover:-top-1 group-hover:-left-1"></span>
                <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#facc31] transition-all duration-500 group-hover:-top-1 group-hover:-right-1"></span>
                <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#facc31] transition-all duration-500 group-hover:-bottom-1 group-hover:-left-1"></span>
                <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#facc31] transition-all duration-500 group-hover:-bottom-1 group-hover:-right-1"></span>
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
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
