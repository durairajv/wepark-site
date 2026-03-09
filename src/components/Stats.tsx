"use client";

const stats = [
  { value: 2, suffix: "×", label: "Parking\nCapacity" },
  { value: 2500, suffix: "", label: "kg Load\nTested", prefix: "" },
  { value: 7, suffix: "", label: "Days to\nInstall", prefix: "<" },
  { value: 10, suffix: "+", label: "Cities\nTargeted" },
];

export default function Stats() {
  return (
    <section className="relative py-20 md:py-28 bg-wp-black noise overflow-hidden">
      {/* Horizontal glow line */}
      <div className="absolute top-0 left-0 w-full section-divider" />
      <div className="absolute bottom-0 left-0 w-full section-divider" />

      {/* Ambient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,107,0,0.03),transparent_60%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="reveal text-center group" style={{ transitionDelay: `${i * 0.12}s` }}>
              <div className="relative inline-block">
                <p
                  data-countup
                  data-target={stat.value}
                  data-suffix={stat.suffix}
                  data-prefix={stat.prefix || ""}
                  className="font-[Space_Grotesk] text-5xl md:text-6xl lg:text-7xl font-bold gradient-text-static glow-text transition-all duration-700 group-hover:scale-105"
                >
                  {stat.prefix || ""}0{stat.suffix}
                </p>
              </div>
              <p className="text-white/30 text-sm mt-3 font-medium tracking-wide whitespace-pre-line leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
