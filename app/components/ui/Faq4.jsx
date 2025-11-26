"use client";

import React, { useState } from "react";
import { RxPlus, RxMinus } from "react-icons/rx";

export function Faq4() {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (value) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(value)) {
      newOpenItems.delete(value);
    } else {
      newOpenItems.add(value);
    }
    setOpenItems(newOpenItems);
  };

  const faqs = [
    {
      question: "Can I change plans anytime?",
      answer: "Yes. Upgrade or downgrade whenever your needs change. There's no penalty. We bill you the difference on your next invoice. It's that simple."
    },
    {
      question: "What if I need to cancel?",
      answer: "You can cancel anytime. No contracts. No fees. Just let us know and we'll stop billing you. Your data stays secure until the day you leave."
    },
    {
      question: "Do you offer discounts for annual billing?",
      answer: "We do. Pay yearly and save twenty percent on any plan. That's a real savings for businesses that know they want us long-term."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We take credit cards, debit cards, and bank transfers. Billing happens automatically each month or year, depending on your choice. You control when and how."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes. Book a demo and we'll show you exactly how our monitoring works. See the system in action before you commit to anything."
    }
  ];

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28" style={{backgroundColor: 'black'}}>
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-yellow-400 font-semibold mb-4 tracking-wide uppercase text-sm">FAQ</p>
          <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{color: 'white'}}>
            Frequently asked questions
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about our security monitoring services.
          </p>
        </div>
        
        <div className="space-y-1">
          {faqs.map((faq, index) => {
            const isOpen = openItems.has(index);
            return (
              <div 
                key={index}
                className="border-b border-gray-800 transition-all duration-300"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full py-6 text-left flex items-center justify-between group hover:bg-gray-900/30 transition-all duration-300"
                >
                  <span className="text-xl font-medium group-hover:text-yellow-400 transition-colors" style={{color: 'white'}}>
                    {faq.question}
                  </span>
                  <div className="ml-4 flex-shrink-0">
                    <div className={`w-8 h-8 rounded-full border-2 border-yellow-400 flex items-center justify-center transition-all duration-300 ${
                      isOpen ? 'rotate-45 bg-yellow-400' : 'group-hover:bg-yellow-400/10'
                    }`}>
                      <svg 
                        className="w-4 h-4 transition-all duration-300" 
                        fill={isOpen ? 'black' : '#FFCC33'}
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                      </svg>
                    </div>
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-out ${
                    isOpen ? 'max-h-96 pb-6' : 'max-h-0'
                  }`}
                >
                  <div className="pr-12">
                    <p className="text-gray-400 leading-relaxed text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-16">
          <h4 className="text-3xl font-bold mb-4" style={{color: 'white'}}>
            Still have questions?
          </h4>
          <p className="text-xl mb-8" style={{color: 'white'}}>Reach out to our team anytime.</p>
          <button className="px-3 py-2.5 font-semibold transition-all duration-300 relative group" style={{color: 'white', textShadow: '0 0 10px rgba(255,255,255,0.8)'}}>
            <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#FFCC33] transition-all duration-500 group-hover:-top-1 group-hover:-left-1"></span>
            <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#FFCC33] transition-all duration-500 group-hover:-top-1 group-hover:-right-1"></span>
            <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#FFCC33] transition-all duration-500 group-hover:-bottom-1 group-hover:-left-1"></span>
            <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#FFCC33] transition-all duration-500 group-hover:-bottom-1 group-hover:-right-1"></span>
            Contact us
          </button>
        </div>
      </div>
    </section>
  );
}
