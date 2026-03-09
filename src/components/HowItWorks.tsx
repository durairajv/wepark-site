"use client";

const steps = [
  {
    num: "01",
    title: "Assess",
    desc: "We visit your site, measure every dimension, and design the optimal parking configuration customized to your building.",
    detail: "Free site assessment",
  },
  {
    num: "02",
    title: "Install",
    desc: "Our expert engineers install the system in days — not months. Minimal civil modification. Zero disruption to your residents.",
    detail: "3–7 days per unit",
  },
  {
    num: "03",
    title: "Park",
    desc: "Double your parking capacity from day one. Simple one-button operation. Full training included. Ongoing service support.",
    detail: "2× capacity instantly",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-32 md:py-44 bg-wp-black noise overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,107,0,0.03),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-20">
          <span className="reveal inline-block text-wp-orange/60 text-[11px] uppercase tracking-[0.4em] font-semibold mb-6 border border-wp-orange/10 px-4 py-1.5 rounded-full">
            Simple Process
          </span>
          <h2 className="reveal font-[Space_Grotesk] text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-4 tracking-tight">
            3 Steps to{" "}
            <span className="gradient-text glow-text">Double</span>
            <br />
            Your Parking.
          </h2>
        </div>

        {/* Steps — horizontal on desktop with connecting line */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-[52px] left-[16%] right-[16%] h-px">
            <div className="w-full h-full bg-gradient-to-r from-wp-orange/20 via-wp-orange/10 to-wp-orange/20" />
            <div className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-wp-orange/40 to-transparent glow-line">
              <div className="absolute inset-0 animate-[shimmer_3s_ease-in-out_infinite]" style={{ background: "linear-gradient(90deg, transparent, rgba(255,107,0,0.3), transparent)", backgroundSize: "200% 100%" }} />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, i) => (
              <div key={i} className="reveal text-center" style={{ transitionDelay: `${i * 0.2}s` }}>
                {/* Number circle */}
                <div className="relative inline-flex mb-8">
                  <div className="w-[104px] h-[104px] rounded-full border border-wp-orange/15 flex items-center justify-center relative group">
                    <div className="absolute inset-0 rounded-full bg-wp-orange/[0.03] group-hover:bg-wp-orange/[0.08] transition-all duration-700" />
                    <div className="absolute inset-2 rounded-full border border-wp-orange/10" />
                    <span className="font-[Space_Grotesk] text-3xl font-bold gradient-text-static relative z-10">
                      {step.num}
                    </span>
                  </div>
                </div>

                <h3 className="font-[Space_Grotesk] text-3xl font-bold text-white tracking-tight">
                  {step.title}
                </h3>
                <p className="text-white/40 mt-4 leading-relaxed max-w-xs mx-auto">
                  {step.desc}
                </p>
                <span className="inline-block mt-4 px-4 py-1.5 rounded-full text-[11px] font-semibold bg-wp-orange/[0.06] text-wp-orange/60 border border-wp-orange/10 tracking-wider uppercase">
                  {step.detail}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal text-center mt-20">
          <a href="#contact" className="btn-premium text-white px-10 py-4 rounded-full text-lg font-semibold tracking-wide inline-flex items-center gap-3 group">
            Schedule a Free Site Visit
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="transition-transform group-hover:translate-x-1">
              <path d="M4 10h12M12 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
