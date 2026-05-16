"use client";

import { useEffect, useRef, useState } from "react";

const works = [
  {
    number: "01",
    title: "Botanical Portraits",
    text: "Fruit observed as portrait, specimen, and still life — each surface held like a stone under light.",
    image: "/images/botanical.jpg",
  },
  {
    number: "02",
    title: "Growth Process",
    text: "Seasonal transformation recorded through cultivation, weather, hand, and time.",
    image: "/images/growth.jpg",
  },
  {
    number: "03",
    title: "Sculptural Fruit",
    text: "Forms shaped by gravity, intervention, accident, and the quiet force of growth.",
    image: "/images/sculptural.jpg",
  },
  {
    number: "04",
    title: "Vellum Prints",
    text: "Botanical works printed on calf vellum, where image becomes material memory.",
    image: "/images/vellum.jpg",
  },
  {
    number: "05",
    title: "Breeding Archive",
    text: "Selection, rejection, disappearance, and record — a living archive of cultivated form.",
    image: "/images/archive.jpg",
  },
];

function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.14 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${visible ? "visible" : ""}`}>
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <section className="heroLuxury">
        <img src="/images/hero.jpg" alt="Masumi Shiohara" className="heroImage" />
        <div className="heroBlackVeil" />
        <div className="goldAura" />
        <div className="grain" />

        <div className="topBar">
          <span>Masumi Shiohara</span>
          <span>Botanical Maison</span>
}
