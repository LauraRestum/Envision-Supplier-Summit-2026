import AgentWidget from "./components/AgentWidget";
import { mainSchedule, beyondTheSummit } from "./data/summit-schedule";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <h1>Envision Supplier Summit 2026</h1>
        <p className="date">April 22–23, 2026 · Dallas, TX</p>
        <p>
          Building partnerships that strengthen supply chains and drive our
          shared mission forward.
        </p>
        <div className="hero-actions">
          <a href="#agenda" className="btn-primary">
            View Agenda
          </a>
          <a
            href="https://supplier-summit-2026.vercel.app"
            className="btn-secondary"
          >
            RSVP Now
          </a>
        </div>
      </section>

      {/* Agenda */}
      <section className="section" id="agenda">
        <h2>Agenda at a Glance</h2>
        <p className="section-subtitle">
          Two days of strategic sessions, facility tours, and meaningful
          connection — all designed to strengthen our partnership.
        </p>
        {mainSchedule.map((day) => (
          <div key={day.date} className="day-block">
            <div className="day-header">
              <h3>
                {day.day} · {day.date}
              </h3>
            </div>
            <p className="day-venue">
              {day.venue} — {day.address}
            </p>
            <div className="agenda-grid">
              {day.sessions.map((session, i) => (
                <div key={i} className="agenda-item">
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
        <h2>{beyondTheSummit.title}</h2>
        <p className="beyond-subtitle">{beyondTheSummit.subtitle}</p>
        <p className="beyond-intro">{beyondTheSummit.intro}</p>
        <div className="agenda-grid">
          {beyondTheSummit.events.map((event) => (
            <div key={event.title} className="beyond-card">
              <div className="beyond-card-title">{event.title}</div>
              <p className="beyond-card-venue">
                {event.venue} — {event.address}
              </p>
              <p className="beyond-card-description">{event.description}</p>
              <ul className="beyond-card-sessions">
                {event.sessions.map((s, i) => (
                  <li key={i}>
                    <strong>{s.time}</strong> – {s.title}
                    {s.description ? `: ${s.description}` : ""}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="beyond-registration">
          {beyondTheSummit.registrationNote}{" "}
          <a href={`mailto:${beyondTheSummit.registrationContact}`}>
            {beyondTheSummit.registrationContact}
          </a>
        </p>
      </section>

      {/* RSVP CTA */}
      <section className="rsvp-banner">
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
      </section>

      {/* Agent Chat */}
      <section className="chat-section">
        <h2>Ask Our Summit Assistant</h2>
        <p className="subtitle">
          Have questions about the agenda, logistics, or how to prepare? Ask
          below.
        </p>
        <div className="chat-container">
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
