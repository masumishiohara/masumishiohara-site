import type { MetadataRoute } from "next";
import { workSeries } from "./work-series-data";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://masumishiohara-site.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/projects/botanical-portraits",
    "/about",
    "/exhibitions",
    "/contact",
  ];

  const seriesRoutes = workSeries.map((series) => `/works/${series.slug}`);

  return [...staticRoutes, ...seriesRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/works/") ? 0.8 : 0.7,
  }));
}
