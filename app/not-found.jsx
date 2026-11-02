import Image from "next/image";
import ButtonLink from "@/app/component/ButtonLink";
import { Rivers } from "@/app/component/Motifs";
import NotFoundImage from "@/public/assets/notfound.png";
import styles from "@/app/styles/notfound.module.css";

export default function NotFound() {
  return (
    <section className={styles.notFound}>
      <div className={`container ${styles.inner}`}>
        <Image className={styles.image} src={NotFoundImage} height={220} alt="" priority />
        <h1>This page has moved or doesn&apos;t exist</h1>
        <p>Let&apos;s get you back to the community.</p>
        <div className={styles.actions}>
          <ButtonLink href="/" variant="primary">Back to home</ButtonLink>
          <ButtonLink href="/contact" variant="ghost">Contact us</ButtonLink>
        </div>
      </div>
      <Rivers />
    </section>
  );
}
