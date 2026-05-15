import './globals.css';

export const metadata = {
  title: 'Masumi Shiohara | Official Archive',
  description: 'Fruit, cultivation, breeding, and photography. Works formed through growth, intervention, selection, and time.',
  openGraph: {
    title: 'Masumi Shiohara',
    description: 'Fruit, cultivation, breeding, and photography.',
    images: ['/images/home/hero.jpg']
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
