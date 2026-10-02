import styles from "@/app/styles/videoCard.module.css";

export default function VideoCard({ src, title, caption }) {
  return (
    <figure className={styles.card}>
      <video
        className={styles.video}
        src={src}
        controls
        playsInline
        preload="metadata"
        aria-label={title}
      />
      <figcaption>
        <strong>{title}</strong>
        {caption && <span>{caption}</span>}
      </figcaption>
    </figure>
  );
}
