"use client";

export default function Compare() {
  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-8">
      <div className="text-center mb-12">
        <div className="w-14 h-14 rounded-xl bg-[#FF6B00] flex items-center justify-center mx-auto mb-6">
          <span className="text-white font-bold text-2xl font-[Space_Grotesk]">W</span>
        </div>
        <h1 className="font-[Space_Grotesk] text-4xl md:text-5xl font-bold text-white">
          WePark Website Themes
        </h1>
        <p className="text-white/40 text-lg mt-4 max-w-xl mx-auto">
          Two design directions for Raj to review. Click to explore each theme in full.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full">
        {/* Dark Theme */}
        <a
          href="/"
          className="group bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 rounded-3xl p-8 hover:border-[#FF6B00]/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#FF6B00]/10"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FF6B00] text-white">
              PRIMARY
            </span>
          </div>
          <h2 className="font-[Space_Grotesk] text-2xl font-bold text-white">
            Dark Theme
          </h2>
          <p className="text-white/40 mt-2 text-sm italic">
            &ldquo;Tesla / Porsche Premium&rdquo;
          </p>
          <p className="text-white/50 mt-4 leading-relaxed">
            Fully dark experience with dramatic animations, particle effects, glassmorphism,
            and premium glow effects. Bold, minimal, and striking.
          </p>
          <div className="mt-6 flex gap-3">
            <div className="w-8 h-8 rounded-full bg-[#050505] border border-white/10" />
            <div className="w-8 h-8 rounded-full bg-[#FF6B00]" />
            <div className="w-8 h-8 rounded-full bg-[#0a0a0a] border border-white/10" />
            <div className="w-8 h-8 rounded-full bg-[#F59E0B]" />
          </div>
          <div className="mt-6 text-[#FF6B00] font-semibold text-sm group-hover:gap-3 flex items-center gap-2 transition-all">
            View Dark Theme &rarr;
          </div>
        </a>

        {/* Light Theme */}
        <a
          href="/light"
          className="group bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 rounded-3xl p-8 hover:border-[#FF6B00]/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#FF6B00]/10"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-white/60">
              ALTERNATIVE
            </span>
          </div>
          <h2 className="font-[Space_Grotesk] text-2xl font-bold text-white">
            Light Theme
          </h2>
          <p className="text-white/40 mt-2 text-sm italic">
            &ldquo;Apple / Clean Minimal&rdquo;
          </p>
          <p className="text-white/50 mt-4 leading-relaxed">
            Clean white and cream backgrounds with subtle dot patterns. Apple-inspired
            typography and layout. Elegant, trustworthy, and modern.
          </p>
          <div className="mt-6 flex gap-3">
            <div className="w-8 h-8 rounded-full bg-white border border-gray-200" />
            <div className="w-8 h-8 rounded-full bg-[#FF6B00]" />
            <div className="w-8 h-8 rounded-full bg-[#FAFAFA] border border-gray-200" />
            <div className="w-8 h-8 rounded-full bg-[#111] border border-white/10" />
          </div>
          <div className="mt-6 text-[#FF6B00] font-semibold text-sm group-hover:gap-3 flex items-center gap-2 transition-all">
            View Light Theme &rarr;
          </div>
        </a>
      </div>

      <p className="text-white/20 text-sm mt-12">
        wepark.co.in — March 2026
      </p>
    </div>
  );
}
