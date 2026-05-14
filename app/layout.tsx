import './globals.css';

export const metadata = {
  title: 'Masumi Shiohara',
  description: 'Fruit, Cultivation, Breeding, and Photography.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
