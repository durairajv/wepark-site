"use client";

export default function About() {
  return (
    <section id="about" className="relative py-32 md:py-44 bg-wp-black noise overflow-hidden">
      <div className="absolute top-0 left-0 w-full section-divider" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(245,158,11,0.02),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="reveal inline-block text-wp-orange/60 text-[11px] uppercase tracking-[0.4em] font-semibold mb-6 border border-wp-orange/10 px-4 py-1.5 rounded-full">
              Our Story
            </span>

            <h2 className="reveal font-[Space_Grotesk] text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-4 tracking-tight leading-[1.05]">
              Born in Coimbatore.
              <br />
              <span className="gradient-text glow-text">Built for India.</span>
            </h2>

            <p className="reveal text-white/40 text-xl mt-8 leading-relaxed">
              WePark was founded with one mission: solve the urban parking crisis through intelligent engineering. Growing cities shouldn&apos;t choose between more homes and more parking — <span className="text-white/70">technology delivers both</span>.
            </p>

            <p className="reveal text-white/35 text-lg mt-6 leading-relaxed">
              Starting from Coimbatore — one of India&apos;s fastest-growing tier-2 cities — we&apos;re building the parking infrastructure that will scale to every apartment, office, and commercial space across the nation.
            </p>

            <div className="reveal mt-12 flex flex-wrap gap-10">
              {[
                { val: "2025", label: "Founded" },
                { val: "Coimbatore", label: "Headquarters" },
                { val: "Pan-India", label: "Vision" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="font-[Space_Grotesk] text-2xl font-bold gradient-text-static">
                    {item.val}
                  </p>
                  <p className="text-white/25 text-sm mt-1 tracking-wide">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Team placeholder */}
          <div className="reveal-rotate space-y-6">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-wp-graphite to-wp-charcoal border border-white/[0.04]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full border border-wp-orange/15 mx-auto mb-4 flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="opacity-30">
                      <circle cx="16" cy="11" r="5" stroke="#FF6B00" strokeWidth="1.5" />
                      <path d="M6 28c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke="#FF6B00" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <p className="text-white/20 text-sm font-medium">Founder & Team</p>
                  <p className="text-white/10 text-xs mt-1">[Photo coming soon]</p>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { title: "Innovation", desc: "Engineering-first" },
                { title: "Safety", desc: "Zero compromise" },
                { title: "Service", desc: "Lifetime support" },
              ].map((v) => (
                <div key={v.title} className="glass-card rounded-xl p-4 text-center group hover:bg-white/[0.04] transition-all duration-500">
                  <p className="font-[Space_Grotesk] font-bold text-white/80 text-sm group-hover:text-wp-orange transition-colors">
                    {v.title}
                  </p>
                  <p className="text-white/25 text-[11px] mt-1">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
