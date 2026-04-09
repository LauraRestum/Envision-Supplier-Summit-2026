"use client";

import { useEffect, useState } from "react";
import { navAnchors } from "../data/summit-content";

type Page = "home" | "day1" | "day2";

const envisionLogoImg = (
  <img src="/images/envision-logo.png" alt="Envision" style={{ height: 22 }} />
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
          {envisionLogoImg}
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
