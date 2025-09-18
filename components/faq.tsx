'use client'
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: "How Much Does This Cost?",
      answer: "Our lowest product with A.I. is $500/mo, and we have packages going all the way to $12,000/mo. This is all based on your needs and how much calling you'll be doing per month."
    },
    {
      question: "How Soon Can We See Results?",
      answer: "The initial onboarding process takes a few days to get all your accounts set up. If we need to register with Twilio, the applications can take around 14 days to come back. In the meantime, we develop your agents and workflows. With your input, development and testing can take around 2-3 weeks. All together, your system will be LIVE in 30 days. From there you'll see booked appointments with pre-qualified clients in your calendar!"
    },
    {
      question: "Will This Take A Ton Of Extra Time Out Of My Day?",
      answer: "Not at all. This is perfect for busy people, since you won't have to actively watch over the AI Agent."
    },
    {
      question: "What Is Required In Order To Qualify?",
      answer: "1) You need to watch the video above to see exactly what it is that we do to help others just like you.\n2) Fill the form to schedule a call with our team to see if your business is eligible!"
    },
    {
      question: "Will This Work For My Business?",
      answer: "If your business or your client business could utilise the phone to nurture leads, book appointments, and close deals then this solution is for you!"
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return ( 
    <main className='bg-white pb-10 relative'>
        {/* Purple gradient overlay */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-purple-600/5 rounded-full blur-3xl"></div>
        
        <div className="w-full max-w-4xl mx-auto p-6 space-y-4 relative z-10">
      <h2 className="text-4xl md:text-5xl text-gray-900 font-bold text-center mb-12">Frequently Asked  <span className='bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent'>Questions</span></h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden border border-purple-200 bg-white shadow-lg"
          >
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center 0 transition-colors"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-semibold text-gray-900 text-lg">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-purple-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-purple-600" />
              )}
            </button>
            <div
              className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-96 py-4' : 'max-h-0'
              }`}
            >
              <p className="text-gray-700 whitespace-pre-line">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </main>
  );
};

export default FAQ;