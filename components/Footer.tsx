import Link from "next/link";
import { nav, site } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Logo />
            <p>{site.description}</p>
          </div>
          <div>
            <h2>Explore</h2>
            <div className="footer-links">
              {nav.slice(1).map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2>Contact</h2>
            <div className="footer-links">
              <span>{site.email}</span>
              <span>{site.phone}</span>
              <span>{site.address}</span>
              {site.webmailUrl ? (
                <a href={site.webmailUrl}>Staff webmail</a>
              ) : (
                <span title="Added once the company domain and cPanel hosting are set up">Staff webmail (coming soon)</span>
              )}
            </div>
          </div>
        </div>
        <p className="disclaimer">
          {site.name} provides advisory and introduction services. It is not an EPC contractor, lender or insurer.
          Contract awards, financing and insurance cover are decisions of the relevant third parties.
        </p>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {site.name}. Placeholder name.</span>
          <span>Company name, logo and contact details to be confirmed.</span>
        </div>
      </div>
    </footer>
  );
}
