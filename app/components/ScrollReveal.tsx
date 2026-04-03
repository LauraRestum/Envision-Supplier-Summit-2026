"use client";

import { useEffect, useRef } from "react";

export default function ScrollReveal({ activePage }: { activePage: string }) {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Disconnect previous observer
    observerRef.current?.disconnect();

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      // Show everything immediately
      document.querySelectorAll(".rv").forEach((el) => el.classList.add("on"));
      return;
    }

    // Small delay to let page render after toggle
    const timer = setTimeout(() => {
      const activeDivs = document.querySelectorAll(".page.active .rv");

      // Reset reveals on newly active page
      activeDivs.forEach((el) => el.classList.remove("on"));

      const obs = new IntersectionObserver(
        (entries) => {
          requestAnimationFrame(() => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("on");
                obs.unobserve(entry.target);
              }
            });
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
      );

      activeDivs.forEach((el) => obs.observe(el));
      observerRef.current = obs;
    }, 100);

    // Parallax for day hero backgrounds
    const handleScroll = () => {
      const y = window.scrollY;
      const d1bg = document.getElementById("d1bg");
      const d2bg = document.getElementById("d2bg");
      if (d1bg && activePage === "day1") {
        d1bg.style.transform = `translateY(${Math.round(y * 0.15)}px)`;
      }
      if (d2bg && activePage === "day2") {
        d2bg.style.transform = `translateY(${Math.round(y * 0.15)}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      observerRef.current?.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activePage]);

  return null;
}
