interface TimelineItem {
  number: number;
  time: string;
  title: string;
  description: string;
  location?: string;
  link?: { label: string; href: string };
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
          {item.link && (
            <a className="tl-link" href={item.link.href}>
              {item.link.label}
            </a>
          )}
        </div>
      ))}
    </div>
  );
}
