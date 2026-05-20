import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maison Botanique Archive",
  description: "A Private Museum of Cultivated Forms",
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

        {children}

        <footer className="museumFooter">
          <div className="museumFooterInner">
            <div>
              <p className="museumEditorialLabel">
                MAISON BOTANIQUE ARCHIVE
              </p>

              <p className="museumFooterStatement">
                Cultivation, archive, botanical portrait, object, and exhibition
                research.
              </p>
            </div>

            <nav className="museumFooterNav">
              <a href="/rooms">Rooms</a>
              <a href="/space">Installation Studies</a>
              <a href="/exhibitions">Exhibitions</a>
              <a href="/publications">Publications</a>
              <a href="/private-preview">Private Preview</a>
              <a href="/about">About</a>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
