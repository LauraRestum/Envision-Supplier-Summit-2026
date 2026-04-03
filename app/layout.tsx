import type { Metadata } from "next";
import "@21st-sdk/react/styles.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "2026 Envision Supplier Summit",
  description:
    "Join us for the Envision Supplier Summit 2026 — two days of strategic partnership, plant tours, and meaningful connection in Dallas, TX.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
