import Link from "next/link";
import Image from "next/image";
import styles from "@/app/styles/featureCard.module.css";

export default function FeatureCard({ href, title, description, image, cta = "Learn more" }) {
  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <Image src={image} alt="" fill sizes="(max-width: 48em) 100vw, 33vw" className={styles.image} />
      </div>
      <div className={styles.body}>
        <h3>{title}</h3>
        <p>{description}</p>
        <Link href={href} className={styles.link}>
          {cta}<span aria-hidden="true"> →</span>
        </Link>
      </div>
    </article>
  );
}
