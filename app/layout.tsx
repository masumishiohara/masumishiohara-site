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

            <p>
              MAISON BOTANIQUE ARCHIVE
            </p>

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
                Cultivation, archive,
                botanical portrait,
                object, and exhibition research.
              </p>

            </div>

            <div className="museumFooterMeta">

              <span>
                Institutional Practice
              </span>

              <span>
                Botanical Archive
              </span>

              <span>
                Private Viewing
              </span>

            </div>

          </div>

        </footer>

      </body>

    </html>
  );
}
