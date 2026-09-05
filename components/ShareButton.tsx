"use client";

import { Share2, Check } from "lucide-react";
import { useState } from "react";

export default function ShareButton({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url,
        });
      } catch (err) {
        // User aborted or error occurred
        console.log("Sharing cancelled or failed:", err);
      }
    } else {
      // Fallback to clipboard
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy:", err);
      }
    }
  };

  return (
    <div className="flex items-center gap-4">
      <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400">
        {copied ? "Link Copied!" : "Share Article"}
      </span>
      <button 
        onClick={handleShare}
        className={`w-10 h-10 rounded-full bg-white border flex items-center justify-center transition-all ${
          copied 
            ? "border-green-500 text-green-500" 
            : "border-[#e8e6dc] text-gray-500 hover:text-[#C04A2B] hover:border-[#C04A2B]"
        }`}
        title="Share this article"
      >
        {copied ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
      </button>
    </div>
  );
}
