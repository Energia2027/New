import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PostList } from "@/components/PostList";
import { insights } from "@/lib/content";

export const metadata: Metadata = { title: "Insights" };

export default function InsightsPage() {
  return (
    <>
      <PageHero eyebrow="Insights" title="Guides and perspectives on energy projects in East Africa." intro="Practical guidance for contractors, developers and project owners." />
      <section className="section">
        <div className="container narrow">
          <PostList posts={insights} base="/insights" />
        </div>
      </section>
    </>
  );
}
