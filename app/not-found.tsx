import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.notFoundPage}>
      <section className={styles.panel} aria-labelledby="not-found-title">
        <p className={styles.eyebrow}>404 / NOT FOUND</p>
        <h1 id="not-found-title">This page is not in the public portfolio.</h1>
        <p>
          The requested page may have moved, or the work may belong to a different series.
          Return to the Works index to continue browsing Masumi Shiohara&apos;s botanical works.
        </p>
        <div className={styles.ctaRow}>
          <a className={styles.primaryCta} href="/projects/botanical-portraits">
            View works
          </a>
          <a className={styles.secondaryCta} href="/">
            Return home
          </a>
        </div>
      </section>
    </main>
  );
}
