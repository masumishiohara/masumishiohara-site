import "./globals.css";

export const metadata = {
  title: "Masumi Shiohara | Official Botanical Archive",
  description:
    "Fruit, cultivation, breeding, and photography. A botanical archive formed through growth, selection, intervention, and time.",
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
