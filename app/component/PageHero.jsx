import Image from "next/image";
import { Eyebrow } from "@/app/component/Motifs";
import StatList from "@/app/component/StatList";
import styles from "@/app/styles/pageHero.module.css";

export default function PageHero({ eyebrow, title, description, image, imageAlt = "", stats, children }) {
  return (
    <>
      <section className={`${styles.hero} ${stats ? styles.withStats : ""}`}>
        {image && <Image src={image} alt={imageAlt} fill priority sizes="100vw" className={styles.image} />}
        <div className={styles.overlay} />
        <div className={`container ${styles.content}`}>
          {eyebrow && (
            <Eyebrow light canada>
              {eyebrow}
            </Eyebrow>
          )}
          <h1>{title}</h1>
          {description && <p>{description}</p>}
          {children && <div className={styles.actions}>{children}</div>}
        </div>
      </section>
      {stats && (
        <div className={`container ${styles.stats}`}>
          <StatList items={stats} />
        </div>
      )}
    </>
  );
}
