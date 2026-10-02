"use client";

import { useState } from "react";
import Image from "next/image";
import { MdPause, MdPlayArrow } from "react-icons/md";
import ButtonLink from "@/app/component/ButtonLink";
import MedalImage from "@/public/assets/medal.jpeg";
import HomeImage1 from "@/public/assets/home1.jpg";
import HomeImage2 from "@/public/assets/home2.jpg";
import HomeImage3 from "@/public/assets/home3.jpg";
import HomeImage4 from "@/public/assets/home4.jpg";
import HomeImage5 from "@/public/assets/home5.jpg";
import styles from "@/app/styles/homeHero.module.css";

const slides = [
  {
    image: MedalImage,
    accent: "We won",
    title: "Alberta Provincial Silver Medallists",
    description:
      "Sobjar Star FC took silver in Men's Tier 3 at the 2026 Alberta Soccer Provincials. A proud moment for our whole community.",
    cta: { label: "See the win", href: "/sobjar-star" },
  },
  {
    image: HomeImage1,
    accent: "Together we rise",
    title: "Weaving Dreams, Building Futures",
    description:
      "We bring Somali Bantu families together to celebrate their heritage while building pathways to success in Alberta.",
    cta: { label: "Our mission", href: "/mission" },
  },
  {
    image: HomeImage2,
    accent: "Tradition lives",
    title: "Cultural Harmony in Motion",
    description:
      "Through celebrations, music and storytelling, we keep our culture alive and our community bonds strong.",
    cta: { label: "About us", href: "/about" },
  },
  {
    image: HomeImage3,
    accent: "Future leaders",
    title: "Empowering Tomorrow's Leaders",
    description:
      "From mentorship to leadership programs, we nurture the next generation of changemakers.",
    cta: { label: "Our programs", href: "/programs" },
  },
  {
    image: HomeImage4,
    accent: "Breaking barriers",
    title: "Knowledge as Liberation",
    description:
      "We provide advocacy, resources and steady support to help community members thrive in every part of life.",
    cta: { label: "Get involved", href: "/getInvolved" },
  },
  {
    image: HomeImage5,
    accent: "Joyful together",
    title: "Unity Through Celebration",
    description:
      "Football tournaments, festivals and gatherings are the heartbeat of our community.",
    cta: { label: "Support us", href: "/donate" },
  },
];

export default function HomeHero() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const next = () => setIndex((current) => (current + 1) % slides.length);
  const slide = slides[index];

  return (
    <section className={styles.hero} aria-roledescription="carousel" aria-label="Sobjar highlights">
      {slides.map((item, slideIndex) => (
        <Image
          key={item.title}
          src={item.image}
          alt=""
          fill
          sizes="100vw"
          priority={slideIndex === 0}
          className={`${styles.image} ${slideIndex === index ? styles.imageActive : ""}`}
        />
      ))}
      <div className={styles.overlay} />

      <div className={styles.content} aria-live={playing ? "off" : "polite"}>
        <div key={slide.title} className={styles.slide}>
          <span className={styles.accent}>{slide.accent}</span>
          {index === 0 ? <h1>{slide.title}</h1> : <h2>{slide.title}</h2>}
          <p>{slide.description}</p>
          <ButtonLink href={slide.cta.href} variant="light">
            {slide.cta.label}
          </ButtonLink>
        </div>
      </div>

      <div className={styles.controls}>
        <button
          type="button"
          className={styles.toggle}
          onClick={() => setPlaying((value) => !value)}
          aria-label={playing ? "Pause slideshow" : "Play slideshow"}
        >
          {playing ? <MdPause aria-hidden="true" /> : <MdPlayArrow aria-hidden="true" />}
        </button>
        {slides.map((item, slideIndex) => (
          <button
            type="button"
            key={item.title}
            className={styles.indicator}
            onClick={() => setIndex(slideIndex)}
            aria-label={`Show slide ${slideIndex + 1}: ${item.title}`}
            aria-current={slideIndex === index}
          >
            {slideIndex === index && (
              <span
                key={`${index}-${playing}`}
                className={`${styles.progress} ${playing ? "" : styles.paused}`}
                onAnimationEnd={next}
              />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
