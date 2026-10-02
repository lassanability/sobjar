import styles from "@/app/styles/sectionHeader.module.css";

export default function SectionHeader({ tag, title, description, align = "center", light = false }) {
  const className = [styles.header, styles[align], light ? styles.light : ""].join(" ");
  return (
    <header className={className}>
      {tag && <span className={styles.tag}>{tag}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </header>
  );
}
