import Image from "next/image";
import { IoTrophy } from "react-icons/io5";
import MedalImage from "@/public/assets/medal.jpeg";
import ButtonLink from "@/app/component/ButtonLink";
import SectionHeader from "@/app/component/SectionHeader";
import StatList from "@/app/component/StatList";
import VideoCard from "@/app/component/VideoCard";
import { TEAM } from "@/app/lib/site";
import styles from "@/app/styles/champions.module.css";

const stats = [
  { value: "Silver", label: "Provincial medal" },
  { value: "Edmonton", label: "Home city" },
  { value: TEAM.season, label: "Alberta Soccer" },
];

const videos = [
  { src: "/assets/video1.mp4", title: "Celebrating the win", caption: "Sobjar FC at the 2026 Provincials" },
  { src: "/assets/video2.mp4", title: "Medal moment", caption: "Players and families together" },
];

export default function Champions({ showLink = true }) {
  return (
    <section className={styles.section} aria-label="Sobjar FC provincial silver">
      <div className={`container ${styles.wrapper}`}>
        <div className={styles.intro}>
          <div className={styles.copy}>
            <SectionHeader
              light
              align="left"
              tag="Sobjar FC"
              title="Alberta Provincial Silver Medallists"
              description="Our team brought home silver medals from the 2026 Alberta Soccer Provincial Championships. A proud moment for the players, their families and our whole community."
            />
            <StatList light items={stats} />
            {showLink && (
              <ButtonLink href={TEAM.path} variant="gold" arrow>
                Meet the team
              </ButtonLink>
            )}
          </div>
          <div className={styles.medal}>
            <Image src={MedalImage} alt="Alberta Soccer 2026 Provincial Championships medals laid out on the grass" fill sizes="(max-width: 64em) 100vw, 40vw" className={styles.medalImage} />
            <span className={styles.badge}>
              <IoTrophy aria-hidden="true" />
              {TEAM.honour}
            </span>
          </div>
        </div>
        <div className={styles.videos}>
          {videos.map((video) => (
            <VideoCard key={video.src} {...video} />
          ))}
        </div>
      </div>
    </section>
  );
}
