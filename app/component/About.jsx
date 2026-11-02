import Image from "next/image";
import { IoCheckmarkCircle, IoHeartOutline, IoPeople } from "react-icons/io5";
import AboutImage from "@/public/assets/about.jpg";
import LeaderImage from "@/public/assets/leader.jpg";
import CommunityImage from "@/public/assets/community.jpg";
import SportImage1 from "@/public/assets/sport1.jpeg";
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
import Heritage from "@/app/component/Heritage";
import InfoCard from "@/app/component/InfoCard";
import PageHero from "@/app/component/PageHero";
import Section from "@/app/component/Section";
import SectionHeader from "@/app/component/SectionHeader";
import Story from "@/app/component/Story";
import grid from "@/app/styles/cardGrid.module.css";
import styles from "@/app/styles/about.module.css";

const heroStats = [
  { value: "6+", label: "Years of service" },
  { value: "1,500+", label: "Community members" },
  { value: "50+", label: "Active volunteers" },
];

const heritage = {
  eyebrow: "Our Heritage",
  title: "Understanding the Somali Bantu Jareer/weyne Identity",
  paragraphs: [
    "The Somali Bantu Jareer/weyne are a proud people of Somalia with their own Bantu heritage, languages and traditions. For generations our community worked to be recognized and treated with equal dignity, and that strength continues to guide us today.",
    "Most of Somalia's first ethnic Bantu people arrived as migratory agriculturalists from West and Central Africa thousands of years ago and settled in the uninhabited and arable Juba and Shabelle Rivers Valleys. Through every challenge, our community has maintained its rich cultural heritage while building new lives in Canada through resilience, unity, and determination.",
  ],
  features: ["Cultural heritage preservation", "Advocacy for equality and recognition", "Community-centered support programs"],
  stats: [
    { number: "2018", label: "Founded" },
    { number: "500+", label: "Youth Served" },
    { number: "50+", label: "Volunteers" },
  ],
};

const values = [
  {
    icon: IoHeartOutline,
    tone: "gold",
    title: "Cultural Preservation",
    description: "We honor and preserve our unique Somali Bantu heritage while embracing our Canadian future.",
  },
  {
    icon: IoPeople,
    tone: "sky",
    title: "Dignity & Equality",
    description: "We advocate for recognition, respect, and equal opportunities for all community members.",
  },
  {
    icon: IoCheckmarkCircle,
    tone: "green",
    title: "Community Empowerment",
    description: "We build strength through unity, supporting each other to overcome historical challenges.",
  },
];

const sportsGallery = [
  { image: SportImage1, alt: "Sobjar Star FC" },
  { image: SportImage2, alt: "Match Day" },
  { image: SportImage3, alt: "Team Spirit" },
  { image: SportImage4, alt: "Community Tournament" },
  { image: SportImage5, alt: "Coaching & Mentorship" },
  { image: SportImage6, alt: "Youth in Action" },
  { image: SportImage7, alt: "Game Time" },
  { image: SportImage8, alt: "United on the Pitch" },
];

const teamMembers = [
  {
    name: "Ahmed",
    role: "Executive Director",
    image: LeaderImage,
    description: "Leading community development initiatives",
  },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Help support us"
        title="Preserving our heritage in Canada"
        description="We are a non-profit community organization serving the Somali Bantu Jareer/weyne community in Alberta and across Canada. Our mission is to support families, youth, and newcomers while preserving our unique cultural identity and advocating for dignity, equality, and recognition in our new home."
        image={CommunityImage}
        imageAlt="Families gathered around a table at a community celebration"
        stats={heroStats}
      >
        <ButtonLink href="/donate" variant="gold">Support our work</ButtonLink>
        <ButtonLink href="#story" variant="outline">Read our story</ButtonLink>
      </PageHero>

      <Section id="story">
        <Story {...heritage} image={AboutImage} imageAlt="Young women from the Somali Bantu community gathered on a field in Edmonton" />
      </Section>

      <Heritage />

      <Section tone="paper">
        <SectionHeader tag="Our Values" title="What drives us forward" description="Our core values reflect our commitment to preserving our heritage while building a stronger future for our community in Canada." />
        <div className={grid.grid}>
          {values.map((value) => (
            <InfoCard key={value.title} icon={value.icon} title={value.title} tone={value.tone}>
              {value.description}
            </InfoCard>
          ))}
        </div>
      </Section>

      <Champions />

      <Section>
        <SectionHeader
          tag="Our Sports"
          title="Uniting community through football"
          description="Through our Sobjar Star football program, we bring youth and families together on the pitch. Every match builds teamwork, discipline, and lasting friendships across our community."
        />
        <Gallery items={sportsGallery} />
      </Section>

      <Section id="leadership" tone="weave">
        <SectionHeader
          tag="Our Team"
          title="Meet our leadership"
          description="Our leadership team brings together dedicated community advocates, educators, and service leaders committed to making a lasting difference in Alberta."
        />
        <div id="team" className={styles.team}>
          {teamMembers.map((member) => (
            <article key={member.name} className={styles.member}>
              <div className={styles.portrait}>
                <Image src={member.image} alt={member.name} fill sizes="320px" />
              </div>
              <div className={styles.memberInfo}>
                <h3>{member.name}</h3>
                <span>{member.role}</span>
                <p>{member.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <CtaBanner tag="Join us" title="Be part of the story" description="Volunteer, partner with us or donate, and help Somali Bantu youth and families thrive in Alberta." image={SportImage1}>
        <ButtonLink href="/getInvolved" variant="gold">Get involved</ButtonLink>
        <ButtonLink href="/contact" variant="outline">Contact us</ButtonLink>
      </CtaBanner>
    </>
  );
}
