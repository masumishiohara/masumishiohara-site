"use client";

import { useMemo, useState } from "react";
import styles from "./MaisonFramedArtwork.module.css";

type MaisonFramedArtworkProps = {
  src: string;
  title: string;
  code?: string;
  seriesTitle?: string;
  caption?: string;
  href?: string;
};

const SHELL_RATIO = 1360 / 1480;
const MAX_W = 0.62;
const MAX_H = 0.70;
const TOP = 0.145;

function computeFit(ratio: number) {
  const safeRatio = Number.isFinite(ratio) && ratio > 0 ? ratio : 0.74;
  const availableRatio = (MAX_W * SHELL_RATIO) / MAX_H;

  let width = MAX_W;
  let height = (MAX_W * SHELL_RATIO) / safeRatio;

  if (safeRatio < availableRatio) {
    height = MAX_H;
    width = (MAX_H * safeRatio) / SHELL_RATIO;
  }

  const left = (1 - width) / 2;
  const plateWidth = Math.max(0.135, Math.min(0.19, width * 0.38));
  const plateLeft = (1 - plateWidth) / 2;
  const plateTop = Math.min(0.875, TOP + height + 0.036);

  return {
    "--art-left": `${left * 100}%`,
    "--art-top": `${TOP * 100}%`,
    "--art-width": `${width * 100}%`,
    "--art-height": `${height * 100}%`,
    "--plate-left": `${plateLeft * 100}%`,
    "--plate-top": `${plateTop * 100}%`,
    "--plate-width": `${plateWidth * 100}%`,
  } as React.CSSProperties;
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
  const [ratio, setRatio] = useState(0.74);
  const fitStyle = useMemo(() => computeFit(ratio), [ratio]);

  const content = (
    <figure className={styles.stage} aria-label={`${title} framed preview`}>
      <div className={styles.wallGlow} aria-hidden="true" />
      <div className={styles.frameAssembly} style={fitStyle}>
        <img
          className={styles.frameShell}
          src="/frames/exhibition-black-mat-frame-real.png"
          alt=""
          aria-hidden="true"
          draggable={false}
        />

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
          <img
            src="/frames/exhibition-brass-plate-real-v4.png"
            alt=""
            draggable={false}
          />
          <span className={`${styles.plateText} ${titleClass(title)}`}>
            <strong>{title}</strong>
            {code ? <em>{code}</em> : null}
          </span>
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
