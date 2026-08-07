// CHANGED: Redesigned for Deep Tech Light Mode aesthetic.
// DATE: 2026-08-07 | VERSION: 4.0
"use client";

import { useState } from "react";
import { CheckCircle2, ChevronDown } from "lucide-react";

export default function ContactPageForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    topic: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", company: "", topic: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="py-12 flex flex-col items-start justify-center animate-fade-in bg-[#FAFAFA] border border-gray-200 p-8 shadow-sm">
        <div className="w-12 h-12 bg-white border border-gray-200 flex items-center justify-center mb-6">
          <CheckCircle2 className="w-6 h-6 text-[#C04A2B]" />
        </div>
        <h3 className="text-xl font-display font-medium text-[#111111] mb-3">Message Received</h3>
        <p className="text-gray-500 font-normal leading-relaxed max-w-sm mb-8">
          Thank you for reaching out. Our protocol engineers will review your inquiry and respond shortly.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-[10px] font-mono uppercase tracking-widest text-black hover:text-gray-600 transition-colors border-b border-black pb-1"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-8" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2 relative">
          <label htmlFor="name" className="font-mono text-[10px] text-gray-500 uppercase tracking-widest block">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={handleChange}
            disabled={status === "loading"}
            className="w-full bg-white border border-gray-200 px-4 py-3 text-[#141413] focus:outline-none focus:border-[#C04A2B] transition-colors rounded-none font-normal placeholder-gray-300 disabled:opacity-50"
            placeholder="Jane Doe"
          />
        </div>
        <div className="space-y-2 relative">
          <label htmlFor="email" className="font-mono text-[10px] text-gray-500 uppercase tracking-widest block">
            Work Email
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={handleChange}
            disabled={status === "loading"}
            className="w-full bg-white border border-gray-200 px-4 py-3 text-[#141413] focus:outline-none focus:border-[#C04A2B] transition-colors rounded-none font-normal placeholder-gray-300 disabled:opacity-50"
            placeholder="jane@company.com"
          />
        </div>
      </div>

      <div className="space-y-2 relative">
        <label htmlFor="company" className="font-mono text-[10px] text-gray-500 uppercase tracking-widest block">
          Company Name
        </label>
        <input
          type="text"
          id="company"
          value={formData.company}
          onChange={handleChange}
          disabled={status === "loading"}
          className="w-full bg-white border border-gray-200 px-4 py-3 text-black focus:outline-none focus:border-[#C04A2B] transition-colors rounded-none font-normal placeholder-gray-300 disabled:opacity-50"
          placeholder="Acme Financial Corp"
        />
      </div>

      <div className="space-y-2 relative">
        <label htmlFor="topic" className="font-mono text-[10px] text-gray-500 uppercase tracking-widest block">
          Primary Objective
        </label>
        <div className="relative">
          <select 
            id="topic"
            required
            value={formData.topic}
            onChange={handleChange}
            disabled={status === "loading"}
            className="w-full bg-white border border-gray-200 px-4 py-3 text-[#141413] focus:outline-none focus:border-[#C04A2B] transition-colors rounded-none font-normal appearance-none disabled:opacity-50 cursor-pointer"
          >
            <option value="" disabled>
              Select an option...
            </option>
            <option value="AI Integrations">
              AI Integrations & Agents
            </option>
            <option value="PQC Migrations">
              Post-Quantum Migrations
            </option>
            <option value="Enterprise Engineering">
              Enterprise Protocol Engineering
            </option>
            <option value="Other">Other Inquiry</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#141413]">
            <ChevronDown className="w-4 h-4 text-[#141413]" />
          </div>
        </div>
      </div>

      <div className="space-y-2 relative">
        <label htmlFor="message" className="font-mono text-[10px] text-gray-500 uppercase tracking-widest block">
          Project Details
        </label>
        <textarea
          id="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          disabled={status === "loading"}
          className="w-full bg-white border border-gray-200 px-4 py-3 text-[#141413] focus:outline-none focus:border-[#C04A2B] transition-colors rounded-none font-normal placeholder-gray-300 resize-none disabled:opacity-50"
          placeholder="Briefly describe your cryptographic infrastructure and timeline..."
        ></textarea>
      </div>

      {status === "error" && (
        <div className="text-red-500 text-sm font-medium flex items-center gap-2">
          Something went wrong. Please try again.
        </div>
      )}

      <div className="pt-4">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-[#C04A2B] text-white font-mono text-[10px] uppercase tracking-widest hover:bg-[#141413] transition-colors shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Transmitting..." : "Transmit Request"}
        </button>
      </div>
    </form>
  );
}
