import Image from "next/image";
import { IoCalendar, IoFootball, IoHeart, IoHome, IoLanguage, IoPeople, IoSchool, IoTime, IoTrophy } from "react-icons/io5";
import AboutImage from "@/public/assets/about.jpg";
import CommunityImage from "@/public/assets/community.jpg";
import HomeImage2 from "@/public/assets/home2.jpg";
import HomeImage4 from "@/public/assets/home4.jpg";
import HomeImage5 from "@/public/assets/home5.jpg";
import NavEventImage from "@/public/assets/navevent.jpg";
import SportImage1 from "@/public/assets/sport1.jpeg";
import SportImage6 from "@/public/assets/sport6.jpeg";
import ButtonLink from "@/app/component/ButtonLink";
import CtaBanner from "@/app/component/CtaBanner";
import InfoCard from "@/app/component/InfoCard";
import PageHero from "@/app/component/PageHero";
import Section from "@/app/component/Section";
import SectionHeader from "@/app/component/SectionHeader";
import Story from "@/app/component/Story";
import grid from "@/app/styles/cardGrid.module.css";
import styles from "@/app/styles/programs.module.css";

const heroStats = [
  { value: "25+", label: "Active programs" },
  { value: "800+", label: "Participants served" },
  { value: "3", label: "Program categories" },
];

const programCategories = [
  {
    id: "youth",
    eyebrow: "Youth Development",
    title: "Empowering the Next Generation",
    paragraphs: [
      "Our comprehensive youth programs focus on leadership development, cultural identity, and academic success. We provide mentorship, recreational activities, and skill-building opportunities that help young people thrive.",
      "Through sports teams, leadership workshops, cultural programs, and academic support, we create safe spaces where Somali Bantu youth can develop confidence, build connections, and pursue their dreams while staying connected to their heritage.",
    ],
    image: AboutImage,
    imageAlt: "Young people from the Somali Bantu community together on a field in Edmonton",
    stats: [
      { number: "300+", label: "Youth Served" },
      { number: "15+", label: "Programs" },
      { number: "25+", label: "Mentors" },
    ],
    features: ["Leadership development workshops", "Sports and recreational activities", "Cultural identity programs", "Peer mentorship opportunities"],
  },
  {
    id: "community",
    eyebrow: "Community Support",
    title: "Building Stronger Communities",
    paragraphs: [
      "We connect families with essential services, provide advocacy support, and create programs that strengthen community bonds. Our outreach initiatives address immediate needs while building long-term resilience.",
      "From settlement support for newcomers to family counseling and community events, our outreach programs ensure that no one faces challenges alone. We work closely with local agencies to bridge gaps and advocate for our community's needs.",
    ],
    image: NavEventImage,
    imageAlt: "Mothers and elders gathered at a community outreach event",
    stats: [
      { number: "500+", label: "Families" },
      { number: "12+", label: "Partnerships" },
      { number: "8+", label: "Services" },
    ],
    features: ["Settlement and integration support", "Family counseling services", "Community advocacy programs", "Emergency assistance coordination"],
  },
  {
    id: "education",
    eyebrow: "Educational Excellence",
    title: "Learning Without Limits",
    paragraphs: [
      "Education is the foundation of empowerment. Our educational initiatives include tutoring programs, language classes, adult education, and scholarship opportunities that open doors to success.",
      "We believe every person deserves access to quality education. Our programs range from early childhood development to adult literacy, English language learning, and post-secondary support, ensuring lifelong learning opportunities for all community members.",
    ],
    image: HomeImage4,
    imageAlt: "Community members at a learning session",
    stats: [
      { number: "400+", label: "Students" },
      { number: "20+", label: "Tutors" },
      { number: "6+", label: "Languages" },
    ],
    features: ["Academic tutoring and homework help", "English as a Second Language classes", "Adult education and literacy programs", "Scholarship and bursary opportunities"],
  },
];

