"use client";

const stats = [
  { value: 30, suffix: "K+", label: "cars added daily in India", highlight: true },
  { value: 70, suffix: "%", label: "apartments lack adequate parking", highlight: false },
  { value: 2, suffix: "x", label: "car growth vs parking in a decade", highlight: false },
];

export default function Problem() {
  return (
    <section id="problem" className="relative py-32 md:py-44 bg-wp-black noise overflow-hidden">
      {/* Ambient gradient */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-wp-black to-transparent z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,107,0,0.03),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="reveal text-center mb-20">
          <span className="inline-block text-wp-orange/60 text-[11px] uppercase tracking-[0.4em] font-semibold mb-6 border border-wp-orange/10 px-4 py-1.5 rounded-full">
            The Urban Crisis
          </span>
        </div>

        {/* Big dramatic statement */}
        <div className="max-w-5xl mx-auto text-center mb-20">
          <h2 className="reveal font-[Space_Grotesk] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05]">
            India adds{" "}
            <span className="gradient-text glow-text">30,000 cars</span>
            <br />
            <span className="text-white/30">every single day.</span>
          </h2>
          <p className="reveal mt-8 text-wp-ash text-xl md:text-2xl font-light leading-relaxed max-w-2xl mx-auto">
            Parking space? It&apos;s <span className="text-white/80 font-medium">shrinking</span>. The gap between vehicles and parking is a crisis hiding in plain sight.
          </p>
        </div>

        {/* Stat cards — dramatic */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto mb-20">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`reveal tilt-card glass-card rounded-2xl p-8 md:p-10 text-center group transition-all duration-700 ${
                stat.highlight ? "border-glow" : ""
              }`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="tilt-inner">
                <p
                  data-countup
                  data-target={stat.value}
                  data-suffix={stat.suffix}
                  className="font-[Space_Grotesk] text-6xl md:text-7xl font-bold gradient-text-static"
                >
                  0{stat.suffix}
                </p>
                <p className="text-white/40 mt-4 text-sm leading-relaxed tracking-wide">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Realistic parking scene — CSS illustrated */}
        <div className="reveal-scale max-w-5xl mx-auto mb-20 relative group">
          <div className="aspect-[21/9] rounded-2xl overflow-hidden bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] border border-white/[0.04] relative">
            {/* Concrete ceiling */}
            <div className="absolute top-0 left-0 right-0 h-[15%] bg-gradient-to-b from-[#2a2a28] to-[#1e1e1c]">
              {/* Ceiling pipes */}
              <div className="absolute bottom-0 left-[20%] w-[60%] h-[3px] bg-[#333] rounded" />
              <div className="absolute bottom-2 left-[30%] w-[40%] h-[2px] bg-[#2a2a2a] rounded" />
              {/* Fluorescent lights */}
              <div className="absolute bottom-0 left-[25%] w-16 h-1 bg-yellow-200/20 rounded blur-sm" />
              <div className="absolute bottom-0 left-[55%] w-16 h-1 bg-yellow-200/15 rounded blur-sm" />
            </div>
            {/* Floor */}
            <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-gradient-to-t from-[#1a1a1a] to-[#151515]">
              {/* Parking lines */}
              <div className="absolute top-0 left-[14%] w-[1px] h-full bg-yellow-400/15" />
              <div className="absolute top-0 left-[28%] w-[1px] h-full bg-yellow-400/15" />
              <div className="absolute top-0 left-[42%] w-[1px] h-full bg-yellow-400/15" />
              <div className="absolute top-0 left-[56%] w-[1px] h-full bg-yellow-400/15" />
              <div className="absolute top-0 left-[70%] w-[1px] h-full bg-yellow-400/15" />
              <div className="absolute top-0 left-[84%] w-[1px] h-full bg-yellow-400/15" />
            </div>
            {/* Cars — cramped, overlapping, chaotic */}
            <div className="absolute bottom-[18%] left-0 right-0 flex items-end px-4 gap-0">
              {/* Car 1 — sedan */}
              <div className="relative flex-1 h-[45%]">
                <div className="absolute bottom-0 left-[5%] w-[85%] h-[55%] bg-[#2d3748] rounded-t-lg border-t border-l border-r border-white/[0.03]" />
                <div className="absolute bottom-[55%] left-[15%] w-[65%] h-[35%] bg-[#2d3748] rounded-t-lg border-t border-l border-r border-white/[0.03]">
                  <div className="absolute inset-1 rounded-t bg-[#1a2332]/80" />
                </div>
                <div className="absolute bottom-0 left-[10%] w-[16%] h-[16%] bg-[#1a1a1a] rounded-full border border-white/[0.05]" />
                <div className="absolute bottom-0 right-[15%] w-[16%] h-[16%] bg-[#1a1a1a] rounded-full border border-white/[0.05]" />
                <div className="absolute bottom-[30%] left-0 w-2 h-2 bg-yellow-500/30 rounded-full blur-sm" />
              </div>
              {/* Car 2 — SUV, too close */}
              <div className="relative flex-1 h-[55%] -ml-2">
                <div className="absolute bottom-0 left-[3%] w-[90%] h-[52%] bg-[#4a3728] rounded-t-lg border-t border-l border-r border-white/[0.03]" />
                <div className="absolute bottom-[52%] left-[12%] w-[70%] h-[38%] bg-[#4a3728] rounded-t-lg border-t border-l border-r border-white/[0.03]">
                  <div className="absolute inset-1 rounded-t bg-[#2a1f15]/80" />
                </div>
                <div className="absolute bottom-0 left-[8%] w-[18%] h-[15%] bg-[#1a1a1a] rounded-full border border-white/[0.05]" />
                <div className="absolute bottom-0 right-[12%] w-[18%] h-[15%] bg-[#1a1a1a] rounded-full border border-white/[0.05]" />
              </div>
              {/* Car 3 — white sedan */}
              <div className="relative flex-1 h-[44%] -ml-1">
                <div className="absolute bottom-0 left-[5%] w-[85%] h-[55%] bg-[#8a8a8a] rounded-t-lg border-t border-l border-r border-white/[0.06]" />
                <div className="absolute bottom-[55%] left-[18%] w-[60%] h-[35%] bg-[#8a8a8a] rounded-t-lg border-t border-l border-r border-white/[0.06]">
                  <div className="absolute inset-1 rounded-t bg-[#5a6a7a]/60" />
                </div>
                <div className="absolute bottom-0 left-[10%] w-[15%] h-[16%] bg-[#1a1a1a] rounded-full border border-white/[0.05]" />
                <div className="absolute bottom-0 right-[15%] w-[15%] h-[16%] bg-[#1a1a1a] rounded-full border border-white/[0.05]" />
              </div>
              {/* Car 4 — red hatch, angled badly */}
              <div className="relative flex-1 h-[42%] -ml-3 rotate-[3deg]">
                <div className="absolute bottom-0 left-[5%] w-[80%] h-[55%] bg-[#6b2020] rounded-t-lg border-t border-l border-r border-white/[0.03]" />
                <div className="absolute bottom-[55%] left-[20%] w-[55%] h-[35%] bg-[#6b2020] rounded-t-lg border-t border-l border-r border-white/[0.03]">
                  <div className="absolute inset-1 rounded-t bg-[#3a1010]/80" />
                </div>
                <div className="absolute bottom-0 left-[10%] w-[16%] h-[16%] bg-[#1a1a1a] rounded-full" />
                <div className="absolute bottom-0 right-[18%] w-[16%] h-[16%] bg-[#1a1a1a] rounded-full" />
              </div>
              {/* Car 5 — silver, partially double parked */}
              <div className="relative flex-1 h-[48%] -ml-2">
                <div className="absolute bottom-0 left-[2%] w-[88%] h-[52%] bg-[#5a5a5e] rounded-t-lg border-t border-white/[0.04]" />
                <div className="absolute bottom-[52%] left-[14%] w-[62%] h-[38%] bg-[#5a5a5e] rounded-t-lg border-t border-white/[0.04]">
                  <div className="absolute inset-1 rounded-t bg-[#3a3a40]/70" />
                </div>
                <div className="absolute bottom-0 left-[8%] w-[16%] h-[14%] bg-[#1a1a1a] rounded-full" />
                <div className="absolute bottom-0 right-[14%] w-[16%] h-[14%] bg-[#1a1a1a] rounded-full" />
              </div>
              {/* Car 6 — blocked */}
              <div className="relative flex-1 h-[46%] -ml-1">
                <div className="absolute bottom-0 left-[5%] w-[85%] h-[55%] bg-[#1e3a5a] rounded-t-lg border-t border-white/[0.03]" />
                <div className="absolute bottom-[55%] left-[18%] w-[58%] h-[35%] bg-[#1e3a5a] rounded-t-lg border-t border-white/[0.03]">
                  <div className="absolute inset-1 rounded-t bg-[#102030]/80" />
                </div>
                <div className="absolute bottom-0 left-[10%] w-[16%] h-[16%] bg-[#1a1a1a] rounded-full" />
                <div className="absolute bottom-0 right-[15%] w-[16%] h-[16%] bg-[#1a1a1a] rounded-full" />
                <div className="absolute bottom-[28%] right-0 w-2 h-2 bg-red-500/30 rounded-full blur-sm" />
              </div>
            </div>
            {/* Pillars */}
            <div className="absolute top-[15%] bottom-0 left-[33%] w-[3%] bg-gradient-to-r from-[#2a2a28] via-[#333330] to-[#2a2a28]" />
            <div className="absolute top-[15%] bottom-0 left-[66%] w-[3%] bg-gradient-to-r from-[#2a2a28] via-[#333330] to-[#2a2a28]" />
            {/* Light pools on ground */}
            <div className="absolute bottom-0 left-[25%] w-20 h-12 bg-yellow-200/[0.02] blur-xl rounded-full" />
            <div className="absolute bottom-0 left-[55%] w-20 h-12 bg-yellow-200/[0.02] blur-xl rounded-full" />
            {/* Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-wp-black/60 via-transparent to-wp-black/30" />
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <p className="text-white/25 text-xs font-medium tracking-widest uppercase">
                Typical Apartment Stilt Parking — Coimbatore
              </p>
            </div>
          </div>
          {/* Corner accents */}
          <div className="absolute -top-px -left-px w-8 h-8 border-t border-l border-wp-orange/20 rounded-tl-2xl" />
          <div className="absolute -top-px -right-px w-8 h-8 border-t border-r border-wp-orange/20 rounded-tr-2xl" />
          <div className="absolute -bottom-px -left-px w-8 h-8 border-b border-l border-wp-orange/20 rounded-bl-2xl" />
          <div className="absolute -bottom-px -right-px w-8 h-8 border-b border-r border-wp-orange/20 rounded-br-2xl" />
        </div>

        {/* Transition question */}
        <div className="reveal text-center">
          <h3 className="font-[Space_Grotesk] text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            What if you could
            <br />
            <span className="gradient-text glow-text">double your parking</span>
            <br />
            <span className="text-white/30">without adding a single square foot?</span>
          </h3>
        </div>
      </div>

      {/* Bottom gradient into next section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-wp-charcoal to-transparent z-10" />
    </section>
  );
}
