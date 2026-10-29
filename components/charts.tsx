"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { generationGrowth, kenyaBySource, mix2024, sources, type SourceKey } from "@/lib/energy-data";

// Hand-rolled SVG charts (no chart library). Palette validated for colour-blind separation;
// two light hues fall below 3:1 on white, so every chart ships a legend and a data table.

const INK = "#102a2a";
const MUTED = "#5a6d6b";
const GRID = "#e3e9e4";
const SURFACE = "#ffffff";
const BRAND = "#176b55";
const DARK_TEXT_ON = new Set(["#eda100", "#1baf7a", "#eb6834"]);

function useWidth<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setWidth(Math.floor(entry.contentRect.width)));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return [ref, width] as const;
}

type Tip = { x: number; y: number; content: ReactNode } | null;

function Tooltip({ tip, width }: { tip: Tip; width: number }) {
  if (!tip) return null;
  // Sit beside the hovered mark; flip to the left side near the right edge.
  const flip = tip.x > width * 0.55;
  return (
    <div
      className="viz-tooltip"
      style={{ left: tip.x, top: tip.y, transform: flip ? "translate(calc(-100% - 14px), -50%)" : "translate(14px, -50%)" }}
      role="status"
    >
      {tip.content}
    </div>
  );
}

export function Legend({ keys }: { keys: SourceKey[] }) {
  return (
    <ul className="viz-legend">
      {sources
        .filter((s) => keys.includes(s.key))
        .map((s) => (
          <li key={s.key}>
            <span className="swatch" style={{ background: s.color }} />
            {s.label}
          </li>
        ))}
    </ul>
  );
}

