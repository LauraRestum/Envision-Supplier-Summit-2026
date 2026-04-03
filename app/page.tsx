import AgentWidget from "./components/AgentWidget";
import ScrollReveal from "./components/ScrollReveal";
import { mainSchedule, beyondTheSummit } from "./data/summit-schedule";

export default function Home() {
  return (
    <main>
      <ScrollReveal />

      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            April 22–23, 2026
          </div>
          <h1>Envision Supplier Summit</h1>
          <p className="date">Dallas, TX</p>
          <p className="hero-desc">
            Building partnerships that strengthen supply chains and drive our
            shared mission forward.
          </p>
          <div className="hero-actions">
            <a
              href="https://supplier-summit-2026.vercel.app"
              className="btn-primary"
            >
              RSVP Now
            </a>
            <a href="#agenda" className="btn-secondary">
              View Agenda
            </a>
          </div>
        </div>
      </section>

      {/* Agenda */}
      <section className="section" id="agenda">
        <div className="rv">
          <h2>Agenda at a Glance</h2>
          <p className="section-subtitle">
            Two days of strategic sessions, facility tours, and meaningful
            connection — designed to strengthen our partnership.
          </p>
        </div>
        {mainSchedule.map((day, dayIdx) => (
          <div
            key={day.date}
            className="day-block rv"
            style={{ transitionDelay: `${0.1 + dayIdx * 0.15}s` }}
          >
            <div className="day-header">
              <span className="day-label">{day.day}</span>
              <h3>{day.date}</h3>
            </div>
            <p className="day-venue">
              {day.venue} — {day.address}
            </p>
            <div className="agenda-grid">
              {day.sessions.map((session, i) => (
                <div
                  key={i}
                  className="agenda-item rv"
                  style={{
                    transitionDelay: `${0.18 + dayIdx * 0.15 + i * 0.07}s`,
                  }}
                >
                  <span className="agenda-time">{session.time}</span>
                  <div>
                    <div className="agenda-title">{session.title}</div>
                    {session.location && (
                      <p className="agenda-location">{session.location}</p>
                    )}
                    {session.description && (
                      <p className="agenda-description">
                        {session.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Beyond the Summit */}
      <section className="beyond-section">
        <div className="rv">
          <h2>{beyondTheSummit.title}</h2>
          <p className="beyond-subtitle">{beyondTheSummit.subtitle}</p>
          <p className="beyond-intro">{beyondTheSummit.intro}</p>
        </div>
        <div className="agenda-grid">
          {beyondTheSummit.events.map((event, i) => (
            <div
              key={event.title}
              className="beyond-card rv"
              style={{ transitionDelay: `${0.12 + i * 0.1}s` }}
            >
              <div className="beyond-card-title">{event.title}</div>
              <p className="beyond-card-venue">
                {event.venue} — {event.address}
              </p>
              <p className="beyond-card-description">{event.description}</p>
              <ul className="beyond-card-sessions">
                {event.sessions.map((s, j) => (
                  <li key={j}>
                    <strong>{s.time}</strong> – {s.title}
                    {s.description ? `: ${s.description}` : ""}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="beyond-registration rv d3">
          {beyondTheSummit.registrationNote}{" "}
          <a href={`mailto:${beyondTheSummit.registrationContact}`}>
            {beyondTheSummit.registrationContact}
          </a>
        </p>
      </section>

      {/* RSVP CTA */}
      <section className="rsvp-banner">
        <div className="rv">
          <h2>Ready to Join Us?</h2>
          <p>
            Confirm your attendance for the Envision Supplier Summit 2026 in
            Dallas, TX.
          </p>
          <a
            href="https://supplier-summit-2026.vercel.app"
            className="btn-primary"
          >
            RSVP Now
          </a>
        </div>
      </section>

      {/* Agent Chat */}
      <section className="chat-section">
        <div className="rv">
          <h2>Ask Our Summit Assistant</h2>
          <p className="subtitle">
            Have questions about the agenda, logistics, or how to prepare? Ask
            below.
          </p>
        </div>
        <div className="chat-container rv d2">
          <AgentWidget />
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>
          © 2026 Envision Inc. · Supplier Summit · Dallas, TX ·{" "}
          <a
            href="https://www.envisionus.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            EnvisionUS.com
          </a>
        </p>
      </footer>
    </main>
  );
}
