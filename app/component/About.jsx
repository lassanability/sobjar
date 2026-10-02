import Image from "next/image";
import Champions from "@/app/component/Champions";
import Logo from "@/public/assets/logo.png";
import AboutImage from "@/public/assets/about.jpg";
import styles from "@/app/styles/about.module.css";
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
import {
  IoArrowForward,
  IoCheckmarkCircle,
  IoHeartOutline,
  IoPeople,
  IoTrophy,
} from "react-icons/io5";

const aboutSections = [
  {
    id: 1,
    category: "Our Heritage",
    title: "Understanding the Somali Bantu Jareer/weyne Identity",
    description:
      "Somali Bantu Jareer/weyne is an ethnic group that is native to Somalia but culturally and physically distinct from other Somali ethnic groups. In much of dominant ethnic Somali Cushitic society, the Somali Bantu are considered as slaves and inferiors due to their ethnic background and negroid physical features, which is typical of black Africans from West, Central and Southern Africa.",
    extendedDescription:
      "Most of Somalia's first ethnic Bantu people arrived as migratory agriculturalists from West and Central Africa thousands of years ago and settled in the uninhabited and arable Juba and Shabelle Rivers Valleys. Despite facing historical discrimination, our community has maintained its rich cultural heritage while building new lives in Canada through resilience, unity, and determination.",
    image: AboutImage,
    stats: [
      { number: "2018", label: "Founded" },
      { number: "500+", label: "Youth Served" },
      { number: "50+", label: "Volunteers" },
    ],
  },
];

const values = [
  {
    icon: IoHeartOutline,
    title: "Cultural Preservation",
    description:
      "We honor and preserve our unique Somali Bantu heritage while embracing our Canadian future.",
  },
  {
    icon: IoPeople,
    title: "Dignity & Equality",
    description:
      "We advocate for recognition, respect, and equal opportunities for all community members.",
  },
  {
    icon: IoCheckmarkCircle,
    title: "Community Empowerment",
    description:
      "We build strength through unity, supporting each other to overcome historical challenges.",
  },
];

