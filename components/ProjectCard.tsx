import Link from "next/link";
import type { Project } from "@/lib/content";
import { formatDate } from "@/lib/site";

const statusClass = { Open: "badge-open", "Closing soon": "badge-soon", Closed: "badge-closed" } as const;

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card project-card">
      <div className="badges">
        <span className={`badge ${statusClass[project.status]}`}>{project.status}</span>
        {project.visibility !== "Public" && <span className="badge">🔒 {project.visibility}</span>}
        <span className="badge badge-sample">Sample listing</span>
      </div>
      <h3>
        <Link href={`/projects/${project.slug}`}>{project.title}</Link>
      </h3>
      <dl className="meta">
        <div><dt>Country</dt><dd>{project.country}</dd></div>
        <div><dt>Technology</dt><dd>{project.technology}</dd></div>
        <div><dt>Size</dt><dd>{project.capacity}</dd></div>
        <div><dt>Deadline</dt><dd>{formatDate(project.deadline)}</dd></div>
      </dl>
      <p>{project.scope}</p>
      <Link className="text-link" href={`/projects/${project.slug}`}>
        View opportunity <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
