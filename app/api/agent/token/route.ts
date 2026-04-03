import { createTokenHandler } from "@21st-sdk/nextjs/server";
import { scheduleContext } from "@/app/data/summit-schedule";

export const POST = createTokenHandler({
  apiKey: process.env.API_KEY_21ST!,
  systemPrompt: `You are the official summit assistant for the Envision Supplier Summit 2026. Answer questions about the agenda, logistics, venues, and events using the schedule information below. Be helpful, concise, and friendly.

${scheduleContext}`,
} as any);
