"use client";

import Image from "next/image";
import type { ClipboardEvent, KeyboardEvent, SyntheticEvent } from "react";
import { useCallback, useEffect, useMemo, useState } from "react";
import styles from "./work-series-page.module.css";

type WorkImage = {
  src: string;
  title: string;
  code: string;
  alt: string;
  caption?: string;
};

type WorkSeriesViewerProps = {
  title: string;
  code: string;
  statement: string;
  heroSrc: string;
  works: WorkImage[];
};

const INITIAL_PLATE_COUNT = 12;
const PLATE_BATCH_SIZE = 12;

function fallbackWork(title: string, code: string, heroSrc: string): WorkImage {
  return { src: heroSrc, title, code, alt: `${title} by Masumi Shiohara` };
}

async function copyProtectedPlaceholder() {
  const fallbackText = "Masumi Shiohara — protected preview. For licensed use, contact contact@masumishiohara.com.";
  if (typeof window === "undefined" || typeof document === "undefined") return;

  try {
    const canvas = document.createElement("canvas");
    canvas.width = 1600;
    canvas.height = 1000;
    const context = canvas.getContext("2d");
    if (!context) {
      await navigator.clipboard?.writeText?.(fallbackText);
      return;
    }

    const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "#050403");
    gradient.addColorStop(0.55, "#15110b");
    gradient.addColorStop(1, "#030202");
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.strokeStyle = "rgba(218, 199, 151, 0.25)";
    context.lineWidth = 2;
    context.strokeRect(90, 90, canvas.width - 180, canvas.height - 180);
    context.fillStyle = "rgba(246, 239, 226, 0.88)";
    context.font = "76px Georgia, serif";
    context.fillText("Masumi Shiohara", 150, 280);
    context.fillStyle = "rgba(218, 199, 151, 0.72)";
    context.font = "24px Arial, sans-serif";
    context.fillText("PROTECTED PREVIEW", 154, 350);
    context.fillStyle = "rgba(246, 239, 226, 0.62)";
    context.font = "30px Arial, sans-serif";
    context.fillText("Image copying is replaced by a rights notice.", 154, 460);
    context.fillText("For licensed viewing, publication, press, or acquisition use:", 154, 515);
    context.fillStyle = "rgba(246, 239, 226, 0.86)";
    context.font = "34px Arial, sans-serif";
    context.fillText("contact@masumishiohara.com", 154, 590);

    const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, "image/png"));
    const ClipboardItemConstructor = (window as any).ClipboardItem;
    if (blob && ClipboardItemConstructor && navigator.clipboard && typeof navigator.clipboard.write === "function") {
      await navigator.clipboard.write([new ClipboardItemConstructor({ "image/png": blob })]);
      return;
    }
    await navigator.clipboard?.writeText?.(fallbackText);
  } catch {
    try {
      await navigator.clipboard?.writeText?.(fallbackText);
    } catch {
      // Browser clipboard permission may be denied.
    }
  }
}

