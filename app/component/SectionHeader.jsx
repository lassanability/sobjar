import { Eyebrow } from "@/app/component/Motifs";
import styles from "@/app/styles/sectionHeader.module.css";

export default function SectionHeader({ tag, title, description, align = "center", light = false, canada = false }) {
  return (
    <header className={`${styles.header} ${styles[align]} ${light ? styles.light : ""}`}>
      {tag && (
        <Eyebrow light={light} canada={canada}>
          {tag}
        </Eyebrow>
      )}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </header>
  );
}
