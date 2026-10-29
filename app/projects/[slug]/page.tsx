import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Field, PreviewForm } from "@/components/PreviewForm";
import { projects } from "@/lib/content";
import { formatDate } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return { title: project?.title ?? "Project" };
}

export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  const restricted = project.visibility !== "Public";
  const closed = project.status === "Closed";

  return (
    <section className="section">
      <div className="container">
        <Link className="text-link" href="/projects">← All projects</Link>
        <div className="project-layout">
          <article>
            <div className="badges" style={{ marginTop: 24 }}>
              <span className="badge">{project.ref}</span>
              <span className="badge">{project.status}</span>
              <span className="badge badge-sample">Sample listing</span>
            </div>
            <h1 className="post-title">{project.title}</h1>
            <p className="lead">{project.description}</p>
            <dl className="meta meta-large">
              <div><dt>Country</dt><dd>{project.country}</dd></div>
              <div><dt>Location</dt><dd>{project.location}</dd></div>
              <div><dt>Technology</dt><dd>{project.technology}</dd></div>
              <div><dt>Size</dt><dd>{project.capacity}</dd></div>
              <div><dt>Scope</dt><dd>{project.scope}</dd></div>
              <div><dt>Posted</dt><dd>{formatDate(project.posted)}</dd></div>
              <div><dt>Deadline</dt><dd>{formatDate(project.deadline)}</dd></div>
              <div><dt>Visibility</dt><dd>{project.visibility}</dd></div>
            </dl>
            <div className="prose">
              <h2>Contractor requirements</h2>
              <ul>{project.requirements.map((r) => <li key={r}>{r}</li>)}</ul>
              <h2>Documents</h2>
              {restricted ? (
                <div className="locked">🔒 Technical documents are available to registered contractors only. Registration opens with the live platform.</div>
              ) : (
                <p className="muted">Project brief and documents will be attached here.</p>
              )}
            </div>
            <p className="disclaimer">
              Listing an opportunity does not guarantee a contract award. Final decisions rest with the project owner.
            </p>
          </article>
          <aside className="card sticky">
            {closed ? (
              <>
                <h2 className="card-title">This opportunity has closed</h2>
                <p>Browse other open projects or follow our updates for new listings.</p>
                <Link className="button button-primary" href="/projects">Open projects</Link>
              </>
            ) : (
              <>
                <h2 className="card-title">Express interest</h2>
                <p>Share your details and the team will follow up.</p>
                <PreviewForm submitLabel="Submit interest">
                  <Field label="Company name"><input name="company" required /></Field>
                  <Field label="Contact person"><input name="name" required /></Field>
                  <Field label="Email"><input name="email" type="email" required /></Field>
                  <Field label="Phone"><input name="phone" type="tel" /></Field>
                  <Field label="Relevant experience"><textarea name="experience" required rows={4} /></Field>
                </PreviewForm>
              </>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}
