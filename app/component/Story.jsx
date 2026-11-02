import Image from "next/image";
import { IoCheckmarkCircle } from "react-icons/io5";
import { Eyebrow } from "@/app/component/Motifs";
import styles from "@/app/styles/story.module.css";

export default function Story({ id, eyebrow, title, paragraphs, features = [], stats = [], image, imageAlt = "", reverse = false, headingLevel = 2 }) {
  const Heading = `h${headingLevel}`;

  return (
    <article id={id} className={`${styles.story} ${reverse ? styles.reverse : ""}`}>
      <div className={styles.visual}>
        <div className={styles.frame}>
          <Image src={image} alt={imageAlt} fill sizes="(max-width: 64em) 100vw, 50vw" className={styles.image} />
        </div>
        {stats.length > 0 && (
          <dl className={styles.stats}>
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt>{stat.label}</dt>
                <dd>{stat.number}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>

      <div className={styles.copy}>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <Heading className={styles.title}>{title}</Heading>
        {paragraphs.map((text) => (
          <p key={text}>{text}</p>
        ))}
        {features.length > 0 && (
          <ul className={styles.features}>
            {features.map((feature) => (
              <li key={feature}>
                <IoCheckmarkCircle aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
