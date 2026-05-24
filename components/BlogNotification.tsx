"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ArrowRight } from "lucide-react";

export default function BlogNotification() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const dismissed = sessionStorage.getItem("cbom-notification-dismissed");
      if (!dismissed) {
        setIsVisible(true);
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsVisible(false);
    sessionStorage.setItem("cbom-notification-dismissed", "true");
  };

  const handleLinkClick = () => {
    setIsVisible(false);
    sessionStorage.setItem("cbom-notification-dismissed", "true");
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-fade-in w-[calc(100%-2rem)] sm:w-auto max-w-[280px]">
      <Link
        href="/blog/cbom-india-compliance-guide"
        onClick={handleLinkClick}
        className="group flex flex-col bg-white text-black p-3 rounded-xl shadow-xl border border-gray-200 hover:border-gray-300 transition-all relative overflow-hidden"
      >
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-black transition-colors"
          aria-label="Close notification"
        >
          <X className="w-3.5 h-3.5" />
        </button>
        <div className="flex items-start gap-2.5">
          <div className="w-8 h-8 bg-gray-50 border border-gray-100 rounded-full flex items-center justify-center shrink-0">
            <Image src="/logo/quanta-transparent-bg-logo.svg" alt="QuantaLabs" width={16} height={16} className="object-contain" />
          </div>
          <div className="pr-4">
            <div className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-0.5">
              New Article
            </div>
            <div className="text-xs font-bold leading-snug mb-1.5 text-gray-800">
              Why Indian Fintechs Need a CBOM Before FY 2027
            </div>
            <div className="text-[10px] font-bold text-black flex items-center gap-1 group-hover:text-[#00E599] transition-colors">
              Read Article <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
