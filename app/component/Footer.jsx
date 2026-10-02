import Link from "next/link";
import Image from "next/image";
import { MdEmail as EmailIcon } from "react-icons/md";
import { IoCall as PhoneIcon, IoLocationOutline as LocationIcon } from "react-icons/io5";
import InstagramLogo from "@/public/assets/instagram.png";
import FacebookLogo from "@/public/assets/facebook.png";
import WhatsappLogo from "@/public/assets/whatsapp.png";
import TiktokLogo from "@/public/assets/tiktok.png";
import YoutubeLogo from "@/public/assets/youtube.png";
import { CONTACT, SITE_NAME, SOCIALS } from "@/app/lib/site";
import styles from "@/app/styles/footer.module.css";

const socialLogos = {
  facebook: FacebookLogo,
  instagram: InstagramLogo,
  whatsapp: WhatsappLogo,
  youtube: YoutubeLogo,
  tiktok: TiktokLogo,
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
      <div className={styles.footerContent}>
        <div className={styles.footerGrid}>
          <div className={styles.footerSection}>
            <h4>{SITE_NAME}</h4>
            <p className={styles.organizationDescription}>
              A non-profit community organization supporting Somali Bantu families, youth and
              newcomers in Alberta through education, advocacy and community services.
            </p>
            <address className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <LocationIcon className={styles.contactIcon} aria-hidden="true" />
                <p>{CONTACT.address}</p>
              </div>
              <div className={styles.contactItem}>
                <PhoneIcon className={styles.contactIcon} aria-hidden="true" />
                <a href={`tel:${CONTACT.phoneHref}`}>{CONTACT.phone}</a>
              </div>
              <div className={styles.contactItem}>
                <EmailIcon className={styles.contactIcon} aria-hidden="true" />
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </div>
            </address>
          </div>

          {linkGroups.map((group) => (
            <nav key={group.title} className={styles.footerSection} aria-label={group.title}>
              <h4>{group.title}</h4>
              <div className={styles.footerLinksContainer}>
                {group.links.map((link) => (
                  <Link key={link.href} href={link.href} className={styles.footerLink}>
                    {link.name}
                  </Link>
                ))}
              </div>
            </nav>
          ))}

          <div className={styles.footerSection}>
            <h4>Follow Us</h4>
            <p className={styles.socialDescription}>
              Match updates, community news and ways to get involved.
            </p>
            <div className={styles.socialIcons}>
              {SOCIALS.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  className={styles.socialIcon}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${SITE_NAME} on ${social.label}`}
                >
                  <Image
                    src={socialLogos[social.id]}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.socialImage}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.footerBottomContent}>
          <p>
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
