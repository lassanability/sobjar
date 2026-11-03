import Link from "next/link";
import Image from "next/image";
import { IoArrowForward } from "react-icons/io5";
import MissionImage from "@/public/assets/community.jpg";
import ProgramsImage from "@/public/assets/home1.jpg";
import SportImage from "@/public/assets/sport2.jpeg";
import HomeImage5 from "@/public/assets/home5.jpg";
import NavEventImage from "@/public/assets/navevent.jpg";
import MissionMeetingImage from "@/public/assets/mission.jpg";
import SportImage6 from "@/public/assets/sport6.jpeg";
import HomeImage3 from "@/public/assets/home3.jpg";
import Champions from "@/app/component/Champions";
import CtaBanner from "@/app/component/CtaBanner";
import ButtonLink from "@/app/component/ButtonLink";
import Gallery from "@/app/component/Gallery";
import Heritage from "@/app/component/Heritage";
import HomeHero from "@/app/component/HomeHero";
import JsonLd from "@/app/component/JsonLd";
import Section from "@/app/component/Section";
import SectionHeader from "@/app/component/SectionHeader";
import StatList from "@/app/component/StatList";
import { CONTACT, SITE_DESCRIPTION, SITE_NAME, SOCIALS, TEAM, absoluteUrl, pageMetadata } from "@/app/lib/site";
import styles from "@/app/styles/home.module.css";

export const metadata = pageMetadata({
  title: "Sobjar Canada – Somali Bantu Community Support in Alberta",
  description: SITE_DESCRIPTION,
  path: "/",
});

const pillars = [
  {
    href: "/mission",
    title: "Our mission",
    description: "Promoting the social well-being of the Somali Bantu community in Alberta and supporting successful integration into Canadian society.",
    image: MissionImage,
    cta: "Read our mission",
  },
  {
    href: "/programs",
    title: "Programs",
    description: "Youth programs, community outreach and educational initiatives that help families and young people thrive.",
    image: ProgramsImage,
    cta: "Explore programs",
  },
  {
    href: TEAM.path,
    title: TEAM.name,
    description: "Our community football team and 2026 Alberta provincial silver medallists, building confidence and belonging through sport.",
    image: SportImage,
    cta: "Meet the team",
  },
];

const impact = [
  { value: "2018", label: "Serving since" },
  { value: "1,500+", label: "Community members" },
  { value: "500+", label: "Youth served" },
  { value: "50+", label: "Active volunteers" },
];

const moments = [
  { image: NavEventImage, alt: "Mothers and elders gathering at a community event" },
  { image: MissionMeetingImage, alt: "Community members at a society meeting" },
  { image: SportImage6, alt: "Sobjar FC players together" },
  { image: HomeImage3, alt: "Families at a community celebration" },
  { image: HomeImage5, alt: "Youth football in Edmonton" },
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: SITE_NAME,
  alternateName: ["Sobjar", "Somali Bantu Jareer Weyne Society of Alberta"],
  foundingDate: "2018",
  image: absoluteUrl("/opengraph-image"),
  areaServed: { "@type": "State", name: "Alberta", containedInPlace: { "@type": "Country", name: "Canada" } },
  knowsAbout: ["Somali Bantu culture", "Newcomer settlement", "Youth development", "Youth soccer", "Education support"],
  url: absoluteUrl("/"),
  logo: absoluteUrl("/assets/logo.png"),
  description: SITE_DESCRIPTION,
  email: CONTACT.email,
  telephone: CONTACT.phoneHref,
  address: {
    "@type": "PostalAddress",
    streetAddress: "12607 124 Street",
    addressLocality: CONTACT.city,
    addressRegion: CONTACT.region,
    postalCode: "T5L 0N8",
    addressCountry: CONTACT.country,
  },
  sameAs: SOCIALS.map((social) => social.href),
  potentialAction: { "@type": "DonateAction", target: absoluteUrl("/donate"), recipient: { "@type": "NGO", name: SITE_NAME } },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <HomeHero />

      <Section>
        <div className={styles.intro}>
          <SectionHeader
            align="left"
            tag="Who we are"
            title="A community home for Somali Bantu families in Alberta"
            description="Sobjar Canada is a non-profit serving the Somali Bantu Jareer/weyne community through education, advocacy, sport and community support."
          />
          <StatList items={impact} />
        </div>
      </Section>

      <Section tone="paper">
        <div className={styles.pillarsHead}>
          <SectionHeader align="left" tag="What we do" title="Where your support goes" />
          <ButtonLink href="/programs" variant="ghost" arrow>
            All programs
          </ButtonLink>
        </div>
        <ol className={styles.pillars}>
          {pillars.map((pillar, index) => (
            <li key={pillar.href}>
              <Link href={pillar.href} className={styles.pillar}>
                <span className={styles.pillarImage}>
                  <Image src={pillar.image} alt="" fill sizes="(max-width: 48em) 100vw, 33vw" />
                </span>
                <span className={styles.pillarIndex}>{String(index + 1).padStart(2, "0")}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
                <span className={styles.pillarMore}>
                  {pillar.cta}
                  <IoArrowForward aria-hidden="true" />
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </Section>

      <Heritage />
      <Champions />

      <Section tone="sand">
        <SectionHeader tag="Community life" title="Moments that keep us together" description="Meetings, meals, celebrations and match days. Real moments from our community in Edmonton." />
        <Gallery items={moments} />
      </Section>

      <CtaBanner
        tag="Get involved"
        title="Help us keep taking care of our youth"
        description="Volunteer, partner with us or donate. Every contribution supports Somali Bantu youth and families in Alberta."
        image={HomeImage5}
      >
        <ButtonLink href="/donate" variant="gold">Donate</ButtonLink>
        <ButtonLink href="/getInvolved" variant="outline">Volunteer</ButtonLink>
      </CtaBanner>
    </>
  );
}