function DataTable({ head, rows }: { head: string[]; rows: (string | number)[][] }) {
  return (
    <details className="viz-table">
      <summary>View data table</summary>
      <div className="viz-table-scroll">
        <table>
          <thead>
            <tr>{head.map((h) => <th key={h} scope="col">{h}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={String(r[0])}>
                {r.map((c, i) => (i === 0 ? <th key={i} scope="row">{c}</th> : <td key={i}>{c}</td>))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </details>
  );
}

// Rect with rounded top corners only (data end), square at the baseline.
function topRounded(x: number, y: number, w: number, h: number, r: number) {
  const rr = Math.min(r, w / 2, h);
  return `M${x},${y + h}V${y + rr}Q${x},${y} ${x + rr},${y}H${x + w - rr}Q${x + w},${y} ${x + w},${y + rr}V${y + h}Z`;
}

const order: SourceKey[] = ["geothermal", "hydro", "wind", "solar", "bioenergy", "fossil"];
const colorOf = (k: SourceKey) => sources.find((s) => s.key === k)!.color;
const labelOf = (k: SourceKey) => sources.find((s) => s.key === k)!.label;

export function KenyaMixChart() {
  const [ref, width] = useWidth<HTMLDivElement>();
  const [hover, setHover] = useState<number | null>(null);
  const [tip, setTip] = useState<Tip>(null);

  const height = 320;
  const m = { top: 28, right: 8, bottom: 28, left: 34 };
  const innerW = Math.max(width - m.left - m.right, 0);
  const innerH = height - m.top - m.bottom;
  const totals = kenyaBySource.map((d) => order.reduce((s, k) => s + d[k], 0));
  const yMax = 14;
  const ticks = [0, 2, 4, 6, 8, 10, 12, 14];
  const y = (v: number) => m.top + innerH - (v / yMax) * innerH;
  const band = innerW / kenyaBySource.length;
  const barW = Math.min(24, band * 0.72);
  const labelEvery = width < 520 ? 8 : 4;
  const last = kenyaBySource.length - 1;

  return (
    <div className="viz" ref={ref}>
      <Legend keys={order} />
      {width > 0 && (
        <svg width={width} height={height} role="img" aria-label="Stacked columns of Kenya's electricity generation by source from 2000 to 2024. Total generation rose from 4.3 to 13.3 terawatt-hours, led by geothermal growth.">
          {ticks.map((t) => (
            <g key={t}>
              <line x1={m.left} x2={width - m.right} y1={y(t)} y2={y(t)} stroke={GRID} />
              <text x={m.left - 8} y={y(t)} dy="0.32em" textAnchor="end" fontSize="11" fill={MUTED}>{t}</text>
            </g>
          ))}
          <text x={0} y={12} fontSize="11" fill={MUTED}>TWh</text>
          {kenyaBySource.map((d, i) => {
            const x = m.left + i * band + (band - barW) / 2;
            let acc = 0;
            const nonZero = order.filter((k) => d[k] > 0);
            const topKey = nonZero[nonZero.length - 1];
            const dim = hover !== null && hover !== i;
            return (
              <g key={d.year} opacity={dim ? 0.45 : 1}>
                {order.map((k) => {
                  const v = d[k];
                  if (v <= 0) return null;
                  const y0 = y(acc);
                  acc += v;
                  const y1 = y(acc);
                  const h = Math.max(y0 - y1 - (k === topKey ? 0 : 2), 0.5);
                  return k === topKey ? (
                    <path key={k} d={topRounded(x, y1, barW, h, 4)} fill={colorOf(k)} />
                  ) : (
                    <rect key={k} x={x} y={y1 + 2} width={barW} height={h} fill={colorOf(k)} />
                  );
                })}
                {(i % labelEvery === 0 || i === last) && (
                  <text x={x + barW / 2} y={height - 8} textAnchor="middle" fontSize="11" fill={MUTED}>{d.year}</text>
                )}
                {i === last && (
                  <text x={x + barW / 2} y={y(totals[i]) - 8} textAnchor="end" fontSize="12" fontWeight="700" fill={INK}>
                    {totals[i].toFixed(1)} TWh
                  </text>
                )}
                <rect
                  x={m.left + i * band}
                  y={m.top}
                  width={band}
                  height={innerH}
                  fill="transparent"
                  onMouseMove={() => {
                    setHover(i);
                    setTip({
                      x: x + (i > kenyaBySource.length / 2 ? 0 : barW),
                      y: m.top + innerH / 2,
                      content: (
                        <>
                          <strong>{d.year} · {totals[i].toFixed(2)} TWh</strong>
                          {[...order].reverse().filter((k) => d[k] > 0).map((k) => (
                            <span key={k} className="tip-row">
                              <span className="swatch" style={{ background: colorOf(k) }} />
                              {labelOf(k)} <b>{d[k].toFixed(2)}</b>
                            </span>
                          ))}
                        </>
                      ),
                    });
                  }}
                  onMouseLeave={() => { setHover(null); setTip(null); }}
                />
              </g>
            );
          })}
          <line x1={m.left} x2={width - m.right} y1={y(0)} y2={y(0)} stroke="#c9d6cc" />
        </svg>
      )}
      <Tooltip tip={tip} width={width} />
      <DataTable
        head={["Year", ...order.map(labelOf), "Total"]}
        rows={kenyaBySource.map((d, i) => [d.year, ...order.map((k) => d[k].toFixed(2)), totals[i].toFixed(2)])}
      />
    </div>
  );
}

export function RegionalMixChart() {
  const [ref, width] = useWidth<HTMLDivElement>();
  const [tip, setTip] = useState<Tip>(null);
  const [hover, setHover] = useState<string | null>(null);

  const labelW = width < 520 ? 74 : 96;
  const rowH = 44;
  const barH = 24;
  const m = { top: 8, bottom: 26 };
  const innerW = Math.max(width - labelW - 8, 0);
  const height = m.top + mix2024.length * rowH + m.bottom;
  const x = (pct: number) => labelW + (pct / 100) * innerW;

  return (
    <div className="viz" ref={ref}>
      <Legend keys={order} />
      {width > 0 && (
        <svg width={width} height={height} role="img" aria-label="Share of 2024 electricity generation by source for Kenya, Ethiopia, Uganda, Rwanda and Tanzania. Ethiopia and Uganda rely mostly on hydro; Kenya on geothermal, hydro and wind; Rwanda and Tanzania still generate about half or more from fossil fuels.">
          {[0, 25, 50, 75, 100].map((t) => (
            <g key={t}>
              <line x1={x(t)} x2={x(t)} y1={m.top} y2={height - m.bottom} stroke={GRID} />
              <text x={x(t)} y={height - 8} textAnchor={t === 0 ? "start" : t === 100 ? "end" : "middle"} fontSize="11" fill={MUTED}>{t}%</text>
            </g>
          ))}
          {mix2024.map((d, r) => {
            const cy = m.top + r * rowH + (rowH - barH) / 2;
            const segs = order.filter((k) => d[k] > 0);
            let acc = 0;
            return (
              <g key={d.country}>
                <text x={0} y={cy + barH / 2} dy="0.32em" fontSize="13" fontWeight="600" fill={INK}>{d.country}</text>
                {segs.map((k, si) => {
                  const x0 = x(acc);
                  acc += d[k];
                  const isLast = si === segs.length - 1;
                  const w = Math.max(x(acc) - x0 - (isLast ? 0 : 2), 0.5);
                  const id = `${d.country}-${k}`;
                  const dim = hover !== null && hover !== id;
                  const showLabel = w > 40;
                  return (
                    <g
                      key={k}
                      opacity={dim ? 0.5 : 1}
                      onMouseMove={() => {
                        setHover(id);
                        setTip({
                          x: x0 + w / 2,
                          y: cy + barH / 2,
                          content: (
                            <span className="tip-row">
                              <span className="swatch" style={{ background: colorOf(k) }} />
                              {d.country} · {labelOf(k)} <b>{d[k].toFixed(1)}%</b>
                            </span>
                          ),
                        });
                      }}
                      onMouseLeave={() => { setHover(null); setTip(null); }}
                    >
                      <rect x={x0} y={cy - 6} width={Math.max(w, 6)} height={barH + 12} fill="transparent" />
                      <rect x={x0} y={cy} width={w} height={barH} rx={isLast || si === 0 ? 3 : 0} fill={colorOf(k)} />
                      {showLabel && (
                        <text
                          x={x0 + w / 2}
                          y={cy + barH / 2}
                          dy="0.32em"
                          textAnchor="middle"
                          fontSize="11"
                          fontWeight="700"
                          fill={DARK_TEXT_ON.has(colorOf(k)) ? INK : SURFACE}
                          pointerEvents="none"
                        >
                          {Math.round(d[k])}%
                        </text>
                      )}
                    </g>
                  );
                })}
              </g>
            );
          })}
        </svg>
      )}
      <Tooltip tip={tip} width={width} />
      <DataTable
        head={["Country", ...order.map(labelOf)]}
        rows={mix2024.map((d) => [d.country, ...order.map((k) => `${d[k].toFixed(1)}%`)])}
      />
    </div>
  );
}

export function GrowthChart() {
  const [ref, width] = useWidth<HTMLDivElement>();
  const [tip, setTip] = useState<Tip>(null);

  const labelW = width < 520 ? 74 : 96;
  const valueW = width < 520 ? 70 : 110;
  const rowH = 46;
  const m = { top: 8, bottom: 26 };
  const innerW = Math.max(width - labelW - valueW, 0);
  const height = m.top + generationGrowth.length * rowH + m.bottom;
  const xMax = 30;
  const x = (v: number) => labelW + (v / xMax) * innerW;

  return (
    <div className="viz" ref={ref}>
      <ul className="viz-legend">
        <li><span className="dot-key hollow" />2000</li>
        <li><span className="dot-key" />2024</li>
      </ul>
      {width > 0 && (
        <svg width={width} height={height} role="img" aria-label="Total electricity generation in 2000 and 2024. Ethiopia rose from 1.7 to 25.2 terawatt-hours, Kenya from 4.3 to 13.3, Tanzania from 2.5 to 8.8, Uganda from 1.6 to 5.8 and Rwanda from 0.2 to 1.1.">
          {[0, 10, 20, 30].map((t) => (
            <g key={t}>
              <line x1={x(t)} x2={x(t)} y1={m.top} y2={height - m.bottom} stroke={GRID} />
              <text x={x(t)} y={height - 8} textAnchor="middle" fontSize="11" fill={MUTED}>{t}{t === 30 ? " TWh" : ""}</text>
            </g>
          ))}
          {generationGrowth.map((d, r) => {
            const cy = m.top + r * rowH + rowH / 2;
            const multiple = d.y2024 / d.y2000;
            const content = (
              <>
                <strong>{d.country}</strong>
                <span className="tip-row">2000 <b>{d.y2000.toFixed(2)} TWh</b></span>
                <span className="tip-row">2024 <b>{d.y2024.toFixed(2)} TWh</b></span>
                <span className="tip-row">Growth <b>×{multiple.toFixed(1)}</b></span>
              </>
            );
            return (
              <g key={d.country} onMouseMove={() => setTip({ x: x(d.y2024), y: cy, content })} onMouseLeave={() => setTip(null)}>
                <rect x={0} y={cy - rowH / 2} width={width} height={rowH} fill="transparent" />
                <text x={0} y={cy} dy="0.32em" fontSize="13" fontWeight="600" fill={INK}>{d.country}</text>
                <line x1={x(d.y2000)} x2={x(d.y2024)} y1={cy} y2={cy} stroke={BRAND} strokeWidth="2" strokeLinecap="round" />
                <circle cx={x(d.y2000)} cy={cy} r="5" fill={SURFACE} stroke={BRAND} strokeWidth="2" />
                <circle cx={x(d.y2024)} cy={cy} r="6" fill={BRAND} stroke={SURFACE} strokeWidth="2" />
                <text x={x(d.y2024) + 12} y={cy} dy="0.32em" fontSize="12" fill={INK}>
                  <tspan fontWeight="700">{d.y2024.toFixed(1)}</tspan>
                  <tspan fill={MUTED}> ×{multiple.toFixed(1)}</tspan>
                </text>
              </g>
            );
          })}
        </svg>
      )}
      <Tooltip tip={tip} width={width} />
      <DataTable
        head={["Country", "2000 (TWh)", "2024 (TWh)", "Growth"]}
        rows={generationGrowth.map((d) => [d.country, d.y2000.toFixed(2), d.y2024.toFixed(2), `×${(d.y2024 / d.y2000).toFixed(1)}`])}
      />
    </div>
  );
}
