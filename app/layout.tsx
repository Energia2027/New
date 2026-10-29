import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Energy Advisory | East Africa",
  description:
    "Energy-sector advisory, project development connections and market coordination across East Africa.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
