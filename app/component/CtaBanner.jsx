import SectionHeader from "@/app/component/SectionHeader";
import styles from "@/app/styles/ctaBanner.module.css";

export default function CtaBanner({ tag, title, description, children }) {
  return (
    <section className={styles.banner}>
      <div className={styles.inner}>
        <SectionHeader light tag={tag} title={title} description={description} />
        <div className={styles.actions}>{children}</div>
      </div>
    </section>
  );
}
