"use client";

const benefits = [
  "Meet parking compliance effortlessly — zero redesign needed",
  "Increase property value by 15-20% with extra parking provision",
  "Differentiate your project in Coimbatore's competitive market",
  "Quick ROI — installs in under 7 days per unit",
  "Market \"2 parking per flat\" as a premium selling point",
  "Annual maintenance included — zero headaches for your buyers",
];

export default function ForBuilders() {
  return (
    <section className="relative py-32 md:py-44 bg-wp-charcoal noise overflow-hidden">
      <div className="absolute top-0 left-0 w-full section-divider" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,107,0,0.03),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div>
            <span className="reveal inline-block text-wp-orange/60 text-[11px] uppercase tracking-[0.4em] font-semibold mb-6 border border-wp-orange/10 px-4 py-1.5 rounded-full">
              For Builders & Developers
            </span>

            <h2 className="reveal font-[Space_Grotesk] text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-4 tracking-tight leading-[1.05]">
              Offer 2 parking
              <br />per flat.
              <br />
              <span className="gradient-text glow-text">Without increasing height.</span>
            </h2>

            <p className="reveal text-white/40 text-xl mt-8 leading-relaxed">
              Give your buyers the parking they need without costly basement expansion or regulatory battles.
            </p>

            <div className="reveal stagger-children mt-10 space-y-4">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 mt-1.5 w-5 h-5 rounded-full border border-wp-orange/20 flex items-center justify-center group-hover:border-wp-orange/50 group-hover:bg-wp-orange/5 transition-all duration-500">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2.5 2.5L8 3" stroke="#FF6B00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-white/50 leading-relaxed group-hover:text-white/70 transition-colors duration-500">
                    {b}
                  </span>
                </div>
              ))}
            </div>

            <div className="reveal flex flex-wrap gap-4 mt-12">
              <a href="#contact" className="btn-premium text-white px-8 py-4 rounded-full font-semibold tracking-wide">
                Partner With Us
              </a>
              <a
                href="/WePark-Brochure-Draft.pdf"
                download
                className="btn-outline text-white/70 px-8 py-4 rounded-full font-medium tracking-wide flex items-center gap-3"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2v9M4 7l4 4 4-4M2 12v2h12v-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Download Brochure
                <span className="text-[9px] text-wp-orange/40 uppercase tracking-wider border border-wp-orange/20 px-1.5 py-0.5 rounded">
                  Draft
                </span>
              </a>
            </div>
          </div>

          {/* Right — Visual comparison */}
          <div className="reveal-scale">
            <div className="glass-card rounded-3xl p-8 md:p-10 border-glow">
              {/* Without WePark */}
              <div className="mb-8">
                <p className="text-white/25 text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
                  Without WePark
                </p>
                <div className="flex gap-2 flex-wrap">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="w-14 h-10 rounded-lg bg-white/[0.04] border border-white/[0.04] flex items-center justify-center transition-all duration-300" style={{ animationDelay: `${i * 0.05}s` }}>
                      <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                        <rect width="20" height="8" rx="3" y="1" fill="white" opacity="0.15" />
                        <circle cx="4" cy="10" r="2" fill="white" opacity="0.1" />
                        <circle cx="16" cy="10" r="2" fill="white" opacity="0.1" />
                      </svg>
                    </div>
                  ))}
                </div>
                <p className="text-white/15 font-mono text-sm mt-3">8 parking spaces</p>
              </div>

              {/* Animated arrow */}
              <div className="flex justify-center my-6">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full border border-wp-orange/20 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="animate-bounce">
                      <path d="M10 4v12M6 12l4 4 4-4" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 rounded-full animate-ping border border-wp-orange/10" style={{ animationDuration: "2s" }} />
                </div>
              </div>

              {/* With WePark */}
              <div>
                <p className="text-wp-orange/60 text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
                  With WePark
                </p>
                <div className="flex gap-2 flex-wrap">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div key={i} className="w-14 h-10 rounded-lg bg-wp-orange/[0.06] border border-wp-orange/[0.12] flex items-center justify-center transition-all duration-500 hover:bg-wp-orange/[0.12] hover:border-wp-orange/25" style={{ animationDelay: `${i * 0.05}s` }}>
                      <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                        <rect width="20" height="8" rx="3" y="1" fill="#FF6B00" opacity="0.35" />
                        <circle cx="4" cy="10" r="2" fill="#FF6B00" opacity="0.25" />
                        <circle cx="16" cy="10" r="2" fill="#FF6B00" opacity="0.25" />
                      </svg>
                    </div>
                  ))}
                </div>
                <p className="text-wp-orange font-mono text-sm mt-3 font-bold">
                  16 parking spaces — <span className="gradient-text-static">2× capacity</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
