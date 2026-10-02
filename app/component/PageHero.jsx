import Image from "next/image";
import styles from "@/app/styles/pageHero.module.css";

export default function PageHero({ eyebrow, title, description, image, imageAlt = "", children }) {
  return (
    <section className={styles.hero}>
      {image && <Image src={image} alt={imageAlt} fill priority sizes="100vw" className={styles.image} />}
      <div className={styles.overlay} />
      <div className={styles.content}>
        {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
        <h1>{title}</h1>
        {description && <p>{description}</p>}
        {children && <div className={styles.actions}>{children}</div>}
      </div>
    </section>
  );
}
