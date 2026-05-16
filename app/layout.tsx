import "./globals.css";

export const metadata = {
  title: "Masumi Shiohara | Botanical Archive",
  description:
    "Masumi Shiohara official archive. Fruit cultivation, breeding, botanical photography, sculptural forms, and vellum works.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
