"use client";
import { useEffect, useCallback } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
    );

    const selectors = ".reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-rotate, .stagger-children, .char-reveal";
    document.querySelectorAll(selectors).forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

export function useCountUp() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const target = parseInt(el.getAttribute("data-target") || "0");
            const suffix = el.getAttribute("data-suffix") || "";
            const prefix = el.getAttribute("data-prefix") || "";
            const duration = 2500;
            const start = performance.now();

            function update(now: number) {
              const elapsed = now - start;
              const progress = Math.min(elapsed / duration, 1);
              // Elastic easing for more dramatic effect
              const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
              const current = Math.floor(eased * target);
              el.textContent = prefix + current.toLocaleString() + suffix;
              if (progress < 1) requestAnimationFrame(update);
            }
            requestAnimationFrame(update);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll("[data-countup]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export function useCustomCursor() {
  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth < 768) return;

    const dot = document.createElement("div");
    dot.className = "cursor-dot";
    const ring = document.createElement("div");
    ring.className = "cursor-ring";
    document.body.appendChild(dot);
    document.body.appendChild(ring);

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`;
      requestAnimationFrame(animate);
    };

    const onMouseEnterInteractive = () => ring.classList.add("hovering");
    const onMouseLeaveInteractive = () => ring.classList.remove("hovering");

    document.addEventListener("mousemove", onMouseMove);
    requestAnimationFrame(animate);

    // Detect hoverable elements
    const interactives = document.querySelectorAll("a, button, [role='button'], .tilt-card");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnterInteractive);
      el.addEventListener("mouseleave", onMouseLeaveInteractive);
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterInteractive);
        el.removeEventListener("mouseleave", onMouseLeaveInteractive);
      });
      dot.remove();
      ring.remove();
    };
  }, []);
}

export function useParallax() {
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    document.querySelectorAll<HTMLElement>(".parallax-slow").forEach((el) => {
      el.style.transform = `translateY(${scrollY * 0.03}px)`;
    });
    document.querySelectorAll<HTMLElement>(".parallax-medium").forEach((el) => {
      el.style.transform = `translateY(${scrollY * 0.06}px)`;
    });
    document.querySelectorAll<HTMLElement>(".parallax-fast").forEach((el) => {
      el.style.transform = `translateY(${scrollY * 0.1}px)`;
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);
}

export function useScrollProgress() {
  useEffect(() => {
    const line = document.createElement("div");
    line.className = "scroll-line";
    document.body.appendChild(line);

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      line.style.width = `${progress}%`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      line.remove();
    };
  }, []);
}
