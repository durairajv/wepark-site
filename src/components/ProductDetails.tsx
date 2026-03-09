"use client";

const stackSpecs = [
  { label: "Load Capacity", value: "2,500 kg", icon: "M12 3v18M6 9h12" },
  { label: "Platform Size", value: "5.2m × 2.6m", icon: "M3 6h18M3 18h18M3 6v12M21 6v12" },
  { label: "Min Clear Height", value: "3.6 m", icon: "M12 20V4M8 4h8" },
  { label: "Lift Height", value: "1.8–2.0 m", icon: "M4 12h16M12 4l4 4-4 4" },
  { label: "Drive System", value: "Hydraulic", icon: "M12 2v6M12 22v-6M2 12h6M22 12h-6" },
  { label: "Safety", value: "Multi-lock", icon: "M12 2L3 7v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V7l-9-5z" },
  { label: "Power", value: "2.2–3.7 kW", icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z" },
  { label: "Pit Required", value: "None", icon: "M18 6L6 18M6 6l12 12" },
];

const pitSpecs = [
  { label: "Load Capacity", value: "2,500 kg", icon: "M12 3v18M6 9h12" },
  { label: "Platform Size", value: "5.2m × 2.6m", icon: "M3 6h18M3 18h18M3 6v12M21 6v12" },
  { label: "Pit Depth", value: "1.6–1.8 m", icon: "M12 4v16M8 20h8" },
  { label: "Clear Height Above", value: "2.4 m", icon: "M12 20V4M8 4h8" },
  { label: "Drive System", value: "Hydraulic", icon: "M12 2v6M12 22v-6M2 12h6M22 12h-6" },
  { label: "Safety", value: "Locks + Switches", icon: "M12 2L3 7v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V7l-9-5z" },
  { label: "Power", value: "2.2–3.7 kW", icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z" },
  { label: "Visibility", value: "Flush Ground", icon: "M5 12h14" },
];

function SpecGrid({ specs }: { specs: typeof stackSpecs }) {
  return (
    <div className="stagger-children grid grid-cols-2 sm:grid-cols-4 gap-3">
      {specs.map((spec, i) => (
        <div
          key={i}
          className="glass-card rounded-xl p-4 group/spec hover:bg-white/[0.04] transition-all duration-500"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mb-2 text-wp-orange/40 group-hover/spec:text-wp-orange transition-colors">
            <path d={spec.icon} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p className="text-white/30 text-[10px] uppercase tracking-wider mb-1">
            {spec.label}
          </p>
          <p className="font-mono text-white text-sm font-semibold">
            {spec.value}
          </p>
        </div>
      ))}
    </div>
  );
}

function StepItem({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="flex gap-5 group/step">
      <div className="flex-shrink-0 relative">
        <div className="w-10 h-10 rounded-full border border-wp-orange/20 flex items-center justify-center group-hover/step:border-wp-orange/50 group-hover/step:bg-wp-orange/5 transition-all duration-500">
          <span className="font-mono text-wp-orange/60 text-xs font-bold group-hover/step:text-wp-orange transition-colors">
            {num}
          </span>
        </div>
        <div className="absolute top-10 left-1/2 w-px h-full -translate-x-1/2 bg-gradient-to-b from-wp-orange/10 to-transparent" />
      </div>
      <div className="pb-8">
        <h5 className="text-white font-semibold text-lg">{title}</h5>
        <p className="text-white/40 text-sm mt-1.5 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

export default function ProductDetails() {
  return (
    <section className="bg-wp-dark noise">
      {/* STACK Detail */}
      <div id="stack-detail" className="relative py-32 md:py-40 border-b border-white/[0.03]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-wp-orange/[0.02] rounded-full blur-[150px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <div className="reveal flex items-center gap-3 mb-4">
                <div className="w-8 h-[2px] bg-gradient-to-r from-wp-orange to-transparent glow-line rounded-full" />
                <span className="font-mono text-wp-orange/80 text-[12px] tracking-[0.3em] uppercase">
                  Product 01
                </span>
              </div>

              <h2 className="reveal font-[Space_Grotesk] text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
                WEPARK <span className="gradient-text-static">STACK</span>
              </h2>

              <p className="reveal text-white/25 text-lg mt-2 italic font-light">
                &ldquo;Upper–Lower Mechanical Parking System&rdquo;
              </p>

              <p className="reveal text-white/50 mt-8 leading-relaxed text-lg">
                Designed to <span className="text-white/80">double parking capacity</span> within the same footprint by utilizing vertical air space. Ideal for apartments, commercial buildings, office complexes, and villas with stilt parking.
              </p>

              {/* Process steps */}
              <div className="reveal mt-12">
                <p className="text-[11px] text-white/30 uppercase tracking-[0.3em] font-semibold mb-8">
                  How It Works
                </p>
                <StepItem num="01" title="Park at Ground Level" desc="Drive in and park at the standard ground floor level." />
                <StepItem num="02" title="Hydraulic Lift Engages" desc="The platform rises smoothly — powered by a precision hydraulic mechanism." />
                <StepItem num="03" title="Safety Locks Secure" desc="Multi-position mechanical locks secure the raised platform at every point." />
                <StepItem num="04" title="Second Car Parks Below" desc="Another vehicle parks in the freed space. Fully independent operation." />
              </div>

              <a href="#contact" className="reveal inline-flex items-center gap-3 mt-6 btn-premium text-white px-8 py-4 rounded-full font-semibold tracking-wide">
                Get Quote for Stack
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M4 9h10M10 3l5.25 6-5.25 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            {/* Right column — image + specs */}
            <div className="space-y-8">
              <div className="reveal-rotate relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-wp-graphite to-wp-charcoal border border-white/[0.04]">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Larger animated stack diagram */}
                  <svg width="300" height="250" viewBox="0 0 300 250" fill="none" className="opacity-70">
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
                    <g opacity="0.25">
                      <rect x="80" y="172" width="140" height="22" rx="8" fill="#FF6B00" />
                      <rect x="100" y="157" width="100" height="18" rx="6" fill="#FF6B00" />
                    </g>
                  </svg>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <p className="text-white/15 text-xs tracking-wider uppercase">Stack System — Product Photography Coming Soon</p>
                </div>
              </div>

              <div className="reveal">
                <p className="text-[11px] text-white/30 uppercase tracking-[0.3em] font-semibold mb-4">
                  Technical Specifications
                </p>
                <SpecGrid specs={stackSpecs} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PIT Detail */}
      <div id="pit-detail" className="relative py-32 md:py-40">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-wp-amber/[0.02] rounded-full blur-[150px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left — image + specs */}
            <div className="space-y-8 order-2 lg:order-1">
              <div className="reveal-rotate relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-wp-graphite to-wp-charcoal border border-white/[0.04]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg width="300" height="250" viewBox="0 0 300 250" fill="none" className="opacity-70">
                    <rect x="20" y="100" width="100" height="5" rx="2.5" fill="#F59E0B" />
                    <rect x="180" y="100" width="100" height="5" rx="2.5" fill="#F59E0B" />
                    <rect x="120" y="105" width="4" height="100" fill="#F59E0B" opacity="0.2" />
                    <rect x="176" y="105" width="4" height="100" fill="#F59E0B" opacity="0.2" />
                    <rect x="120" y="202" width="60" height="3" fill="#F59E0B" opacity="0.2" />
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
                  <p className="text-white/15 text-xs tracking-wider uppercase">Pit System — Product Photography Coming Soon</p>
                </div>
              </div>

              <div className="reveal">
                <p className="text-[11px] text-white/30 uppercase tracking-[0.3em] font-semibold mb-4">
                  Technical Specifications
                </p>
                <SpecGrid specs={pitSpecs} />
              </div>
            </div>

            {/* Right — info */}
            <div className="order-1 lg:order-2">
              <div className="reveal flex items-center gap-3 mb-4">
                <div className="w-8 h-[2px] bg-gradient-to-r from-wp-amber to-transparent rounded-full" style={{ boxShadow: "0 0 15px rgba(245,158,11,0.4)" }} />
                <span className="font-mono text-wp-amber/50 text-[11px] tracking-[0.3em] uppercase">
                  Product 02
                </span>
              </div>

              <h2 className="reveal font-[Space_Grotesk] text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
                WEPARK <span className="gradient-text-static">PIT</span>
              </h2>

              <p className="reveal text-white/25 text-lg mt-2 italic font-light">
                &ldquo;Ground-Level Hidden Parking System&rdquo;
              </p>

              <p className="reveal text-white/50 mt-8 leading-relaxed text-lg">
                A vertically moving platform inside a civil pit. Park at ground level while another vehicle is stored <span className="text-white/80">invisibly below</span>. The premium solution where aesthetics and height restrictions matter.
              </p>

              <div className="reveal mt-12">
                <p className="text-[11px] text-white/30 uppercase tracking-[0.3em] font-semibold mb-8">
                  How It Works
                </p>
                <StepItem num="01" title="Park on Flush Platform" desc="Drive onto the ground-level platform — completely flush with the floor." />
                <StepItem num="02" title="Platform Descends into Pit" desc="Hydraulic system smoothly lowers the vehicle underground." />
                <StepItem num="03" title="Safety Locks Engage" desc="Mechanical locks and limit switches secure the position at every stage." />
                <StepItem num="04" title="Second Car Parks Above" desc="The ground is now clear — park another vehicle at normal floor level." />
              </div>

              <a href="#contact" className="reveal inline-flex items-center gap-3 mt-6 btn-premium text-white px-8 py-4 rounded-full font-semibold tracking-wide">
                Get Quote for Pit
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M4 9h10M10 3l5.25 6-5.25 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
