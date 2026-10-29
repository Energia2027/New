import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { downloads } from "@/lib/content";

export const metadata: Metadata = { title: "Downloads" };

export default function Downloads() {
  return (
    <>
      <PageHero
        eyebrow="Downloads"
        title="Company documents and templates."
        intro="Approved documents will be available to download here. The files below are placeholders."
      />
      <section className="section">
        <div className="container narrow">
          <ul className="download-list">
            {downloads.map((d) => (
              <li key={d.title}>
                <span className="file-type">{d.type}</span>
                <div><h2>{d.title}</h2><p>{d.description}</p></div>
                <button className="button button-outline" type="button" disabled>Available at launch</button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
