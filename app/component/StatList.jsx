import styles from "@/app/styles/statList.module.css";

export default function StatList({ items, light = false }) {
  return (
    <dl className={`${styles.list} ${light ? styles.light : ""}`}>
      {items.map((item) => (
        <div key={item.label} className={styles.item}>
          <dd>{item.value}</dd>
          <dt>{item.label}</dt>
        </div>
      ))}
    </dl>
  );
}
