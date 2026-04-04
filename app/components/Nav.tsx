"use client";

import { useEffect, useState } from "react";
import { navAnchors } from "../data/summit-content";

type Page = "home" | "day1" | "day2";

const envisionLogoSvg = (
  <svg width="110" height="22" viewBox="0 0 110 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="17" fontFamily="Montserrat,sans-serif" fontWeight="900" fontSize="16" fill="white" letterSpacing="0.5">ENVISION</text>
  </svg>
);

export default function Nav({
  activePage,
  onPageChange,
}: {
  activePage: Page;
  onPageChange: (p: Page) => void;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const anchors = navAnchors[activePage] || navAnchors.home;

  return (
    <nav className={`nav${scrolled ? " sc" : ""}`}>
      <div className="nav-left">
        <button className="nav-logo" onClick={() => onPageChange("home")}>
          {envisionLogoSvg}
          <div className="nav-logo-sep" />
          <div className="nav-logo-text">
            <b>Supplier Summit</b>
            <span>2026</span>
          </div>
        </button>
        <div className="nav-sep" />
        <div className="nav-pages">
          {(["home", "day1", "day2"] as Page[]).map((p) => (
            <button
              key={p}
              className={`nav-page${activePage === p ? " active" : ""}`}
              onClick={() => onPageChange(p)}
            >
              {p === "home" ? "Overview" : p === "day1" ? "Day 1" : "Day 2"}
            </button>
          ))}
        </div>
      </div>

      <div className="nav-anchors">
        {anchors.map((a) => (
          <a
            key={a.label}
            className="nav-anchor"
            href={a.href}
            {...(!a.href.startsWith("#") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            onClick={(e) => {
              if (a.href.startsWith("#")) {
                e.preventDefault();
                document.querySelector(a.href)?.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            {a.label}
          </a>
        ))}
      </div>

      <a className="nav-rsvp" href="https://supplier-summit-2026.vercel.app" target="_blank" rel="noopener noreferrer">
        RSVP
      </a>
    </nav>
  );
}
