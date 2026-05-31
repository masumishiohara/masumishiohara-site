export const siteConfig = {
  name: "Masumi Shiohara",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.masumishiohara.com",
  title: "Masumi Shiohara | Cultivated Botanical Works",
  description:
    "Series-based portfolio of cultivated botanical works by Masumi Shiohara, shaped for editorial, curatorial, acquisition, and maison-level viewing contexts.",
  language: "en",
  locale: "en_US",
  contactEmail: "contact@masumishiohara.com",
  navigation: [
    { label: "Works", href: "/projects/botanical-portraits" },
    { label: "Dossier", href: "/dossier" },
    { label: "About", href: "/about" },
    { label: "Editorial", href: "/editorial" },
    { label: "Acquisitions", href: "/acquisitions" },
    { label: "Collaborations", href: "/collaborations" },
    { label: "Contact", href: "/contact" },
  ],
};

export function absoluteUrl(path = "") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  if (normalizedPath === "/") return siteConfig.siteUrl;
  return `${siteConfig.siteUrl}${normalizedPath}`;
}

export function mailtoHref(subject = "Masumi Shiohara enquiry") {
  return `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(subject)}`;
}
