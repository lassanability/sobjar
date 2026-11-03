import Image from "next/image";
import SectionHeader from "@/app/component/SectionHeader";
import styles from "@/app/styles/ctaBanner.module.css";

export default function CtaBanner({ tag, title, description, image, children }) {
  return (
    <section className={styles.banner}>
      {image && <Image src={image} alt="" fill sizes="100vw" className={styles.image} />}
      <div className={styles.overlay} />
      <div className={`container ${styles.inner}`}>
        <SectionHeader light tag={tag} title={title} description={description} />
        <div className={styles.actions}>{children}</div>
      </div>
    </section>
  );
}
