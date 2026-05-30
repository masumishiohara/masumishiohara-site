export const siteConfig = {
  name: "Masumi Shiohara",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.masumishiohara.com",
  title: "Masumi Shiohara | Cultivated Botanical Works",
  description:
    "Series-based portfolio of botanical works by Masumi Shiohara, shaped by cultivated fruit, orchard time, photography, object making, and material memory.",
  language: "en",
  locale: "en_US",
  navigation: [
    { label: "Works", href: "/projects/botanical-portraits" },
    { label: "About", href: "/about" },
    { label: "Process", href: "/process" },
    { label: "Exhibitions", href: "/exhibitions" },
    { label: "Information", href: "/information" },
    { label: "Contact", href: "/contact" },
  ],
};

export function absoluteUrl(path = "") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  if (normalizedPath === "/") return siteConfig.siteUrl;
  return `${siteConfig.siteUrl}${normalizedPath}`;
}
