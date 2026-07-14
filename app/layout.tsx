import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Masumi Shiohara | Cultivated Fruit Works",
  description:
    "Masumi Shiohara is a Japanese fruit grower, breeder, and artist creating photographic works from cultivated fruit, orchard time, selection, and intervention.",
  keywords: [
    "Masumi Shiohara",
    "Masumi Shiohara artist",
    "Japanese fruit grower artist",
    "cultivated fruit works",
    "fruit photography",
    "botanical photography",
    "pomology",
    "orchard art",
    "contemporary photography",
  ],
  authors: [{ name: "Masumi Shiohara" }],
  creator: "Masumi Shiohara",
  publisher: "Masumi Shiohara",
  openGraph: {
    title: "Masumi Shiohara | Cultivated Fruit Works",
    description:
      "Photographic works formed through cultivation, breeding, orchard time, and fruit.",
    type: "website",
    siteName: "Masumi Shiohara",
    images: [
      {
        url: "/botanical.jpg",
        width: 1200,
        height: 630,
        alt: "Cultivated fruit work by Masumi Shiohara",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="museumGlobalHeader">
          <a href="/" className="museumGlobalLogo">
            MASUMI SHIOHARA
          </a>

          <nav className="museumGlobalNav">
  <a href="/projects/botanical-portraits">Works</a>
  <a href="/about">About</a>
  <a href="/exhibitions">Exhibitions</a>
  <a href="/contact">Contact</a>
  <a href="/ja">日本語</a>
</nav>
        </header>

        {children}
      </body>
    </html>
  );
}
