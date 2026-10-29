import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Terms of use" };

const sections = ["Use of this website", "Project listings", "No professional advice", "Intellectual property", "Governing law"];

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of use" />
      <section className="section">
        <div className="container narrow prose">
          <div className="notice" style={{ marginTop: 0 }}>
            Placeholder. The final wording will be provided by the company&apos;s legal adviser before launch.
          </div>
          {sections.map((title) => (
            <div key={title}>
              <h2>{title}</h2>
              <p className="muted">[To be completed.]</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
