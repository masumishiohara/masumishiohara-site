"use client";

import {
  type CSSProperties,
  useMemo,
  useState,
} from "react";
import styles from "./MaisonFramedArtwork.module.css";

type MaisonFramedArtworkProps = {
  src: string;
  title: string;
  code?: string;
  seriesTitle?: string;
  caption?: string;
  href?: string;
};

// Mat panel ratio taken from the real wall-mounted frame shell crop.
// The frame is fixed; only the internal mat window changes.
const MAT_RATIO = 465 / 706;
const MAX_ART_W = 0.84;
const MAX_ART_H = 0.80;
const MIN_ART_W = 0.48;
const MIN_ART_H = 0.48;

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function computeFit(artRatio: number) {
  const safeRatio = Number.isFinite(artRatio) && artRatio > 0 ? artRatio : 0.707;

  // Fit a print into the mat panel, using as much area as possible.
  // This is not a centered thumbnail: it is an A2-like framed artwork window.
  let width = MAX_ART_W;
  let height = (width * MAT_RATIO) / safeRatio;

  if (height > MAX_ART_H) {
    height = MAX_ART_H;
    width = (height * safeRatio) / MAT_RATIO;
  }

  width = clamp(width, MIN_ART_W, MAX_ART_W);
  height = clamp(height, MIN_ART_H, MAX_ART_H);

  const left = (1 - width) / 2;
  const top = clamp(0.052 + (MAX_ART_H - height) * 0.22, 0.046, 0.120);

  // All mat details are locked to the artwork window.
  // There are no independent floating rectangles.
  const reveal = 0.001; // near-zero overlap, equivalent to a tiny physical paper lip.
  const grooveGap = 0.020;
  const secondGap = 0.034;

  const plateWidth = clamp(width * 0.34, 0.15, 0.235);
  const plateHeight = plateWidth / 6.2;
  const plateLeft = (1 - plateWidth) / 2;
  const plateTop = clamp(top + height + 0.026, 0.845, 0.935 - plateHeight);

  return {
    "--art-left": `${(left - reveal) * 100}%`,
    "--art-top": `${(top - reveal) * 100}%`,
    "--art-width": `${(width + reveal * 2) * 100}%`,
    "--art-height": `${(height + reveal * 2) * 100}%`,
    "--groove-left": `${(left - grooveGap) * 100}%`,
    "--groove-top": `${(top - grooveGap) * 100}%`,
    "--groove-width": `${(width + grooveGap * 2) * 100}%`,
    "--groove-height": `${(height + grooveGap * 2) * 100}%`,
    "--second-left": `${(left - secondGap) * 100}%`,
    "--second-top": `${(top - secondGap) * 100}%`,
    "--second-width": `${(width + secondGap * 2) * 100}%`,
    "--second-height": `${(height + secondGap * 2) * 100}%`,
    "--plate-left": `${plateLeft * 100}%`,
    "--plate-top": `${plateTop * 100}%`,
    "--plate-width": `${plateWidth * 100}%`,
  } as CSSProperties;
}

function titleClass(title: string) {
  if (title.length > 42) return styles.microTitle;
  if (title.length > 28) return styles.compactTitle;
  return styles.standardTitle;
}

export default function MaisonFramedArtwork({
  src,
  title,
  code,
  seriesTitle,
  caption,
  href,
}: MaisonFramedArtworkProps) {
  const [artRatio, setArtRatio] = useState(0.707);
  const fitStyle = useMemo(() => computeFit(artRatio), [artRatio]);

  const content = (
    <figure className={styles.stage} aria-label={`${title} framed preview`}>
      <div className={styles.wallMount}>
        <div className={styles.scene}>
          <div className={styles.matPanel} style={fitStyle}>
            <div className={styles.secondMatLine} aria-hidden="true" />
            <div className={styles.vGroove} aria-hidden="true" />
            <div className={styles.artWindow}>
              <img
                className={styles.artImage}
                src={src}
                alt={title}
                draggable={false}
                onContextMenu={(event) => event.preventDefault()}
                onLoad={(event) => {
                  const image = event.currentTarget;
                  if (image.naturalWidth && image.naturalHeight) {
                    setArtRatio(image.naturalWidth / image.naturalHeight);
                  }
                }}
              />
            </div>
            <div className={styles.plate} aria-hidden="true">
              <img src="/frame-assets/modern/brass-plate-real-v29.png" alt="" draggable={false} />
              <span className={`${styles.plateText} ${titleClass(title)}`}>
                <strong>{title}</strong>
                {code ? <em>{code}</em> : null}
              </span>
            </div>
          </div>
          <img
            className={styles.frameShell}
            src="/frame-assets/modern/real-wall-frame-shell-v29.png"
            alt=""
            draggable={false}
            aria-hidden="true"
          />
        </div>
      </div>

      <figcaption className={styles.caption}>
        <span>{seriesTitle ?? "Featured framed work"}</span>
        {caption ? <small>{caption}</small> : null}
      </figcaption>
    </figure>
  );

  if (!href) return content;

  return (
    <a className={styles.frameLink} href={href} aria-label={`View ${title}`}>
      {content}
    </a>
  );
}
