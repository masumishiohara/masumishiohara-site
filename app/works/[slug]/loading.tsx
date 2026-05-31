import styles from "./work-series-page.module.css";

export default function LoadingWorkSeries() {
  return (
    <main className={styles.seriesPage}>
      <section className={styles.hero} aria-label="Loading series">
        <div className={styles.heroImageFrame} />
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>SERIES INDEX</p>
          <h1>Loading quiet plates.</h1>
          <p>The compact index is being prepared before the larger images are requested.</p>
        </div>
      </section>
    </main>
  );
}
