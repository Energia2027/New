import type { MetadataRoute } from "next";
import { insights, projects, updates } from "@/lib/content";
import { siteUrl } from "@/lib/site";

const pages = ["", "/about", "/services", "/projects", "/insights", "/updates", "/downloads", "/contact", "/privacy", "/terms", "/cookies"];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...pages.map((p) => ({ url: `${siteUrl}${p}` })),
    ...projects.map((p) => ({ url: `${siteUrl}/projects/${p.slug}`, lastModified: p.posted })),
    ...insights.map((p) => ({ url: `${siteUrl}/insights/${p.slug}`, lastModified: p.date })),
    ...updates.map((p) => ({ url: `${siteUrl}/updates/${p.slug}`, lastModified: p.date })),
  ];
}
