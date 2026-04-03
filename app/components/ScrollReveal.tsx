"use client";

import { useEffect, useRef, useCallback } from "react";

export default function ScrollReveal() {
  const heroRef = useRef<HTMLElement | null>(null);
  const rafId = useRef<number>(0);

  const handleScroll = useCallback(() => {
    if (rafId.current) return;
    rafId.current = requestAnimationFrame(() => {
      rafId.current = 0;
      if (!heroRef.current) return;
      const inner = heroRef.current.querySelector<HTMLElement>(".hero-inner");
      if (!inner) return;

      const rect = heroRef.current.getBoundingClientRect();
      const visible = rect.bottom > 0;
      if (!visible) return;

      // Subtle parallax: content drifts up slower than scroll
      const scrolled = -rect.top;
      const parallax = scrolled * 0.15;
      const opacity = Math.max(0, 1 - scrolled * 0.0012);
      inner.style.transform = `translateY(${parallax}px)`;
      inner.style.opacity = String(opacity);
    });
  }, []);

  useEffect(() => {
    // Scroll reveal observer
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

    document.querySelectorAll(".rv").forEach((el) => observer.observe(el));

    // Hero parallax
    heroRef.current = document.querySelector(".hero");
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (heroRef.current && !prefersReduced) {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [handleScroll]);

  return null;
}
