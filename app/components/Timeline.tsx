interface TimelineItem {
  number: number;
  time: string;
  title: string;
  description: string;
  location?: string;
  link?: { label: string; href: string };
  focusTopics?: string[];
  rsvpPrompt?: string;
  rsvpHref?: string;
}

export default function Timeline({
  dateLabel,
  items,
}: {
  dateLabel: string;
  items: TimelineItem[];
}) {
  return (
    <div className="tl">
      <div className="tl-date rv">{dateLabel}</div>
      {items.map((item, i) => (
        <div key={i} className={`tl-item rv d${Math.min(i + 1, 6)}`}>
          <div className="tl-num">{item.number}</div>
          <div className="tl-time">{item.time}</div>
          <div className="tl-title">{item.title}</div>
          <p className="tl-desc">{item.description}</p>
          {item.location && (
            <span className="tl-loc">{item.location}</span>
          )}
          {item.focusTopics && item.focusTopics.length > 0 && (
            <div className="tl-focus-block">
              <div className="tl-focus-label">Focused Conversations Around</div>
              <div className="tl-focus-topics">
                {item.focusTopics.map((t, j) => (
                  <span key={j} className="tl-focus-tag">{t}</span>
                ))}
              </div>
              {item.rsvpPrompt && (
                <p className="tl-rsvp-prompt">{item.rsvpPrompt}</p>
              )}
              {item.rsvpHref && (
                <a className="btn-o tl-rsvp-btn" href={item.rsvpHref} target="_blank" rel="noopener noreferrer">
                  RSVP Now →
                </a>
              )}
            </div>
          )}
          {item.link && (
            <a className="tl-link" href={item.link.href} target="_blank" rel="noopener noreferrer">
              {item.link.label}
            </a>
          )}
        </div>
      ))}
    </div>
  );
}
