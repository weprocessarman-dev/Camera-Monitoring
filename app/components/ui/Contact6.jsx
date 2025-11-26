"use client";

import React, { useState } from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import emailjs from '@emailjs/browser';

export function Contact6() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    businessType: '',
    message: '',
    terms: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.terms) {
      setSubmitStatus('Please agree to the terms and conditions');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // EmailJS configuration
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        service: formData.service || 'Not specified',
        business_type: formData.businessType || 'Not specified',
        message: formData.message,
        to_email: 'developerarman777@gmail.com'
      };

      // Send email using EmailJS
      await emailjs.send(
        'service_4lsx4ef', // Your EmailJS service ID
        'template_b9gluv6', // Your EmailJS template ID
        templateParams,
        'ip1uVtyOjnm_pjBgN' // Your EmailJS public key
      );

      setSubmitStatus('Thank you! Your message has been sent successfully.');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        businessType: '',
        message: '',
        terms: false
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('Error: Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28" style={{backgroundColor: 'black'}}>
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold" style={{color: 'white'}}>
            Get in Touch
          </h1>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:grid-flow-col lg:gap-x-20 lg:gap-y-16">
        <div>
          <div className="mb-6 md:mb-8">
            <p className="mb-3 font-semibold md:mb-4" style={{color: '#FFCC33'}}>Inquiry</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl" style={{color: 'white'}}>
              Tell us about your needs
            </h2>
            <p className="md:text-md" style={{color: 'white'}}>
              Fill out the form below and we'll respond within one business day
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 py-2">
            <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg border border-yellow-400">
              <BiEnvelope className="size-6 flex-none" style={{color: '#FFCC33'}} />
              <p style={{color: 'white'}}>contact@securemonitor.com</p>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg border border-yellow-400">
              <BiPhone className="size-6 flex-none" style={{color: '#FFCC33'}} />
              <p style={{color: 'white'}}>+1 (800) 555-0147</p>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg border border-yellow-400">
              <BiMap className="size-6 flex-none" style={{color: '#FFCC33'}} />
              <p style={{color: 'white'}}>1234 Sunset Boulevard, Los Angeles CA 90028 USA</p>
            </div>
          </div>
        </div>
        <div>
          <form className="max-w-lg" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2" style={{color: 'white'}}>First name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-600 focus:border-yellow-400 focus:outline-none transition-colors"
                style={{color: 'white'}}
                placeholder="Enter first name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" style={{color: 'white'}}>Last name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-600 focus:border-yellow-400 focus:outline-none transition-colors"
                style={{color: 'white'}}
                placeholder="Enter last name"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2" style={{color: 'white'}}>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-600 focus:border-yellow-400 focus:outline-none transition-colors"
                style={{color: 'white'}}
                placeholder="Enter email address"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" style={{color: 'white'}}>Phone number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-600 focus:border-yellow-400 focus:outline-none transition-colors"
                style={{color: 'white'}}
                placeholder="Enter phone number"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2" style={{color: 'white'}}>What can we help with</label>
            <select name="service" value={formData.service} onChange={handleInputChange} className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-600 focus:border-yellow-400 focus:outline-none transition-colors" style={{color: 'white'}}>
              <option value="" style={{color: 'black'}}>Select a service</option>
              <option value="installation" style={{color: 'black'}}>Camera Installation</option>
              <option value="monitoring" style={{color: 'black'}}>24/7 Monitoring</option>
              <option value="maintenance" style={{color: 'black'}}>System Maintenance</option>
              <option value="consultation" style={{color: 'black'}}>Security Consultation</option>
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-4" style={{color: 'white'}}>Business type</label>
            <div className="grid grid-cols-2 gap-4">
              {['Retail store', 'Restaurant/Bar', 'Warehouse', 'Office space', 'Commercial plaza', 'Other'].map((type) => (
                <label key={type} className="flex items-center space-x-3 cursor-pointer">
                  <input type="radio" name="businessType" value={type} checked={formData.businessType === type} onChange={handleInputChange} className="w-4 h-4 text-yellow-400 border-gray-600 focus:ring-yellow-400" />
                  <span style={{color: 'white'}}>{type}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2" style={{color: 'white'}}>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={5}
              className="w-full px-4 py-3 bg-transparent border-2 border-gray-600 focus:border-yellow-400 focus:outline-none transition-colors resize-none"
              style={{color: 'white'}}
              placeholder="Tell us more about your security needs..."
              required
            ></textarea>
          </div>
          <div className="mb-6 flex items-center space-x-3">
            <input type="checkbox" id="terms" name="terms" checked={formData.terms} onChange={handleInputChange} className="w-4 h-4 text-yellow-400 border-gray-600 rounded focus:ring-yellow-400" />
            <label htmlFor="terms" className="text-sm cursor-pointer" style={{color: 'white'}}>
              I agree to the terms and conditions
            </label>
          </div>
          {submitStatus && (
            <div className={`mb-4 p-3 rounded ${submitStatus.includes('Error') ? 'bg-red-900 text-red-300' : 'bg-green-900 text-green-300'}`}>
              {submitStatus}
            </div>
          )}
          <button type="submit" disabled={isSubmitting} className="px-3 py-2.5 font-semibold transition-all duration-300 relative group disabled:opacity-50" style={{color: 'white', textShadow: '0 0 10px rgba(255,255,255,0.8)'}}>
            <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#FFCC33] transition-all duration-500 group-hover:-top-1 group-hover:-left-1"></span>
            <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#FFCC33] transition-all duration-500 group-hover:-top-1 group-hover:-right-1"></span>
            <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#FFCC33] transition-all duration-500 group-hover:-bottom-1 group-hover:-left-1"></span>
            <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#FFCC33] transition-all duration-500 group-hover:-bottom-1 group-hover:-right-1"></span>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        </div>
        </div>
      </div>
    </section>
  );
}
