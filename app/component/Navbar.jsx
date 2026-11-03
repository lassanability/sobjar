"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { IoArrowForward, IoCall, IoChevronDown, IoClose, IoMail, IoMenu } from "react-icons/io5";
import LogoImg from "@/public/assets/logo.png";
import NavSportImage from "@/public/assets/navsport.jpg";
import NavEventImage from "@/public/assets/navevent.jpg";
import NavAboutImage from "@/public/assets/navabout.jpg";
import { CONTACT, TEAM } from "@/app/lib/site";
import { useDrawerStore } from "@/app/store/Drawer";
import styles from "@/app/styles/navbar.module.css";

const navItems = [
  {
    name: "About",
    href: "/about",
    dropdown: [
      { name: "Our story", href: "/about#story" },
      { name: "Leadership", href: "/about#leadership" },
      { name: "Our team", href: "/about#team" },
    ],
    description: "A non-profit supporting Somali Bantu families, youth and newcomers in Alberta.",
    image: NavAboutImage,
  },
  { name: "Mission", href: "/mission" },
  {
    name: "Programs",
    href: "/programs",
    dropdown: [
      { name: "Youth programs", href: "/programs#youth" },
      { name: "Community outreach", href: "/programs#community" },
      { name: "Educational initiatives", href: "/programs#education" },
    ],
    description: "Youth initiatives, outreach and education that help families thrive.",
    image: NavEventImage,
  },
  { name: TEAM.name, href: TEAM.path },
  { name: "News", href: "/blog" },
  {
    name: "Get involved",
    href: "/getInvolved",
    dropdown: [
      { name: "Volunteer", href: "/getInvolved#volunteer" },
      { name: "Partnerships", href: "/getInvolved#partnerships" },
      { name: "Events", href: "/getInvolved#events" },
    ],
    description: "Give your time, partner with us or join an upcoming community event.",
    image: NavSportImage,
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
      <div className={`container ${styles.bar}`}>
        <Link href="/" className={styles.brand} aria-label="Sobjar Canada home">
          <Image src={LogoImg} alt="" width={46} height={43} priority className={styles.logo} />
          <span className={styles.brandText}>
            <strong>Sobjar Canada</strong>
            <small>Jareer Weyne Society of Alberta</small>
          </span>
        </Link>

        <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ""}`} aria-label="Main">
          <ul className={styles.list}>
            {navItems.map((item) => (
              <li key={item.href} className={`${styles.item} ${expanded === item.name ? styles.itemOpen : ""}`}>
                <div className={styles.row}>
                  <Link href={item.href} className={`${styles.link} ${isCurrent(item.href) ? styles.current : ""}`} aria-current={isCurrent(item.href) ? "page" : undefined}>
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <button
                      type="button"
                      className={styles.expand}
                      aria-expanded={expanded === item.name}
                      aria-label={`${item.name} menu`}
                      onClick={() => setExpanded(expanded === item.name ? null : item.name)}
                    >
                      <IoChevronDown aria-hidden="true" />
                    </button>
                  )}
                </div>

                {item.dropdown && (
                  <div className={styles.panel}>
                    <div className={styles.panelImage}>
                      <Image src={item.image} alt="" fill sizes="200px" />
                    </div>
                    <div className={styles.panelBody}>
                      <p>{item.description}</p>
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
            <a href={`tel:${CONTACT.phoneHref}`}>
              <IoCall aria-hidden="true" /> {CONTACT.phone}
            </a>
            <a href={`mailto:${CONTACT.email}`}>
              <IoMail aria-hidden="true" /> {CONTACT.email}
            </a>
          </div>
        </nav>

        <div className={styles.actions}>
          <Link href="/donate" className={`${styles.donate} ${styles.donateBar}`}>
            Donate
          </Link>
          <button type="button" className={styles.menu} onClick={toggleOpen} aria-expanded={isOpen} aria-label={isOpen ? "Close menu" : "Open menu"}>
            {isOpen ? <IoClose aria-hidden="true" /> : <IoMenu aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  );
}
