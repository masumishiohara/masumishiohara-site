import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Masumi Shiohara",
  description:
    "Fruit grower, breeder, and artist working with cultivated fruit forms, photography, archive, and exhibition.",
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
            <a href="/rooms">Rooms</a>
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
