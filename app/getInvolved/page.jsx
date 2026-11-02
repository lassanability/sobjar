import Image from "next/image";
import { IoBook, IoCheckmarkCircle, IoHeart, IoPeople } from "react-icons/io5";
import HomeImage1 from "@/public/assets/home1.jpg";
import HomeImage5 from "@/public/assets/home5.jpg";
import MissionImage from "@/public/assets/mission.jpg";
import NavSportImage from "@/public/assets/navsport.jpg";
import ButtonLink from "@/app/component/ButtonLink";
import CtaBanner from "@/app/component/CtaBanner";
import InfoCard from "@/app/component/InfoCard";
import PageHero from "@/app/component/PageHero";
import Section from "@/app/component/Section";
import SectionHeader from "@/app/component/SectionHeader";
import grid from "@/app/styles/cardGrid.module.css";
import styles from "@/app/styles/getInvolved.module.css";

const involvementOptions = [
  {
    id: "volunteer",
    title: "Volunteer With Us",
    subtitle: "Make a Direct Impact",
    description: "Join our dedicated team of volunteers and help empower Somali Bantu families through mentorship, educational support, and community events.",
    features: ["Youth mentorship programs", "Educational tutoring and support", "Community event coordination", "Translation and interpretation services"],
    buttonText: "Start Volunteering",
    image: HomeImage5,
  },
  {
    id: "partnerships",
    title: "Partner With Us",
    subtitle: "Collaborative Growth",
    description: "Form strategic partnerships with Sobjar Canada to expand our reach and create lasting change in the Somali Bantu community.",
    features: ["Corporate social responsibility initiatives", "Educational institution collaborations", "Government and NGO partnerships", "Community organization alliances"],
    buttonText: "Explore Partnerships",
    image: MissionImage,
  },
  {
    id: "events",
    title: "Join Our Events",
    subtitle: "Community Connection",
    description: "Participate in cultural celebrations, educational workshops, and community gatherings that strengthen our bonds and celebrate our heritage.",
    features: ["Cultural festivals and celebrations", "Educational workshops and seminars", "Youth sports tournaments", "Community fundraising events"],
    buttonText: "View Events",
    image: HomeImage1,
  },
];

const highlights = [
  { icon: IoBook, tone: "green", title: "Education First", text: "Supporting academic achievement and lifelong learning opportunities" },
  { icon: IoHeart, tone: "gold", title: "Cultural Pride", text: "Celebrating and preserving Somali Bantu heritage and traditions" },
  { icon: IoPeople, tone: "sky", title: "Community Unity", text: "Fostering connections and mutual support within and beyond our community" },
];

export default function GetInvolved() {
  return (
    <>
      <PageHero
        eyebrow="Get Involved"
        title="Join our mission"
        description="Join our mission to empower the Somali Bantu community through meaningful engagement, partnership, and shared commitment to positive change."
        image={NavSportImage}
        imageAlt="Sobjar youth and volunteers at a football session"
      />

      <Section>
        <SectionHeader
          tag="Ways to help"
          title="Ways to make a difference"
          description="Whether you're an individual looking to volunteer, an organization seeking partnership opportunities, or someone wanting to participate in community events, there are many ways to support our cause and make a lasting impact on the lives of Somali Bantu families in Alberta."
        />
        <div className={styles.options}>
          {involvementOptions.map((option) => (
            <article key={option.id} id={option.id} className={styles.option}>
              <div className={styles.optionImage}>
                <Image src={option.image} alt="" fill sizes="(max-width: 64em) 100vw, 33vw" />
                <span>{option.subtitle}</span>
              </div>
              <div className={styles.optionBody}>
                <h3>{option.title}</h3>
                <p>{option.description}</p>
                <ul>
                  {option.features.map((feature) => (
                    <li key={feature}>
                      <IoCheckmarkCircle aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <ButtonLink href="/contact" variant="primary" arrow>
                  {option.buttonText}
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="weave">
        <SectionHeader
          tag="Your impact"
          title="Your impact matters"
          description="Every volunteer hour, partnership initiative, and community event contributes to building stronger, more resilient Somali Bantu families. Together, we create opportunities for education, cultural preservation, and social integration that benefit the entire community."
        />
        <div className={grid.grid}>
          {highlights.map((item) => (
            <InfoCard key={item.title} icon={item.icon} tone={item.tone} title={item.title}>
              {item.text}
            </InfoCard>
          ))}
        </div>
      </Section>

      <CtaBanner
        tag="Get started"
        title="Ready to get started?"
        description="Take the first step towards making a meaningful difference in the Somali Bantu community. Whether you have five minutes or five hours, your contribution matters."
        image={HomeImage1}
      >
        <ButtonLink href="/contact" variant="gold">Volunteer Today</ButtonLink>
        <ButtonLink href="/contact" variant="outline">Contact Us</ButtonLink>
      </CtaBanner>
    </>
  );
}
