import { IoHeartOutline, IoPeople, IoRibbon, IoTrophy } from "react-icons/io5";
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
import StatList from "@/app/component/StatList";
import { CONTACT, SITE_NAME, SOCIALS, TEAM, WHATSAPP_URL, absoluteUrl, pageMetadata } from "@/app/lib/site";
import grid from "@/app/styles/cardGrid.module.css";

export const metadata = pageMetadata({
  title: "Sobjar Star FC – Alberta Provincial Silver Medallists",
  description:
    "Sobjar Star FC is an Edmonton community soccer team from the Somali Bantu community. Silver medallists in Men's Tier 3 at the 2026 Alberta Soccer Provincials.",
  path: TEAM.path,
});

const facts = [
  { value: "Edmonton", label: "Home city" },
  { value: "Tier 3", label: "Alberta Soccer division" },
  { value: "Silver", label: "2026 Provincials" },
  { value: "Abdihakim Aweys Noor", label: "Head coach" },
];

const groupStage = ["YBG Dons", "Bonnyville U23", "Croatia Torcida"];

const reasons = [
  {
    icon: IoHeartOutline,
    title: "Confidence",
    text: "Newcomer and low-income youth find their voice on the pitch and carry it into school and work.",
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
  { image: SportImage2, alt: "Sobjar Star players on match day" },
  { image: SportImage3, alt: "Team huddle before kick-off" },
  { image: SportImage4, alt: "Community tournament" },
  { image: SportImage5, alt: "Coaching and mentorship on the sideline" },
  { image: SportImage6, alt: "Youth players in action" },
  { image: SportImage7, alt: "Game time for Sobjar Star" },
  { image: SportImage8, alt: "Sobjar Star united on the pitch" },
  { image: SportHeroImage, alt: "Sobjar Star FC squad photo" },
];

const teamSchema = {
  "@context": "https://schema.org",
  "@type": "SportsTeam",
  name: TEAM.name,
  alternateName: "Sobjar FC",
  sport: "Soccer",
  url: absoluteUrl(TEAM.path),
  description: "Community soccer team from Edmonton's Somali Bantu community.",
  coach: { "@type": "Person", name: TEAM.coach },
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
  award: "Silver medal, Alberta Soccer 2026 Outdoor Provincial Championships, Men's Tier 3",
  sameAs: SOCIALS.map((social) => social.href),
};

export default function SobjarStarPage() {
  return (
    <>
      <JsonLd data={teamSchema} />
      <PageHero
        eyebrow="Sobjar Star FC"
        title="Soccer that builds community"
        description="A community team from Edmonton's Somali Bantu community, using sport to remove barriers for newcomer and low-income youth."
        image={SportHeroImage}
        imageAlt="Sobjar Star FC players and supporters"
      >
        <ButtonLink href="#champions" variant="light">See our win</ButtonLink>
        <ButtonLink href={WHATSAPP_URL} variant="outline" external>Join the community</ButtonLink>
      </PageHero>

      <div id="champions">
        <Champions showLink={false} />
      </div>

      <Section tone="tint">
        <SectionHeader
          tag="Season 2026"
          title="Alberta Soccer Provincials"
          description="Sobjar Star competed in the Alberta Soccer Men's Tier 3 Provincials and finished with silver, with Croatia Torcida taking bronze."
        />
        <StatList items={facts} />
        <div className={grid.grid}>
          {groupStage.map((opponent) => (
            <InfoCard key={opponent} icon={IoTrophy} title={`Win vs ${opponent}`}>
              Group stage win at the 2026 Provincials.
            </InfoCard>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          tag="Why we play"
          title="Sport with a purpose"
          description="Sobjar Star is part of Sobjar Canada's mission to support Somali Bantu youth and families in Alberta."
        />
        <div className={grid.grid}>
          {reasons.map((reason) => (
            <InfoCard key={reason.title} icon={reason.icon} title={reason.title}>
              {reason.text}
            </InfoCard>
          ))}
        </div>
      </Section>

      <Section tone="tint">
        <SectionHeader tag="Gallery" title="Life with Sobjar Star" />
        <Gallery items={gallery} />
      </Section>

      <CtaBanner
        tag="Be part of it"
        title="Cheer us on, play with us, or back the team"
        description="Follow Sobjar Star for match updates, or support the programs that keep youth on the pitch."
      >
        <ButtonLink href={WHATSAPP_URL} variant="light" external>Join on WhatsApp</ButtonLink>
        <ButtonLink href="/donate" variant="outline">Support the team</ButtonLink>
      </CtaBanner>
    </>
  );
}
