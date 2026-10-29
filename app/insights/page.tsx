import type { Metadata } from "next";
import { ChartCard } from "@/components/ChartCard";
import { KenyaMixChart, RegionalMixChart } from "@/components/charts";
import { PageHero } from "@/components/PageHero";
import { PostList } from "@/components/PostList";
import { insights } from "@/lib/content";

export const metadata: Metadata = { title: "Insights" };

export default function InsightsPage() {
  return (
    <>
      <PageHero eyebrow="Insights" title="Guides and perspectives on energy projects in East Africa." intro="Practical guidance for contractors, developers and project owners." />
      <section className="section tinted">
        <div className="container">
          <div className="section-heading">
            <div><span className="eyebrow">Market data</span><h2>How East Africa generates its electricity.</h2></div>
          </div>
          <div className="chart-stack">
            <ChartCard
              title="Kenya's electricity generation by source, 2000–2024"
              subtitle="Terawatt-hours per year. Geothermal has become the backbone of the grid, with wind and solar growing since 2018."
            >
              <KenyaMixChart />
            </ChartCard>
            <ChartCard title="Electricity mix by country, 2024" subtitle="Share of generation by source. Hover a segment for the exact value.">
              <RegionalMixChart />
            </ChartCard>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container narrow">
          <div className="section-heading"><div><span className="eyebrow">Articles</span><h2>Guides and perspectives.</h2></div></div>
          <PostList posts={insights} base="/insights" />
        </div>
      </section>
    </>
  );
}
