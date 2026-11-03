import Image from "next/image";
import { IoCheckmark } from "react-icons/io5";
import AboutImage from "@/public/assets/about.jpg";
import LogoImg from "@/public/assets/logo.png";
import ButtonLink from "@/app/component/ButtonLink";
import SectionHeader from "@/app/component/SectionHeader";
import { Rivers } from "@/app/component/Motifs";
import styles from "@/app/styles/heritage.module.css";

const commitments = ["Cultural heritage preservation", "Advocacy for equality and recognition", "Community-centered support programs"];

export default function Heritage() {
  return (
    <section className={styles.section} aria-label="Our heritage">
      <div className={`container ${styles.inner}`}>
        <div className={styles.media}>
          <div className={styles.photo}>
            <Image src={AboutImage} alt="Young women from the Somali Bantu community gathered on a field in Edmonton" fill sizes="(max-width: 64em) 100vw, 45vw" className={styles.image} />
          </div>
          <div className={styles.emblem}>
            <Image src={LogoImg} alt="Sobjar emblem with the Canadian and Somali flags" width={72} height={68} />
            <span>
              <strong>Jareer Weyne</strong>
              Society of Alberta
            </span>
          </div>
        </div>

        <div className={styles.copy}>
          <SectionHeader align="left" tag="Our heritage" title="From the Juba and Shabelle valleys to Alberta" />
          <p>
            The Somali Bantu Jareer/weyne are a proud people of Somalia with their own Bantu heritage, languages and traditions. For generations our community worked to be recognized and treated with equal dignity, and that strength continues to guide us today.
          </p>
          <p>
            Our ancestors settled in the arable Juba and Shabelle river valleys as farmers. Through every challenge, our community has kept its rich cultural heritage while building new lives in Canada through resilience, unity and determination.
          </p>
          <ul className={styles.commitments}>
            {commitments.map((item) => (
              <li key={item}>
                <IoCheckmark aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <ButtonLink href="/about" variant="ghost" arrow>
            Read our story
          </ButtonLink>
        </div>
      </div>
      <div className={styles.rivers}>
        <Rivers />
      </div>
    </section>
  );
}
