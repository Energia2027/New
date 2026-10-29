import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PostList } from "@/components/PostList";
import { updates } from "@/lib/content";

export const metadata: Metadata = { title: "Updates" };

export default function UpdatesPage() {
  return (
    <>
      <PageHero eyebrow="Updates" title="News, announcements and project notices." intro="Regular communications from the team. Follow this page for new opportunities and deadline changes." />
      <section className="section">
        <div className="container narrow">
          <PostList posts={updates} base="/updates" />
        </div>
      </section>
    </>
  );
}
