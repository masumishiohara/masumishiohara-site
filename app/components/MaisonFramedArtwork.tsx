"use client";

import { useMemo, useState, type CSSProperties } from "react";
import styles from "./MaisonFramedArtwork.module.css";

type MaisonFramedArtworkProps = {
  href: string;
  src: string;
  alt: string;
  code: string;
  title: string;
  caption?: string;
  plaqueKicker?: string;
  year?: string;
};

function isGrowthProcessWork(value: string) {
  return /growth|process|cultivation|orchard|growing|seeding|生育|栽培/i.test(value);
}

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function plateMode(title: string) {
  if (title.length > 56) return "micro";
  if (title.length > 38) return "compact";
  return "standard";
}

export default function MaisonFramedArtwork({
  href,
  src,
  alt,
  code,
  title,
  caption,
  plaqueKicker = "Featured framed work",
  year,
}: MaisonFramedArtworkProps) {
  const [naturalRatio, setNaturalRatio] = useState(0.66);

  const fixedGrowthWindow = isGrowthProcessWork(`${title} ${src}`);
  const artRatio = fixedGrowthWindow ? 0.66 : clamp(naturalRatio, 0.42, 2.2);

  // Ratio of the visible mat board area after the fixed frame shell is applied.
  // The frame remains fixed; the artwork window must dominate the mat, not float inside it.
  const matBoardRatio = 0.657;
  const portrait = artRatio < 0.88;
  const squareish = artRatio >= 0.88 && artRatio < 1.16;

  // Target: artwork first, mat second. Portrait works should occupy roughly 68–74%
  // of the usable mat board area. The V-groove follows this exact window.
  let windowHeight = portrait ? 83.8 : squareish ? 75.5 : 61.5;
  let windowWidth = (windowHeight * artRatio) / matBoardRatio;

  if (windowWidth > 91.5) {
    windowWidth = 91.5;
    windowHeight = (windowWidth * matBoardRatio) / artRatio;
  }

  if (fixedGrowthWindow) {
    windowHeight = 72;
    windowWidth = (windowHeight * artRatio) / matBoardRatio;
  }

  // Small optical lift only. The window and grooves remain centered; the plate sits close below.
  const topLift = portrait ? -0.9 : -0.4;
  const plateWidthPercent = clamp(windowWidth * 0.72, 42, 62);
  const mode = plateMode(title);

  const style = useMemo(
    () =>
      ({
        "--art-ratio": String(artRatio),
        "--window-width": `${windowWidth.toFixed(2)}%`,
        "--window-height": `${windowHeight.toFixed(2)}%`,
        "--window-lift": `${topLift.toFixed(2)}%`,
        "--plate-width": `${plateWidthPercent.toFixed(2)}%`,
      }) as CSSProperties,
    [artRatio, windowWidth, windowHeight, topLift, plateWidthPercent],
  );

  return (
    <a className={styles.frameLink} href={href} aria-label={`Open ${title}`} style={style}>
      <span className={styles.sceneLight} aria-hidden="true" />
      <span className={styles.frameScene}>
        <span className={styles.wallShadow} aria-hidden="true" />
        <span className={styles.matAssembly}>
          <span className={styles.matBoard}>
            <span className={styles.artStack}>
              <span className={styles.windowMount}>
                <span className={styles.vGrooveOuter} aria-hidden="true" />
                <span className={styles.vGrooveInner} aria-hidden="true" />
                <span className={styles.artWindow}>
                  <img
                    src={src}
                    alt={alt}
                    className={styles.artImage}
                    onLoad={(event) => {
                      const image = event.currentTarget;
                      if (image.naturalHeight > 0) {
                        setNaturalRatio(image.naturalWidth / image.naturalHeight);
                      }
                    }}
                    draggable={false}
                  />
                </span>
              </span>
              <span className={`${styles.brassPlate} ${styles[mode]}`}>
                <span>{plaqueKicker}</span>
                <strong>{title}</strong>
                <em>{year ? `${code} / ${year}` : code}</em>
              </span>
            </span>
          </span>
        </span>
        <span className={styles.frameShell} aria-hidden="true" />
      </span>
      <span className={styles.caption}>{caption ?? title}</span>
    </a>
  );
}
