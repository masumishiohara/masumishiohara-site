import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://masumishiohara-site.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/private-gallery", "/private-gallery/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
