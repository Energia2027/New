import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PostPage } from "@/components/PostPage";
import { insights } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return insights.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = insights.find((p) => p.slug === slug);
  return { title: post?.title ?? "Insights" };
}

export default async function InsightsPost({ params }: Props) {
  const { slug } = await params;
  const post = insights.find((p) => p.slug === slug);
  if (!post) notFound();
  return <PostPage post={post} back={{ href: "/insights", label: "All insights" }} />;
}
