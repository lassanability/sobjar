import Link from "next/link";
import Image from "next/image";
import { IoArrowForward } from "react-icons/io5";
import ButtonLink from "@/app/component/ButtonLink";
import { Eyebrow } from "@/app/component/Motifs";
import { TEAM } from "@/app/lib/site";
import MedalImage from "@/public/assets/medal.jpeg";
import EventMissionImage from "@/public/assets/eventMission.jpg";
import SportImage1 from "@/public/assets/sport1.jpeg";
import HomeImage2 from "@/public/assets/home2.jpg";
import styles from "@/app/styles/homeHero.module.css";

const photos = [
  {
    image: EventMissionImage,
    alt: "Annual General Meeting of the Somali Bantu Jareer Weyne Society of Alberta under the Canadian and Somali flags",
    caption: "Annual General Meeting",
    sizes: "(max-width: 64em) 100vw, 34vw",
  },
  {
    image: SportImage1,
    alt: "Sobjar FC squad in green kits",
    caption: TEAM.name,
    sizes: "(max-width: 64em) 50vw, 26vw",
  },
  {
    image: HomeImage2,
    alt: "Mothers in colourful garbasaar sharing a community dinner",
    caption: "Community dinner",
    sizes: "(max-width: 64em) 50vw, 34vw",
  },
];

export default function HomeHero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <Eyebrow>Somali Bantu Jareer Weyne Society of Alberta</Eyebrow>
          <h1>
            Rooted in our heritage, <span>growing together</span> in Canada.
          </h1>
          <p className={styles.lead}>
            We support Somali Bantu Jareer/weyne families, youth and newcomers in Edmonton and across Alberta through education, advocacy, sport and community care.
          </p>
          <div className={styles.actions}>
            <ButtonLink href="/donate">Support our work</ButtonLink>
            <ButtonLink href="/mission" variant="ghost" arrow>
              Our mission
            </ButtonLink>
          </div>
          <Link href={TEAM.path} className={styles.news}>
            <span className={styles.newsThumb}>
              <Image src={MedalImage} alt="" fill sizes="52px" />
            </span>
            <span className={styles.newsText}>
              <strong>{TEAM.name} win provincial silver</strong>
              <small>2026 Alberta Soccer Provincial Championships</small>
            </span>
            <IoArrowForward aria-hidden="true" className={styles.newsArrow} />
          </Link>
        </div>

        <div className={styles.mosaic}>
          {photos.map((photo, index) => (
            <figure key={photo.caption} className={styles.photo}>
              <Image src={photo.image} alt={photo.alt} fill sizes={photo.sizes} priority={index === 0} className={styles.image} />
              <figcaption>{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
