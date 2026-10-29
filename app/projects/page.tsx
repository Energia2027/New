import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ProjectBoard } from "@/components/ProjectBoard";
import { projects } from "@/lib/content";

export const metadata: Metadata = { title: "Projects" };

export default function Projects() {
  return (
    <>
      <PageHero
        eyebrow="Project opportunities"
        title="Energy projects open to contractors."
        intro="Browse current opportunities across East Africa and register your interest. The listings below are samples showing how the board will work."
      />
      <section className="section">
        <div className="container">
          <ProjectBoard projects={projects} />
        </div>
      </section>
    </>
  );
}
