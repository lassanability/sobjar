import AboutImage from "@/public/assets/about.jpg";
import SportImage from "@/public/assets/sport2.jpeg";
import CommunityImage from "@/public/assets/community.jpg";
import Champions from "@/app/component/Champions";
import CtaBanner from "@/app/component/CtaBanner";
import ButtonLink from "@/app/component/ButtonLink";
import FeatureCard from "@/app/component/FeatureCard";
import HomeHero from "@/app/component/HomeHero";
import JsonLd from "@/app/component/JsonLd";
import Section from "@/app/component/Section";
import SectionHeader from "@/app/component/SectionHeader";
import { CONTACT, SITE_DESCRIPTION, SITE_NAME, SOCIALS, absoluteUrl, pageMetadata } from "@/app/lib/site";
import grid from "@/app/styles/cardGrid.module.css";

export const metadata = pageMetadata({
  title: "Sobjar Canada – Somali Bantu Community Support in Alberta",
  description: SITE_DESCRIPTION,
  path: "/",
});

const highlights = [
  {
    href: "/mission",
    title: "Our mission",
    description:
      "Promoting the social well-being of the Somali Bantu community in Alberta and supporting successful integration into Canadian society.",
    image: CommunityImage,
    cta: "Read our mission",
  },
  {
    href: "/programs",
    title: "Programs",
    description:
      "Youth programs, community outreach and educational initiatives that help families and young people thrive.",
    image: AboutImage,
    cta: "Explore programs",
  },
  {
    href: "/sobjar-star",
    title: "Sobjar Star FC",
    description:
      "Our community soccer team, now Alberta Provincial silver medallists, using sport to build confidence and belonging.",
    image: SportImage,
    cta: "Meet the team",
  },
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: SITE_NAME,
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
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <HomeHero />
      <Champions />
      <Section tone="tint">
        <SectionHeader
          tag="What we do"
          title="Supporting youth and families across Alberta"
          description="Sobjar Canada is a non-profit serving the Somali Bantu Jareer/weyne community through education, advocacy, sport and community support."
        />
        <div className={grid.grid}>
          {highlights.map((item) => (
            <FeatureCard key={item.href} {...item} />
          ))}
        </div>
      </Section>
      <CtaBanner
        tag="Get involved"
        title="Help us keep taking care of our youth"
        description="Volunteer, partner with us or donate. Every contribution supports Somali Bantu youth and families in Alberta."
      >
        <ButtonLink href="/donate" variant="light">Donate</ButtonLink>
        <ButtonLink href="/getInvolved" variant="outline">Volunteer</ButtonLink>
      </CtaBanner>
    </>
  );
}
