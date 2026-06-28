"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

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
      <div className="py-12 flex flex-col items-center justify-center text-center animate-fade-in">
        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-extrabold text-black mb-3">Message Received</h3>
        <p className="text-gray-500 font-medium max-w-sm">
          Thank you for reaching out. Our protocol engineers will review your inquiry and respond shortly.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-8 text-xs font-bold uppercase tracking-widest text-black hover:text-[#C4ED5F] transition-colors"
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
          <label htmlFor="name" className="font-mono text-[10px] font-bold text-gray-500 uppercase tracking-widest block">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={handleChange}
            disabled={status === "loading"}
            className="w-full bg-white border-b-2 border-gray-200 px-0 py-2 text-black focus:outline-none focus:border-black transition-colors rounded-none font-medium placeholder-gray-300 disabled:opacity-50"
            placeholder="Jane Doe"
          />
        </div>
        <div className="space-y-2 relative">
          <label htmlFor="email" className="font-mono text-[10px] font-bold text-gray-500 uppercase tracking-widest block">
            Work Email
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={handleChange}
            disabled={status === "loading"}
            className="w-full bg-white border-b-2 border-gray-200 px-0 py-2 text-black focus:outline-none focus:border-black transition-colors rounded-none font-medium placeholder-gray-300 disabled:opacity-50"
            placeholder="jane@company.com"
          />
        </div>
      </div>

      <div className="space-y-2 relative">
        <label htmlFor="company" className="font-mono text-[10px] font-bold text-gray-500 uppercase tracking-widest block">
          Company Name
        </label>
        <input
          type="text"
          id="company"
          value={formData.company}
          onChange={handleChange}
          disabled={status === "loading"}
          className="w-full bg-white border-b-2 border-gray-200 px-0 py-2 text-black focus:outline-none focus:border-black transition-colors rounded-none font-medium placeholder-gray-300 disabled:opacity-50"
          placeholder="Acme Financial Corp"
        />
      </div>

      <div className="space-y-2 relative">
        <label htmlFor="topic" className="font-mono text-[10px] font-bold text-gray-500 uppercase tracking-widest block">
          Primary Objective
        </label>
        <select 
          id="topic"
          required
          value={formData.topic}
          onChange={handleChange}
          disabled={status === "loading"}
          className="w-full bg-white border-b-2 border-gray-200 px-0 py-2 text-black focus:outline-none focus:border-black transition-colors rounded-none font-medium appearance-none disabled:opacity-50"
        >
          <option value="" disabled>
            Select an option...
          </option>
          <option value="CBOM Audit">
            CBOM Audit (India DST Compliance)
          </option>
          <option value="PQC Migration">
            PQC Migration & Engineering
          </option>
          <option value="API Access">QuantaCipher API Access</option>
          <option value="Other">Other Inquiry</option>
        </select>
      </div>

      <div className="space-y-2 relative">
        <label htmlFor="message" className="font-mono text-[10px] font-bold text-gray-500 uppercase tracking-widest block">
          Project Details
        </label>
        <textarea
          id="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          disabled={status === "loading"}
          className="w-full bg-white border-b-2 border-gray-200 px-0 py-2 text-black focus:outline-none focus:border-black transition-colors rounded-none font-medium placeholder-gray-300 resize-none disabled:opacity-50"
          placeholder="Briefly describe your cryptographic infrastructure and timeline..."
        ></textarea>
      </div>

      {status === "error" && (
        <div className="text-red-500 text-sm font-bold flex items-center gap-2">
          Something went wrong. Please try again.
        </div>
      )}

      <div className="pt-4">
        <button
          type="submit"
          disabled={status === "loading"}
          className="group flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-black text-white font-bold hover:bg-[#C4ED5F] hover:text-black transition-colors text-xs uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(196,237,95,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Transmitting..." : "Transmit Request"}
        </button>
      </div>
    </form>
  );
}
