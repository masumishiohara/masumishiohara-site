import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maison Botanique Archive",
  description:
    "A Private Museum of Cultivated Fruit Forms — pomology, orchard time, fruit portraiture, archive, object, and exhibition research.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="museumLoader">
          <div className="museumLoaderInner">
            <p>MAISON BOTANIQUE ARCHIVE</p>
          </div>
        </div>

        <header className="museumGlobalHeader">
          <a href="/" className="museumGlobalLogo">
            MAISON BOTANIQUE ARCHIVE
          </a>

          <nav className="museumGlobalNav">
            <a href="/rooms">Rooms</a>
            <a href="/philosophy">Philosophy</a>
            <a href="/space">Studies</a>
            <a href="/exhibitions">Exhibitions</a>
            <a href="/private-preview">Private Preview</a>
            <a href="/contact">Contact</a>
          </nav>
        </header>

        {children}

        <footer className="museumFooter">
          <div className="museumFooterInner">
            <div>
              <p className="museumEditorialLabel">
                MAISON BOTANIQUE ARCHIVE
              </p>

              <p className="museumFooterStatement">
                Cultivated fruit forms, pomological archive, object, and
                exhibition research.
              </p>
            </div>

            <nav className="museumFooterNav">
              <a href="/rooms">Rooms</a>
              <a href="/philosophy">Philosophy</a>
              <a href="/space">Installation Studies</a>
              <a href="/exhibitions">Exhibitions</a>
              <a href="/publications">Publications</a>
              <a href="/private-preview">Private Preview</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
