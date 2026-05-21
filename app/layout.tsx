import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Masumi Shiohara",
  description:
    "Japanese fruit grower, breeder, and artist working with cultivated fruit forms, photography, archive, and exhibition.",
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
          <a href
