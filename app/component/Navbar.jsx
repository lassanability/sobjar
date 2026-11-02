"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FiMenu as MenuIcon } from "react-icons/fi";
import { MdOutlineClose as CloseIcon } from "react-icons/md";
import { IoArrowForward, IoCall, IoChevronDown, IoMail } from "react-icons/io5";
import LogoImg from "@/public/assets/logo.png";
import NavSportImage from "@/public/assets/navsport.jpg";
import NavEventImage from "@/public/assets/navevent.jpg";
import NavAboutImage from "@/public/assets/navabout.jpg";
import { Maple } from "@/app/component/Motifs";
import { CONTACT } from "@/app/lib/site";
import { useDrawerStore } from "@/app/store/Drawer";
import styles from "@/app/styles/navbar.module.css";

const navItems = [
  {
    name: "About",
    href: "/about",
    dropdown: [
      { name: "Our Story", href: "/about#story" },
      { name: "Leadership", href: "/about#leadership" },
      { name: "Our Team", href: "/about#team" },
    ],
    title: "About Sobjar Canada",
    description:
      "We are a non-profit community organization supporting Somali Bantu families, youth, and newcomers in Alberta. Through education, advocacy, and community services, we help foster integration, empowerment, and social well-being for all.",
    image: NavAboutImage,
    imageTitle: "Empowering the Future of Somali Youth",
    imageDescription:
      "Discover the transformative journey of Somali youth through our mission to empower them for a brighter tomorrow.",
  },
  { name: "Mission", href: "/mission" },
  { name: "Sobjar Star", href: "/sobjar-star" },
  {
    name: "Programs",
    href: "/programs",
    dropdown: [
      { name: "Youth Programs", href: "/programs#youth" },
      { name: "Community Outreach", href: "/programs#community" },
      { name: "Educational Initiatives", href: "/programs#education" },
    ],
    title: "Programs",
    description:
      "Discover our diverse range of programs that empower Somali youth, foster community engagement, and contribute to a brighter future for all.",
    image: NavEventImage,
    imageTitle: "Community Engagement and Empowerment",
    imageDescription:
      "We believe in fostering strong community bonds through youth initiatives, outreach programs, and educational support.",
  },
  { name: "News", href: "/blog" },
  {
    name: "Get Involved",
    href: "/getInvolved",
    dropdown: [
      { name: "Volunteer", href: "/getInvolved#volunteer" },
      { name: "Partnerships", href: "/getInvolved#partnerships" },
      { name: "Events", href: "/getInvolved#events" },
    ],
    title: "Get Involved",
    description:
      "Join our extracurricular activities that help youth build leadership, teamwork, and community engagement skills.",
    image: NavSportImage,
    imageTitle: "Sobjar Sport Team",
    imageDescription:
      "Our sport teams empower youth through healthy competition, teamwork, and community pride.",
  },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const { isOpen, toggleOpen, setClose } = useDrawerStore();
  const [expanded, setExpanded] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    setClose();
    setExpanded(null);
  }, [pathname, setClose]);

  useEffect(() => {
    document.body.classList.toggle(styles.locked, isOpen);
  }, [isOpen]);

  const isCurrent = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className={styles.header}>
      <div className={styles.utility}>
        <div className={`container ${styles.utilityInner}`}>
          <span className={styles.utilityTag}>
            <Maple />
            Somali Bantu Jareer Weyne Society of Alberta
          </span>
          <div className={styles.utilityLinks}>
            <a href={`tel:${CONTACT.phoneHref}`}>
              <IoCall aria-hidden="true" /> {CONTACT.phone}
            </a>
            <a href={`mailto:${CONTACT.email}`}>
              <IoMail aria-hidden="true" /> {CONTACT.email}
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bar}>
        <div className={`container ${styles.barInner}`}>
          <Link href="/" className={styles.brand} aria-label="Sobjar Canada home">
            <Image src={LogoImg} alt="" width={52} height={49} priority className={styles.logo} />
            <span className={styles.brandText}>
              <strong>Sobjar Canada</strong>
              <small>Somali Bantu · Edmonton</small>
            </span>
          </Link>

          <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ""}`} aria-label="Main">
            <ul className={styles.list}>
              {navItems.map((item) => (
                <li key={item.href} className={`${styles.item} ${item.dropdown ? styles.hasPanel : ""}`}>
                  <div className={styles.row}>
                    <Link href={item.href} className={`${styles.link} ${isCurrent(item.href) ? styles.current : ""}`} aria-current={isCurrent(item.href) ? "page" : undefined}>
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <button
                        type="button"
                        className={`${styles.expand} ${expanded === item.name ? styles.expandOpen : ""}`}
                        aria-expanded={expanded === item.name}
                        aria-label={`${item.name} menu`}
                        onClick={() => setExpanded(expanded === item.name ? null : item.name)}
                      >
                        <IoChevronDown aria-hidden="true" />
                      </button>
                    )}
                  </div>

                  {item.dropdown && (
                    <div className={`${styles.panel} ${expanded === item.name ? styles.panelOpen : ""}`}>
                      <div className={`container ${styles.panelInner}`}>
                        <div className={styles.panelInfo}>
                          <h2>{item.title}</h2>
                          <p>{item.description}</p>
                          <Link href={item.href} className={styles.panelMore}>
                            Explore {item.name.toLowerCase()} <IoArrowForward aria-hidden="true" />
                          </Link>
                        </div>
                        <ul className={styles.panelLinks}>
                          {item.dropdown.map((link) => (
                            <li key={link.href}>
                              <Link href={link.href}>
                                {link.name}
                                <IoArrowForward aria-hidden="true" />
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <figure className={styles.panelFeature}>
                          <div className={styles.panelImage}>
                            <Image src={item.image} alt="" fill sizes="280px" />
                          </div>
                          <figcaption>
                            <strong>{item.imageTitle}</strong>
                            <span>{item.imageDescription}</span>
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <div className={styles.drawerFoot}>
              <Link href="/donate" className={styles.donate}>
                Donate
              </Link>
              <a href={`tel:${CONTACT.phoneHref}`} className={styles.drawerContact}>
                <IoCall aria-hidden="true" /> {CONTACT.phone}
              </a>
            </div>
          </nav>

          <div className={styles.actions}>
            <Link href="/donate" className={`${styles.donate} ${styles.donateBar}`}>
              Donate
            </Link>
            <button type="button" className={styles.menu} onClick={toggleOpen} aria-expanded={isOpen} aria-label={isOpen ? "Close menu" : "Open menu"}>
              {isOpen ? <CloseIcon aria-hidden="true" /> : <MenuIcon aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>
      <div className="stripes" aria-hidden="true" />
    </header>
  );
}
