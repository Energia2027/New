import { generationGrowth, kenyaBySource, mix2024 } from "@/lib/energy-data";

// Headline figures derived from lib/energy-data.ts so they always match the charts.
export function EnergyStats() {
  const ken = mix2024.find((d) => d.country === "Kenya")!;
  const k15 = kenyaBySource.find((d) => d.year === 2015)!;
  const k15Total = Object.entries(k15).reduce((s, [k, v]) => (k === "year" ? s : s + v), 0);
  const eth = generationGrowth.find((d) => d.country === "Ethiopia")!;

  const stats = [
    { value: `${Math.round(100 - ken.fossil)}%`, label: "of Kenya's electricity came from renewable sources in 2024" },
    { value: `${Math.round(ken.geothermal)}%`, label: "of Kenya's electricity came from geothermal power, its largest source" },
    {
      value: `${Math.round(ken.wind + ken.solar)}%`,
      label: `from wind and solar in Kenya, up from about ${Math.round((100 * (k15.wind + k15.solar)) / k15Total)}% in 2015`,
    },
    { value: `×${Math.round(eth.y2024 / eth.y2000)}`, label: "growth in Ethiopia's electricity generation since 2000" },
  ];

  return (
    <dl className="stat-grid">
      {stats.map((s) => (
        <div className="stat" key={s.label}>
          <dt>{s.label}</dt>
          <dd>{s.value}</dd>
        </div>
      ))}
    </dl>
  );
}
