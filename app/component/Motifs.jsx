import { GiMapleLeaf } from "react-icons/gi";
import styles from "@/app/styles/motifs.module.css";

export function Rivers({ light = false }) {
  return (
    <svg className={`${styles.rivers} ${light ? styles.light : ""}`} viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true">
      <path className={styles.jubba} d="M0 70 C 150 20, 300 120, 450 66 S 750 10, 900 64 S 1100 110, 1200 52" />
      <path className={styles.shabelle} d="M0 92 C 180 50, 320 132, 480 90 S 760 40, 920 88 S 1110 128, 1200 80" />
    </svg>
  );
}

export function Maple({ className = "" }) {
  return <GiMapleLeaf className={`${styles.maple} ${className}`} aria-hidden="true" />;
}

export function Eyebrow({ children, light = false, canada = false }) {
  return (
    <span className={`${styles.eyebrow} ${light ? styles.eyebrowLight : ""}`}>
      {canada ? <Maple /> : <i className={styles.dot} aria-hidden="true" />}
      {children}
    </span>
  );
}
