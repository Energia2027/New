import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "About" };

const values = [
  { title: "Integrity", text: "Honest advice, clear roles and no promises we cannot keep." },
  { title: "Local knowledge", text: "An understanding of how energy projects get done in East Africa." },
  { title: "Partnership", text: "Bringing owners, contractors, financiers and insurers to the same table." },
  { title: "Follow-through", text: "Practical coordination until the next step is agreed." },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A trusted link between energy opportunities and the partners who deliver them."
        intro={`${site.name} is an energy consulting firm serving Kenya and the wider East African region.`}
      />
      <section className="section">
        <div className="container split">
          <div className="prose">
            <h2>Who we are</h2>
            <p>
              We advise businesses and project stakeholders who want to work in the East African energy sector. We help
              them understand the market, identify opportunities and connect with the people and organisations needed to
              move projects forward.
            </p>
            <p>
              We work closely with contractors to help them secure suitable projects, and we coordinate introductions to
              potential financiers and licensed insurance providers.
            </p>
            <h2>What we are not</h2>
            <p>
              We are not an EPC contractor, a lender or an insurer. Contractors deliver the works, financiers make their
              own funding decisions and licensed insurers provide cover. Our role is advice, preparation and introductions.
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
          <div className="section-heading"><div><span className="eyebrow">Our values</span><h2>How we work with clients and partners.</h2></div></div>
          <div className="cards four">
            {values.map((v) => <article className="card" key={v.title}><h3>{v.title}</h3><p>{v.text}</p></article>)}
          </div>
          <p style={{ marginTop: 32 }}><Link className="button button-primary" href="/contact">Talk to us <span aria-hidden="true">→</span></Link></p>
        </div>
      </section>
    </>
  );
}
