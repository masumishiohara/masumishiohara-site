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
  // The frame is fixed; only the mat window changes.
  const matBoardRatio = 0.657;
  const portrait = artRatio < 0.9;
  const squareish = artRatio >= 0.9 && artRatio < 1.15;

  let windowHeight = portrait ? 73.5 : squareish ? 65 : 52;
  let windowWidth = (windowHeight * artRatio) / matBoardRatio;

  if (windowWidth > 86) {
    windowWidth = 86;
    windowHeight = (windowWidth * matBoardRatio) / artRatio;
  }

  if (fixedGrowthWindow) {
    windowHeight = 66;
    windowWidth = (windowHeight * artRatio) / matBoardRatio;
  }

  // Bottom weighting: real matting commonly leaves a little more air below the work.
  const topLift = portrait ? -2.2 : -0.8;
  const plateWidthPercent = clamp(windowWidth * 0.56, 34, 49);
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
