import Image from "next/image";
import styles from "@/app/styles/gallery.module.css";

export default function Gallery({ items }) {
  return (
    <ul className={styles.grid}>
      {items.map((item) => (
        <li key={item.alt} className={styles.item}>
          <Image
            src={item.image}
            alt={item.alt}
            fill
            sizes="(max-width: 48em) 50vw, 25vw"
            className={styles.image}
          />
        </li>
      ))}
    </ul>
  );
}
