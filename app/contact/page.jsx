"use client";

import { useState } from "react";
import { toast } from "sonner";
import { FaClock as ClockIcon } from "react-icons/fa";
import { MdEmail as EmailIcon } from "react-icons/md";
import { IoCall as PhoneIcon, IoLocationOutline as LocationIcon, IoLogoFacebook, IoLogoInstagram, IoLogoTiktok, IoLogoWhatsapp, IoLogoYoutube, IoSend } from "react-icons/io5";
import HomeImage2 from "@/public/assets/home2.jpg";
import PageHero from "@/app/component/PageHero";
import Section from "@/app/component/Section";
import { Eyebrow } from "@/app/component/Motifs";
import { CONTACT, SOCIALS, WHATSAPP_URL } from "@/app/lib/site";
import styles from "@/app/styles/contact.module.css";

const EMPTY_FORM = { name: "", email: "", phone: "", subject: "", message: "", inquiryType: "General Inquiry" };

const INQUIRY_TYPES = ["General Inquiry", "Volunteer Opportunities", "Partnership", "Programs & Services", "Donation Information", "Events"];

const socialIcons = {
  facebook: IoLogoFacebook,
  instagram: IoLogoInstagram,
  whatsapp: IoLogoWhatsapp,
  youtube: IoLogoYoutube,
  tiktok: IoLogoTiktok,
};

const contactCards = [
  { icon: LocationIcon, title: "Our Location", value: CONTACT.address, note: "Serving communities across Alberta" },
  { icon: PhoneIcon, title: "Phone Number", value: CONTACT.phone, href: `tel:${CONTACT.phoneHref}`, note: "Available Monday to Friday" },
  { icon: EmailIcon, title: "Email Address", value: CONTACT.email, href: `mailto:${CONTACT.email}`, note: "We respond within 24 hours" },
  { icon: ClockIcon, title: "Office Hours", value: "Mon - Fri: 9:00 AM - 5:00 PM", note: "Mountain Time" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState(EMPTY_FORM);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const body = [`Name: ${formData.name}`, `Email: ${formData.email}`, formData.phone && `Phone: ${formData.phone}`, `Inquiry: ${formData.inquiryType}`, "", formData.message].filter((line) => line !== false && line !== "").join("\n");
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(body)}`;
    toast.success("Your email app is opening with your message ready to send.");
    setFormData(EMPTY_FORM);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        description="We're here to help and answer any questions you might have. Reach out to us and we'll respond as soon as we can."
        image={HomeImage2}
        imageAlt="Families sharing a meal at a Sobjar community gathering"
      />

      <Section>
        <ul className={styles.cards}>
          {contactCards.map((card) => (
            <li key={card.title} className={styles.card}>
              <span className={styles.cardIcon} aria-hidden="true">
                <card.icon />
              </span>
              <h2>{card.title}</h2>
              {card.href ? <a href={card.href}>{card.value}</a> : <p className={styles.cardValue}>{card.value}</p>}
              <small>{card.note}</small>
            </li>
          ))}
        </ul>

        <div className={styles.layout}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formHead}>
              <Eyebrow>Send us a message</Eyebrow>
              <h2>How can we help?</h2>
              <p>Have a question or want to learn more about our programs? Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
            </div>

            <div className={styles.row}>
              <label className={styles.field}>
                <span>Full name *</span>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} required placeholder="Enter your full name" autoComplete="name" />
              </label>
              <label className={styles.field}>
                <span>Email address *</span>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="Enter your email address" autoComplete="email" />
              </label>
            </div>

            <div className={styles.row}>
              <label className={styles.field}>
                <span>Phone number</span>
                <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Enter your phone number" autoComplete="tel" />
              </label>
              <fieldset className={styles.field}>
                <legend>Inquiry type</legend>
                <div className={styles.chips}>
                  {INQUIRY_TYPES.map((type) => (
                    <label key={type} className={`${styles.chip} ${formData.inquiryType === type ? styles.chipActive : ""}`}>
                      <input type="radio" name="inquiryType" value={type} checked={formData.inquiryType === type} onChange={handleInputChange} className="visuallyHidden" />
                      {type}
                    </label>
                  ))}
                </div>
              </fieldset>
            </div>

            <label className={styles.field}>
              <span>Subject *</span>
              <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} required placeholder="Enter the subject of your message" />
            </label>

            <label className={styles.field}>
              <span>Message *</span>
              <textarea name="message" value={formData.message} onChange={handleInputChange} required rows={6} placeholder="Tell us more about your inquiry..." />
            </label>

            <button type="submit" className={styles.submit}>
              Send message
              <IoSend aria-hidden="true" />
            </button>

            <p className={styles.privacy}>We respect your privacy and will never share your information.</p>
          </form>

          <aside className={styles.aside}>
            <div className={styles.visit}>
              <h2>Visit our office</h2>
              <p>We welcome visitors to our office in Alberta. Whether you&apos;re interested in volunteering, learning about our programs, or just want to meet our team, we&apos;d love to see you.</p>
              <address>
                <span>
                  <LocationIcon aria-hidden="true" />
                  {CONTACT.address}
                </span>
                <a href={`tel:${CONTACT.phoneHref}`}>
                  <PhoneIcon aria-hidden="true" />
                  Call {CONTACT.phone}
                </a>
                <a href={`mailto:${CONTACT.email}`}>
                  <EmailIcon aria-hidden="true" />
                  {CONTACT.email}
                </a>
              </address>
            </div>

            <div className={styles.social}>
              <h2>Connect with us</h2>
              <p>Follow us on social media to stay updated on our latest programs, events, and community initiatives.</p>
              <div className={styles.socialLinks}>
                {SOCIALS.map((social) => {
                  const Icon = socialIcons[social.id];
                  return (
                    <a key={social.id} href={social.href} target="_blank" rel="noopener noreferrer">
                      <Icon aria-hidden="true" />
                      {social.label}
                    </a>
                  );
                })}
              </div>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={styles.whatsapp}>
                <IoLogoWhatsapp aria-hidden="true" />
                Join our WhatsApp community
              </a>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
