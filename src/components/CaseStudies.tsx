"use client";

const cases = [
  {
    type: "WEPARK STACK",
    project: "12-Flat Apartment Complex",
    location: "Coimbatore",
    problem: "Only 8 stilt parking spaces for 12 families. Daily disputes. Buyers losing confidence.",
    solution: "Installed 6 WEPARK STACK systems in existing stilt parking area.",
    before: 8,
    after: 14,
    impact: "Builder resolved parking approval concern and improved buyer confidence significantly.",
    metric: "+75%",
  },
  {
    type: "WEPARK PIT",
    project: "Premium 10-Unit Residential",
    location: "Coimbatore",
    problem: "Basement height restricted to 2.6m. Traditional stack system wouldn't fit.",
    solution: "Installed 8 WEPARK PIT systems — vehicles stored underground.",
    before: 8,
    after: 16,
    impact: "Developer marketed '2 parking per flat' as a premium feature without increasing building height.",
    metric: "2×",
  },
];

export default function CaseStudies() {
  return (
    <section id="results" className="relative py-32 md:py-44 bg-wp-dark noise overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,107,0,0.02),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-20">
          <span className="reveal inline-block text-wp-orange/60 text-[11px] uppercase tracking-[0.4em] font-semibold mb-6 border border-wp-orange/10 px-4 py-1.5 rounded-full">
            Proven Results
          </span>
          <h2 className="reveal font-[Space_Grotesk] text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
            Real Projects.{" "}
            <span className="gradient-text glow-text">Real Impact.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {cases.map((c, i) => (
            <div
              key={i}
              className="reveal tilt-card group"
              style={{ transitionDelay: `${i * 0.2}s` }}
            >
              <div className="glass-card rounded-2xl overflow-hidden border-glow transition-all duration-700 hover:bg-white/[0.03]">
                {/* Header */}
                <div className="p-8 pb-0">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-wp-orange/50 text-[11px] tracking-[0.3em] uppercase">
                      {c.type}
                    </span>
                    <span className="font-[Space_Grotesk] text-3xl font-bold gradient-text-static">
                      {c.metric}
                    </span>
                  </div>
                  <h3 className="font-[Space_Grotesk] text-2xl font-bold text-white">
                    {c.project}
                  </h3>
                  <p className="text-white/30 text-sm mt-1">{c.location}</p>
                </div>

                <div className="p-8 space-y-6">
                  {/* Problem */}
                  <div>
                    <span className="text-[10px] font-bold text-red-400/60 uppercase tracking-[0.2em]">Problem</span>
                    <p className="text-white/40 text-sm mt-1.5 leading-relaxed">{c.problem}</p>
                  </div>

                  {/* Solution */}
                  <div>
                    <span className="text-[10px] font-bold text-wp-orange/60 uppercase tracking-[0.2em]">Solution</span>
                    <p className="text-white/40 text-sm mt-1.5 leading-relaxed">{c.solution}</p>
                  </div>

                  {/* Before → After with animation */}
                  <div className="flex items-center gap-6 py-4">
                    <div className="flex-1 text-center p-5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                      <p className="text-[10px] text-white/25 uppercase tracking-wider font-bold">Before</p>
                      <p className="font-[Space_Grotesk] text-4xl font-bold text-white/25 mt-2">{c.before}</p>
                      <p className="text-[10px] text-white/20 mt-1">cars</p>
                    </div>

                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full border border-wp-orange/20 flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8h10M9 4l4 4-4 4" stroke="#FF6B00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>

                    <div className="flex-1 text-center p-5 rounded-xl bg-wp-orange/[0.04] border border-wp-orange/[0.1]">
                      <p className="text-[10px] text-wp-orange/60 uppercase tracking-wider font-bold">After</p>
                      <p
                        data-countup
                        data-target={c.after}
                        data-suffix=""
                        className="font-[Space_Grotesk] text-4xl font-bold gradient-text-static mt-2"
                      >
                        0
                      </p>
                      <p className="text-[10px] text-wp-orange/40 mt-1">cars</p>
                    </div>
                  </div>

                  {/* Impact */}
                  <div className="border-t border-white/[0.04] pt-5">
                    <span className="text-[10px] font-bold text-green-400/50 uppercase tracking-[0.2em]">Impact</span>
                    <p className="text-white/50 text-sm mt-1.5 leading-relaxed">{c.impact}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
