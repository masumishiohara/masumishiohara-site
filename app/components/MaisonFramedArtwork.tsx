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
};

function isGrowthProcessWork(value: string) {
  return /growth|process|cultivation|orchard|growing|seeding|生育|栽培/i.test(value);
}

function plateMode(title: string) {
  if (title.length > 48) return "micro";
  if (title.length > 34) return "compact";
  return "standard";
}

export default function MaisonFramedArtwork({
  href,
  src,
  alt,
  code,
  title,
  caption,
  plaqueKicker = "Featured work",
}: MaisonFramedArtworkProps) {
  const [naturalRatio, setNaturalRatio] = useState(1.32);

  const fixedGrowthWindow = isGrowthProcessWork(`${title} ${src}`);
  const windowRatio = fixedGrowthWindow ? 1.42 : Math.max(0.58, Math.min(naturalRatio, 2.15));
  const mode = plateMode(title);

  const style = useMemo(
    () => ({
      "--art-ratio": String(windowRatio),
    }) as CSSProperties,
    [windowRatio],
  );

  return (
    <a className={styles.frameLink} href={href} aria-label={`Open ${title}`} style={style}>
      <span className={styles.sceneLight} aria-hidden="true" />
      <span className={styles.frameScene}>
        <span className={styles.matAssembly}>
          <span className={styles.outerMat}>
            <span className={styles.vGroove} aria-hidden="true" />
            <span className={styles.innerMat}>
              <span className={styles.artWindow}>
                <img
                  src={src}
                  alt={alt}
                  className={styles.artImage}
                  onLoad={(event) => {
                    const image = event.currentTarget;
                    if (image.naturalHeight > 0) setNaturalRatio(image.naturalWidth / image.naturalHeight);
                  }}
                  draggable={false}
                />
              </span>
            </span>
          </span>
        </span>
        <span className={styles.frameShell} aria-hidden="true" />
        <span className={`${styles.brassPlate} ${styles[mode]}`}>
          <span>{plaqueKicker}</span>
          <strong>{title}</strong>
          <em>{code}</em>
        </span>
      </span>
      <span className={styles.caption}>{caption ?? title}</span>
    </a>
  );
}
