import Image from "next/image";
import MedalImage from "@/public/assets/medal.jpeg";
import ButtonLink from "@/app/component/ButtonLink";
import SectionHeader from "@/app/component/SectionHeader";
import StatList from "@/app/component/StatList";
import VideoCard from "@/app/component/VideoCard";
import { TEAM } from "@/app/lib/site";
import styles from "@/app/styles/champions.module.css";

const stats = [
  { value: "Silver", label: "Provincial medal" },
  { value: "Tier 3", label: "Men's division" },
  { value: TEAM.season, label: "Alberta Soccer" },
];

const videos = [
  { src: "/assets/video1.mp4", title: "Celebrating the win", caption: "Sobjar Star at the 2026 Provincials" },
  { src: "/assets/video2.mp4", title: "Medal moment", caption: "Players and families together" },
];

export default function Champions({ showLink = true }) {
  return (
    <section className={styles.section} aria-labelledby="champions-title">
      <div className={styles.wrapper}>
        <div className={styles.intro}>
          <div className={styles.copy}>
            <SectionHeader
              light
              align="left"
              tag="We won"
              title="Alberta Provincial Silver Medallists"
              description="Sobjar Star FC took silver in Men's Tier 3 at the 2026 Alberta Soccer Outdoor Provincial Championships, with group stage wins over YBG Dons, Bonnyville U23 and Croatia Torcida."
            />
            <StatList light items={stats} />
            {showLink && (
              <ButtonLink href={TEAM.path} variant="light">
                Meet the team
              </ButtonLink>
            )}
          </div>
          <div className={styles.medal}>
            <Image
              src={MedalImage}
              alt="Alberta Soccer 2026 Provincial Championships medals laid out on the grass"
              fill
              sizes="(max-width: 48em) 100vw, 40vw"
              className={styles.medalImage}
            />
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
