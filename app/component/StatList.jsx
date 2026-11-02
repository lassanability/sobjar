import styles from "@/app/styles/statList.module.css";

export default function StatList({ items, light = false }) {
  return (
    <dl className={`${styles.list} ${light ? styles.light : ""}`}>
      {items.map((item) => (
        <div key={item.label} className={styles.item}>
          <dt>{item.label}</dt>
          <dd>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
