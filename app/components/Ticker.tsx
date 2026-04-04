"use client";

import { ticker } from "../data/summit-content";

function TickerItems() {
  return (
    <>
      {ticker.map((item, i) => (
        <a
          key={i}
          className="ticker-item"
          href={item.href}
          target={item.href.startsWith("mailto:") ? undefined : "_blank"}
          rel={item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
        >
          <span className="ticker-dot" />
          <span className="ticker-label">{item.label}</span>
          {item.value && <span className="ticker-muted">{item.value}</span>}
        </a>
      ))}
    </>
  );
}

export default function Ticker() {
  return (
    <div className="ticker">
      <div className="ticker-inner">
        <TickerItems />
        <TickerItems />
      </div>
    </div>
  );
}
