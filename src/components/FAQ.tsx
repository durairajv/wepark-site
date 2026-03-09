"use client";
import { useState } from "react";

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

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 md:py-44 bg-wp-charcoal noise relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full section-divider" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <span className="reveal inline-block text-wp-orange/60 text-[11px] uppercase tracking-[0.4em] font-semibold mb-6 border border-wp-orange/10 px-4 py-1.5 rounded-full">
            FAQ
          </span>
          <h2 className="reveal font-[Space_Grotesk] text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Common Questions
          </h2>
        </div>

        <div className="reveal space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`glass-card rounded-xl overflow-hidden transition-all duration-500 ${
                openIndex === i ? "border-l-2 border-l-wp-orange/40 bg-white/[0.03]" : "border-l-2 border-l-transparent"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-5 px-6 text-left group"
              >
                <span className={`font-medium pr-4 transition-colors duration-300 ${
                  openIndex === i ? "text-wp-orange" : "text-white/60 group-hover:text-white/80"
                }`}>
                  {faq.q}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full border transition-all duration-500 flex items-center justify-center ${
                  openIndex === i ? "border-wp-orange/30 bg-wp-orange/5 rotate-180" : "border-white/10"
                }`}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 4l4 4 4-4" stroke={openIndex === i ? "#FF6B00" : "#666"} strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
              </button>
              <div className={`overflow-hidden transition-all duration-500 ${
                openIndex === i ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
              }`}>
                <p className="px-6 pb-5 text-white/35 leading-relaxed text-sm">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
