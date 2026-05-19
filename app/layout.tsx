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

      </body>
    </html>
  );
}
