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

const PANEL_RATIO = 675 / 780;
const MAX_ART_W = 0.76;
const MAX_ART_H = 0.74;
const MIN_ART_W = 0.42;
const MIN_ART_H = 0.42;

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function computeFit(artRatio: number) {
  const safeRatio = Number.isFinite(artRatio) && artRatio > 0 ? artRatio : 0.72;

  let height = MAX_ART_H;
  let width = (height * safeRatio) / PANEL_RATIO;

  if (width > MAX_ART_W) {
    width = MAX_ART_W;
    height = (width * PANEL_RATIO) / safeRatio;
  }

  width = clamp(width, MIN_ART_W, MAX_ART_W);
  height = clamp(height, MIN_ART_H, MAX_ART_H);

  // Optical centering: the art sits high enough to allow a small real plate beneath it,
  // matching exhibition framing rather than poster-layout centering.
  const left = (1 - width) / 2;
  const top = clamp(0.102 + (MAX_ART_H - height) * 0.20, 0.070, 0.195);

  // V-groove is locked to the artwork window. It is not an independent rectangle.
  const grooveGap = 0.013;
  const grooveLeft = left - grooveGap;
  const grooveTop = top - grooveGap;
  const grooveWidth = width + grooveGap * 2;
  const grooveHeight = height + grooveGap * 2;

  // Small museum plate: below the work, not on the outer frame, and never doubled.
  const plateWidth = clamp(width * 0.34, 0.145, 0.235);
  const plateLeft = (1 - plateWidth) / 2;
  const plateTop = clamp(top + height + 0.035, 0.795, 0.890);

  return {
    "--art-left": `${left * 100}%`,
    "--art-top": `${top * 100}%`,
    "--art-width": `${width * 100}%`,
    "--art-height": `${height * 100}%`,
    "--groove-left": `${grooveLeft * 100}%`,
    "--groove-top": `${grooveTop * 100}%`,
    "--groove-width": `${grooveWidth * 100}%`,
    "--groove-height": `${grooveHeight * 100}%`,
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
  const [artRatio, setArtRatio] = useState(0.72);
  const fitStyle = useMemo(() => computeFit(artRatio), [artRatio]);

  const content = (
    <figure className={styles.stage} aria-label={`${title} framed preview`}>
      <div className={styles.scene}>
        <img
          className={styles.scenePhoto}
          src="/frame-assets/modern/museum-empty-frame-scene-v28.png"
          alt=""
          draggable={false}
          aria-hidden="true"
        />
        <div className={styles.matPanel} style={fitStyle}>
          <div className={styles.groove} aria-hidden="true" />
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
            <img src="/frame-assets/modern/museum-brass-plate-v28.png" alt="" draggable={false} />
            <span className={`${styles.plateText} ${titleClass(title)}`}>
              <strong>{title}</strong>
              {code ? <em>{code}</em> : null}
            </span>
          </div>
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
