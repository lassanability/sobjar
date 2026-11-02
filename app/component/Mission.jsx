import { IoCheckmarkCircle, IoHeartOutline, IoHome, IoLogoWhatsapp, IoPeople, IoPeopleOutline, IoSchool, IoShield, IoTrophy } from "react-icons/io5";
import MissionImage from "@/public/assets/mission.jpg";
import EventMission from "@/public/assets/eventMission.jpg";
import NavEventImage from "@/public/assets/navevent.jpg";
import ButtonLink from "@/app/component/ButtonLink";
import CtaBanner from "@/app/component/CtaBanner";
import InfoCard from "@/app/component/InfoCard";
import PageHero from "@/app/component/PageHero";
import Section from "@/app/component/Section";
import SectionHeader from "@/app/component/SectionHeader";
import Story from "@/app/component/Story";
import { WHATSAPP_URL } from "@/app/lib/site";
import grid from "@/app/styles/cardGrid.module.css";
import styles from "@/app/styles/mission.module.css";

const sections = [
  {
    id: "statement",
    eyebrow: "Article II - Section 1",
    title: "Our Mission Statement",
    paragraphs: [
      "The mission of the Somali Bantu/Jareer-weyne Community of Alberta is to promote and advance the social well-being of the Somali Bantu Society in Alberta and successfully integrate the community into Canadian Society. The service of this organization provides is open to all Canadians.",
      "It is all about supporting the young generation including the youth and families in Alberta in their time of need, and work towards a greater way. We understand the importance of educating the families and the youth of our future. Our goal is to help them obtain an education and better living in Alberta which will give them the knowledge and skills necessary for improving their lives and their communities. We also provide health treatment in the whole of Canada.",
    ],
    image: MissionImage,
    imageAlt: "Community members meeting around tables in Edmonton",
    stats: [
      { number: "All", label: "Canadians Welcome" },
      { number: "Alberta", label: "Primary Focus" },
      { number: "Canada", label: "Health Services" },
    ],
  },
  {
    id: "purposes",
    eyebrow: "Article II - Section 2",
    title: "Our Organizational Purposes",
    paragraphs: [
      "The general purpose of this corporation shall be any purpose, which may be lawfully undertaken by a non-profit corporation organized pursuant to Alberta or the whole Canada Law.",
      "Our specific purposes are comprehensive and community-focused, designed to address the multifaceted needs of our community members through education, advocacy, support services, and empowerment programs that strengthen both individuals and families.",
    ],
    image: EventMission,
    imageAlt: "Annual General Meeting of the Somali Bantu Jareer Weyne Society of Alberta",
    stats: [
      { number: "8+", label: "Core Purposes" },
      { number: "Non-Profit", label: "Legal Status" },
      { number: "Alberta", label: "Incorporated" },
    ],
  },
];

const purposes = [
  { icon: IoSchool, title: "Education and Advocacy", description: "Providing educational opportunities and advocating for community rights and needs." },
  { icon: IoHome, title: "Newcomer Assistance", description: "Assist newcomers to Alberta by showing the way to access government services." },
  { icon: IoShield, title: "Violence Prevention", description: "Fight violence and delinquency by investing in children, youth and families." },
  { icon: IoPeople, title: "Youth Support", description: "Help youth with their homework and educational development." },
  { icon: IoCheckmarkCircle, title: "Self-Sufficiency", description: "Promote self-sufficiency through workshops and educational seminars." },
  { icon: IoHeartOutline, title: "Community Support", description: "Provide any form of support to members with the view to lessening the burdens of government." },
  { icon: IoTrophy, title: "Youth Sports", description: "Sponsor, host and/or participate in events and activities that promote the sport of youth." },
  { icon: IoPeopleOutline, title: "Effective Voice", description: "Assist the Somali Bantu in Alberta Province to have an effective voice in organizations, institutions and issues that affect their lives." },
];

const TONES = ["green", "gold", "sky"];

export default function Mission() {
  return (
    <>
      <PageHero
        eyebrow="Our mission"
        title="Social well-being and a strong place in Canadian society"
        description="Everything we do serves one purpose: helping Somali Bantu families and youth in Alberta thrive, while keeping our culture alive."
        image={NavEventImage}
        imageAlt="Mothers and elders gathered at a Sobjar community event"
      />

      <Section>
        <div className={styles.stories}>
          {sections.map((section, index) => (
            <Story key={section.id} {...section} reverse={index % 2 === 1} features={["Open to all Canadians", "Community-centered approach"]} />
          ))}
        </div>
      </Section>

      <Section tone="weave">
        <SectionHeader tag="Our Specific Purposes" title="Comprehensive community services" description="Our organization is structured to address the diverse needs of our community through these specific purposes and services." />
        <div className={`${grid.grid} ${grid.four}`}>
          {purposes.map((purpose, index) => (
            <InfoCard key={purpose.title} icon={purpose.icon} title={purpose.title} tone={TONES[index % TONES.length]}>
              {purpose.description}
            </InfoCard>
          ))}
        </div>
      </Section>

      <CtaBanner
        tag="Join us"
        title="Join our mission for community empowerment"
        description="Be part of our comprehensive mission to promote social well-being, support successful integration, and empower the Somali Bantu/Jareer-weyne community in Alberta. Together, we can build stronger families, educate our youth, and create lasting positive change."
        image={EventMission}
      >
        <ButtonLink href={WHATSAPP_URL} variant="gold" external>
          <IoLogoWhatsapp aria-hidden="true" />
          Join our WhatsApp community
        </ButtonLink>
      </CtaBanner>
    </>
  );
}