export default function WorkSeriesViewer({ title, code, statement, heroSrc, works }: WorkSeriesViewerProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [visiblePlateCount, setVisiblePlateCount] = useState(INITIAL_PLATE_COUNT);
  const [protectionNotice, setProtectionNotice] = useState("");

  const viewerWorks = useMemo(() => {
    if (works.length > 0) return works;
    return heroSrc ? [fallbackWork(title, code, heroSrc)] : [];
  }, [code, heroSrc, title, works]);

  const selectedWork = selectedIndex === null ? null : viewerWorks[selectedIndex] ?? null;
  const selectedCaption = selectedWork
    ? selectedWork.caption || `${selectedWork.code}. Full composition from the ${title} series. ${statement}`
    : "";
  const visiblePlates = viewerWorks.slice(0, visiblePlateCount);
  const hasMorePlates = visiblePlateCount < viewerWorks.length;

  const openLightbox = useCallback((index: number) => {
    setSelectedIndex(index);
    setProtectionNotice("");
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
    setProtectionNotice("");
  }, []);

  const showPrevious = useCallback(() => {
    setSelectedIndex((current) => {
      if (current === null || viewerWorks.length === 0) return current;
      return current === 0 ? viewerWorks.length - 1 : current - 1;
    });
  }, [viewerWorks.length]);

  const showNext = useCallback(() => {
    setSelectedIndex((current) => {
      if (current === null || viewerWorks.length === 0) return current;
      return current === viewerWorks.length - 1 ? 0 : current + 1;
    });
  }, [viewerWorks.length]);

  const showProtectionNotice = useCallback(() => {
    setProtectionNotice("Copying is replaced by a protected preview notice. OS screenshots cannot be technically blocked by a website.");
    void copyProtectedPlaceholder();
  }, []);

  const handleBlockedAction = useCallback((event: SyntheticEvent) => {
    event.preventDefault();
    showProtectionNotice();
  }, [showProtectionNotice]);

  const handleCopy = useCallback((event: ClipboardEvent<HTMLElement>) => {
    event.preventDefault();
    event.clipboardData.setData("text/plain", "Masumi Shiohara — protected preview. For licensed use, contact contact@masumishiohara.com.");
    showProtectionNotice();
  }, [showProtectionNotice]);

  const handleKeyDown = useCallback((event: KeyboardEvent<HTMLElement>) => {
    const key = event.key.toLowerCase();
    if (selectedWork && event.key === "Escape") {
      event.preventDefault();
      closeLightbox();
      return;
    }
    if (selectedWork && event.key === "ArrowLeft") {
      event.preventDefault();
      showPrevious();
      return;
    }
    if (selectedWork && event.key === "ArrowRight") {
      event.preventDefault();
      showNext();
      return;
    }
    if ((event.ctrlKey || event.metaKey) && ["c", "s", "p"].includes(key)) {
      event.preventDefault();
      showProtectionNotice();
      return;
    }
    if (event.key === "PrintScreen") showProtectionNotice();
  }, [closeLightbox, selectedWork, showNext, showPrevious, showProtectionNotice]);

  useEffect(() => {
    if (!selectedWork) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedWork]);

  useEffect(() => {
    function handleWindowKeyDown(event: globalThis.KeyboardEvent) {
      if (!selectedWork) return;
      if (event.key === "Escape") {
        event.preventDefault();
        closeLightbox();
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showPrevious();
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        showNext();
      }
      if ((event.ctrlKey || event.metaKey) && ["c", "s", "p"].includes(event.key.toLowerCase())) {
        event.preventDefault();
        showProtectionNotice();
      }
      if (event.key === "PrintScreen") showProtectionNotice();
    }
    window.addEventListener("keydown", handleWindowKeyDown);
    return () => window.removeEventListener("keydown", handleWindowKeyDown);
  }, [closeLightbox, selectedWork, showNext, showPrevious, showProtectionNotice]);

  const heroIndex = heroSrc ? viewerWorks.findIndex((work) => work.src === heroSrc) : -1;

  return (
    <main className={styles.seriesPage} onContextMenu={handleBlockedAction} onCopy={handleCopy} onCut={handleBlockedAction} onDragStart={handleBlockedAction} onKeyDown={handleKeyDown}>
      <section className={styles.hero} aria-labelledby="series-title">
        {heroSrc ? (
          <button type="button" className={`${styles.heroImageFrame} ${styles.protectedImageFrame}`} onClick={() => openLightbox(heroIndex >= 0 ? heroIndex : 0)} aria-label={`Open full view of ${title}`}>
            <Image src={heroSrc} alt={`${title} by Masumi Shiohara`} fill sizes="(max-width: 900px) 100vw, 48vw" priority quality={72} className={styles.heroImage} draggable={false} />
            <span className={styles.viewCue}>View full image</span>
          </button>
        ) : null}
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>{code}</p>
          <h1 id="series-title">{title}</h1>
          <p>{statement}</p>
          <span>{viewerWorks.length} works in this series</span>
        </div>
      </section>

      <section className={styles.indexSection} aria-labelledby="series-index-title">
        <div className={styles.indexHeader}>
          <p className={styles.eyebrow}>SERIES INDEX</p>
          <h2 id="series-index-title">A lighter index for fast review.</h2>
          <p>Each thumbnail opens a full, uncropped viewing layer. The page keeps the index light first, then loads larger plates progressively.</p>
        </div>
        <div className={styles.thumbnailGrid}>
          {viewerWorks.map((work, index) => (
            <button type="button" className={`${styles.thumbnailCard} ${styles.protectedImageFrame}`} onClick={() => openLightbox(index)} key={`${work.src}-${index}`} aria-label={`Open full view of ${work.title}`}>
              <Image src={work.src} alt={work.alt} fill sizes="(max-width: 700px) 22vw, (max-width: 1200px) 10vw, 96px" quality={42} loading={index < 16 ? "eager" : "lazy"} className={styles.thumbnailImage} draggable={false} />
              <span>{work.code}</span>
            </button>
          ))}
        </div>
      </section>

      <section className={styles.plateSection} aria-labelledby="plates-title">
        <div className={styles.plateHeader}>
          <p className={styles.eyebrow}>PLATES</p>
          <h2 id="plates-title">Full compositions without cropped edges.</h2>
        </div>
        <div className={styles.plateGrid}>
          {visiblePlates.map((work, index) => (
            <figure className={styles.plate} id={`work-${index + 1}`} key={`${work.src}-plate-${index}`}>
              <button type="button" className={`${styles.plateImageStage} ${styles.protectedImageFrame}`} onClick={() => openLightbox(index)} aria-label={`Open full view of ${work.title}`}>
                <Image src={work.src} alt={work.alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1200px) 42vw, 520px" quality={66} loading={index < 4 ? "eager" : "lazy"} className={styles.plateImage} draggable={false} />
                <span className={styles.viewCue}>View full image</span>
              </button>
              <figcaption><span>{work.code}</span>{work.title}</figcaption>
            </figure>
          ))}
        </div>
        {hasMorePlates ? (
          <div className={styles.loadMoreWrap}>
            <button type="button" className={styles.loadMoreButton} onClick={() => setVisiblePlateCount((count) => Math.min(count + PLATE_BATCH_SIZE, viewerWorks.length))}>Load next plates</button>
            <p>Showing {visiblePlates.length} of {viewerWorks.length}. Full images open from the compact index above.</p>
          </div>
        ) : null}
      </section>

      {selectedWork ? (
        <div className={styles.lightbox} role="dialog" aria-modal="true" aria-label={`${selectedWork.title} full image view`}>
          <button type="button" className={styles.lightboxBackdrop} onClick={closeLightbox} aria-label="Close full image view" />
          <div className={styles.lightboxPanel} onContextMenu={handleBlockedAction} onCopy={handleCopy}>
            <div className={styles.lightboxTopBar}>
              <div>
                <p>{selectedWork.code}</p>
                <h2>{selectedWork.title}</h2>
                <small>{selectedCaption}</small>
              </div>
              <button type="button" onClick={closeLightbox} aria-label="Close full image view">Close</button>
            </div>
            <figure className={`${styles.lightboxFigure} ${styles.protectedImageFrame}`}>
              <Image src={selectedWork.src} alt={selectedWork.alt} fill sizes="100vw" quality={82} className={styles.lightboxImage} draggable={false} />
            </figure>
            <div className={styles.lightboxControls}>
              <button type="button" onClick={showPrevious}>Previous</button>
              <span>{(selectedIndex ?? 0) + 1} / {viewerWorks.length}</span>
              <button type="button" onClick={showNext}>Next</button>
            </div>
            <p className={styles.protectionText}>Protected preview. Browser copy, save, print, drag, and right-click actions are replaced or blocked where supported. For licensed use: contact@masumishiohara.com</p>
            {protectionNotice ? <p className={styles.protectionNotice}>{protectionNotice}</p> : null}
          </div>
        </div>
      ) : null}
    </main>
  );
}
