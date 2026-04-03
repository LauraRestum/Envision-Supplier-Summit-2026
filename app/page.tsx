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
        <a href="#agenda" className="btn-primary">
          View Agenda
        </a>
      </section>

      {/* Agenda */}
      <section className="section" id="agenda">
        <h2>Agenda at a Glance</h2>
        {mainSchedule.map((day) => (
          <div key={day.date} style={{ marginBottom: "2rem" }}>
            <h3 style={{ marginBottom: "0.25rem" }}>
              {day.day} · {day.date}
            </h3>
            <p style={{ marginBottom: "1rem", opacity: 0.75 }}>
              {day.venue} — {day.address}
            </p>
            <div className="agenda-grid">
              {day.sessions.map((session, i) => (
                <div key={i} className="agenda-item">
                  <span className="agenda-time">{session.time}</span>
                  <div>
                    <strong>{session.title}</strong>
                    {session.location && (
                      <p style={{ margin: "0.25rem 0 0", opacity: 0.7, fontSize: "0.875rem" }}>
                        {session.location}
                      </p>
                    )}
                    {session.description && (
                      <p style={{ margin: "0.5rem 0 0", fontSize: "0.875rem" }}>
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
      <section className="section" style={{ paddingTop: 0 }}>
        <h2>{beyondTheSummit.title}</h2>
        <p style={{ marginBottom: "0.5rem", fontWeight: 600 }}>{beyondTheSummit.subtitle}</p>
        <p style={{ marginBottom: "2rem" }}>{beyondTheSummit.intro}</p>
        <div className="agenda-grid">
          {beyondTheSummit.events.map((event) => (
            <div key={event.title} className="agenda-item" style={{ flexDirection: "column", alignItems: "flex-start", gap: "0.5rem" }}>
              <strong style={{ fontSize: "1.05rem" }}>{event.title}</strong>
              <p style={{ margin: 0, opacity: 0.75, fontSize: "0.875rem" }}>
                {event.venue} — {event.address}
              </p>
              <p style={{ margin: 0, fontSize: "0.875rem" }}>{event.description}</p>
              <ul style={{ margin: "0.5rem 0 0", paddingLeft: "1.25rem", fontSize: "0.875rem" }}>
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
        <p style={{ marginTop: "1.5rem", fontWeight: 600 }}>
          {beyondTheSummit.registrationNote}{" "}
          <a href={`mailto:${beyondTheSummit.registrationContact}`}>
            {beyondTheSummit.registrationContact}
          </a>
        </p>
      </section>

      {/* Agent Chat */}
      <section className="chat-section">
        <h2>Ask Our Summit Assistant</h2>
        <p className="subtitle">
          Have questions about the agenda, logistics, or how to prepare? Ask below.
        </p>
        <div className="chat-container">
          <AgentWidget />
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Envision Inc. · Supplier Summit · Dallas, TX · EnvisionUS.com</p>
      </footer>
    </main>
  );
}
