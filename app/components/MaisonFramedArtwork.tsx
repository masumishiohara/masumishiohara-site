"use client";

import {
  type CSSProperties,
  useLayoutEffect,
  useMemo,
  useRef,
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

const FRAME_RATIO = 770 / 850;
const MAX_ART_W = 0.82;
const MAX_ART_H = 0.76;
const MIN_ART_W = 0.36;
const MIN_ART_H = 0.32;
const ART_TOP_BASE = 0.045;

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function computeArtworkFit(artRatio: number, matRatio: number) {
  const safeArtRatio = Number.isFinite(artRatio) && artRatio > 0 ? artRatio : 0.72;
  const safeMatRatio = Number.isFinite(matRatio) && matRatio > 0 ? matRatio : FRAME_RATIO;

  let height = MAX_ART_H;
  let width = (height * safeArtRatio) / safeMatRatio;

  if (width > MAX_ART_W) {
    width = MAX_ART_W;
    height = (width * safeMatRatio) / safeArtRatio;
  }

  width = clamp(width, MIN_ART_W, MAX_ART_W);
  height = clamp(height, MIN_ART_H, MAX_ART_H);

  // Positioning follows real exhibition framing: art sits slightly above optical center,
  // with a small plate close underneath. No decorative extra rectangles.
  const left = (1 - width) / 2;
  const top = clamp(ART_TOP_BASE + (MAX_ART_H - height) * 0.16, 0.035, 0.16);
  const reveal = 0.004; // tiny overlap/reveal around artwork; not a fake oversized window.
  const grooveGap = 0.016;
  const grooveLeft = left - grooveGap;
  const grooveTop = top - grooveGap;
  const grooveWidth = width + grooveGap * 2;
  const grooveHeight = height + grooveGap * 2;

  const plateWidth = clamp(width * 0.25, 0.105, 0.165);
  const plateLeft = (1 - plateWidth) / 2;
  const plateTop = clamp(top + height + 0.020, 0.70, 0.90);

  return {
    "--art-left": `${left * 100}%`,
    "--art-top": `${top * 100}%`,
    "--art-width": `${width * 100}%`,
    "--art-height": `${height * 100}%`,
    "--art-reveal": `${reveal * 100}%`,
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
  if (title.length > 44) return styles.microTitle;
  if (title.length > 30) return styles.compactTitle;
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
  const matRef = useRef<HTMLDivElement | null>(null);
  const [artRatio, setArtRatio] = useState(0.72);
  const [matRatio, setMatRatio] = useState(FRAME_RATIO);

  useLayoutEffect(() => {
    const node = matRef.current;
    if (!node) return;

    const update = () => {
      const rect = node.getBoundingClientRect();
      if (rect.width && rect.height) setMatRatio(rect.width / rect.height);
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const fitStyle = useMemo(
    () => computeArtworkFit(artRatio, matRatio),
    [artRatio, matRatio],
  );

  const content = (
    <figure className={styles.stage} aria-label={`${title} framed preview`}>
      <div className={styles.galleryLight} aria-hidden="true" />
      <div className={styles.frameAssembly}>
        <div className={styles.matBoard} ref={matRef} style={fitStyle}>
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
            <img src="/frame-assets/modern/plate-real-v26.png" alt="" draggable={false} />
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