const featuredPrograms = [
  { title: "SOBJAR Sports Academy", description: "Building character through sports", image: SportImage1, category: "Youth Programs", duration: "Year-round", ages: "Ages 8-18", schedule: "Weekends", icon: IoFootball },
  { title: "Mentorship Circle", description: "Connecting youth with community leaders", image: SportImage6, category: "Youth Programs", duration: "6 months", ages: "Ages 14-24", schedule: "Bi-weekly", icon: IoPeople },
  { title: "English Language Circle", description: "Language skills for success", image: CommunityImage, category: "Educational Initiatives", duration: "Ongoing", ages: "All ages", schedule: "Evenings", icon: IoLanguage },
  { title: "Family Integration Support", description: "Helping families navigate Canadian systems", image: HomeImage2, category: "Community Outreach", duration: "As needed", ages: "All families", schedule: "Flexible", icon: IoHome },
];

const programStats = [
  { icon: IoPeople, tone: "green", title: "Active Participants", description: "Community members engaged in our programs", metric: "800+" },
  { icon: IoTrophy, tone: "gold", title: "Program Completion Rate", description: "Participants who complete their programs", metric: "85%" },
  { icon: IoSchool, tone: "sky", title: "Educational Success", description: "Students showing improved academic performance", metric: "92%" },
  { icon: IoHeart, tone: "green", title: "Volunteer Hours", description: "Hours contributed by community volunteers", metric: "2,000+" },
];

export default function Programs() {
  return (
    <>
      <PageHero
        eyebrow="Our Programs"
        title="Empowering through programs"
        description="From youth development to community outreach and educational initiatives, our comprehensive programs are designed to empower individuals, strengthen families, and build thriving communities across Alberta."
        image={HomeImage5}
        imageAlt="Youth and coaches at a Sobjar football training session"
        stats={heroStats}
      >
        <ButtonLink href="/getInvolved" variant="gold" arrow>Join a program</ButtonLink>
      </PageHero>

      <Section>
        <div className={styles.stories}>
          {programCategories.map((program, index) => (
            <Story key={program.id} {...program} reverse={index % 2 === 1} />
          ))}
        </div>
      </Section>

      <Section tone="weave">
        <SectionHeader tag="Featured Programs" title="Popular programs this season" description="Discover our most impactful programs that are making a difference in our community." />
        <div className={`${grid.grid} ${grid.four}`}>
          {featuredPrograms.map((program) => (
            <article key={program.title} className={styles.program}>
              <div className={styles.programImage}>
                <Image src={program.image} alt="" fill sizes="(max-width: 48em) 100vw, 25vw" />
                <span className={styles.programIcon} aria-hidden="true">
                  <program.icon />
                </span>
              </div>
              <div className={styles.programBody}>
                <span className={styles.programCategory}>{program.category}</span>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <ul className={styles.programDetails}>
                  <li>
                    <IoTime aria-hidden="true" />
                    {program.duration}
                  </li>
                  <li>
                    <IoPeople aria-hidden="true" />
                    {program.ages}
                  </li>
                  <li>
                    <IoCalendar aria-hidden="true" />
                    {program.schedule}
                  </li>
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader tag="Program Impact" title="Measuring success together" />
        <div className={`${grid.grid} ${grid.four}`}>
          {programStats.map((stat) => (
            <InfoCard key={stat.title} icon={stat.icon} tone={stat.tone} title={stat.metric}>
              <strong className={styles.impactTitle}>{stat.title}</strong>
              {stat.description}
            </InfoCard>
          ))}
        </div>
      </Section>

      <CtaBanner
        tag="Get Involved"
        title="Ready to join our programs?"
        description="Whether you're looking to participate, volunteer, or partner with us, there's a place for you in our programs. Together, we can build stronger communities and brighter futures."
        image={SportImage1}
      >
        <ButtonLink href="/getInvolved" variant="gold" arrow>Join a Program</ButtonLink>
        <ButtonLink href="/contact" variant="outline">Contact Us</ButtonLink>
      </CtaBanner>
    </>
  );
}
