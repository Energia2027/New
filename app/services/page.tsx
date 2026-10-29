import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { sectors, services } from "@/lib/content";

export const metadata: Metadata = { title: "Services" };

const engagement = [
  { title: "Initial conversation", text: "A confidential discussion of your objectives and the project." },
  { title: "Scope and proposal", text: "A short proposal setting out the work, timing and deliverables." },
  { title: "Delivery", text: "Focused advisory support with regular, concise reporting." },
];

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Advisory support from first assessment to delivery."
        intro="Each engagement is scoped to the client's needs. Where a project requires specialist expertise, we work alongside qualified professionals."
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
      <section className="section tinted">
        <div className="container">
          <div className="section-heading"><div><span className="eyebrow">Sectors</span><h2>Where our advice is focused.</h2></div></div>
          <div className="cards five">
            {sectors.map((s) => <article className="card" key={s.title}><h3>{s.title}</h3><p>{s.text}</p></article>)}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading"><div><span className="eyebrow">Working with us</span><h2>How an engagement works.</h2></div></div>
          <div className="steps three">
            {engagement.map((e, i) => (
              <div className="step" key={e.title}><div className="step-number">0{i + 1}</div><h3>{e.title}</h3><p>{e.text}</p></div>
            ))}
          </div>
          <div className="cta-panel" style={{ marginTop: 56 }}>
            <div><h2>Not sure where to start?</h2><p>Describe your project and we will suggest a practical starting point.</p></div>
            <Link className="button button-light" href="/contact">Contact us <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
