import type { Metadata } from "next";
import Link from "next/link";
import { ChartCard } from "@/components/ChartCard";
import { GrowthChart } from "@/components/charts";
import { PageHero } from "@/components/PageHero";
import { markets, principles } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "About" };

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Independent energy advisory, grounded in East Africa."
        intro={`${site.name} advises organisations developing, delivering and investing in energy projects across Kenya and the wider region.`}
      />
      <section className="section">
        <div className="container split">
          <div className="prose">
            <h2>Who we are</h2>
            <p>
              We are a Nairobi-based energy consultancy. Our clients come to us for a clear reading of the market, an
              honest assessment of their opportunity and practical support as their projects develop.
            </p>
            <p>
              We combine sector knowledge with long-standing regional relationships, and we work discreetly on behalf of
              our clients.
            </p>
            <h2>Our approach</h2>
            <p>
              Every engagement starts with the client&apos;s objectives. We focus on the decisions that matter, bring in
              specialist expertise where a project needs it, and keep the work practical.
            </p>
          </div>
          <div className="dark-panel">
            <span className="eyebrow light">Leadership</span>
            <h2>[Leadership profiles]</h2>
            <p>Names, biographies and qualifications will be added once approved by the company.</p>
          </div>
        </div>
      </section>
      <section className="section tinted">
        <div className="container">
          <div className="section-heading"><div><span className="eyebrow">Our principles</span><h2>How we work with clients.</h2></div></div>
          <div className="cards four">
            {principles.map((p) => <article className="card" key={p.title}><h3>{p.title}</h3><p>{p.text}</p></article>)}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading"><div><span className="eyebrow">Where we work</span><h2>Based in Nairobi, working across East Africa.</h2></div></div>
          <ul className="market-list">
            {markets.map((m) => <li key={m.country}><strong>{m.country}</strong><span>{m.note}</span></li>)}
          </ul>
          <div style={{ marginTop: 24 }}>
            <ChartCard
              title="A fast-growing region: electricity generation, 2000 vs 2024"
              subtitle="Terawatt-hours per year in each of our markets, with the growth multiple since 2000."
            >
              <GrowthChart />
            </ChartCard>
          </div>
          <p style={{ marginTop: 32 }}><Link className="button button-primary" href="/contact">Talk to us <span aria-hidden="true">→</span></Link></p>
        </div>
      </section>
    </>
  );
}
