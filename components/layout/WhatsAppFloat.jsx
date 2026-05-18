"use client";

import { useState } from "react";

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false);
  const phone = "2348000000000";
  const defaultMessage = encodeURIComponent(
    "Hello Yungola Build and Design! I'd like to inquire about your services."
  );

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end">
      {/* Interactive Glassmorphic Chat Widget */}
      {isOpen && (
        <div className="mb-4 w-80 md:w-96 bg-[#201f1fd0] backdrop-blur-lg border border-[#4e4633] shadow-2xl p-6 text-white animate-fade-up">
          <div className="flex justify-between items-center border-b border-[#4e4633] pb-3 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
              <div>
                <h4 className="font-bold text-sm tracking-wider font-montserrat text-[#ffe08b]">YUNGOLA STUDIO</h4>
                <p className="text-[10px] text-gray-400">Online Assistant</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close chat"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <div className="space-y-4 max-h-60 overflow-y-auto mb-4 pr-1">
            <div className="bg-[#2d3136] p-3 text-xs md:text-sm leading-relaxed rounded-lg rounded-tl-none font-montserrat">
              Welcome to **YUNGOLA**. We design architectural masterpieces and build custom luxury spaces. How can we bring your vision to life today?
            </div>
          </div>

          {/* Quick replies */}
          <div className="flex flex-col gap-2 font-montserrat">
            <a
              href="/quote"
              className="w-full text-left bg-primary-fixed hover:bg-[#ebd082] text-black font-bold text-xs py-2.5 px-4 tracking-wider uppercase transition-colors"
            >
              Start Your Project
            </a>
            <a
              href="/gallery"
              className="w-full text-left border border-[#4e4633] hover:bg-[#ffe08b]/10 text-white font-semibold text-xs py-2.5 px-4 tracking-wider uppercase transition-colors"
            >
              Browse Works
            </a>
            <a
              href={`https://wa.me/${phone}?text=${defaultMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-left border border-green-600/30 hover:bg-green-600/10 text-green-400 font-semibold text-xs py-2.5 px-4 tracking-wider uppercase transition-colors"
            >
              Direct WhatsApp Chat
            </a>
          </div>
        </div>
      )}

      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open Chat"
        className="bg-chat-purple text-white p-4 rounded-2xl shadow-xl hover:scale-105 transition-transform cursor-pointer focus:outline-none"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            clipRule="evenodd"
            d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
            fillRule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );
}
