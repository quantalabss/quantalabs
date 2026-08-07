"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check if the user has already consented
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Delay showing it slightly for better UX
      const timer = setTimeout(() => setShow(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setShow(false);
    // Dispatch custom event to notify analytics components
    window.dispatchEvent(new Event("cookieConsentAccepted"));
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "false");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-50 animate-fade-in">
      <div className="bg-white border border-gray-200 shadow-xl flex flex-col text-[#141413] p-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-[#C04A2B]"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-xl text-[#141413] leading-none inline-block">
              [ ]
            </span>
            <h3 className="font-bold text-xs uppercase tracking-widest font-mono text-[#141413]">
              System.Cookies
            </h3>
          </div>
          <p className="text-sm font-normal text-gray-600 leading-relaxed mb-4 mt-3">
            We use minimal cookies to analyze traffic and secure our
            infrastructure. We believe in data minimization.
          </p>
        </div>
        <div className="flex gap-3 relative z-10">
          <button
            onClick={acceptCookies}
            className="flex-1 px-4 py-2.5 bg-[#C04A2B] border border-[#C04A2B] text-white font-mono uppercase tracking-widest text-xs hover:bg-[#141413] hover:border-[#141413] transition-colors text-center"
          >
            Accept
          </button>
          <button
            onClick={declineCookies}
            className="flex-1 px-4 py-2.5 bg-white border border-gray-200 text-[#141413] font-mono uppercase tracking-widest text-xs hover:bg-gray-50 transition-colors text-center"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
