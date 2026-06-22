"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail } from "lucide-react";

export default function Footer() {
  const footerColumns = [
    {
      heading: "Solutions",
      links: [
        { label: "CBOM Audit", href: "/solutions/cbom-audit" },
        { label: "PQC Migration", href: "/solutions/pqc-migration" },
        { label: "Custom Engineering", href: "/solutions/engineering" },
      ],
    },
    {
      heading: "Products",
      links: [
        { label: "QuantaChain", href: "/products/quantachain" },
        { label: "QuantaCipher SaaS", href: "/products/quantacipher" },
      ],
    },
    {
      heading: "Ecosystem",
      links: [
        { label: "Quanta Wallet", href: "/ecosystem/quanta-wallet" },
        { label: "QuaScan Explorer", href: "/ecosystem/quascan" },
      ],
    },
    {
      heading: "Open Source",
      links: [
        { label: "Algo-PQC-Kit", href: "/ecosystem/algo-pqc-kit" },
        { label: "Ornyx Protocol", href: "/ecosystem/ornyx" },
        { label: "Falcon-Multisig", href: "/ecosystem/falcon-multisig" },
      ],
    },
    {
      heading: "Research",
      links: [
        { label: "Publications", href: "/research/publications" },
        { label: "Blog", href: "/blog" },
        { label: "NIST Guidelines", href: "#" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Careers", href: "/careers", badge: "Hiring" },
        { label: "Contact", href: "/contact" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>, href: "https://twitter.com/quantalabss", label: "Twitter" },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.18-.35 6.5-1.5 6.5-7a5.2 5.2 0 0 0-1.5-3.8 5.2 5.2 0 0 0-.15-3.8s-1.2-.38-3.9 1.4a13.38 13.38 0 0 0-7 0C6.2 1.5 5 1.9 5 1.9a5.2 5.2 0 0 0-.15 3.8A5.2 5.2 0 0 0 3 9.5c0 5.4 3.3 6.6 6.5 7.02a4.8 4.8 0 0 0-1 3.02V22"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>, href: "https://github.com/quantalabss", label: "GitHub" },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>, href: "https://linkedin.com/company/quantalabs", label: "LinkedIn" },
    { icon: <Mail className="w-4 h-4" />, href: "mailto:contact@quantalabs.cc", label: "Email" },
  ];

  return (
    <footer className="bg-[#C4ED5F] text-black border-t border-black/10">

      {/* ── PRE-FOOTER CTA GRID ── */}
      <div className="border-b border-black/10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            <div className="lg:col-span-8 p-10 md:p-16 border-b lg:border-b-0 lg:border-r border-black/10">
              <p className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">
                Initiate Protocol
              </p>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-black max-w-xl">
                Ready to secure your infrastructure?
              </h2>
            </div>
            
            <div className="lg:col-span-4 p-10 md:p-16 flex flex-col justify-center gap-4 bg-gray-50/50">
              <Link
                href="/contact"
                className="group flex items-center justify-between w-full px-6 py-4 bg-[#C4ED5F] text-black font-bold hover:bg-black hover:text-white transition-colors text-xs uppercase tracking-widest shadow-sm"
              >
                <span>Book Consultation</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="https://quantacipher.com"
                className="group flex items-center justify-between w-full px-6 py-4 border border-gray-200 text-black font-bold hover:border-black transition-colors text-xs uppercase tracking-widest bg-white"
              >
                <span>Explore QuantaCipher</span>
                <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-black transition-colors" />
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* ── MAIN FOOTER ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-6 group w-fit">
              <Image
                src="/logo/quanta-transparent-bg-logo.svg"
                alt="Quantalabs Logo"
                width={32}
                height={32}
                className="w-8 h-8 transition-transform group-hover:scale-110"
              />
              <span className="text-xl font-bold tracking-tighter text-black">
                Quantalabs<span className="text-[#C4ED5F]">.</span>
              </span>
            </Link>
            <p className="text-black/60 text-sm font-medium leading-relaxed mb-8 max-w-xs">
              Engineering sovereign infrastructure at the frontier of post-quantum cryptography.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-black text-black bg-transparent flex items-center justify-center hover:bg-black hover:text-[#C4ED5F] transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links grid */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerColumns.map((col) => (
              <div key={col.heading}>
                <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-black/50 mb-6">
                  {col.heading}
                </h4>
                <ul className="space-y-4">
                  {col.links.map((link) => (
                    <li key={link.label} className="flex items-center gap-2">
                      <Link
                        href={link.href}
                        target={(link as { external?: boolean }).external ? "_blank" : undefined}
                        rel={(link as { external?: boolean }).external ? "noopener noreferrer" : undefined}
                        className="text-sm text-black font-semibold hover:text-[#8ab329] transition-colors"
                      >
                        {link.label}
                      </Link>
                      {link.badge && (
                        <span className="text-[9px] font-mono font-bold tracking-widest uppercase px-1.5 py-0.5 border border-black/10 text-black/60 bg-black/5">
                          {link.badge}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="border-t border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-[10px] text-black/50 uppercase tracking-widest font-bold">
            © {new Date().getFullYear()} QuantaLabs. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-[10px] font-mono font-bold uppercase tracking-widest text-black/50">
            <Link href="/privacy" className="hover:text-black transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-black transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
