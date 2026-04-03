"use client";

import { useState } from "react";
import AgentWidget from "./AgentWidget";

export default function FloatingChat() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="chat-fab"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close chat" : "Ask a question"}
      >
        {open ? "✕" : "?"}
      </button>
      <div className={`chat-panel${open ? " open" : ""}`}>
        <AgentWidget />
      </div>
    </>
  );
}
