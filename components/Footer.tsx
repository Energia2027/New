import Link from "next/link";
import { site } from "@/lib/site";
import { FooterSubscribe } from "./FooterSubscribe";
import { Logo } from "./Logo";

const columns = [
  { title: "Company", links: [["About", "/about"], ["Services", "/services"], ["Contact", "/contact"]] },
  { title: "Opportunities", links: [["Projects", "/projects"], ["Updates", "/updates"]] },
  { title: "Resources", links: [["Insights", "/insights"], ["Downloads", "/downloads"]] },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Logo />
            <p>{site.description}</p>
          </div>
          <FooterSubscribe />
        </div>

        <div className="footer-grid">
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2>{col.title}</h2>
              <ul className="footer-links">
                {col.links.map(([label, href]) => <li key={href}><Link href={href}>{label}</Link></li>)}
              </ul>
            </nav>
          ))}
          <div>
            <h2>Get in touch</h2>
            <address className="footer-links">
              <span>{site.address}</span>
              <span>{site.email}</span>
              <span>{site.phone}</span>
              <span>{site.hours}</span>
            </address>
          </div>
        </div>

        <p className="footer-legal">
          The information on this website is for general guidance only and does not constitute professional advice.
          Project listings are provided for information and do not represent an offer or a guarantee of award.
        </p>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved. · {site.registration}</span>
          <ul className="footer-meta">
            <li><Link href="/privacy">Privacy policy</Link></li>
            <li><Link href="/terms">Terms of use</Link></li>
            <li><Link href="/cookies">Cookie policy</Link></li>
            <li>
              {site.webmailUrl ? (
                <a href={site.webmailUrl}>Staff webmail</a>
              ) : (
                <span title="Added once the company domain and email hosting are set up">Staff webmail</span>
              )}
            </li>
            <li><a href="#top">Back to top ↑</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
