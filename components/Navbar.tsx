"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";

// Dropdown item interface
interface DropdownItem {
  title: string;
  href: string;
  description: string;
}

interface NavItem {
  name: string;
  href: string;
  dropdown?: DropdownItem[];
}

const NAV_ITEMS: NavItem[] = [
  {
    name: "Products",
    href: "/products",
    dropdown: [
      {
        title: "QuantaChain",
        description: "PQC execution layer for AI agents",
        href: "https://quantachain.org",
      },
      {
        title: "QuantaCipher",
        description: "Zero-trust enterprise Kyber SDK",
        href: "https://quantacipher.com",
      },
    ],
  },
  {
    name: "Services",
    href: "/services",
    dropdown: [
      {
        title: "AI Engineering",
        description: "Autonomous LLM agent frameworks",
        href: "/services#ai-engineering",
      },
      {
        title: "PQC Migrations",
        description: "Protocol cryptographic upgrades",
        href: "/services#pqc-migrations",
      },
    ],
  },
  {
    name: "Company",
    href: "/company",
    dropdown: [
      {
        title: "About Us",
        href: "/company",
        description: "Our mission and headquarters",
      },
      {
        title: "Blog",
        href: "/blog",
        description: "News and protocol updates",
      },
      {
        title: "Research",
        href: "/research",
        description: "Peer-reviewed PQC and ZKP papers",
      },
      {
        title: "Careers",
        href: "/careers",
        description: "Join the frontier of protocol engineering",
      },
    ],
  },
  {
    name: "Connect",
    href: "#",
    dropdown: [
      {
        title: "GitHub",
        description: "View our open-source tools",
        href: "https://github.com/quantalabss",
      },
      {
        title: "Twitter / X",
        description: "Follow for protocol updates",
        href: "https://x.com/quantalabss",
      },
      {
        title: "LinkedIn",
        description: "Professional networking",
        href: "https://linkedin.com/company/quantachain",
      },
    ],
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 font-sans border-b ${
        isScrolled
          ? "bg-[#FAF9F5]/90 backdrop-blur-md border-gray-200 shadow-sm"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* 1. Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/logo/quanta-transparent-bg-logo.svg"
                alt="Quantalabs Logo"
                width={32}
                height={32}
                className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-xl font-display font-medium tracking-tight text-[#141413]">
                Quantalabs<span className="text-[#C04A2B]">.</span>
              </span>
            </Link>
          </div>

          {/* 2. Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.dropdown ? (
                  <button className="flex items-center gap-1.5 px-4 py-2 text-xs font-mono uppercase tracking-[0.15em] text-gray-500 hover:text-black transition-colors">
                    {item.name}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        activeDropdown === item.name
                          ? "rotate-180 text-black"
                          : "text-gray-400"
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="flex items-center gap-1.5 px-4 py-2 text-xs font-mono uppercase tracking-[0.15em] text-gray-500 hover:text-black transition-colors"
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <div
                    className={`absolute top-full left-0 w-72 pt-4 transition-all duration-200 origin-top-left ${
                      activeDropdown === item.name
                        ? "opacity-100 scale-100 translate-y-0 visible"
                        : "opacity-0 scale-95 translate-y-2 invisible"
                    }`}
                  >
                    <div className="bg-white border-t-2 border-t-black border-x border-b border-gray-200 shadow-xl overflow-hidden flex flex-col">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.title}
                          href={dropdownItem.href}
                          className="block p-5 bg-white border-l-2 border-transparent hover:border-[#C04A2B] hover:bg-[#FAF9F5] border-b border-gray-100 last:border-b-0 transition-all group/item"
                        >
                          <div className="text-sm font-display font-medium text-black transition-colors flex items-center justify-between mb-1">
                            {dropdownItem.title}
                            <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 translate-y-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 group-hover/item:translate-y-0 transition-all text-black" />
                          </div>
                          <div className="text-xs text-gray-500 font-sans">
                            {dropdownItem.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* 3. Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://linkedin.com/company/quantachain"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-black transition-colors"
              aria-label="LinkedIn"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-[#C04A2B] text-white text-[10px] uppercase tracking-widest font-mono hover:bg-[#141413] transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* 4. Mobile Menu Toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-500 hover:text-black transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden fixed inset-x-0 top-20 bg-white border-b border-gray-200 overflow-y-auto transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? "max-h-[calc(100vh-80px)] opacity-100"
            : "max-h-0 opacity-0 border-transparent overflow-hidden"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {NAV_ITEMS.map((item) => (
            <div key={item.name} className="py-2">
              <div className="px-3 py-2 text-xs font-mono uppercase tracking-widest text-gray-500 border-b border-gray-100">
                {item.dropdown ? (
                  <span>{item.name}</span>
                ) : (
                  <Link href={item.href} onClick={() => setMobileMenuOpen(false)} className="block w-full text-black">
                    {item.name}
                  </Link>
                )}
              </div>
              {item.dropdown && (
                <div className="mt-2 space-y-1 pl-4">
                  {item.dropdown.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.title}
                      href={dropdownItem.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-black"
                    >
                      {dropdownItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-6 pb-2 px-3 flex flex-col gap-3">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center px-5 py-3 bg-[#C04A2B] text-white text-xs uppercase tracking-widest font-mono hover:bg-[#141413] transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
