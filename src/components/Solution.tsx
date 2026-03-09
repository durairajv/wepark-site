"use client";

export default function Solution() {
  return (
    <section className="relative py-32 md:py-44 bg-wp-charcoal noise overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-wp-orange/[0.02] rounded-full blur-[200px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Tagline reveal */}
        <div className="reveal max-w-4xl mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[2px] bg-gradient-to-r from-wp-orange to-transparent glow-line rounded-full" />
            <span className="text-wp-orange/60 text-[11px] uppercase tracking-[0.4em] font-semibold">
              The Answer
            </span>
            <div className="h-px w-16 bg-gradient-to-r from-wp-orange/30 to-transparent mt-4 glow-line" />
          </div>
          <h2 className="font-[Space_Grotesk] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
            <span className="text-white/40">We don&apos;t just manufacture</span>
            <br />
            <span className="text-white/40">parking systems.</span>
          </h2>
          <p className="font-[Space_Grotesk] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold gradient-text glow-text mt-4">
            We Engineer Space.
          </p>
        </div>

        {/* Product cards — massive, dramatic */}
        <div id="products" className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          {/* STACK Card */}
          <div className="reveal-left tilt-card group">
            <div className="relative glass-card rounded-3xl p-8 md:p-12 overflow-hidden min-h-[560px] flex flex-col border-glow transition-all duration-700 hover:bg-white/[0.04]">
              {/* Background animation */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-wp-orange/[0.03] rounded-full blur-[100px] group-hover:bg-wp-orange/[0.06] transition-all duration-1000" />

              {/* Animated stack SVG — larger, more detailed */}
              <div className="absolute right-6 top-6 opacity-[0.45] group-hover:opacity-[0.70] transition-opacity duration-1000">
                <svg width="180" height="200" viewBox="0 0 180 200" fill="none">
                  <rect x="20" y="160" width="140" height="5" rx="2.5" fill="#FF6B00" />
                  <rect x="20" y="80" width="140" height="5" rx="2.5" fill="#FF6B00">
                    <animate attributeName="y" values="155;80;80;155" dur="5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1" />
                  </rect>
                  <rect x="25" y="80" width="3" height="80" fill="#FF6B00" opacity="0.5">
                    <animate attributeName="height" values="0;80;80;0" dur="5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1" />
                  </rect>
                  <rect x="152" y="80" width="3" height="80" fill="#FF6B00" opacity="0.5">
                    <animate attributeName="height" values="0;80;80;0" dur="5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1" />
                  </rect>
                  {/* Upper car */}
                  <rect x="45" y="58" width="90" height="18" rx="6" fill="#FF6B00">
                    <animate attributeName="y" values="134;58;58;134" dur="5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1" />
                  </rect>
                  <rect x="60" y="47" width="60" height="14" rx="5" fill="#FF6B00" opacity="0.7">
                    <animate attributeName="y" values="123;47;47;123" dur="5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1" />
                  </rect>
                  <circle cx="65" cy="76" r="5" fill="#FF6B00">
                    <animate attributeName="cy" values="152;76;76;152" dur="5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1" />
                  </circle>
                  <circle cx="115" cy="76" r="5" fill="#FF6B00">
                    <animate attributeName="cy" values="152;76;76;152" dur="5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1" />
                  </circle>
                  {/* Lower car */}
                  <g opacity="0.3">
                    <rect x="45" y="134" width="90" height="18" rx="6" fill="#FF6B00" />
                    <rect x="60" y="123" width="60" height="14" rx="5" fill="#FF6B00" />
                  </g>
                </svg>
              </div>

              {/* Content */}
              <div className="tilt-inner relative z-10 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 20V4M12 4L6 10M12 4l6 6" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="font-mono text-wp-orange/70 text-[11px] tracking-[0.3em] uppercase">
                    Goes Up
                  </span>
                </div>

                <h3 className="font-[Space_Grotesk] text-4xl md:text-5xl font-bold text-white tracking-tight">
                  WEPARK
                  <br />
                  <span className="gradient-text-static">STACK</span>
                </h3>

                <p className="text-white/30 text-sm mt-2 italic">
                  Upper–Lower Mechanical Parking
                </p>

                <p className="text-white/50 mt-6 leading-relaxed text-lg flex-1">
                  Utilizes vertical air space above ground. Hydraulic lift raises one car above while another parks below. No pit excavation needed. Doubles capacity instantly.
                </p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {["Apartments", "IT Parks", "Offices", "Hospitals"].map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-full text-[11px] font-medium bg-white/[0.04] text-white/40 border border-white/[0.06] tracking-wide"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href="#stack-detail"
                  className="inline-flex items-center gap-2 mt-8 text-wp-orange font-semibold tracking-wide group/link"
                >
                  <span className="animated-underline">Explore Stack</span>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="transition-transform duration-300 group-hover/link:translate-x-2">
                    <path d="M4 9h10M10 3l5.25 6-5.25 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* PIT Card */}
          <div className="reveal-right tilt-card group" style={{ transitionDelay: "0.2s" }}>
            <div className="relative glass-card rounded-3xl p-8 md:p-12 overflow-hidden min-h-[560px] flex flex-col border-glow transition-all duration-700 hover:bg-white/[0.04]">
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-wp-amber/[0.03] rounded-full blur-[100px] group-hover:bg-wp-amber/[0.06] transition-all duration-1000" />

              {/* Animated pit SVG */}
              <div className="absolute right-6 top-6 opacity-[0.45] group-hover:opacity-[0.70] transition-opacity duration-1000">
                <svg width="180" height="200" viewBox="0 0 180 200" fill="none">
                  <rect x="10" y="80" width="55" height="4" rx="2" fill="#FF6B00" />
                  <rect x="115" y="80" width="55" height="4" rx="2" fill="#FF6B00" />
                  <rect x="65" y="84" width="3" height="80" fill="#FF6B00" opacity="0.3" />
                  <rect x="112" y="84" width="3" height="80" fill="#FF6B00" opacity="0.3" />
                  <rect x="65" y="161" width="50" height="3" fill="#FF6B00" opacity="0.3" />
                  <rect x="68" y="80" width="44" height="4" rx="2" fill="#FF6B00">
                    <animate attributeName="y" values="80;155;155;80" dur="5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1" />
                  </rect>
                  <rect x="72" y="60" width="36" height="16" rx="5" fill="#FF6B00" opacity="0.8">
                    <animate attributeName="y" values="60;135;135;60" dur="5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1" />
                  </rect>
                  <rect x="76" y="50" width="28" height="12" rx="4" fill="#FF6B00" opacity="0.5">
                    <animate attributeName="y" values="50;125;125;50" dur="5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1" />
                  </rect>
                  {/* Underground lines */}
                  {[100, 120, 140].map((y) => (
                    <line key={y} x1="68" y1={y} x2="112" y2={y} stroke="#FF6B00" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.2" />
                  ))}
                </svg>
              </div>

              <div className="tilt-inner relative z-10 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 4v16M12 20l-6-6M12 20l6-6" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="font-mono text-wp-amber/70 text-[11px] tracking-[0.3em] uppercase">
                    Goes Down
                  </span>
                </div>

                <h3 className="font-[Space_Grotesk] text-4xl md:text-5xl font-bold text-white tracking-tight">
                  WEPARK
                  <br />
                  <span className="gradient-text-static">PIT</span>
                </h3>

                <p className="text-white/30 text-sm mt-2 italic">
                  Ground-Level Hidden Parking
                </p>

                <p className="text-white/50 mt-6 leading-relaxed text-lg flex-1">
                  Vehicle descends into a civil pit below ground. Second car parks at normal floor level. Invisible from the surface. The premium, aesthetically clean parking solution.
                </p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {["Luxury Villas", "Premium Apartments", "Showrooms", "Height-Restricted"].map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-full text-[11px] font-medium bg-white/[0.04] text-white/40 border border-white/[0.06] tracking-wide"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href="#pit-detail"
                  className="inline-flex items-center gap-2 mt-8 text-wp-amber font-semibold tracking-wide group/link"
                >
                  <span className="animated-underline">Explore Pit</span>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="transition-transform duration-300 group-hover/link:translate-x-2">
                    <path d="M4 9h10M10 3l5.25 6-5.25 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
