import Link from "next/link";
import Image from "next/image";
import { IoArrowForward } from "react-icons/io5";
import styles from "@/app/styles/featureCard.module.css";

export default function FeatureCard({ href, title, description, image, cta = "Learn more", meta }) {
  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <Image src={image} alt="" fill sizes="(max-width: 48em) 100vw, 33vw" className={styles.image} />
      </div>
      <div className={styles.body}>
        {meta && <span className={styles.meta}>{meta}</span>}
        <h3>
          <Link href={href} className={styles.title}>
            {title}
          </Link>
        </h3>
        <p>{description}</p>
        <span className={styles.link} aria-hidden="true">
          {cta}
          <IoArrowForward />
        </span>
      </div>
    </article>
  );
}
