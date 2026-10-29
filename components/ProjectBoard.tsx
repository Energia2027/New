"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/lib/content";
import { ProjectCard } from "./ProjectCard";

const unique = (values: string[]) => Array.from(new Set(values)).sort();

export function ProjectBoard({ projects }: { projects: Project[] }) {
  const [query, setQuery] = useState("");
  const [country, setCountry] = useState("");
  const [technology, setTechnology] = useState("");
  const [showClosed, setShowClosed] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter(
      (p) =>
        (showClosed || p.status !== "Closed") &&
        (!country || p.country === country) &&
        (!technology || p.technology === technology) &&
        (!q || `${p.title} ${p.location} ${p.scope} ${p.ref}`.toLowerCase().includes(q)),
    );
  }, [projects, query, country, technology, showClosed]);

  return (
    <>
      <div className="filters" role="search">
        <label className="field">
          <span>Search</span>
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Title, location or reference" />
        </label>
        <label className="field">
          <span>Country</span>
          <select value={country} onChange={(e) => setCountry(e.target.value)}>
            <option value="">All countries</option>
            {unique(projects.map((p) => p.country)).map((c) => <option key={c}>{c}</option>)}
          </select>
        </label>
        <label className="field">
          <span>Technology</span>
          <select value={technology} onChange={(e) => setTechnology(e.target.value)}>
            <option value="">All technologies</option>
            {unique(projects.map((p) => p.technology)).map((t) => <option key={t}>{t}</option>)}
          </select>
        </label>
        <label className="check-field">
          <input type="checkbox" checked={showClosed} onChange={(e) => setShowClosed(e.target.checked)} />
          <span>Show closed</span>
        </label>
      </div>
      <p className="result-count" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "opportunity" : "opportunities"}
      </p>
      {filtered.length ? (
        <div className="cards">
          {filtered.map((p) => <ProjectCard key={p.slug} project={p} />)}
        </div>
      ) : (
        <div className="empty">No opportunities match these filters. Try clearing a filter or showing closed listings.</div>
      )}
    </>
  );
}
