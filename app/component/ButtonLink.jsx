import Link from "next/link";
import styles from "@/app/styles/buttonLink.module.css";

export default function ButtonLink({ href, children, variant = "primary", external = false, ...rest }) {
  const className = `${styles.button} ${styles[variant]}`;
  if (external) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className} {...rest}>
      {children}
    </Link>
  );
}
