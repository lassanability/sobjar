import Link from "next/link";
import Image from "next/image";
import { IoCall, IoLocationOutline, IoLogoFacebook, IoLogoInstagram, IoLogoTiktok, IoLogoWhatsapp, IoLogoYoutube, IoMail } from "react-icons/io5";
import LogoImg from "@/public/assets/logo.png";
import ButtonLink from "@/app/component/ButtonLink";
import { Rivers } from "@/app/component/Motifs";
import { CONTACT, SITE_NAME, SOCIALS } from "@/app/lib/site";
import styles from "@/app/styles/footer.module.css";

const socialIcons = {
  facebook: IoLogoFacebook,
  instagram: IoLogoInstagram,
  whatsapp: IoLogoWhatsapp,
  youtube: IoLogoYoutube,
  tiktok: IoLogoTiktok,
};

const linkGroups = [
  {
    title: "Explore",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Mission", href: "/mission" },
      { name: "Programs", href: "/programs" },
      { name: "Sobjar Star FC", href: "/sobjar-star" },
      { name: "News", href: "/blog" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { name: "Volunteer", href: "/getInvolved#volunteer" },
      { name: "Partnerships", href: "/getInvolved#partnerships" },
      { name: "Events", href: "/getInvolved#events" },
      { name: "Donate", href: "/donate" },
      { name: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="stripes" aria-hidden="true" />
      <div className={styles.body}>
        <div className={`container ${styles.callout}`}>
          <div>
            <h2>From the Jubba valley to Alberta, we rise together.</h2>
            <p>Stand with Somali Bantu youth and families building their future in Canada.</p>
          </div>
          <div className={styles.calloutActions}>
            <ButtonLink href="/donate" variant="gold">Donate</ButtonLink>
            <ButtonLink href="/getInvolved#volunteer" variant="outline">Volunteer</ButtonLink>
          </div>
        </div>

        <Rivers light />

        <div className={`container ${styles.grid}`}>
          <div className={styles.about}>
            <Link href="/" className={styles.brand}>
              <Image src={LogoImg} alt="" width={56} height={53} className={styles.logo} />
              <span>
                <strong>{SITE_NAME}</strong>
                <small>Somali Bantu Jareer Weyne Society of Alberta</small>
              </span>
            </Link>
            <p>
              A non-profit community organization supporting Somali Bantu families, youth and newcomers in Alberta through education, advocacy and community services.
            </p>
            <address className={styles.contact}>
              <span>
                <IoLocationOutline aria-hidden="true" />
                {CONTACT.address}
              </span>
              <a href={`tel:${CONTACT.phoneHref}`}>
                <IoCall aria-hidden="true" />
                {CONTACT.phone}
              </a>
              <a href={`mailto:${CONTACT.email}`}>
                <IoMail aria-hidden="true" />
                {CONTACT.email}
              </a>
            </address>
          </div>

          {linkGroups.map((group) => (
            <nav key={group.title} className={styles.links} aria-label={group.title}>
              <h3>{group.title}</h3>
              {group.links.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.name}
                </Link>
              ))}
            </nav>
          ))}

          <div className={styles.links}>
            <h3>Follow Us</h3>
            <p>Match updates, community news and ways to get involved.</p>
            <div className={styles.socials}>
              {SOCIALS.map((social) => {
                const Icon = socialIcons[social.id];
                return (
                  <a key={social.id} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={`${SITE_NAME} on ${social.label}`}>
                    <Icon aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className={`container ${styles.bottom}`}>
          <p>
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <p>Proudly serving the Somali Bantu community in Edmonton, on Treaty 6 territory.</p>
        </div>
      </div>
    </footer>
  );
}
