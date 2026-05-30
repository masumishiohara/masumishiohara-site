import type { MetadataRoute } from "next";
import { siteConfig } from "./site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.title,
    short_name: "Masumi Shiohara",
    description: siteConfig.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#050504",
    theme_color: "#050504",
    categories: ["art", "portfolio", "photography"],
  };
}
