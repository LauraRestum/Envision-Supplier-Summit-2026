"use client";

import { useChat } from "@ai-sdk/react";
import { AgentChat, createAgentChat } from "@21st-sdk/nextjs";
import { useMemo } from "react";

export default function AgentWidget() {
  const chat = useMemo(
    () =>
      createAgentChat({
        agent: "coding-assistant",
        tokenUrl: "/api/agent/token",
      }),
    [],
  );

  const { messages, sendMessage, status, stop, error } = useChat({ chat });

  return (
    <AgentChat
      messages={messages}
      onSend={(msg) =>
        sendMessage({ parts: [{ type: "text", text: msg.content }] })
      }
      status={status}
      onStop={stop}
      error={error}
    />
  );
}
