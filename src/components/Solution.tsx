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
                  {/* Ground platform */}
                  <rect x="20" y="160" width="140" height="5" rx="2.5" fill="#FF6B00" />
                  {/* Lifting platform */}
                  <rect x="20" y="80" width="140" height="5" rx="2.5" fill="#FF6B00">
                    <animate attributeName="y" values="155;80;80;155" dur="5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1" />
                  </rect>
                  {/* Pillars */}
                  <rect x="25" y="80" width="3" height="80" fill="#FF6B00" opacity="0.5">
                    <animate attributeName="height" values="0;80;80;0" dur="5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1" />
                  </rect>
                  <rect x="152" y="80" width="3" height="80" fill="#FF6B00" opacity="0.5">
                    <animate attributeName="height" values="0;80;80;0" dur="5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1" />
                  </rect>
                  {/* Upper car — sporty coupe (like logo upper car) */}
                  <g>
                    <animateTransform attributeName="transform" type="translate" values="0,76;0,0;0,0;0,76" dur="5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1" />
                    {/* Body */}
                    <path d="M40,74 L40,66 C40,63 42,61 45,61 L133,61 C136,61 138,64 138,67 L138,74 Z" fill="#FF6B00" />
                    {/* Cabin — coupe roofline sloping to rear */}
                    <path d="M54,61 L62,46 C64,43 67,42 70,42 L98,42 C104,42 110,44 115,48 L126,61 Z" fill="#FF6B00" opacity="0.8" />
                    {/* Windshield */}
                    <path d="M58,60 L65,47 L86,47 L86,60 Z" fill="#000" opacity="0.3" />
                    {/* Rear window — sloped like coupe */}
                    <path d="M90,60 L90,47 L108,49 L120,60 Z" fill="#000" opacity="0.3" />
                    {/* Wheel arches */}
                    <path d="M48,74 C48,68 53,64 58,64 C63,64 68,68 68,74" fill="#000" opacity="0.15" />
                    <path d="M110,74 C110,68 115,64 120,64 C125,64 130,68 130,74" fill="#000" opacity="0.15" />
                    {/* Wheels */}
                    <circle cx="58" cy="75" r="8" fill="#FF6B00" /><circle cx="58" cy="75" r="5.5" fill="#000" opacity="0.3" /><circle cx="58" cy="75" r="2" fill="#FF6B00" opacity="0.5" />
                    <circle cx="120" cy="75" r="8" fill="#FF6B00" /><circle cx="120" cy="75" r="5.5" fill="#000" opacity="0.3" /><circle cx="120" cy="75" r="2" fill="#FF6B00" opacity="0.5" />
                    {/* Headlight */}
                    <path d="M134,63 L138,65 L138,69 L135,68 Z" fill="#FFA" opacity="0.7" />
                  </g>
                  {/* Lower car — hatchback (like logo lower car) */}
                  <g opacity="0.35">
                    <path d="M40,154 L40,143 C40,140 42,138 45,138 L133,138 C136,138 138,141 138,144 L138,154 Z" fill="#FF6B00" />
                    {/* Cabin — hatchback upright rear */}
                    <path d="M56,138 L65,124 C67,121 70,120 73,120 L105,120 C108,120 110,121 111,123 L118,138 Z" fill="#FF6B00" opacity="0.8" />
                    {/* Windshield */}
                    <path d="M60,137 L67,126 L86,126 L86,137 Z" fill="#000" opacity="0.3" />
                    {/* Rear window — upright hatchback */}
                    <path d="M90,137 L90,126 L106,124 L114,137 Z" fill="#000" opacity="0.3" />
                    {/* Wheel arches */}
                    <path d="M48,154 C48,148 53,144 58,144 C63,144 68,148 68,154" fill="#000" opacity="0.12" />
                    <path d="M110,154 C110,148 115,144 120,144 C125,144 130,148 130,154" fill="#000" opacity="0.12" />
                    <circle cx="58" cy="155" r="8" fill="#FF6B00" /><circle cx="58" cy="155" r="5.5" fill="#000" opacity="0.25" /><circle cx="58" cy="155" r="2" fill="#FF6B00" opacity="0.4" />
                    <circle cx="120" cy="155" r="8" fill="#FF6B00" /><circle cx="120" cy="155" r="5.5" fill="#000" opacity="0.25" /><circle cx="120" cy="155" r="2" fill="#FF6B00" opacity="0.4" />
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
                  {/* Ground surface left & right */}
                  <rect x="10" y="80" width="55" height="4" rx="2" fill="#FF6B00" />
                  <rect x="115" y="80" width="55" height="4" rx="2" fill="#FF6B00" />
                  {/* Pit walls */}
                  <rect x="65" y="84" width="3" height="80" fill="#FF6B00" opacity="0.3" />
                  <rect x="112" y="84" width="3" height="80" fill="#FF6B00" opacity="0.3" />
                  {/* Pit floor */}
                  <rect x="65" y="161" width="50" height="3" fill="#FF6B00" opacity="0.3" />
                  {/* Underground depth lines */}
                  {[100, 120, 140].map((y) => (
                    <line key={y} x1="68" y1={y} x2="112" y2={y} stroke="#FF6B00" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.15" />
                  ))}
                  {/* Descending platform */}
                  <rect x="68" y="80" width="44" height="4" rx="2" fill="#FF6B00">
                    <animate attributeName="y" values="80;155;155;80" dur="5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1" />
                  </rect>
                  {/* Car descending — hatchback (logo style) */}
                  <g>
                    <animateTransform attributeName="transform" type="translate" values="0,0;0,75;0,75;0,0" dur="5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1" />
                    <path d="M68,76 L68,68 C68,66 69,64 71,64 L109,64 C111,64 112,66 112,68 L112,76 Z" fill="#FF6B00" opacity="0.8" />
                    <path d="M74,64 L79,54 C80,52 82,51 84,51 L98,51 C100,51 101,52 102,54 L107,64 Z" fill="#FF6B00" opacity="0.65" />
                    <path d="M76,63 L80,55 L89,55 L89,63 Z" fill="#000" opacity="0.25" />
                    <path d="M91,63 L91,55 L100,53 L105,63 Z" fill="#000" opacity="0.25" />
                    <circle cx="77" cy="77" r="5" fill="#FF6B00" opacity="0.8" /><circle cx="77" cy="77" r="3.5" fill="#000" opacity="0.25" /><circle cx="77" cy="77" r="1.3" fill="#FF6B00" opacity="0.5" />
                    <circle cx="103" cy="77" r="5" fill="#FF6B00" opacity="0.8" /><circle cx="103" cy="77" r="3.5" fill="#000" opacity="0.25" /><circle cx="103" cy="77" r="1.3" fill="#FF6B00" opacity="0.5" />
                  </g>
                  {/* Coupe parked at ground level (logo style) */}
                  <g opacity="0.3">
                    <path d="M12,76 L12,68 C12,65 14,63 17,63 L58,63 C61,63 62,65 62,68 L62,76 Z" fill="#FF6B00" />
                    <path d="M20,63 L26,52 C27,50 29,49 32,49 L45,49 C50,49 53,51 55,54 L60,63 Z" fill="#FF6B00" opacity="0.8" />
                    <path d="M23,62 L28,53 L39,53 L39,62 Z" fill="#000" opacity="0.2" />
                    <path d="M42,62 L42,53 L52,54 L57,62 Z" fill="#000" opacity="0.2" />
                    <circle cx="24" cy="77" r="5.5" fill="#FF6B00" /><circle cx="24" cy="77" r="3.8" fill="#000" opacity="0.2" /><circle cx="24" cy="77" r="1.3" fill="#FF6B00" opacity="0.4" />
                    <circle cx="51" cy="77" r="5.5" fill="#FF6B00" /><circle cx="51" cy="77" r="3.8" fill="#000" opacity="0.2" /><circle cx="51" cy="77" r="1.3" fill="#FF6B00" opacity="0.4" />
                  </g>
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
