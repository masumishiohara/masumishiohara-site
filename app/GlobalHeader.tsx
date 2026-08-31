"use client";

import { usePathname } from "next/navigation";

export default function GlobalHeader() {
  const pathname = usePathname();
  const isJapanese = pathname === "/ja" || pathname.startsWith("/ja/");

  let languageHref = "/ja";

  if (isJapanese) {
    if (pathname === "/ja/works") {
      languageHref = "/projects/botanical-portraits";
    } else {
      languageHref = pathname.replace(/^\/ja/, "") || "/";
    }
  }

  return (
    <header className="museuGlobalHeader">
      <a
        href={isJapanese ? "/ja" : "/"}
        className="museuGlobalLogo"
      >
        MASUMI SHIOHARA
      </a>

      <nav className="museuGlobalNav">
        {isJapanese ? (
          <>
            <a href="/ja/works">作品</a>
            <a href="/ja/about">プロフィール</a>
            <a href="/ja/exhibitions">展示・掲載</a>
            <a href="/ja/contact">お問い合わせ</a>
            <a href={languageHref} className="languageSwitch">
              English
            </a>
          </>
        ) : (
          <>
            <a href="/projects/botanical-portraits">Works</a>
            <a href="/about">About</a>
            <a href="/exhibitions">Exhibitions</a>
            <a href="/contact">Contact</a>
            <a href="/ja" className="languageSwitch">
              日本語サイト
            </a>
          </>
        )}
      </nav>
    </header>
  );
}