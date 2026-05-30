import type { MetadataRoute } from "next";
import { workSeries } from "./work-series-data";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.masumishiohara.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { route: "", priority: 1, changeFrequency: "weekly" as const },
    { route: "/projects/botanical-portraits", priority: 0.95, changeFrequency: "weekly" as const },
    { route: "/about", priority: 0.78, changeFrequency: "monthly" as const },
    { route: "/process", priority: 0.74, changeFrequency: "monthly" as const },
    { route: "/exhibitions", priority: 0.65, changeFrequency: "monthly" as const },
    { route: "/information", priority: 0.62, changeFrequency: "monthly" as const },
    { route: "/press", priority: 0.56, changeFrequency: "monthly" as const },
    { route: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
  ];

  const seriesRoutes = workSeries.map((series) => ({
    route: `/works/${series.slug}`,
    priority: 0.84,
    changeFrequency: "monthly" as const,
  }));

  return [...staticRoutes, ...seriesRoutes].map(({ route, priority, changeFrequency }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
