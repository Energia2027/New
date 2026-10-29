import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: `${site.name} | ${site.region}`, template: `%s | ${site.name}` },
  description: site.description,
  // Preview build: keep it out of search engines until launch.
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <div className="preview-bar">
          <div className="container">
            Website preview · The name, logo, listings and posts are placeholders for discussion.
          </div>
        </div>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
