"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const navLinks = [
    { href: "#products", label: "Products" },
    { href: "#how-it-works", label: "Process" },
    { href: "#safety", label: "Safety" },
    { href: "#results", label: "Results" },
    { href: "#about", label: "About" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "py-2 bg-black/70 backdrop-blur-2xl border-b border-white/[0.04]"
            : "py-4 sm:py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-0 group relative">
            <Image
              src="/images/wepark-logo-transparent.png"
              alt="WePark"
              width={scrolled ? 120 : 140}
              height={scrolled ? 44 : 52}
              className="object-contain transition-all duration-500 logo-glow sm:w-auto"
              style={{ height: "auto", maxWidth: scrolled ? "120px" : "140px" }}
              sizes="(max-width: 640px) 120px, (max-width: 1024px) 160px, 200px"
              priority
            />
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="animated-underline px-4 py-2 text-[13px] text-white/50 hover:text-white transition-colors duration-300 tracking-wide uppercase font-medium"
              >
                {link.label}
              </a>
            ))}
            <div className="w-px h-5 bg-white/10 mx-3" />
            <a
              href="#contact"
              className="btn-premium text-white px-6 py-2.5 rounded-full text-[13px] font-semibold tracking-wide uppercase"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden relative w-10 h-10 flex items-center justify-center z-[60]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-5">
              <span className={`absolute left-0 w-full h-[1.5px] bg-white transition-all duration-500 ${mobileOpen ? "top-2 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 w-full h-[1.5px] bg-white transition-all duration-500 top-2 ${mobileOpen ? "opacity-0 scale-0" : "opacity-100"}`} />
              <span className={`absolute left-0 w-full h-[1.5px] bg-white transition-all duration-500 ${mobileOpen ? "top-2 -rotate-45" : "top-4"}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu — full screen overlay (outside nav for proper z-index) */}
      <div className={`lg:hidden fixed inset-0 z-[55] bg-black/95 backdrop-blur-3xl transition-all duration-700 ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="flex flex-col items-center justify-center h-full gap-6 sm:gap-8 px-6">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-[Space_Grotesk] text-2xl sm:text-3xl font-bold text-white/70 hover:text-wp-orange transition-all duration-300"
              style={{ transitionDelay: mobileOpen ? `${i * 80}ms` : "0ms", opacity: mobileOpen ? 1 : 0, transform: mobileOpen ? "translateY(0)" : "translateY(20px)" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="btn-premium text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-base sm:text-lg font-semibold mt-4"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </>
  );
}
