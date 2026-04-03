import type { Metadata } from "next";
import "@21st-sdk/react/styles.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Envision Supplier Summit 2026",
  description: "Join us for the Envision Supplier Summit 2026 — where packaging innovation meets partnership.",
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
