// CHANGED: Redesigned to match the light-mode structural theme.
// DATE: 2026-08-07 | VERSION: 3.0
"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

export default function Footer() {
  return (
    <footer className="bg-transparent pt-20 pb-10 text-[#141413] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo/quanta-transparent-bg-logo.svg" alt="QuantaLabs Logo" className="w-6 h-6" />
              <span className="text-xl font-display font-medium tracking-tight text-[#141413]">
                Quantalabs<span className="text-[#C04A2B]">.</span>
              </span>
            </div>
            <p className="text-[10px] text-gray-500 font-mono leading-loose tracking-widest uppercase">
              Building infrastructure for autonomous AI and quantum-safe enterprises.
            </p>
          </div>
          
          {/* Links Col 1 */}
          <div>
            <h4 className="text-[10px] uppercase font-mono tracking-[0.2em] text-gray-400 mb-6 font-medium">Products</h4>
            <ul className="space-y-6">
              <li>
                <Link href="https://quantachain.org" className="block group">
                  <div className="text-sm text-gray-600 group-hover:text-black transition-colors font-medium mb-1">QuantaChain</div>
                  <div className="text-xs text-gray-400 leading-relaxed group-hover:text-gray-600 transition-colors">PQC blockchain for autonomous agents & M2M AI economy.</div>
                </Link>
              </li>
              <li>
                <Link href="https://quantacipher.com" className="block group">
                  <div className="text-sm text-gray-600 group-hover:text-black transition-colors font-medium mb-1">QuantaCipher</div>
                  <div className="text-xs text-gray-400 leading-relaxed group-hover:text-gray-600 transition-colors">Enterprise PQC tunneling & encryption.</div>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Links Col 2 */}
          <div>
            <h4 className="text-[10px] uppercase font-mono tracking-[0.2em] text-gray-400 mb-6 font-medium">Company</h4>
            <ul className="space-y-6">
              <li>
                <Link href="/services" className="block group">
                  <div className="text-sm text-gray-600 group-hover:text-black transition-colors font-medium mb-1">Engineering Services</div>
                  <div className="text-xs text-gray-400 leading-relaxed group-hover:text-gray-600 transition-colors">AI & Cryptography implementations.</div>
                </Link>
              </li>
              <li>
                <Link href="/research" className="block group">
                  <div className="text-sm text-gray-600 group-hover:text-black transition-colors font-medium mb-1">Applied Research</div>
                  <div className="text-xs text-gray-400 leading-relaxed group-hover:text-gray-600 transition-colors">Frontier models and PQC research.</div>
                </Link>
              </li>
              <li><Link href="/company" className="block text-sm text-gray-600 hover:text-black transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="block text-sm text-gray-600 hover:text-black transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="block text-sm text-gray-600 hover:text-black transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Links Col 3 */}
          <div>
            <h4 className="text-[10px] uppercase font-mono tracking-[0.2em] text-gray-400 mb-6 font-medium">Connect</h4>
            <ul className="space-y-4">
              <li><Link href="https://github.com/quantalabss" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors"><GithubIcon className="w-3.5 h-3.5 text-gray-400" /> GitHub <ArrowUpRight className="w-3 h-3 text-gray-400"/></Link></li>
              <li><Link href="https://x.com/quantalabss" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors"><TwitterIcon className="w-3.5 h-3.5 text-gray-400" /> Twitter <ArrowUpRight className="w-3 h-3 text-gray-400"/></Link></li>
              <li><Link href="https://linkedin.com/company/quantachain" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors"><LinkedinIcon className="w-3.5 h-3.5 text-gray-400" /> LinkedIn <ArrowUpRight className="w-3 h-3 text-gray-400"/></Link></li>
            </ul>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Quantalabs Private Limited. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-[10px] font-mono text-gray-400 uppercase tracking-widest hover:text-black transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-[10px] font-mono text-gray-400 uppercase tracking-widest hover:text-black transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
