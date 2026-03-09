"use client";
import { useState, useEffect } from "react";
import { useScrollReveal, useCountUp, useScrollProgress } from "@/lib/useScrollReveal";
import Image from "next/image";

/* ═══════════════════════════════════════════════════════ */
/*  WEPARK — LIGHT THEME (Complete)                       */
/*  Clean, architectural, Apple-inspired                   */
/* ═══════════════════════════════════════════════════════ */

/* ─── NAVBAR ─── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  const links = [
    { href: "#products", label: "Products" },
    { href: "#process", label: "Process" },
    { href: "#safety", label: "Safety" },
    { href: "#results", label: "Results" },
    { href: "#builders", label: "For Builders" },
    { href: "#about", label: "About" },
    { href: "#faq", label: "FAQ" },
  ];
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? "py-2 bg-white/90 backdrop-blur-2xl shadow-sm border-b border-black/[0.06]" : "py-6 bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <div className={`relative rounded-xl overflow-hidden bg-black transition-all duration-500 ${scrolled ? "px-3 py-2" : "px-4 py-2.5"}`}>
            <Image src="/images/wepark-logo.jpeg" alt="WePark" width={scrolled ? 140 : 180} height={scrolled ? 50 : 65} className="object-contain transition-all duration-500" style={{ height: "auto" }} priority />
          </div>
        </a>
        <div className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="px-4 py-2 text-[13px] text-black/70 hover:text-wp-orange transition-colors duration-300 tracking-wide uppercase font-medium">{l.label}</a>
          ))}
          <div className="w-px h-5 bg-black/10 mx-3" />
          <a href="#contact" className="bg-black text-white px-6 py-2.5 rounded-full text-[13px] font-semibold tracking-wide uppercase hover:bg-wp-orange transition-all duration-500 hover:shadow-lg hover:shadow-wp-orange/20">Get a Quote</a>
        </div>
        <button className="lg:hidden relative w-10 h-10 flex items-center justify-center" onClick={() => setMobileOpen(!mobileOpen)}>
          <div className="relative w-6 h-5">
            <span className={`absolute left-0 w-full h-[2px] bg-black/80 transition-all duration-500 ${mobileOpen ? "top-2 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 w-full h-[2px] bg-black/80 transition-all duration-500 top-2 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 w-full h-[2px] bg-black/80 transition-all duration-500 ${mobileOpen ? "top-2 -rotate-45" : "top-4"}`} />
          </div>
        </button>
      </div>
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 bg-white/98 backdrop-blur-2xl z-[-1] flex flex-col items-center justify-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="font-[Space_Grotesk] text-3xl font-bold text-black/70 hover:text-wp-orange transition-all">{l.label}</a>
          ))}
          <a href="#contact" onClick={() => setMobileOpen(false)} className="bg-black text-white px-10 py-4 rounded-full text-lg font-semibold mt-4">Get a Quote</a>
        </div>
      )}
    </nav>
  );
}

/* ─── HERO ─── */
function Hero() {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 300);
    const t2 = setTimeout(() => setPhase(2), 700);
    const t3 = setTimeout(() => setPhase(3), 1100);
    const t4 = setTimeout(() => setPhase(4), 1500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FAFAF7]">
      <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.03) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] bg-wp-orange/[0.04] rounded-full blur-[150px]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-wp-amber/[0.03] rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className={`transition-all duration-1000 ${phase >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <span className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-wp-orange/20 bg-wp-orange/[0.04]">
            <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-wp-orange opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-wp-orange" /></span>
            <span className="text-wp-orange text-sm font-medium tracking-wide">Now Launching in Coimbatore</span>
          </span>
        </div>

        <h1 className="mt-10 font-[Space_Grotesk] leading-[0.92] tracking-tight">
          <span className="block overflow-hidden">
            <span className={`block text-[clamp(2rem,5.5vw,4.5rem)] font-bold text-black transition-all duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] ${phase >= 2 ? "translate-y-0 opacity-100" : "translate-y-[120%] opacity-0"}`}>
              Where Do Cities Find
            </span>
          </span>
          <span className="block overflow-hidden mt-1">
            <span className={`block text-[clamp(2rem,5.5vw,4.5rem)] font-bold transition-all duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] ${phase >= 2 ? "translate-y-0 opacity-100" : "translate-y-[120%] opacity-0"}`}>
              <span className="text-wp-orange">Space to Park</span>
              <span className="text-black">?</span>
            </span>
          </span>
        </h1>

        <div className={`mt-8 transition-all duration-[1.6s] ${phase >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-wp-orange/30" />
            <p className="text-2xl sm:text-3xl font-light tracking-wide">
              <span className="text-black/30">We</span>{" "}<span className="text-wp-orange font-semibold">Engineer</span>{" "}<span className="text-black/30">It.</span>
            </p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-wp-orange/30" />
          </div>
        </div>

        <p className={`mt-8 text-black/50 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed transition-all duration-[1.8s] ${phase >= 3 ? "opacity-100" : "opacity-0"}`}>
          Intelligent vertical parking systems that <span className="text-black/80 font-medium">double your capacity</span> without expanding your footprint.
        </p>

        <div className={`mt-12 flex flex-col sm:flex-row items-center justify-center gap-5 transition-all duration-[2s] ${phase >= 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <a href="#products" className="bg-black text-white px-10 py-4 rounded-full text-lg font-semibold tracking-wide hover:bg-wp-orange transition-all duration-500 hover:shadow-xl hover:shadow-wp-orange/20 group flex items-center gap-3">
            Explore Solutions
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="transition-transform group-hover:translate-x-1"><path d="M4 10h12M12 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
          </a>
          <a href="#contact" className="border-2 border-black/10 text-black/70 px-10 py-4 rounded-full text-lg font-medium tracking-wide hover:border-wp-orange/40 hover:text-wp-orange transition-all duration-500 group flex items-center gap-3">
            Get a Quote
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="transition-transform group-hover:translate-x-1"><path d="M3.75 9h10.5M10.5 3.75L15.75 9l-5.25 5.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
          </a>
        </div>
      </div>

      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 transition-all duration-[2s] ${phase >= 4 ? "opacity-100" : "opacity-0"}`}>
        <a href="#problem" className="flex flex-col items-center gap-3 group">
          <span className="text-xs text-black/30 uppercase tracking-[0.3em] font-semibold group-hover:text-wp-orange transition-colors">Discover</span>
          <div className="w-6 h-10 rounded-full border-2 border-black/15 flex justify-center pt-2 group-hover:border-wp-orange/40 transition-colors">
            <div className="w-1.5 h-3 rounded-full bg-wp-orange animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}

/* ─── PROBLEM ─── */
function ProblemSection() {
  return (
    <section id="problem" className="relative py-28 md:py-40 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,107,0,0.02),transparent_60%)]" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <span className="reveal inline-block text-wp-orange text-[11px] uppercase tracking-[0.4em] font-semibold mb-6 border border-wp-orange/20 px-4 py-1.5 rounded-full bg-wp-orange/[0.03]">The Urban Crisis</span>
        </div>
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="reveal font-[Space_Grotesk] text-4xl sm:text-5xl md:text-6xl font-bold text-black leading-[1.05]">
            India adds <span className="text-wp-orange">30,000 cars</span> every day.
            <br /><span className="text-black/20">Parking space is shrinking.</span>
          </h2>
          <p className="reveal mt-8 text-black/40 text-xl md:text-2xl font-light leading-relaxed max-w-2xl mx-auto">
            The gap between vehicles and parking is a crisis hiding in plain sight.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
          {[
            { val: "30", suf: "K+", label: "cars added daily in India" },
            { val: "70", suf: "%", label: "apartments lack adequate parking" },
            { val: "2", suf: "×", label: "car growth vs parking in a decade" },
          ].map((s, i) => (
            <div key={i} className="reveal bg-[#FAFAF7] border border-black/[0.05] rounded-2xl p-8 md:p-10 text-center hover:border-wp-orange/20 hover:shadow-xl hover:shadow-wp-orange/5 transition-all duration-500 hover:-translate-y-1" style={{ transitionDelay: `${i * 0.15}s` }}>
              <p data-countup data-target={s.val} data-suffix={s.suf} className="font-[Space_Grotesk] text-6xl md:text-7xl font-bold text-wp-orange">0{s.suf}</p>
              <p className="text-black/40 mt-4 text-sm leading-relaxed tracking-wide">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="reveal text-center">
          <h3 className="font-[Space_Grotesk] text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight">
            What if you could <span className="text-wp-orange">double your parking</span>
            <br /><span className="text-black/20">without adding a single square foot?</span>
          </h3>
        </div>
      </div>
    </section>
  );
}

/* ─── SOLUTION ─── */
function SolutionSection() {
  return (
    <section className="relative py-28 md:py-40 bg-[#FAFAF7] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-wp-orange/[0.02] rounded-full blur-[200px]" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="reveal max-w-4xl mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[2px] bg-wp-orange rounded-full" />
            <span className="text-wp-orange text-[11px] uppercase tracking-[0.4em] font-semibold">The Answer</span>
          </div>
          <h2 className="font-[Space_Grotesk] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
            <span className="text-black/30">We don&apos;t just manufacture</span>
            <br /><span className="text-black/30">parking systems.</span>
          </h2>
          <p className="font-[Space_Grotesk] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-wp-orange mt-4">
            We Engineer Space.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── PRODUCTS ─── */
function ProductsSection() {
  return (
    <section id="products" className="py-28 md:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="reveal text-center mb-20">
          <span className="inline-block text-wp-orange text-[11px] uppercase tracking-[0.4em] font-semibold mb-6 border border-wp-orange/20 px-4 py-1.5 rounded-full bg-wp-orange/[0.03]">Our Products</span>
          <h2 className="font-[Space_Grotesk] text-4xl md:text-5xl font-bold text-black mt-4">Two Engineered Solutions</h2>
          <p className="text-black/40 text-lg mt-4 max-w-xl mx-auto">One mission: double your parking capacity.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* STACK */}
          <div className="reveal group bg-[#FAFAF7] rounded-3xl p-8 md:p-12 border border-black/[0.05] hover:border-wp-orange/25 hover:shadow-2xl hover:shadow-wp-orange/5 transition-all duration-700 hover:-translate-y-2 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-wp-orange/[0.03] rounded-full blur-[100px] group-hover:bg-wp-orange/[0.06] transition-all duration-1000" />
            {/* Animated stack SVG */}
            <div className="absolute right-6 top-6 opacity-[0.40] group-hover:opacity-[0.65] transition-opacity duration-1000">
              <svg width="140" height="160" viewBox="0 0 180 200" fill="none">
                <rect x="20" y="160" width="140" height="5" rx="2.5" fill="#FF6B00" />
                <rect x="20" y="80" width="140" height="5" rx="2.5" fill="#FF6B00">
                  <animate attributeName="y" values="155;80;80;155" dur="5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1" />
                </rect>
                <rect x="45" y="58" width="90" height="18" rx="6" fill="#FF6B00">
                  <animate attributeName="y" values="134;58;58;134" dur="5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1" />
                </rect>
                <rect x="60" y="47" width="60" height="14" rx="5" fill="#FF6B00" opacity="0.7">
                  <animate attributeName="y" values="123;47;47;123" dur="5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1" />
                </rect>
                <g opacity="0.3"><rect x="45" y="134" width="90" height="18" rx="6" fill="#FF6B00" /><rect x="60" y="123" width="60" height="14" rx="5" fill="#FF6B00" /></g>
              </svg>
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 20V4M12 4L6 10M12 4l6 6" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" /></svg>
                <span className="font-mono text-wp-orange text-[11px] tracking-[0.3em] uppercase font-bold">Goes Up</span>
              </div>
              <h3 className="font-[Space_Grotesk] text-4xl md:text-5xl font-bold text-black tracking-tight">WEPARK <span className="text-wp-orange">STACK</span></h3>
              <p className="text-black/30 text-sm mt-2 italic">Upper–Lower Mechanical Parking</p>
              <p className="text-black/50 mt-6 leading-relaxed text-lg">Hydraulic lift raises one car above while another parks below. No pit needed. Doubles capacity in existing stilt parking areas.</p>
              <div className="flex flex-wrap gap-2 mt-6">
                {["Apartments", "IT Parks", "Offices", "Hospitals"].map((t) => (
                  <span key={t} className="px-3 py-1.5 rounded-full text-[11px] font-medium bg-black/[0.04] text-black/50 border border-black/[0.06] tracking-wide">{t}</span>
                ))}
              </div>
              <a href="#stack-detail" className="inline-flex items-center gap-2 mt-8 text-wp-orange font-semibold tracking-wide group/link">
                <span>Explore Stack</span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="transition-transform duration-300 group-hover/link:translate-x-2"><path d="M4 9h10M10 3l5.25 6-5.25 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            </div>
          </div>

          {/* PIT */}
          <div className="reveal group bg-[#FAFAF7] rounded-3xl p-8 md:p-12 border border-black/[0.05] hover:border-wp-amber/25 hover:shadow-2xl hover:shadow-wp-amber/5 transition-all duration-700 hover:-translate-y-2 relative overflow-hidden" style={{ transitionDelay: "0.2s" }}>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-wp-amber/[0.03] rounded-full blur-[100px] group-hover:bg-wp-amber/[0.06] transition-all duration-1000" />
            <div className="absolute right-6 top-6 opacity-[0.40] group-hover:opacity-[0.65] transition-opacity duration-1000">
              <svg width="140" height="160" viewBox="0 0 180 200" fill="none">
                <rect x="10" y="80" width="55" height="4" rx="2" fill="#F59E0B" />
                <rect x="115" y="80" width="55" height="4" rx="2" fill="#F59E0B" />
                <rect x="65" y="84" width="3" height="80" fill="#F59E0B" opacity="0.3" />
                <rect x="112" y="84" width="3" height="80" fill="#F59E0B" opacity="0.3" />
                <rect x="68" y="80" width="44" height="4" rx="2" fill="#F59E0B">
                  <animate attributeName="y" values="80;155;155;80" dur="5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1" />
                </rect>
                <rect x="72" y="60" width="36" height="16" rx="5" fill="#F59E0B" opacity="0.8">
                  <animate attributeName="y" values="60;135;135;60" dur="5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1" />
                </rect>
                <rect x="76" y="50" width="28" height="12" rx="4" fill="#F59E0B" opacity="0.5">
                  <animate attributeName="y" values="50;125;125;50" dur="5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1" />
                </rect>
              </svg>
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 4v16M12 20l-6-6M12 20l6-6" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" /></svg>
                <span className="font-mono text-wp-amber text-[11px] tracking-[0.3em] uppercase font-bold">Goes Down</span>
              </div>
              <h3 className="font-[Space_Grotesk] text-4xl md:text-5xl font-bold text-black tracking-tight">WEPARK <span className="text-wp-amber">PIT</span></h3>
              <p className="text-black/30 text-sm mt-2 italic">Ground-Level Hidden Parking</p>
              <p className="text-black/50 mt-6 leading-relaxed text-lg">Vehicle descends into an underground pit. Second car parks above at ground level. Invisible, elegant, premium.</p>
              <div className="flex flex-wrap gap-2 mt-6">
                {["Luxury Villas", "Premium Apartments", "Showrooms", "Height-Restricted"].map((t) => (
                  <span key={t} className="px-3 py-1.5 rounded-full text-[11px] font-medium bg-black/[0.04] text-black/50 border border-black/[0.06] tracking-wide">{t}</span>
                ))}
              </div>
              <a href="#pit-detail" className="inline-flex items-center gap-2 mt-8 text-wp-amber font-semibold tracking-wide group/link">
                <span>Explore Pit</span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="transition-transform duration-300 group-hover/link:translate-x-2"><path d="M4 9h10M10 3l5.25 6-5.25 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── PRODUCT DETAILS ─── */
const stackSpecs = [
  { label: "Load Capacity", value: "2,500 kg" },
  { label: "Platform Size", value: "5.2m × 2.6m" },
  { label: "Min Clear Height", value: "3.6 m" },
  { label: "Lift Height", value: "1.8–2.0 m" },
  { label: "Drive System", value: "Hydraulic" },
  { label: "Safety", value: "Multi-lock" },
  { label: "Power", value: "2.2–3.7 kW" },
  { label: "Pit Required", value: "None" },
];

const pitSpecs = [
  { label: "Load Capacity", value: "2,500 kg" },
  { label: "Platform Size", value: "5.2m × 2.6m" },
  { label: "Pit Depth", value: "1.6–1.8 m" },
  { label: "Clear Height Above", value: "2.4 m" },
  { label: "Drive System", value: "Hydraulic" },
  { label: "Safety", value: "Locks + Switches" },
  { label: "Power", value: "2.2–3.7 kW" },
  { label: "Visibility", value: "Flush Ground" },
];

function LightSpecGrid({ specs }: { specs: typeof stackSpecs }) {
  return (
    <div className="stagger-children grid grid-cols-2 sm:grid-cols-4 gap-3">
      {specs.map((spec, i) => (
        <div key={i} className="bg-white rounded-xl p-4 border border-black/[0.05] hover:border-wp-orange/20 hover:shadow-md transition-all duration-500">
          <p className="text-black/30 text-[10px] uppercase tracking-wider mb-1">{spec.label}</p>
          <p className="font-mono text-black font-semibold text-sm">{spec.value}</p>
        </div>
      ))}
    </div>
  );
}

function LightStepItem({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="flex gap-5 group/step">
      <div className="flex-shrink-0 relative">
        <div className="w-10 h-10 rounded-full border-2 border-wp-orange/20 flex items-center justify-center group-hover/step:border-wp-orange/50 group-hover/step:bg-wp-orange/5 transition-all duration-500">
          <span className="font-mono text-wp-orange text-xs font-bold">{num}</span>
        </div>
        <div className="absolute top-10 left-1/2 w-px h-full -translate-x-1/2 bg-gradient-to-b from-wp-orange/10 to-transparent" />
      </div>
      <div className="pb-8">
        <h5 className="text-black font-semibold text-lg">{title}</h5>
        <p className="text-black/40 text-sm mt-1.5 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function ProductDetailsSection() {
  return (
    <section className="bg-[#FAFAF7]">
      {/* STACK Detail */}
      <div id="stack-detail" className="relative py-28 md:py-40 border-b border-black/[0.04]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-wp-orange/[0.02] rounded-full blur-[150px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <div className="reveal flex items-center gap-3 mb-4">
                <div className="w-8 h-[2px] bg-wp-orange rounded-full" />
                <span className="font-mono text-wp-orange text-[12px] tracking-[0.3em] uppercase font-bold">Product 01</span>
              </div>
              <h2 className="reveal font-[Space_Grotesk] text-4xl sm:text-5xl md:text-6xl font-bold text-black tracking-tight">
                WEPARK <span className="text-wp-orange">STACK</span>
              </h2>
              <p className="reveal text-black/25 text-lg mt-2 italic font-light">&ldquo;Upper–Lower Mechanical Parking System&rdquo;</p>
              <p className="reveal text-black/50 mt-8 leading-relaxed text-lg">
                Designed to <span className="text-black/80 font-medium">double parking capacity</span> within the same footprint by utilizing vertical air space. Ideal for apartments, commercial buildings, office complexes, and villas.
              </p>
              <div className="reveal mt-12">
                <p className="text-[11px] text-black/30 uppercase tracking-[0.3em] font-semibold mb-8">How It Works</p>
                <LightStepItem num="01" title="Park at Ground Level" desc="Drive in and park at the standard ground floor level." />
                <LightStepItem num="02" title="Hydraulic Lift Engages" desc="The platform rises smoothly — powered by a precision hydraulic mechanism." />
                <LightStepItem num="03" title="Safety Locks Secure" desc="Multi-position mechanical locks secure the raised platform at every point." />
                <LightStepItem num="04" title="Second Car Parks Below" desc="Another vehicle parks in the freed space. Fully independent operation." />
              </div>
              <a href="#contact" className="reveal inline-flex items-center gap-3 mt-6 bg-black text-white px-8 py-4 rounded-full font-semibold tracking-wide hover:bg-wp-orange transition-all duration-500 hover:shadow-lg hover:shadow-wp-orange/20">
                Get Quote for Stack
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M4 9h10M10 3l5.25 6-5.25 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            </div>
            <div className="space-y-8">
              <div className="reveal relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-[#f0f0ed] to-[#e8e8e4] border border-black/[0.05]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg width="300" height="250" viewBox="0 0 300 250" fill="none" className="opacity-65">
                    <rect x="30" y="200" width="240" height="6" rx="3" fill="#FF6B00" />
                    <rect x="30" y="100" width="240" height="6" rx="3" fill="#FF6B00" opacity="0.8">
                      <animate attributeName="y" values="194;100;100;194" dur="5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1" />
                    </rect>
                    <rect x="38" y="100" width="4" height="100" fill="#FF6B00" opacity="0.4">
                      <animate attributeName="height" values="0;100;100;0" dur="5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1" />
                    </rect>
                    <rect x="258" y="100" width="4" height="100" fill="#FF6B00" opacity="0.4">
                      <animate attributeName="height" values="0;100;100;0" dur="5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1" />
                    </rect>
                    <rect x="80" y="75" width="140" height="22" rx="8" fill="#FF6B00" opacity="0.7">
                      <animate attributeName="y" values="172;75;75;172" dur="5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1" />
                    </rect>
                    <rect x="100" y="60" width="100" height="18" rx="6" fill="#FF6B00" opacity="0.5">
                      <animate attributeName="y" values="157;60;60;157" dur="5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1" />
                    </rect>
                    <g opacity="0.25"><rect x="80" y="172" width="140" height="22" rx="8" fill="#FF6B00" /><rect x="100" y="157" width="100" height="18" rx="6" fill="#FF6B00" /></g>
                  </svg>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <p className="text-black/15 text-xs tracking-wider uppercase">Stack System — Product Photography Coming Soon</p>
                </div>
              </div>
              <div className="reveal">
                <p className="text-[11px] text-black/30 uppercase tracking-[0.3em] font-semibold mb-4">Technical Specifications</p>
                <LightSpecGrid specs={stackSpecs} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PIT Detail */}
      <div id="pit-detail" className="relative py-28 md:py-40">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-wp-amber/[0.02] rounded-full blur-[150px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div className="space-y-8 order-2 lg:order-1">
              <div className="reveal relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-[#f0f0ed] to-[#e8e8e4] border border-black/[0.05]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg width="300" height="250" viewBox="0 0 300 250" fill="none" className="opacity-65">
                    <rect x="20" y="100" width="100" height="5" rx="2.5" fill="#F59E0B" />
                    <rect x="180" y="100" width="100" height="5" rx="2.5" fill="#F59E0B" />
                    <rect x="120" y="105" width="4" height="100" fill="#F59E0B" opacity="0.2" />
                    <rect x="176" y="105" width="4" height="100" fill="#F59E0B" opacity="0.2" />
                    <rect x="124" y="100" width="52" height="5" rx="2.5" fill="#F59E0B" opacity="0.8">
                      <animate attributeName="y" values="100;195;195;100" dur="5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1" />
                    </rect>
                    <rect x="128" y="78" width="44" height="18" rx="6" fill="#F59E0B" opacity="0.6">
                      <animate attributeName="y" values="78;173;173;78" dur="5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1" />
                    </rect>
                    <rect x="134" y="66" width="32" height="14" rx="5" fill="#F59E0B" opacity="0.4">
                      <animate attributeName="y" values="66;161;161;66" dur="5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1" />
                    </rect>
                  </svg>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <p className="text-black/15 text-xs tracking-wider uppercase">Pit System — Product Photography Coming Soon</p>
                </div>
              </div>
              <div className="reveal">
                <p className="text-[11px] text-black/30 uppercase tracking-[0.3em] font-semibold mb-4">Technical Specifications</p>
                <LightSpecGrid specs={pitSpecs} />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="reveal flex items-center gap-3 mb-4">
                <div className="w-8 h-[2px] bg-wp-amber rounded-full" />
                <span className="font-mono text-wp-amber text-[12px] tracking-[0.3em] uppercase font-bold">Product 02</span>
              </div>
              <h2 className="reveal font-[Space_Grotesk] text-4xl sm:text-5xl md:text-6xl font-bold text-black tracking-tight">
                WEPARK <span className="text-wp-amber">PIT</span>
              </h2>
              <p className="reveal text-black/25 text-lg mt-2 italic font-light">&ldquo;Ground-Level Hidden Parking System&rdquo;</p>
              <p className="reveal text-black/50 mt-8 leading-relaxed text-lg">
                A vertically moving platform inside a civil pit. Park at ground level while another vehicle is stored <span className="text-black/80 font-medium">invisibly below</span>. The premium solution where aesthetics matter.
              </p>
              <div className="reveal mt-12">
                <p className="text-[11px] text-black/30 uppercase tracking-[0.3em] font-semibold mb-8">How It Works</p>
                <LightStepItem num="01" title="Park on Flush Platform" desc="Drive onto the ground-level platform — completely flush with the floor." />
                <LightStepItem num="02" title="Platform Descends into Pit" desc="Hydraulic system smoothly lowers the vehicle underground." />
                <LightStepItem num="03" title="Safety Locks Engage" desc="Mechanical locks and limit switches secure the position at every stage." />
                <LightStepItem num="04" title="Second Car Parks Above" desc="The ground is now clear — park another vehicle at normal floor level." />
              </div>
              <a href="#contact" className="reveal inline-flex items-center gap-3 mt-6 bg-black text-white px-8 py-4 rounded-full font-semibold tracking-wide hover:bg-wp-orange transition-all duration-500 hover:shadow-lg hover:shadow-wp-orange/20">
                Get Quote for Pit
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M4 9h10M10 3l5.25 6-5.25 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── PROCESS (HOW IT WORKS) ─── */
function ProcessSection() {
  return (
    <section id="process" className="py-28 md:py-40 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-20">
          <span className="reveal inline-block text-wp-orange text-[11px] uppercase tracking-[0.4em] font-semibold mb-6 border border-wp-orange/20 px-4 py-1.5 rounded-full bg-wp-orange/[0.03]">Simple Process</span>
          <h2 className="reveal font-[Space_Grotesk] text-4xl sm:text-5xl md:text-6xl font-bold text-black mt-4 tracking-tight">
            3 Steps to <span className="text-wp-orange">Double</span><br />Your Parking.
          </h2>
        </div>
        <div className="relative max-w-5xl mx-auto">
          <div className="hidden md:block absolute top-[52px] left-[16%] right-[16%] h-px bg-gradient-to-r from-wp-orange/20 via-wp-orange/10 to-wp-orange/20" />
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { n: "01", t: "Assess", d: "We visit your site, measure every dimension, and design the optimal parking configuration.", tag: "Free site visit" },
              { n: "02", t: "Install", d: "Expert installation in days — not months. Minimal civil modification. Zero disruption.", tag: "3–7 days" },
              { n: "03", t: "Park", d: "Double your parking capacity from day one. Simple one-button operation. Full training included.", tag: "2× instantly" },
            ].map((s, i) => (
              <div key={i} className="reveal text-center" style={{ transitionDelay: `${i * 0.2}s` }}>
                <div className="relative inline-flex mb-8">
                  <div className="w-[104px] h-[104px] rounded-full border-2 border-wp-orange/15 flex items-center justify-center relative group hover:border-wp-orange/30 transition-all duration-500">
                    <div className="absolute inset-0 rounded-full bg-wp-orange/[0.02] group-hover:bg-wp-orange/[0.06] transition-all duration-700" />
                    <div className="absolute inset-2 rounded-full border border-wp-orange/10" />
                    <span className="font-[Space_Grotesk] text-3xl font-bold text-wp-orange relative z-10">{s.n}</span>
                  </div>
                </div>
                <h3 className="font-[Space_Grotesk] text-3xl font-bold text-black tracking-tight">{s.t}</h3>
                <p className="text-black/40 mt-4 leading-relaxed max-w-xs mx-auto">{s.d}</p>
                <span className="inline-block mt-4 px-4 py-1.5 rounded-full text-[11px] font-semibold bg-wp-orange/[0.05] text-wp-orange border border-wp-orange/10 tracking-wider uppercase">{s.tag}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="reveal text-center mt-20">
          <a href="#contact" className="bg-black text-white px-10 py-4 rounded-full text-lg font-semibold tracking-wide hover:bg-wp-orange transition-all duration-500 hover:shadow-xl hover:shadow-wp-orange/20 inline-flex items-center gap-3 group">
            Schedule a Free Site Visit
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="transition-transform group-hover:translate-x-1"><path d="M4 10h12M12 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── SAFETY (LIGHT THEME) ─── */
const safetyFeatures = [
  { title: "Multi-Position Mechanical Locks", desc: "Fail-safe locking at every position — platform stays secure even during complete power outage.", iconPath: "M12 2C8.5 2 6 5 6 8v4H4v10h16V12h-2V8c0-3-2.5-6-6-6zm0 2c2.2 0 4 2.2 4 4v4H8V8c0-1.8 1.8-4 4-4zm0 10a2 2 0 110 4 2 2 0 010-4z" },
  { title: "Emergency Stop Controls", desc: "One-button instant halt. Limit switches at every critical position for immediate safety response.", iconPath: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 6a4 4 0 110 8 4 4 0 010-8z" },
  { title: "2,500 kg Load Tested", desc: "Each platform stress-tested far beyond the weight of standard SUVs. Engineered for real-world durability.", iconPath: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" },
  { title: "Hydraulic Redundancy", desc: "Dual-circuit hydraulic system. Platform remains stable even if one circuit fails.", iconPath: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" },
  { title: "Anti-Corrosion Steel", desc: "Hot-dip galvanized structural steel. Engineered to withstand decades of continuous use.", iconPath: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4" },
  { title: "ISO & BIS Certified", desc: "Manufactured per ISO 9001:2015 quality standards and BIS guidelines for mechanical parking.", iconPath: "M9 12l2 2 4-4M7 3h10l4 4v10l-4 4H7l-4-4V7l4-4z" },
];

function SafetySection() {
  return (
    <section id="safety" className="py-28 md:py-40 bg-[#FAFAF7] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,107,0,0.03),transparent_60%)]" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <span className="reveal inline-block text-wp-orange text-[11px] uppercase tracking-[0.4em] font-semibold mb-6 border border-wp-orange/20 px-4 py-1.5 rounded-full bg-wp-orange/[0.03]">Safety Engineering</span>
            <h2 className="reveal font-[Space_Grotesk] text-4xl sm:text-5xl md:text-6xl font-bold text-black mt-4 tracking-tight leading-[1.05]">
              Absolute Safety.<br /><span className="text-wp-orange">Zero Compromise.</span>
            </h2>
            <p className="reveal text-black/40 text-xl mt-8 leading-relaxed">Your car is safer on our platform than in a regular parking lot. Every system is built with multiple layers of redundancy.</p>
            <div className="reveal-scale mt-12 relative">
              <div className="aspect-square max-w-[300px] rounded-3xl bg-gradient-to-br from-wp-orange/[0.05] to-wp-orange/[0.01] border border-wp-orange/[0.1] flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,0,0.06),transparent_70%)] group-hover:scale-150 transition-transform duration-1000" />
                <svg width="120" height="140" viewBox="0 0 120 140" fill="none" className="relative z-10 opacity-30 group-hover:opacity-50 transition-opacity duration-700">
                  <path d="M60 10L15 35v40c0 30 45 55 45 55s45-25 45-55V35L60 10z" stroke="#FF6B00" strokeWidth="2" fill="none" />
                  <path d="M60 25L25 45v30c0 22 35 42 35 42s35-20 35-42V45L60 25z" stroke="#FF6B00" strokeWidth="1" fill="rgba(255,107,0,0.03)" />
                  <path d="M45 70l10 10 20-22" stroke="#FF6B00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <animate attributeName="stroke-dasharray" values="0,100;52,100" dur="2s" fill="freeze" />
                  </path>
                </svg>
              </div>
            </div>
            <div className="reveal flex flex-wrap gap-3 mt-8">
              {["ISO 9001:2015", "BIS Certified", "CE Standard"].map((cert) => (
                <div key={cert} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/[0.06] shadow-sm">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="5.5" stroke="#FF6B00" strokeWidth="1" />
                    <path d="M5 7l1.5 1.5L9 5.5" stroke="#FF6B00" strokeWidth="1" strokeLinecap="round" />
                  </svg>
                  <span className="text-black/50 text-xs font-medium tracking-wide">{cert}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="stagger-children space-y-4">
            {safetyFeatures.map((feature, i) => (
              <div key={i} className="group bg-white rounded-xl p-6 border border-black/[0.05] hover:border-wp-orange/20 hover:shadow-lg hover:shadow-wp-orange/5 transition-all duration-700 border-l-2 border-l-transparent hover:border-l-wp-orange/40">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-wp-orange/[0.05] flex items-center justify-center group-hover:bg-wp-orange/[0.10] transition-all duration-500">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d={feature.iconPath} stroke="#FF6B00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  <div>
                    <h3 className="text-black font-semibold text-lg group-hover:text-wp-orange transition-colors duration-500">{feature.title}</h3>
                    <p className="text-black/35 text-sm mt-2 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── STATS ─── */
function StatsSection() {
  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-wp-orange/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-wp-orange/20 to-transparent" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {[
            { value: 2, suffix: "×", label: "Parking\nCapacity", prefix: "" },
            { value: 2500, suffix: "", label: "kg Load\nTested", prefix: "" },
            { value: 7, suffix: "", label: "Days to\nInstall", prefix: "<" },
            { value: 10, suffix: "+", label: "Cities\nTargeted", prefix: "" },
          ].map((stat, i) => (
            <div key={i} className="reveal text-center group" style={{ transitionDelay: `${i * 0.12}s` }}>
              <p data-countup data-target={stat.value} data-suffix={stat.suffix} data-prefix={stat.prefix} className="font-[Space_Grotesk] text-5xl md:text-6xl lg:text-7xl font-bold text-wp-orange transition-all duration-700 group-hover:scale-105">
                {stat.prefix}0{stat.suffix}
              </p>
              <p className="text-black/30 text-sm mt-3 font-medium tracking-wide whitespace-pre-line leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── RESULTS (CASE STUDIES) ─── */
function ResultsSection() {
  return (
    <section id="results" className="py-28 md:py-40 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <span className="reveal inline-block text-wp-orange text-[11px] uppercase tracking-[0.4em] font-semibold mb-6 border border-wp-orange/20 px-4 py-1.5 rounded-full bg-wp-orange/[0.03]">Proven Results</span>
          <h2 className="reveal font-[Space_Grotesk] text-4xl sm:text-5xl font-bold text-black">Real Projects. <span className="text-wp-orange">Real Impact.</span></h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            { type: "STACK", project: "12-Flat Apartment, Coimbatore", before: 8, after: 14, metric: "+75%", impact: "Builder resolved parking approval concern. No height increase required." },
            { type: "PIT", project: "Premium 10-Unit Apartment", before: 8, after: 16, metric: "2×", impact: "Developer marketed '2 parking per flat' as premium selling point." },
          ].map((c, i) => (
            <div key={i} className="reveal bg-white rounded-2xl p-8 border border-black/[0.05] hover:border-wp-orange/20 hover:shadow-xl hover:shadow-wp-orange/5 transition-all duration-500 hover:-translate-y-1" style={{ transitionDelay: `${i * 0.2}s` }}>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-wp-orange text-[11px] tracking-[0.3em] uppercase font-bold">WEPARK {c.type}</span>
                <span className="font-[Space_Grotesk] text-3xl font-bold text-wp-orange">{c.metric}</span>
              </div>
              <h3 className="font-[Space_Grotesk] text-xl font-bold text-black">{c.project}</h3>
              <div className="flex items-center gap-6 my-6">
                <div className="flex-1 text-center p-4 rounded-xl bg-[#FAFAF7] border border-black/[0.04]">
                  <p className="text-[10px] text-black/25 uppercase tracking-wider font-bold">Before</p>
                  <p className="font-[Space_Grotesk] text-3xl font-bold text-black/20 mt-1">{c.before}</p>
                </div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M14 6l6 6-6 6" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" /></svg>
                <div className="flex-1 text-center p-4 rounded-xl bg-wp-orange/5 border border-wp-orange/10">
                  <p className="text-[10px] text-wp-orange uppercase tracking-wider font-bold">After</p>
                  <p className="font-[Space_Grotesk] text-3xl font-bold text-wp-orange mt-1">{c.after}</p>
                </div>
              </div>
              <p className="text-black/40 text-sm">{c.impact}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FOR BUILDERS ─── */
const builderBenefits = [
  "Meet parking compliance effortlessly — zero redesign needed",
  "Increase property value by 15-20% with extra parking provision",
  "Differentiate your project in Coimbatore's competitive market",
  "Quick ROI — installs in under 7 days per unit",
  "Market \"2 parking per flat\" as a premium selling point",
  "Annual maintenance included — zero headaches for your buyers",
];

function ForBuildersSection() {
  return (
    <section id="builders" className="py-28 md:py-40 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,107,0,0.02),transparent_60%)]" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="reveal inline-block text-wp-orange text-[11px] uppercase tracking-[0.4em] font-semibold mb-6 border border-wp-orange/20 px-4 py-1.5 rounded-full bg-wp-orange/[0.03]">For Builders & Developers</span>
            <h2 className="reveal font-[Space_Grotesk] text-4xl sm:text-5xl md:text-6xl font-bold text-black mt-4 tracking-tight leading-[1.05]">
              Offer 2 parking<br />per flat.<br /><span className="text-wp-orange">Without increasing height.</span>
            </h2>
            <p className="reveal text-black/40 text-xl mt-8 leading-relaxed">Give your buyers the parking they need without costly basement expansion or regulatory battles.</p>
            <div className="reveal stagger-children mt-10 space-y-4">
              {builderBenefits.map((b, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 mt-1.5 w-5 h-5 rounded-full border-2 border-wp-orange/20 flex items-center justify-center group-hover:border-wp-orange/50 group-hover:bg-wp-orange/5 transition-all duration-500">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 3" stroke="#FF6B00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  <span className="text-black/50 leading-relaxed group-hover:text-black/70 transition-colors duration-500">{b}</span>
                </div>
              ))}
            </div>
            <div className="reveal flex flex-wrap gap-4 mt-12">
              <a href="#contact" className="bg-black text-white px-8 py-4 rounded-full font-semibold tracking-wide hover:bg-wp-orange transition-all duration-500 hover:shadow-lg hover:shadow-wp-orange/20">Partner With Us</a>
              <a href="/WePark-Brochure-Draft.pdf" download className="border-2 border-black/10 text-black/60 px-8 py-4 rounded-full font-medium tracking-wide flex items-center gap-3 hover:border-wp-orange/30 hover:text-wp-orange transition-all duration-500">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2v9M4 7l4 4 4-4M2 12v2h12v-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                Download Brochure
                <span className="text-[9px] text-wp-orange uppercase tracking-wider border border-wp-orange/20 px-1.5 py-0.5 rounded">Draft</span>
              </a>
            </div>
          </div>
          <div className="reveal-scale">
            <div className="bg-[#FAFAF7] rounded-3xl p-8 md:p-10 border border-black/[0.05] shadow-lg">
              <div className="mb-8">
                <p className="text-black/25 text-[11px] font-bold uppercase tracking-[0.2em] mb-4">Without WePark</p>
                <div className="flex gap-2 flex-wrap">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="w-14 h-10 rounded-lg bg-black/[0.03] border border-black/[0.05] flex items-center justify-center">
                      <svg width="20" height="12" viewBox="0 0 20 12" fill="none"><rect width="20" height="8" rx="3" y="1" fill="black" opacity="0.08" /><circle cx="4" cy="10" r="2" fill="black" opacity="0.06" /><circle cx="16" cy="10" r="2" fill="black" opacity="0.06" /></svg>
                    </div>
                  ))}
                </div>
                <p className="text-black/20 font-mono text-sm mt-3">8 parking spaces</p>
              </div>
              <div className="flex justify-center my-6">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full border-2 border-wp-orange/20 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="animate-bounce"><path d="M10 4v12M6 12l4 4 4-4" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" /></svg>
                  </div>
                  <div className="absolute inset-0 rounded-full animate-ping border border-wp-orange/10" style={{ animationDuration: "2s" }} />
                </div>
              </div>
              <div>
                <p className="text-wp-orange text-[11px] font-bold uppercase tracking-[0.2em] mb-4">With WePark</p>
                <div className="flex gap-2 flex-wrap">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div key={i} className="w-14 h-10 rounded-lg bg-wp-orange/[0.05] border border-wp-orange/[0.12] flex items-center justify-center transition-all duration-500 hover:bg-wp-orange/[0.10] hover:border-wp-orange/25">
                      <svg width="20" height="12" viewBox="0 0 20 12" fill="none"><rect width="20" height="8" rx="3" y="1" fill="#FF6B00" opacity="0.25" /><circle cx="4" cy="10" r="2" fill="#FF6B00" opacity="0.2" /><circle cx="16" cy="10" r="2" fill="#FF6B00" opacity="0.2" /></svg>
                    </div>
                  ))}
                </div>
                <p className="text-wp-orange font-mono text-sm mt-3 font-bold">16 parking spaces — 2× capacity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── ABOUT ─── */
function AboutSection() {
  return (
    <section id="about" className="py-28 md:py-40 bg-[#FAFAF7]">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <span className="reveal inline-block text-wp-orange text-[11px] uppercase tracking-[0.4em] font-semibold mb-6 border border-wp-orange/20 px-4 py-1.5 rounded-full bg-wp-orange/[0.03]">Our Story</span>
        <h2 className="reveal font-[Space_Grotesk] text-4xl sm:text-5xl font-bold text-black mt-4 leading-[1.05]">Born in Coimbatore. <span className="text-wp-orange">Built for India.</span></h2>
        <p className="reveal text-black/40 text-xl mt-8 leading-relaxed max-w-3xl">
          WePark was founded to solve the urban parking crisis through intelligent engineering. Growing cities shouldn&apos;t choose between more homes and more parking — technology delivers both.
        </p>
        <div className="reveal flex flex-wrap gap-10 mt-12">
          {[{ v: "2025", l: "Founded" }, { v: "Coimbatore", l: "HQ" }, { v: "Pan-India", l: "Vision" }].map((i) => (
            <div key={i.l}><p className="font-[Space_Grotesk] text-2xl font-bold text-wp-orange">{i.v}</p><p className="text-black/30 text-sm mt-1">{i.l}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ─── */
const faqs = [
  { q: "How long does installation take?", a: "A single WEPARK STACK unit can be installed in 3-5 days. WEPARK PIT requires a pre-built civil pit, so it's best planned during construction. Once the pit is ready, installation takes about 5-7 days per unit." },
  { q: "Is it safe for my car?", a: "Absolutely. Every system features multi-position mechanical locks, limit switches, emergency stop controls, and hydraulic redundancy. The platform is tested to hold 2,500 kg — well above any standard car or SUV." },
  { q: "What happens during a power outage?", a: "Mechanical locks are fail-safe — they hold the platform securely without power. Your vehicle remains completely safe. The system resumes when power returns." },
  { q: "Can this work in an existing building?", a: "WEPARK STACK works in any existing building with minimum 3.6m clear height in stilt/parking area. WEPARK PIT is ideal for new construction as it requires a pre-built pit." },
  { q: "How much does it cost?", a: "Pricing depends on product type, number of units, and site conditions. Contact us for a free site assessment and customized quote." },
  { q: "What maintenance is required?", a: "Periodic lubrication, hydraulic fluid checks, and safety inspections. We offer annual maintenance contracts for complete peace of mind." },
  { q: "Do you provide warranty?", a: "Yes — comprehensive warranty covering structural, hydraulic, and electrical components. Extended plans available." },
  { q: "Can I operate it myself?", a: "Yes! Just press a button. Full training provided during installation. No special skill needed." },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section id="faq" className="py-28 md:py-40 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-wp-orange/20 to-transparent" />
      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <span className="reveal inline-block text-wp-orange text-[11px] uppercase tracking-[0.4em] font-semibold mb-6 border border-wp-orange/20 px-4 py-1.5 rounded-full bg-wp-orange/[0.03]">FAQ</span>
          <h2 className="reveal font-[Space_Grotesk] text-4xl sm:text-5xl font-bold text-black tracking-tight">Common Questions</h2>
        </div>
        <div className="reveal space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className={`bg-[#FAFAF7] rounded-xl overflow-hidden border transition-all duration-500 ${openIndex === i ? "border-l-2 border-l-wp-orange/40 border-wp-orange/10 shadow-md shadow-wp-orange/5" : "border-l-2 border-l-transparent border-black/[0.04]"}`}>
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex items-center justify-between py-5 px-6 text-left group">
                <span className={`font-medium pr-4 transition-colors duration-300 ${openIndex === i ? "text-wp-orange" : "text-black/60 group-hover:text-black/80"}`}>{faq.q}</span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 transition-all duration-500 flex items-center justify-center ${openIndex === i ? "border-wp-orange/30 bg-wp-orange/5 rotate-180" : "border-black/10"}`}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 4l4 4 4-4" stroke={openIndex === i ? "#FF6B00" : "#999"} strokeWidth="1.5" strokeLinecap="round" /></svg>
                </div>
              </button>
              <div className={`overflow-hidden transition-all duration-500 ${openIndex === i ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}>
                <p className="px-6 pb-5 text-black/40 leading-relaxed text-sm">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CONTACT ─── */
function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="contact" className="py-28 md:py-40 bg-[#FAFAF7]">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <span className="reveal inline-block text-wp-orange text-[11px] uppercase tracking-[0.4em] font-semibold mb-6 border border-wp-orange/20 px-4 py-1.5 rounded-full bg-wp-orange/[0.03]">Get Started</span>
          <h2 className="reveal font-[Space_Grotesk] text-4xl sm:text-5xl font-bold text-black">Ready to <span className="text-wp-orange">Double Your Parking?</span></h2>
          <p className="reveal text-black/40 text-lg mt-4">Free site assessment. Customized quote. No obligations.</p>
        </div>
        {submitted ? (
          <div className="reveal text-center py-16 bg-white rounded-3xl border border-black/[0.04] shadow-lg">
            <div className="w-16 h-16 rounded-full bg-wp-orange/10 mx-auto mb-6 flex items-center justify-center"><svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M7 14l5 5 9-10" stroke="#FF6B00" strokeWidth="2.5" strokeLinecap="round" /></svg></div>
            <h3 className="font-[Space_Grotesk] text-2xl font-bold text-black">Thank You!</h3>
            <p className="text-black/40 mt-3">We&apos;ll contact you within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="reveal bg-white rounded-3xl p-8 md:p-12 border border-black/[0.05] shadow-lg">
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { ph: "Name *", req: true, type: "text" },
                { ph: "Phone *", req: true, type: "tel" },
                { ph: "Email", req: false, type: "email" },
                { ph: "City", req: false, type: "text" },
              ].map((f) => (
                <input key={f.ph} required={f.req} type={f.type} placeholder={f.ph} className="bg-[#FAFAF7] border border-black/[0.06] rounded-xl px-4 py-3.5 text-black placeholder:text-black/25 focus:outline-none focus:border-wp-orange/40 focus:shadow-md focus:shadow-wp-orange/5 transition-all text-sm" />
              ))}
            </div>
            <select className="mt-4 w-full bg-[#FAFAF7] border border-black/[0.06] rounded-xl px-4 py-3.5 text-black/50 focus:outline-none focus:border-wp-orange/40 transition-all text-sm">
              <option>Interested in...</option>
              <option>WEPARK STACK</option>
              <option>WEPARK PIT</option>
              <option>Both Products</option>
              <option>Partnership / Builder</option>
            </select>
            <textarea rows={4} placeholder="Tell us about your project..." className="mt-4 w-full bg-[#FAFAF7] border border-black/[0.06] rounded-xl px-4 py-3.5 text-black placeholder:text-black/25 focus:outline-none focus:border-wp-orange/40 focus:shadow-md focus:shadow-wp-orange/5 transition-all resize-none text-sm" />
            <button type="submit" className="mt-6 w-full bg-black text-white py-4 rounded-xl font-semibold text-lg hover:bg-wp-orange transition-all duration-500 hover:shadow-lg hover:shadow-wp-orange/20">Send Enquiry</button>
          </form>
        )}
        <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm">
          <a href="tel:+919344201121" className="text-black/40 hover:text-wp-orange transition-colors flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.12.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.58 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
            +91 93442 01121
          </a>
          <a href="mailto:rajkumar@wepark.co.in" className="text-black/40 hover:text-wp-orange transition-colors flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.5" /><path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
            rajkumar@wepark.co.in
          </a>
          <span className="text-black/40 flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.5" /><circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" /></svg>
            Coimbatore, Tamil Nadu
          </span>
        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */
function FooterLight() {
  return (
    <footer className="bg-white border-t border-black/[0.06] py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-8">
          <div className="flex whitespace-nowrap marquee-track">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="text-black/[0.08] font-[Space_Grotesk] text-6xl font-bold mx-8 select-none">
                WE ENGINEER SPACE
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="rounded-lg overflow-hidden bg-black px-3 py-1.5">
            <Image src="/images/wepark-logo.jpeg" alt="WePark" width={100} height={36} className="object-contain opacity-60" style={{ height: "auto" }} />
          </div>
          <div className="flex items-center gap-6">
            <a href="/" className="text-black/30 hover:text-wp-orange text-sm transition-colors">Dark Theme</a>
            <a href="/compare" className="text-black/30 hover:text-wp-orange text-sm transition-colors">Compare</a>
          </div>
          <p className="text-black/20 text-sm">&copy; {new Date().getFullYear()} WePark. All rights reserved. | wepark.co.in</p>
        </div>
      </div>
    </footer>
  );
}

/* ─── WHATSAPP BUTTON ─── */
function WhatsAppButtonLight() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const h = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  if (!visible) return null;
  return (
    <a href="https://wa.me/919344201121?text=Hi%20WePark%2C%20I%27m%20interested%20in%20your%20parking%20systems" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:scale-110 hover:shadow-xl hover:shadow-green-500/40 transition-all duration-300">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping" />
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full" />
    </a>
  );
}

/* ═══════════════════════════════════════════════════════ */
/*  MAIN PAGE EXPORT                                       */
/* ═══════════════════════════════════════════════════════ */
export default function LightTheme() {
  useScrollReveal();
  useCountUp();
  useScrollProgress();

  return (
    <main className="overflow-x-hidden bg-[#FAFAF7]">
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <ProductsSection />
      <ProductDetailsSection />
      <ProcessSection />
      <SafetySection />
      <StatsSection />
      <ResultsSection />
      <ForBuildersSection />
      <AboutSection />
      <FAQSection />
      <ContactSection />
      <FooterLight />
      <WhatsAppButtonLight />
    </main>
  );
}
