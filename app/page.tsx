import AgentWidget from "./components/AgentWidget";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <h1>Envision Supplier Summit 2026</h1>
        <p className="date">September 15–17, 2026 · Chicago, IL</p>
        <p>
          Where packaging innovation meets strategic partnership. Join Envision
          and our supplier network for three days of insights, collaboration,
          and capability-building.
        </p>
        <a href="#register" className="btn-primary">
          Register Now
        </a>
      </section>

      {/* Agenda */}
      <section className="section">
        <h2>Agenda Highlights</h2>
        <div className="agenda-grid">
          {[
            { time: "Day 1", title: "Packaging Ecosystem Overview & Keynote" },
            { time: "Day 2", title: "APS Capabilities Deep Dive & Partner Sessions" },
            { time: "Day 2", title: "Breakouts: Sustainability, Innovation, Supply Chain" },
            { time: "Day 3", title: "Strategic Planning Workshops & Closing" },
          ].map((item, i) => (
            <div key={i} className="agenda-item">
              <span className="agenda-time">{item.time}</span>
              <span>{item.title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Speakers */}
      <section className="section" style={{ paddingTop: 0 }}>
        <h2>Featured Speakers</h2>
        <div className="speakers-grid">
          {[
            { name: "Sarah Chen", role: "VP Supply Chain, Envision" },
            { name: "Marcus Reid", role: "Director, Packaging Innovation" },
            { name: "Priya Nair", role: "Head of Sustainability" },
            { name: "Tom Vasquez", role: "APS Capabilities Lead" },
          ].map((s) => (
            <div key={s.name} className="speaker-card">
              <div className="avatar">{s.name[0]}</div>
              <h3>{s.name}</h3>
              <p>{s.role}</p>
            </div>
          ))}
        </div>
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
        <p>© 2026 Envision Inc. · Envision Supplier Summit · Chicago, IL</p>
      </footer>
    </main>
  );
}
