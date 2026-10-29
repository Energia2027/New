import type { ReactNode } from "react";
import { energySource } from "@/lib/energy-data";

export function ChartCard({ title, subtitle, children }: { title: string; subtitle: string; children: ReactNode }) {
  return (
    <figure className="chart-card">
      <figcaption>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </figcaption>
      {children}
      <p className="chart-source">
        Source: <a href={energySource.url} target="_blank" rel="noreferrer">{energySource.name}</a>.
      </p>
    </figure>
  );
}
