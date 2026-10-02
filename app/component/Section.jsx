import styles from "@/app/styles/section.module.css";

export default function Section({ children, tone = "white", id }) {
  return (
    <section id={id} className={`${styles.section} ${styles[tone]}`}>
      <div className={styles.inner}>{children}</div>
    </section>
  );
}
