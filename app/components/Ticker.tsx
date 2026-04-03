"use client";

import { ticker } from "../data/summit-content";

function TickerItems() {
  return (
    <>
      {ticker.map((item, i) => (
        <div key={i} className="ticker-item">
          <span className="ticker-dot" />
          <span>{item.label}</span>
          {item.href ? (
            <a href={item.href}>{item.value}</a>
          ) : (
            <span className="ticker-muted">{item.value}</span>
          )}
        </div>
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
