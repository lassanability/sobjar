import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";
import styles from "@/app/styles/buttonLink.module.css";

export default function ButtonLink({ href, children, variant = "primary", external = false, arrow = false, ...rest }) {
  const className = `${styles.button} ${styles[variant]}`;
  const content = (
    <>
      {children}
      {arrow && <IoArrowForward aria-hidden="true" className={styles.arrow} />}
    </>
  );

  if (external) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer" {...rest}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={className} {...rest}>
      {content}
    </Link>
  );
}
