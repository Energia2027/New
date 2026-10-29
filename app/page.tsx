import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { PostList } from "@/components/PostList";
import { projects, services, updates } from "@/lib/content";

const steps = [
  { n: "01", title: "Understand", text: "We clarify the opportunity, the market and what you need to move forward." },
  { n: "02", title: "Prepare", text: "We organise the requirements, documents and information partners will ask for." },
  { n: "03", title: "Connect", text: "We introduce the right developers, contractors, financiers and insurers." },
  { n: "04", title: "Coordinate", text: "We keep conversations focused on practical next steps." },
];

export default function Home() {
  const live = projects.filter((p) => p.status !== "Closed").slice(0, 3);
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Energy consulting · East Africa</span>
            <h1>From energy opportunity to project delivery, <em>with the right partners.</em></h1>
            <p className="hero-copy">
              We help contractors, developers and project owners navigate the East African energy market, find
              opportunities and connect with the finance and insurance partners projects need.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/projects">View project opportunities <span aria-hidden="true">→</span></Link>
              <Link className="button button-outline" href="/contact">Discuss a project</Link>
            </div>
          </div>
          <div className="visual" aria-hidden="true">
            <span className="visual-label">How we add value</span>
            <div className="value-chain">
              {["Market advice", "Project opportunities", "Contract support", "Finance connections", "Insurance coordination"].map((item, i) => (
                <div className="value-step" key={item}><b>0{i + 1}</b><span>{item}</span></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div><span className="eyebrow">What we do</span><h2>Advice and connections that move projects forward.</h2></div>
            <Link className="text-link" href="/services">All services <span aria-hidden="true">→</span></Link>
          </div>
          <div className="cards">
            {services.map((s) => (
              <article className="card" key={s.slug}><h3>{s.title}</h3><p>{s.summary}</p></article>
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
        <div className="container">
          <div className="section-heading">
            <div><span className="eyebrow">How we work</span><h2>A clear path from first conversation to next steps.</h2></div>
          </div>
          <div className="steps">
            {steps.map((s) => (
              <div className="step" key={s.n}><div className="step-number">{s.n}</div><h3>{s.title}</h3><p>{s.text}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section tinted">
        <div className="container split">
          <div>
            <span className="eyebrow">Updates</span>
            <h2>Regular news and project notices.</h2>
            <p className="muted">Deadline changes, new opportunities and company announcements in one place.</p>
            <Link className="text-link" href="/updates">All updates <span aria-hidden="true">→</span></Link>
          </div>
          <PostList posts={updates.slice(0, 2)} base="/updates" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-panel">
            <div><h2>Have an energy project or want to bid on one?</h2><p>Tell us what you are working on and we will advise on the next steps.</p></div>
            <Link className="button button-light" href="/contact">Get in touch <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
