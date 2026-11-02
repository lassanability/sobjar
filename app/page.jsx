import AboutImage from "@/public/assets/about.jpg";
import SportImage from "@/public/assets/sport2.jpeg";
import CommunityImage from "@/public/assets/community.jpg";
import HomeImage2 from "@/public/assets/home2.jpg";
import HomeImage5 from "@/public/assets/home5.jpg";
import NavEventImage from "@/public/assets/navevent.jpg";
import EventMissionImage from "@/public/assets/eventMission.jpg";
import SportImage1 from "@/public/assets/sport1.jpeg";
import Champions from "@/app/component/Champions";
import CtaBanner from "@/app/component/CtaBanner";
import ButtonLink from "@/app/component/ButtonLink";
import FeatureCard from "@/app/component/FeatureCard";
import Gallery from "@/app/component/Gallery";
import Heritage from "@/app/component/Heritage";
import HomeHero from "@/app/component/HomeHero";
import JsonLd from "@/app/component/JsonLd";
import Section from "@/app/component/Section";
import SectionHeader from "@/app/component/SectionHeader";
import StatList from "@/app/component/StatList";
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

const impact = [
  { value: "2018", label: "Serving since" },
  { value: "1,500+", label: "Community members" },
  { value: "500+", label: "Youth served" },
  { value: "50+", label: "Active volunteers" },
];

const moments = [
  { image: EventMissionImage, alt: "Annual General Meeting of the Somali Bantu Jareer Weyne Society of Alberta" },
  { image: NavEventImage, alt: "Mothers and elders gathering at a community event" },
  { image: SportImage1, alt: "Sobjar Star FC squad in green kits" },
  { image: HomeImage2, alt: "Families sharing a meal together" },
  { image: HomeImage5, alt: "Youth football training in Edmonton" },
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: SITE_NAME,
  alternateName: ["Sobjar", "Somali Bantu Jareer Weyne Society of Alberta"],
  foundingDate: "2018",
  slogan: "From the Jubba valley to Alberta, we rise together.",
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
        <SectionHeader
          tag="What we do"
          title="Supporting youth and families across Alberta"
          description="Sobjar Canada is a non-profit serving the Somali Bantu Jareer/weyne community through education, advocacy, sport and community support."
        />
        <StatList items={impact} />
        <div className={grid.grid}>
          {highlights.map((item) => (
            <FeatureCard key={item.href} {...item} />
          ))}
        </div>
      </Section>
      <Heritage />
      <Champions />
      <Section>
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