const sportsGallery = [
  {
    image: SportImage1,
    title: "Sobjar Star FC",
  },
  {
    image: SportImage2,
    title: "Match Day",
  },
  {
    image: SportImage3,
    title: "Team Spirit",
  },
  {
    image: SportImage4,
    title: "Community Tournament",
  },
  {
    image: SportImage5,
    title: "Coaching & Mentorship",
  },
  {
    image: SportImage6,
    title: "Youth in Action",
  },
  {
    image: SportImage7,
    title: "Game Time",
  },
  {
    image: SportImage8,
    title: "United on the Pitch",
  },
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
    <div className={styles.aboutContainer}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroTextContent}>
            <div className={styles.herobadge}>
              <span>Help support us</span>
            </div>
            <h1>
              Preserving Our Heritage in
              <span> Canada</span>
            </h1>
            <p>
              We are a non-profit community organization serving the Somali
              Bantu Jareer/weyne community in Alberta and across Canada. Our mission is to
              support families, youth, and newcomers while preserving our unique cultural
              identity and advocating for dignity, equality, and recognition in our new home.
            </p>

            <div className={styles.heroStatsContainer}>
              <div className={styles.heroStatCard}>
                <div className={styles.heroStatIconWrapper}>
                  <IoTrophy
                    className={styles.heroStatIcon}
                    aria-label="Service"
                  />
                </div>
                <h2>6+</h2>
                <span>Years of Service</span>
              </div>
              <div className={styles.heroStatCard}>
                <div className={styles.heroStatIconWrapper}>
                  <IoPeople
                    className={styles.heroStatIcon}
                    aria-label="Community"
                  />
                </div>
                <h2>1,500+</h2>
                <span>Community Members</span>
              </div>
              <div className={styles.heroStatCard}>
                <div className={styles.heroStatIconWrapper}>
                  <IoHeartOutline
                    className={styles.heroStatIcon}
                    aria-label="Volunteers"
                  />
                </div>
                <h2>50+</h2>
                <span>Active Volunteers</span>
              </div>
            </div>
          </div>

          <div className={styles.heroImageContainer}>
            <Image
              src={CommunityImage}
              alt="Community activism"
              fill
              sizes="100vw"
              quality={100}
              priority={true}
              className={styles.heroImage}
            />
          </div>
        </div>
      </section>

      <section className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          {aboutSections.map((section, index) => (
            <div key={index} className={styles.sectionContainer}>
              <div className={styles.sectionImageContainer}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    sizes="100vw"
                    quality={100}
                    priority={true}
                    className={styles.sectionImage}
                  />
                  <div className={styles.imageOverlay}></div>
                </div>
                <div className={styles.sectionStats}>
                  {section.stats.map((stat, statIndex) => (
                    <div key={statIndex} className={styles.statCard}>
                      <span>{stat.number}</span>
                      <span>{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.sectionContent}>
                <span>{section.category}</span>
                <h2>{section.title}</h2>
                <p>{section.description}</p>
                <p>{section.extendedDescription}</p>
                <div className={styles.sectionFeatures}>
                  <div className={styles.featureItem}>
                    <IoCheckmarkCircle className={styles.featureIcon} />
                    <span>Cultural heritage preservation</span>
                  </div>
                  <div className={styles.featureItem}>
                    <IoCheckmarkCircle className={styles.featureIcon} />
                    <span>Advocacy for equality and recognition</span>
                  </div>
                  <div className={styles.featureItem}>
                    <IoCheckmarkCircle className={styles.featureIcon} />
                    <span>Community-centered support programs</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.valuesSection}>
        <div className={styles.valuesHeader}>
          <span className={styles.sectionTag}>Our Values</span>
          <h2>What Drives Us Forward</h2>
          <p>
            Our core values reflect our commitment to preserving our heritage while
            building a stronger future for our community in Canada
          </p>
        </div>
        <div className={styles.valuesGrid}>
          {values.map((value, index) => (
            <div key={index} className={styles.valueCard}>
              <div className={styles.valueCardHeader}>
                <value.icon className={styles.valueIcon} aria-label="Value" />
              </div>
              <div className={styles.valueCardContent}>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Champions />

      <section className={styles.sportsSection}>
        <div className={styles.sportsSectionWrapper}>
          <div className={styles.valuesHeader}>
            <span className={styles.sectionTag}>Our Sports</span>
            <h2>Uniting Community Through Football</h2>
            <p>
              Through our Sobjar Star football program, we bring youth and
              families together on the pitch. Every match builds teamwork,
              discipline, and lasting friendships across our community.
            </p>
          </div>
          <div className={styles.sportsGrid}>
            {sportsGallery.map((sport, index) => (
              <div key={index} className={styles.sportCard}>
                <Image
                  src={sport.image}
                  alt={sport.title}
                  fill
                  sizes="100vw"
                  quality={100}
                  className={styles.sportImage}
                />
                <div className={styles.sportOverlay}>
                  <span>{sport.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.leadershipSection}>
        <div className={styles.leadershipSectionWrapper}>
          <div className={styles.valuesHeader}>
            <span className={styles.sectionTag}>Our Team</span>
            <h2>Meet Our Leadership</h2>
            <p>
              Our leadership team brings together dedicated community advocates,
              educators, and service leaders committed to making a lasting
              difference in Alberta.
            </p>
          </div>
          <div className={styles.leadershipGrid}>
            {teamMembers.map((member, index) => (
              <div key={index} className={styles.leadershipCard}>
                <div className={styles.leadershipImageWrapper}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={100}
                    height={100}
                    className={styles.leadershipImage}
                  />
                </div>
                <div className={styles.leadershipInfo}>
                  <h4>{member.name}</h4>
                  <span>{member.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}