import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { allowIndexing, site, siteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${site.name} | ${site.region}`, template: `%s | ${site.name}` },
  description: site.description,
  // Kept out of search engines until NEXT_PUBLIC_ALLOW_INDEXING=true (see lib/site.ts).
  robots: allowIndexing ? { index: true, follow: true } : { index: false, follow: false },
  openGraph: { type: "website", siteName: site.name, locale: "en_KE", title: site.name, description: site.description },
  verification: process.env.GOOGLE_SITE_VERIFICATION ? { google: process.env.GOOGLE_SITE_VERIFICATION } : undefined,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: siteUrl,
  description: site.description,
  areaServed: ["Kenya", "Uganda", "Tanzania", "Rwanda", "Ethiopia"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" id="top">
      <body>
        {allowIndexing && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        )}
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
