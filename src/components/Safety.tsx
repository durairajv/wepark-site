"use client";

const features = [
  {
    title: "Multi-Position Mechanical Locks",
    desc: "Fail-safe locking at every position — platform stays secure even during complete power outage.",
    iconPath: "M12 2C8.5 2 6 5 6 8v4H4v10h16V12h-2V8c0-3-2.5-6-6-6zm0 2c2.2 0 4 2.2 4 4v4H8V8c0-1.8 1.8-4 4-4zm0 10a2 2 0 110 4 2 2 0 010-4z",
  },
  {
    title: "Emergency Stop Controls",
    desc: "One-button instant halt. Limit switches at every critical position for immediate safety response.",
    iconPath: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 6a4 4 0 110 8 4 4 0 010-8z",
  },
  {
    title: "2,500 kg Load Tested",
    desc: "Each platform stress-tested far beyond the weight of standard SUVs. Engineered for real-world durability.",
    iconPath: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
  },
  {
    title: "Hydraulic Redundancy",
    desc: "Dual-circuit hydraulic system. Platform remains stable even if one circuit fails. True redundancy.",
    iconPath: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  },
  {
    title: "Anti-Corrosion Steel",
    desc: "Hot-dip galvanized structural steel. Engineered to withstand decades of continuous use in any climate.",
    iconPath: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4",
  },
  {
    title: "ISO & BIS Certified",
    desc: "Manufactured per ISO 9001:2015 quality standards and BIS guidelines for mechanical parking systems.",
    iconPath: "M9 12l2 2 4-4M7 3h10l4 4v10l-4 4H7l-4-4V7l4-4z",
  },
];

export default function Safety() {
  return (
    <section id="safety" className="relative py-32 md:py-44 bg-wp-charcoal noise overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(255,107,0,0.04),transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left — headline + visual */}
          <div>
            <span className="reveal inline-block text-wp-orange/60 text-[11px] uppercase tracking-[0.4em] font-semibold mb-6 border border-wp-orange/10 px-4 py-1.5 rounded-full">
              Safety Engineering
            </span>

            <h2 className="reveal font-[Space_Grotesk] text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-4 tracking-tight leading-[1.05]">
              Absolute Safety.
              <br />
              <span className="gradient-text glow-text">Zero Compromise.</span>
            </h2>

            <p className="reveal text-white/40 text-xl mt-8 leading-relaxed">
              Your car is safer on our platform than in a regular parking lot. Every system is built with multiple layers of redundancy.
            </p>

            {/* Shield visual */}
            <div className="reveal-scale mt-12 relative">
              <div className="aspect-square max-w-[300px] rounded-3xl bg-gradient-to-br from-wp-orange/[0.06] to-transparent border border-wp-orange/[0.08] flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,0,0.08),transparent_70%)] group-hover:scale-150 transition-transform duration-1000" />
                <svg width="120" height="140" viewBox="0 0 120 140" fill="none" className="relative z-10 opacity-40 group-hover:opacity-60 transition-opacity duration-700">
                  <path d="M60 10L15 35v40c0 30 45 55 45 55s45-25 45-55V35L60 10z" stroke="#FF6B00" strokeWidth="2" fill="none" />
                  <path d="M60 25L25 45v30c0 22 35 42 35 42s35-20 35-42V45L60 25z" stroke="#FF6B00" strokeWidth="1" fill="rgba(255,107,0,0.03)" />
                  <path d="M45 70l10 10 20-22" stroke="#FF6B00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <animate attributeName="stroke-dasharray" values="0,100;52,100" dur="2s" fill="freeze" />
                  </path>
                </svg>
              </div>
            </div>

            {/* Certifications */}
            <div className="reveal flex flex-wrap gap-3 mt-8">
              {["ISO 9001:2015", "BIS Certified", "CE Standard"].map((cert) => (
                <div key={cert} className="flex items-center gap-2 px-4 py-2 rounded-full glass-card">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="5.5" stroke="#FF6B00" strokeWidth="1" />
                    <path d="M5 7l1.5 1.5L9 5.5" stroke="#FF6B00" strokeWidth="1" strokeLinecap="round" />
                  </svg>
                  <span className="text-white/50 text-xs font-medium tracking-wide">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — feature cards */}
          <div className="stagger-children space-y-4">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group glass-card rounded-xl p-6 hover:bg-white/[0.04] transition-all duration-700 border-l-2 border-l-transparent hover:border-l-wp-orange/40"
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-wp-orange/[0.06] flex items-center justify-center group-hover:bg-wp-orange/[0.12] transition-all duration-500">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d={feature.iconPath} stroke="#FF6B00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg group-hover:text-wp-orange/90 transition-colors duration-500">
                      {feature.title}
                    </h3>
                    <p className="text-white/35 text-sm mt-2 leading-relaxed">
                      {feature.desc}
                    </p>
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
