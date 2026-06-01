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

const FRAME_RATIO = 0.755; // width / height: fixed portrait frame shell
const MAX_ART_W = 0.705;
const MAX_ART_H = 0.748;
const ART_FIELD_TOP = 0.118;

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function computeArtworkFit(ratio: number) {
  const safeRatio = Number.isFinite(ratio) && ratio > 0 ? ratio : 0.72;
  const availableRatio = (MAX_ART_W * FRAME_RATIO) / MAX_ART_H;

  let width = MAX_ART_W;
  let height = (MAX_ART_W * FRAME_RATIO) / safeRatio;

  if (safeRatio < availableRatio) {
    height = MAX_ART_H;
    width = (MAX_ART_H * safeRatio) / FRAME_RATIO;
  }

  width = clamp(width, 0.42, MAX_ART_W);
  height = clamp(height, 0.36, MAX_ART_H);

  const left = (1 - width) / 2;
  // Optical centering: top is slightly higher to reserve a small, real-world plate zone.
  const top = ART_FIELD_TOP + (MAX_ART_H - height) * 0.32;

  const plateWidth = clamp(width * 0.265, 0.118, 0.185);
  const plateLeft = (1 - plateWidth) / 2;
  const plateTop = clamp(top + height + 0.014, 0.665, 0.878);

  return {
    "--art-left": `${left * 100}%`,
    "--art-top": `${top * 100}%`,
    "--art-width": `${width * 100}%`,
    "--art-height": `${height * 100}%`,
    "--groove-left": `${(left - 0.011) * 100}%`,
    "--groove-top": `${(top - 0.010) * 100}%`,
    "--groove-width": `${(width + 0.022) * 100}%`,
    "--groove-height": `${(height + 0.020) * 100}%`,
    "--plate-left": `${plateLeft * 100}%`,
    "--plate-top": `${plateTop * 100}%`,
    "--plate-width": `${plateWidth * 100}%`,
  } as CSSProperties;
}

function computeFrameTiles(width: number, height: number) {
  const safeWidth = width || 620;
  const safeHeight = height || safeWidth / FRAME_RATIO;
  const rail = clamp(safeWidth * 0.064, 34, 56);
  const corner = rail * 2.18;
  const horizontalSpan = Math.max(1, safeWidth - corner * 2);
  const verticalSpan = Math.max(1, safeHeight - corner * 2);
  const horizontalCount = Math.max(1, Math.round(horizontalSpan / 118));
  const verticalCount = Math.max(1, Math.round(verticalSpan / 132));

  return {
    "--frame-rail": `${rail}px`,
    "--corner-size": `${corner}px`,
    "--edge-h-tile": `${horizontalSpan / horizontalCount}px`,
    "--edge-v-tile": `${verticalSpan / verticalCount}px`,
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
  const frameRef = useRef<HTMLDivElement | null>(null);
  const [ratio, setRatio] = useState(0.72);
  const [frameSize, setFrameSize] = useState({ width: 620, height: 620 / FRAME_RATIO });

  useLayoutEffect(() => {
    const node = frameRef.current;
    if (!node) return;

    const update = () => {
      const rect = node.getBoundingClientRect();
      if (rect.width && rect.height) {
        setFrameSize({ width: rect.width, height: rect.height });
      }
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const fitStyle = useMemo(() => computeArtworkFit(ratio), [ratio]);
  const tileStyle = useMemo(
    () => computeFrameTiles(frameSize.width, frameSize.height),
    [frameSize.width, frameSize.height],
  );

  const assemblyStyle = {
    ...fitStyle,
    ...tileStyle,
  } as CSSProperties;

  const content = (
    <figure className={styles.stage} aria-label={`${title} framed preview`}>
      <div className={styles.galleryLight} aria-hidden="true" />
      <div className={styles.frameAssembly} ref={frameRef} style={assemblyStyle}>
        <div className={styles.matBoard} aria-hidden="true" />
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
                setRatio(image.naturalWidth / image.naturalHeight);
              }
            }}
          />
        </div>

        <div className={styles.plate} aria-hidden="true">
          <img src="/frame-assets/modern/plate.png" alt="" draggable={false} />
          <span className={`${styles.plateText} ${titleClass(title)}`}>
            <strong>{title}</strong>
            {code ? <em>{code}</em> : null}
          </span>
        </div>

        <span className={`${styles.corner} ${styles.cornerTl}`} aria-hidden="true" />
        <span className={`${styles.corner} ${styles.cornerTr}`} aria-hidden="true" />
        <span className={`${styles.corner} ${styles.cornerBl}`} aria-hidden="true" />
        <span className={`${styles.corner} ${styles.cornerBr}`} aria-hidden="true" />
        <span className={`${styles.edge} ${styles.edgeTop}`} aria-hidden="true" />
        <span className={`${styles.edge} ${styles.edgeBottom}`} aria-hidden="true" />
        <span className={`${styles.edge} ${styles.edgeLeft}`} aria-hidden="true" />
        <span className={`${styles.edge} ${styles.edgeRight}`} aria-hidden="true" />
        <span className={`${styles.bead} ${styles.beadTop}`} aria-hidden="true" />
        <span className={`${styles.bead} ${styles.beadBottom}`} aria-hidden="true" />
        <span className={`${styles.bead} ${styles.beadLeft}`} aria-hidden="true" />
        <span className={`${styles.bead} ${styles.beadRight}`} aria-hidden="true" />
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
