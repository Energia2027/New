import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { PostList } from "@/components/PostList";
import { audiences, markets, principles, projects, sectors, services, updates } from "@/lib/content";

const steps = [
  { n: "01", title: "Understand", text: "We start with your objectives, the market and where the project stands today." },
  { n: "02", title: "Assess", text: "We review the opportunity, the risks and what it will take to move forward." },
  { n: "03", title: "Plan", text: "We agree a focused plan with clear priorities and responsibilities." },
  { n: "04", title: "Support", text: "We stay alongside the team as decisions are made and the project progresses." },
];

export default function Home() {
  const live = projects.filter((p) => p.status !== "Closed").slice(0, 3);
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Independent energy advisory · East Africa</span>
            <h1>Clear advice for energy projects in <em>East Africa.</em></h1>
            <p className="hero-copy">
              We help developers, contractors and investors understand the market, assess opportunities and move
              energy projects forward with confidence.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/contact">Discuss a project <span aria-hidden="true">→</span></Link>
              <Link className="button button-outline" href="/projects">View opportunities</Link>
            </div>
          </div>
          <div className="visual" aria-label="Focus areas at a glance">
            <span className="visual-label">At a glance</span>
            <dl className="glance">
              <div><dt>Base</dt><dd>Nairobi, Kenya</dd></div>
              <div><dt>Markets</dt><dd>{markets.map((m) => m.country).join(" · ")}</dd></div>
              <div><dt>Sectors</dt><dd>Solar · Mini-grids · Storage · Grid · Efficiency</dd></div>
              <div><dt>Clients</dt><dd>Developers · Contractors · Investors · Institutions</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="band" aria-label="Sectors">
        <div className="container band-inner">
          {sectors.map((s) => (
            <div key={s.title}><strong>{s.title}</strong><span>{s.text}</span></div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div><span className="eyebrow">What we do</span><h2>Advisory services across the project lifecycle.</h2></div>
            <Link className="text-link" href="/services">All services <span aria-hidden="true">→</span></Link>
          </div>
          <div className="cards">
            {services.map((s, i) => (
              <Link className="card card-link" href={`/services#${s.slug}`} key={s.slug}>
                <span className="step-number">{String(i + 1).padStart(2, "0")}</span>
                <h3>{s.title}</h3>
                <p>{s.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section tinted">
        <div className="container">
          <div className="section-heading">
            <div><span className="eyebrow">Latest opportunities</span><h2>Projects for contractors.</h2></div>
            <Link className="text-link" href="/projects">See all projects <span aria-hidden="true">→</span></Link>
          </div>
          <div className="cards">{live.map((p) => <ProjectCard key={p.slug} project={p} />)}</div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">Who we work with</span>
            <h2>Built for the organisations that shape the region&apos;s energy sector.</h2>
            <p className="muted">Every engagement is scoped to the client, the project and the market involved.</p>
          </div>
          <div className="audience-grid">
            {audiences.map((a) => (
              <div className="audience" key={a.title}><h3>{a.title}</h3><p>{a.text}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container">
          <div className="section-heading">
            <div><span className="eyebrow light">How we work</span><h2>A clear path from first conversation to next steps.</h2></div>
          </div>
          <div className="steps">
            {steps.map((s) => (
              <div className="step" key={s.n}><div className="step-number">{s.n}</div><h3>{s.title}</h3><p>{s.text}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div><span className="eyebrow">Our principles</span><h2>What clients can expect from us.</h2></div>
          </div>
          <div className="cards four">
            {principles.map((p) => <article className="card" key={p.title}><h3>{p.title}</h3><p>{p.text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section tinted">
        <div className="container split">
          <div>
            <span className="eyebrow">Updates</span>
            <h2>News and project notices.</h2>
            <p className="muted">New opportunities, deadline changes and company announcements in one place.</p>
            <Link className="text-link" href="/updates">All updates <span aria-hidden="true">→</span></Link>
          </div>
          <PostList posts={updates.slice(0, 2)} base="/updates" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-panel">
            <div><h2>Planning an energy project in East Africa?</h2><p>Tell us where you are and what you are trying to achieve. We will suggest a practical next step.</p></div>
            <Link className="button button-light" href="/contact">Start a conversation <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
