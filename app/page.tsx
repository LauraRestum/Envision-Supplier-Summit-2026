"use client";

import { useState, useCallback } from "react";
import Nav from "./components/Nav";
import Ticker from "./components/Ticker";
import HeroParticles from "./components/HeroParticles";
import ScrollReveal from "./components/ScrollReveal";
import Timeline from "./components/Timeline";
import PhotoBanner from "./components/PhotoBanner";
import SpeakerCard from "./components/SpeakerCard";
import * as C from "./data/summit-content";

type Page = "home" | "day1" | "day2";

export default function Home() {
  const [activePage, setActivePage] = useState<Page>("home");

  const go = useCallback((p: Page) => {
    setActivePage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Nav activePage={activePage} onPageChange={go} />

      {/* ════════════════════ HOME ════════════════════ */}
      <div className={`page${activePage === "home" ? " active" : ""}`}>
        {/* Hero */}
        <section className="hero">
          <img className="hero-bg" src="/images/hero-bg.png" alt="" />
          <div className="hero-ov1" />
          <div className="hero-ov2" />
          <HeroParticles />
          <div className="hero-body">
            <div className="hero-badge rv">
              <div className="hero-badge-dot" />
              <span>{C.hero.badge}</span>
            </div>
            <div className="hero-h1 rv d1">{C.hero.h1}</div>
            <div className="hero-h2 rv d2">{C.hero.h2}</div>
            <div className="hero-meta rv d3">
              <span className="hero-meta-item">
                <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <circle cx="12" cy="11" r="3" />
                </svg>
                {C.hero.metaLocation}
              </span>
              <div className="hero-meta-sep" />
              <span className="hero-meta-item">
                <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                {C.hero.metaDetails}
              </span>
            </div>
            <p className="hero-desc rv d4">{C.hero.body}</p>
            <div className="hero-actions rv d5">
              <a className="btn-o" href="#agenda-glance" onClick={(e) => { e.preventDefault(); document.querySelector("#agenda-glance")?.scrollIntoView({ behavior: "smooth" }); }}>
                {C.hero.ctaPrimary.label}
              </a>
              <a className="btn-g" href="https://supplier-summit-2026.vercel.app" target="_blank" rel="noopener noreferrer">
                RSVP
              </a>
            </div>
          </div>
        </section>

        {/* Why This Summit */}
        <section className="s s-dark" id="home-why">
          <div className="sec-eye rv">{C.whyThisSummit.eyebrow}</div>
          <h2 className="sec-h rv d1" style={{ whiteSpace: "pre-line" }}>{C.whyThisSummit.heading}</h2>
          <p className="sec-sub rv d2">{C.whyThisSummit.body}</p>
          <div className="val-grid">
            {C.whyThisSummit.cards.map((card, i) => (
              <div key={card.number} className={`val-card rv d${i + 1}`}>
                <div className="val-num">{card.number}</div>
                <div className="val-label">{card.label}</div>
                <p className="val-desc">{card.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Direction */}
        <section className="s s-dark" id="home-direction">
          <div className="split">
            <div>
              <div className="sec-eye rv">{C.direction.eyebrow}</div>
              <h2 className="sec-h rv d1" style={{ whiteSpace: "pre-line" }}>{C.direction.heading}</h2>
              <p className="sec-sub rv d2">{C.direction.body}</p>
              <div className="rv d3" style={{ marginTop: 36 }}>
                <a className="btn-o" href="#agenda-glance" onClick={(e) => { e.preventDefault(); document.querySelector("#agenda-glance")?.scrollIntoView({ behavior: "smooth" }); }}>
                  {C.direction.cta.label}
                </a>
              </div>
            </div>
            <div className="split-img rv d2">
              <img className="kenburns-img" src={C.direction.image} alt={C.direction.imageAlt} style={{ aspectRatio: "4/3", objectFit: "cover", width: "100%", borderRadius: 18 }} />
              <div className="split-img-border" />
            </div>
          </div>
        </section>

        {/* Speakers Preview */}
        <section className="s s-mid" id="home-speakers">
          <div className="sec-eye rv">Opening Session · 1:00–4:00 p.m.</div>
          <h2 className="sec-h rv d1">The Leaders You&rsquo;ll{"\n"}Hear From Directly.</h2>
          <p className="sec-sub rv d2">{C.day1Speakers.body}</p>
          <div className="spk-grid">
            {C.speakers.map((s, i) => (
              <SpeakerCard
                key={s.name}
                name={s.name}
                role={s.role}
                imageSrc={s.image}
                objectPosition={s.objectPosition}
                className={`rv d${i + 1}`}
              />
            ))}
          </div>
          <div className="rv d4" style={{ marginTop: 28 }}>
            <div className="lc">
              <div className="lc-ico">◆</div>
              <div>
                <div className="lc-lbl">Location</div>
                <div className="lc-name">{C.day1Speakers.location.name}</div>
                <div className="lc-addr">{C.day1Speakers.location.address} · {C.day1Speakers.location.phone}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Agenda at a Glance */}
        <section className="s s-dark" id="agenda-glance">
          <div className="sec-eye rv">{C.agendaGlance.eyebrow}</div>
          <h2 className="sec-h rv d1" style={{ whiteSpace: "pre-line" }}>{C.agendaGlance.heading}</h2>
          <p className="sec-sub rv d2">{C.agendaGlance.body}</p>
          <div className="ag-grid">
            {/* Day 1 */}
            <div className="ag-card rv d1">
              <div className="ag-card-head">
                <div className="ag-card-label">{C.agendaGlance.day1.label}</div>
                <div className="ag-card-title">{C.agendaGlance.day1.title}</div>
              </div>
              <div className="ag-card-body">
                {C.agendaGlance.day1.items.map((item, i) => (
                  <div key={i} className="ag-row">
                    <span className="ag-time">{item.time}</span>
                    <span className="ag-title">{item.title}</span>
                  </div>
                ))}
                <button className="ag-link" onClick={() => go("day1")}>
                  {C.agendaGlance.day1.link}
                </button>
              </div>
            </div>
            {/* Day 2 */}
            <div className="ag-card rv d2">
              <div className="ag-card-head">
                <div className="ag-card-label">{C.agendaGlance.day2.label}</div>
                <div className="ag-card-title">{C.agendaGlance.day2.title}</div>
              </div>
              <div className="ag-card-body">
                {C.agendaGlance.day2.items.map((item, i) => (
                  <div key={i} className="ag-row">
                    <span className="ag-time">{item.time}</span>
                    <span className="ag-title">{item.title}</span>
                  </div>
                ))}
                <button className="ag-link" onClick={() => go("day2")}>
                  {C.agendaGlance.day2.link}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="closing s-dark">
          <div className="dot-div" />
          <h2 className="closing-h rv" style={{ whiteSpace: "pre-line" }}>{C.homeClosing.heading}</h2>
          <p className="closing-sub rv d1">{C.homeClosing.body}</p>
        </section>

        <Footer />
      </div>

      {/* ════════════════════ DAY 1 ════════════════════ */}
      <div className={`page${activePage === "day1" ? " active" : ""}`}>
        {/* Hero */}
        <div className="dh">
          <img className="dh-bg" id="d1bg" src={C.day1Hero.image} alt="" />
          <div className="dh-ov" />
          <div className="dh-mesh" />
          <div className="dh-body">
            <div className="dh-eye rv">{C.day1Hero.eyebrow}</div>
            <div className="dh-h rv d1" style={{ whiteSpace: "pre-line" }}>{C.day1Hero.heading}</div>
            <p className="dh-sub rv d2">{C.day1Hero.body}</p>
          </div>
        </div>

        {/* Speakers */}
        <section className="s s-mid" id="d1-speakers">
          <div className="sec-eye rv">{C.day1Speakers.eyebrow}</div>
          <h2 className="sec-h rv d1" style={{ whiteSpace: "pre-line" }}>The Leaders You&rsquo;ll{"\n"}Hear From Directly.</h2>
          <p className="sec-sub rv d2">{C.day1Speakers.body}</p>
          <div className="spk-grid">
            {C.speakers.map((s, i) => (
              <SpeakerCard
                key={s.name}
                name={s.name}
                role={s.role}
                imageSrc={s.image}
                objectPosition={s.objectPosition}
                className={`rv d${i + 1}`}
              />
            ))}
          </div>
          <div className="rv d4" style={{ marginTop: 28 }}>
            <div className="lc">
              <div className="lc-ico">◆</div>
              <div>
                <div className="lc-lbl">Location</div>
                <div className="lc-name">{C.day1Speakers.location.name}</div>
                <div className="lc-addr">{C.day1Speakers.location.address} · {C.day1Speakers.location.phone}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="s s-dark" id="d1-agenda">
          <div className="sec-eye rv">{C.day1Timeline.eyebrow}</div>
          <h2 className="sec-h rv d1" style={{ whiteSpace: "pre-line" }}>{C.day1Timeline.heading}</h2>
          <p className="sec-sub rv d2">{C.day1Timeline.body}</p>
          <div style={{ marginTop: 56 }}>
            <Timeline dateLabel={C.day1Timeline.dateLabel} items={C.day1Timeline.items} />
          </div>
        </section>

        {/* Evening Event */}
        <section className="s s-dark" id="d1-event">
          <div className="sec-eye rv">{C.day1Evening.eyebrow}</div>
          <h2 className="sec-h rv d1" style={{ whiteSpace: "pre-line" }}>{C.day1Evening.heading}</h2>

          <PhotoBanner
            imageSrc={C.day1Evening.banner.image}
            imageAlt={C.day1Evening.banner.imageAlt}
            badge={C.day1Evening.banner.badge}
            heading={C.day1Evening.banner.heading}
            subtitle={C.day1Evening.banner.subtitle}
            ctaText={C.day1Evening.banner.cta.label}
            ctaHref={C.day1Evening.banner.cta.href}
          />

          {/* Detail Grid */}
          <div className="det-grid rv d3">
            {C.day1Evening.details.map((d) => (
              <div key={d.label} className="det-cell">
                <div className="det-label">{d.label}</div>
                <div className="det-value">{d.value}</div>
              </div>
            ))}
          </div>

          {/* Pricing */}
          <div className="price-grid rv d4">
            {C.day1Evening.pricing.map((p) => (
              <div key={p.label} className="price-card">
                <div className="price-label">{p.label}</div>
                <div className="price-amount">
                  <span className="price-num">{p.price}</span>
                  <span className="price-unit">{p.unit}</span>
                </div>
                <p className="price-desc">{p.description}</p>
              </div>
            ))}
          </div>
          <p className="price-note rv d5">{C.day1Evening.note}</p>
        </section>

        {/* Day 2 Teaser */}
        <section className="closing s-dark">
          <div className="dot-div" />
          <h2 className="closing-h rv" style={{ whiteSpace: "pre-line" }}>{C.day1Closing.heading}</h2>
          <p className="closing-sub rv d1">{C.day1Closing.body}</p>
          <div className="rv d2" style={{ marginTop: 36 }}>
            <button className="btn-g" onClick={() => go("day2")}>
              {C.day1Closing.cta.label}
            </button>
          </div>
        </section>

        <Footer />
      </div>

      {/* ════════════════════ DAY 2 ════════════════════ */}
      <div className={`page${activePage === "day2" ? " active" : ""}`}>
        {/* Hero */}
        <div className="dh">
          <img className="dh-bg" id="d2bg" src={C.day2Hero.image} alt="" />
          <div className="dh-ov" />
          <div className="dh-mesh" />
          <div className="dh-body">
            <div className="dh-eye rv">{C.day2Hero.eyebrow}</div>
            <div className="dh-h rv d1" style={{ whiteSpace: "pre-line" }}>{C.day2Hero.heading}</div>
            <p className="dh-sub rv d2">{C.day2Hero.body}</p>
          </div>
        </div>

        {/* Timeline */}
        <section className="s s-dark" id="d2-agenda">
          <div className="sec-eye rv">{C.day2Agenda.eyebrow}</div>
          <h2 className="sec-h rv d1" style={{ whiteSpace: "pre-line" }}>{C.day2Agenda.heading}</h2>
          <p className="sec-sub rv d2">{C.day2Agenda.body}</p>
          <div style={{ marginTop: 56 }}>
            <Timeline dateLabel={C.day2Agenda.dateLabel} items={C.day2Agenda.items} />
          </div>
        </section>

        {/* Plant Tour */}
        <section className="s s-dark" id="d2-tour">
          <div className="sec-eye rv">{C.day2PlantTour.eyebrow}</div>
          <h2 className="sec-h rv d1" style={{ whiteSpace: "pre-line" }}>{C.day2PlantTour.heading}</h2>

          <PhotoBanner
            imageSrc={C.day2PlantTour.banner.image}
            imageAlt={C.day2PlantTour.banner.imageAlt}
            badge={C.day2PlantTour.banner.badge}
            heading={C.day2PlantTour.banner.heading}
            subtitle={C.day2PlantTour.banner.subtitle}
          />

          <div className="rv d3" style={{ marginTop: 24 }}>
            <div className="lc">
              <div className="lc-ico">◆</div>
              <div>
                <div className="lc-lbl">Location</div>
                <div className="lc-name">{C.day2PlantTour.location.name}</div>
                <div className="lc-addr">{C.day2PlantTour.location.address} · {C.day2PlantTour.location.phone}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Golf Tournament */}
        <section className="s s-dark" id="d2-golf">
          <div className="sec-eye rv">{C.day2Golf.eyebrow}</div>
          <h2 className="sec-h rv d1" style={{ whiteSpace: "pre-line" }}>{C.day2Golf.heading}</h2>

          <PhotoBanner
            imageSrc={C.day2Golf.banner.image}
            imageAlt={C.day2Golf.banner.imageAlt}
            badge={C.day2Golf.banner.badge}
            heading={C.day2Golf.banner.heading}
            subtitle={C.day2Golf.banner.subtitle}
            ctaText={C.day2Golf.banner.cta.label}
            ctaHref={C.day2Golf.banner.cta.href}
          />

          <div className="det-grid rv d3">
            {C.day2Golf.details.map((d) => (
              <div key={d.label} className="det-cell">
                <div className="det-label">{d.label}</div>
                <div className="det-value">{d.value}</div>
              </div>
            ))}
          </div>

          <p className="sec-sub rv d4" style={{ marginTop: 28 }}>{C.day2Golf.body}</p>
        </section>

        {/* Closing */}
        <section className="closing s-dark">
          <div className="dot-div" />
          <h2 className="closing-h rv" style={{ whiteSpace: "pre-line" }}>{C.day2Closing.heading}</h2>
          <p className="closing-sub rv d1">{C.day2Closing.body}</p>
        </section>

        <Footer />
      </div>

      <Ticker />
      <ScrollReveal activePage={activePage} />
    </>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <div>
          <b>Envision</b>
        </div>
        <div style={{ width: 1, height: 20, background: "rgba(255,255,255,.15)" }} />
        <div>
          <b>Supplier Summit</b>
          <span> 2026</span>
        </div>
      </div>
      <div className="footer-copy">{C.footer.copyright}</div>
      <div className="footer-links">
        <a href={`mailto:${C.footer.contactEmail}`}>Contact</a>
        <a href={C.footer.golfLink} target="_blank" rel="noopener noreferrer">Golf</a>
        <a href={C.footer.pokerLink} target="_blank" rel="noopener noreferrer">Poker</a>
      </div>
    </footer>
  );
}
