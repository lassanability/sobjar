import styles from "@/app/styles/infoCard.module.css";

export default function InfoCard({ icon: Icon, title, children }) {
  return (
    <article className={styles.card}>
      {Icon && (
        <span className={styles.icon} aria-hidden="true">
          <Icon />
        </span>
      )}
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}
