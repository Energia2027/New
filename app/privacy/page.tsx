import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Privacy policy" };

const sections = ["What information we collect", "How we use it", "How we protect it", "Your rights", "Contact"];

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy policy" />
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
