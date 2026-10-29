const stages = [
  { title: "Concept", text: "Need, site and technology options identified." },
  { title: "Feasibility", text: "Technical, environmental and commercial studies." },
  { title: "Permits", text: "Licences, approvals and land rights secured." },
  { title: "Procurement", text: "Contractors and suppliers selected." },
  { title: "Financial close", text: "Funding agreements signed." },
  { title: "Construction", text: "Build, test and commission." },
  { title: "Operation", text: "Power delivered; performance monitored." },
];

// Illustrative diagram of a typical project lifecycle (no data).
export function Lifecycle() {
  return (
    <figure className="lifecycle">
      <ol>
        {stages.map((s, i) => (
          <li key={s.title}>
            <span className="lc-num" aria-hidden="true">{i + 1}</span>
            <strong>{s.title}</strong>
            <span>{s.text}</span>
          </li>
        ))}
      </ol>
      <figcaption>Illustrative. Stages often overlap, and timelines vary by technology, size and market.</figcaption>
    </figure>
  );
}
