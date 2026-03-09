"use client";
import { useEffect, useState, useRef } from "react";

function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number; pulse: number }[] = [];
    const PARTICLE_COUNT = 60;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
        pulse: Math.random() * Math.PI * 2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += 0.02;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        const glowOpacity = p.opacity * (0.7 + Math.sin(p.pulse) * 0.3);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 107, 0, ${glowOpacity})`;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 107, 0, ${glowOpacity * 0.1})`;
        ctx.fill();
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255, 107, 0, ${0.06 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />;
}

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [textPhase, setTextPhase] = useState(0);

  useEffect(() => {
    setLoaded(true);
    const t1 = setTimeout(() => setTextPhase(1), 400);
    const t2 = setTimeout(() => setTextPhase(2), 900);
    const t3 = setTimeout(() => setTextPhase(3), 1400);
    const t4 = setTimeout(() => setTextPhase(4), 1900);
    const t5 = setTimeout(() => setTextPhase(5), 2300);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); clearTimeout(t5); };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-wp-black noise">
      <ParticleField />

      {/* Gradient orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-wp-orange/[0.04] blur-[120px] orb-1 z-0" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-wp-amber/[0.03] blur-[100px] orb-2 z-0" />
      <div className="absolute top-[40%] left-[60%] w-[300px] h-[300px] rounded-full bg-wp-orange/[0.02] blur-[80px] orb-3 z-0" />

      {/* Radial spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(255,107,0,0.06)_0%,transparent_70%)] z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className={`transition-all duration-1000 delay-300 ${textPhase >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <span className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-wp-orange/20 bg-wp-orange/[0.04]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-wp-orange opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-wp-orange" />
            </span>
            <span className="text-wp-orange/80 text-sm font-medium tracking-wide">
              Now Launching in Coimbatore
            </span>
          </span>
        </div>

        {/* Main headline — reduced size */}
        <h1 className="mt-10 font-[Space_Grotesk] leading-[0.92] tracking-tight">
          <span className="block overflow-hidden">
            <span
              className={`block text-[clamp(2rem,6vw,5rem)] font-bold text-white transition-all duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                textPhase >= 2 ? "translate-y-0 opacity-100" : "translate-y-[120%] opacity-0"
              }`}
            >
              Where Do Cities
            </span>
          </span>
          <span className="block overflow-hidden mt-1">
            <span
              className={`block text-[clamp(2rem,6vw,5rem)] font-bold text-white transition-all duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                textPhase >= 3 ? "translate-y-0 opacity-100" : "translate-y-[120%] opacity-0"
              }`}
            >
              Find <span className="gradient-text glow-text">Space to Park</span>
              <span className="text-wp-orange">?</span>
            </span>
          </span>
        </h1>

        {/* Tagline */}
        <div className={`mt-8 transition-all duration-[1.6s] ease-[cubic-bezier(0.16,1,0.3,1)] ${textPhase >= 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-wp-orange/40" />
            <p className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-wide">
              <span className="text-white/40">We</span>{" "}
              <span className="text-wp-orange font-semibold glow-text">Engineer</span>{" "}
              <span className="text-white/40">It.</span>
            </p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-wp-orange/40" />
          </div>
        </div>

        {/* Sub description */}
        <p className={`mt-8 text-wp-ash text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed transition-all duration-[1.8s] delay-100 ${textPhase >= 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          Intelligent vertical parking systems that{" "}
          <span className="text-white/80 font-medium">double your capacity</span>
          {" "}without expanding your footprint. Built for modern India.
        </p>

        {/* CTAs */}
        <div className={`mt-12 flex flex-col sm:flex-row items-center justify-center gap-5 transition-all duration-[2s] ${textPhase >= 5 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <a href="#products" className="btn-premium text-white px-10 py-4 rounded-full text-lg font-semibold tracking-wide group flex items-center gap-3">
            Explore Solutions
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
              <path d="M4 10h12M12 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#contact" className="btn-outline text-white/80 px-10 py-4 rounded-full text-lg font-medium tracking-wide group flex items-center gap-3">
            Get a Quote
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
              <path d="M3.75 9h10.5M10.5 3.75L15.75 9l-5.25 5.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator — more visible */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 transition-all duration-[2.5s] ${textPhase >= 5 ? "opacity-100" : "opacity-0"}`}>
        <a href="#problem" className="flex flex-col items-center gap-3 group">
          <span className="text-xs text-white/40 uppercase tracking-[0.3em] font-semibold group-hover:text-wp-orange transition-colors">
            Discover
          </span>
          <div className="relative w-6 h-10 rounded-full border border-white/20 flex justify-center pt-2 group-hover:border-wp-orange/40 transition-colors">
            <div className="w-1.5 h-3 rounded-full bg-wp-orange animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}
