import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Masumi Shiohara | Cultivated Fruit Works",
  description:
    "Masumi Shiohara is a Japanese fruit grower, breeder, and artist creating photographic works from cultivated fruit, orchard time, selection, and intervention.",
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
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
