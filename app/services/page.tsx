import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { services } from "@/lib/content";

export const metadata: Metadata = { title: "Services" };

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Energy advice, contract support and the right connections."
        intro="Each engagement is scoped to the client's needs. Specialist engineering, financing and insurance services are provided by qualified third parties."
      />
      <section className="section">
        <div className="container service-list">
          {services.map((s, i) => (
            <article className="service-row" id={s.slug} key={s.slug}>
              <div className="step-number">{String(i + 1).padStart(2, "0")}</div>
              <div><h2>{s.title}</h2><p>{s.summary}</p></div>
              <ul className="ticks">{s.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="cta-panel">
            <div><h2>Not sure which service you need?</h2><p>Describe your project and we will suggest a practical starting point.</p></div>
            <Link className="button button-light" href="/contact">Contact us <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
