"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-wp-black border-t border-white/[0.03] relative noise">
      {/* Marquee strip */}
      <div className="border-b border-white/[0.03] py-4 overflow-hidden">
        <div className="flex whitespace-nowrap marquee-track">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="text-white/[0.12] font-[Space_Grotesk] text-6xl font-bold mx-8 select-none">
              WE ENGINEER SPACE
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-20">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Image
              src="/images/wepark-logo.jpeg"
              alt="WePark"
              width={120}
              height={44}
              className="logo-glow mb-6"
              style={{ height: "auto" }}
            />
            <p className="text-white/25 max-w-sm leading-relaxed text-sm">
              Engineering intelligent vertical parking infrastructure for modern India. Converting unused airspace and underground volume into efficient, safe, and elegant solutions.
            </p>
            <p className="text-white/10 text-xs mt-6">
              &copy; {new Date().getFullYear()} WePark. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white/40 text-[11px] font-bold uppercase tracking-[0.2em] mb-5">
              Navigation
            </h4>
            <div className="space-y-3">
              {[
                { href: "#products", label: "Products" },
                { href: "#stack-detail", label: "WePark Stack" },
                { href: "#pit-detail", label: "WePark Pit" },
                { href: "#how-it-works", label: "How It Works" },
                { href: "#safety", label: "Safety" },
                { href: "#results", label: "Results" },
                { href: "#about", label: "About" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <a key={link.href} href={link.href} className="block text-white/20 hover:text-wp-orange transition-colors duration-300 text-sm animated-underline">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white/40 text-[11px] font-bold uppercase tracking-[0.2em] mb-5">
              Contact
            </h4>
            <div className="space-y-3 text-sm">
              <a href="tel:+919344201121" className="block text-white/20 hover:text-wp-orange transition-colors duration-300">
                +91 93442 01121
              </a>
              <a href="mailto:rajkumar@wepark.co.in" className="block text-white/20 hover:text-wp-orange transition-colors duration-300">
                rajkumar@wepark.co.in
              </a>
              <p className="text-white/20">Coimbatore, Tamil Nadu</p>
              <a href="https://wepark.co.in" className="block text-white/20 hover:text-wp-orange transition-colors duration-300">
                wepark.co.in
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="section-divider" />
      <div className="py-4 px-6 lg:px-10 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-white/8 text-[10px] tracking-widest uppercase">
          Designed & Engineered with precision
        </p>
        <p className="text-white/8 text-[10px] tracking-widest uppercase">
          wepark.co.in
        </p>
      </div>
    </footer>
  );
}
