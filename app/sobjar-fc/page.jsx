import { IoHeartOutline, IoPeople, IoRibbon } from "react-icons/io5";
import SportHeroImage from "@/public/assets/sport1.jpeg";
import SportImage2 from "@/public/assets/sport2.jpeg";
import SportImage3 from "@/public/assets/sport3.jpeg";
import SportImage4 from "@/public/assets/sport4.jpeg";
import SportImage5 from "@/public/assets/sport5.jpeg";
import SportImage6 from "@/public/assets/sport6.jpeg";
import SportImage7 from "@/public/assets/sport7.jpeg";
import SportImage8 from "@/public/assets/sport8.jpeg";
import ButtonLink from "@/app/component/ButtonLink";
import Champions from "@/app/component/Champions";
import CtaBanner from "@/app/component/CtaBanner";
import Gallery from "@/app/component/Gallery";
import InfoCard from "@/app/component/InfoCard";
import JsonLd from "@/app/component/JsonLd";
import PageHero from "@/app/component/PageHero";
import Section from "@/app/component/Section";
import SectionHeader from "@/app/component/SectionHeader";
import { CONTACT, SITE_NAME, SOCIALS, TEAM, WHATSAPP_URL, absoluteUrl, pageMetadata } from "@/app/lib/site";
import grid from "@/app/styles/cardGrid.module.css";

export const metadata = pageMetadata({
  title: "Sobjar FC – Alberta Provincial Silver Medallists",
  description:
    "Sobjar FC is an Edmonton community soccer team from the Somali Bantu community and silver medallists at the 2026 Alberta Soccer Provincial Championships.",
  path: TEAM.path,
});

const reasons = [
  {
    icon: IoHeartOutline,
    title: "Confidence",
    text: "Young players find their voice on the pitch and carry it into school and work.",
  },
  {
    icon: IoRibbon,
    title: "Leadership",
    text: "Players learn discipline, accountability and how to lead teammates, on and off the field.",
  },
  {
    icon: IoPeople,
    title: "Belonging",
    text: "Every match brings families, elders and neighbours together as one Edmonton community.",
  },
];

const gallery = [
  { image: SportImage2, alt: "Sobjar FC players on match day" },
  { image: SportImage3, alt: "Team huddle before kick-off" },
  { image: SportImage4, alt: "Community tournament" },
  { image: SportImage5, alt: "On the sideline" },
  { image: SportImage6, alt: "Players in action" },
  { image: SportImage7, alt: "Game time for Sobjar FC" },
  { image: SportImage8, alt: "Sobjar FC united on the pitch" },
  { image: SportHeroImage, alt: "Sobjar FC squad photo" },
];

const teamSchema = {
  "@context": "https://schema.org",
  "@type": "SportsTeam",
  name: TEAM.name,
  sport: "Soccer",
  url: absoluteUrl(TEAM.path),
  description: "Community soccer team from Edmonton's Somali Bantu community.",
  location: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: CONTACT.city,
      addressRegion: CONTACT.region,
      addressCountry: CONTACT.country,
    },
  },
  parentOrganization: { "@type": "Organization", name: SITE_NAME, url: absoluteUrl("/") },
  award: "Silver medal, Alberta Soccer 2026 Provincial Championships",
  sameAs: SOCIALS.map((social) => social.href),
};

export default function SobjarFcPage() {
  return (
    <>
      <JsonLd data={teamSchema} />
      <PageHero
        eyebrow="Sobjar FC"
        title="Football that builds community"
        description="A community team from Edmonton's Somali Bantu community, bringing young players, families and supporters together every season."
        image={SportHeroImage}
        imageAlt="Sobjar FC players in green kits"
      >
        <ButtonLink href="#champions" variant="gold">See our win</ButtonLink>
        <ButtonLink href={WHATSAPP_URL} variant="outline" external>Join the community</ButtonLink>
      </PageHero>

      <div id="champions">
        <Champions showLink={false} />
      </div>

      <Section>
        <SectionHeader
          tag="Why we play"
          title="Sport with a purpose"
          description="Sobjar FC is part of Sobjar Canada's mission to support Somali Bantu youth and families in Alberta."
        />
        <div className={grid.grid}>
          {reasons.map((reason, index) => (
            <InfoCard key={reason.title} icon={reason.icon} title={reason.title} tone={["green", "gold", "sky"][index]}>
              {reason.text}
            </InfoCard>
          ))}
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeader tag="Gallery" title="Life with Sobjar FC" />
        <Gallery items={gallery} />
      </Section>

      <CtaBanner
        tag="Be part of it"
        title="Cheer us on, play with us, or back the team"
        description="Follow Sobjar FC for match updates, or support the programs that keep youth on the pitch."
        image={SportImage8}
      >
        <ButtonLink href={WHATSAPP_URL} variant="gold" external>Join on WhatsApp</ButtonLink>
        <ButtonLink href="/donate" variant="outline">Support the team</ButtonLink>
      </CtaBanner>
    </>
  );
}
