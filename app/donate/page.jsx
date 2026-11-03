"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { IoArrowForward, IoCard, IoCheckmarkCircle, IoGlobe, IoHeartOutline, IoPeople, IoShield, IoTime, IoTrophy } from "react-icons/io5";
import AboutImage from "@/public/assets/about.jpg";
import { Eyebrow } from "@/app/component/Motifs";
import PageHero from "@/app/component/PageHero";
import Section from "@/app/component/Section";
import styles from "@/app/styles/donation.module.css";

const presetAmounts = [25, 50, 100, 250, 500, 1000];

const impactAreas = [
  { id: "youth", title: "Youth Development", description: "Educational support, mentorship, and leadership programs", impact: "$50 sponsors a youth for one month", icon: IoPeople },
  { id: "families", title: "Family Support", description: "Settlement services, housing assistance, and family counseling", impact: "$100 supports a family's monthly needs", icon: IoHeartOutline },
  { id: "education", title: "Educational Programs", description: "Language classes, skills training, and academic support", impact: "$25 funds educational materials", icon: IoTrophy },
  { id: "general", title: "General Support", description: "Where needed most - flexible support across all programs", impact: "Every dollar makes a difference", icon: IoGlobe },
];

const donorBenefits = [
  { icon: IoShield, title: "100% Secure", description: "Your donation is protected with bank-level security" },
  { icon: IoCard, title: "Tax Deductible", description: "Receive official tax receipts for all donations" },
  { icon: IoTime, title: "Immediate Impact", description: "Your support goes directly to community programs" },
];

const communityStats = [
  { value: "1,500+", label: "Community members served" },
  { value: "500+", label: "Youth supported" },
  { value: "12", label: "Cities reached" },
  { value: "6+", label: "Years of service" },
];

export default function DonationPage() {
  const [amount, setAmount] = useState(50);
  const [isMonthly, setIsMonthly] = useState(false);
  const [donorEmail, setDonorEmail] = useState("");
  const [donorName, setDonorName] = useState("");
  const [donorMessage, setDonorMessage] = useState("");
  const [selectedCause, setSelectedCause] = useState("general");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!document.getElementById("paystack-script")) {
      const script = document.createElement("script");
      script.id = "paystack-script";
      script.src = "https://js.paystack.co/v1/inline.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const handleDonate = (event) => {
    event.preventDefault();
    if (!donorEmail || !donorName) {
      toast.error("Please enter your name and email.");
      return;
    }

    setIsLoading(true);

    const handler = window.PaystackPop.setup({
      key: process.env.NEXT_PUBLIC_PAYSTACK_KEY,
      email: donorEmail,
      amount: amount * 100,
      currency: "USD",
      label: isMonthly ? "Monthly Donation" : "One-time Donation",
      metadata: {
        custom_fields: [
          { display_name: "Donor Name", variable_name: "donor_name", value: donorName },
          { display_name: "Selected Cause", variable_name: "selected_cause", value: selectedCause },
          { display_name: "Donor Message", variable_name: "donor_message", value: donorMessage },
        ],
      },
      callback: function (response) {
        setIsLoading(false);
        toast.success(`Thank you ${donorName}! Your donation ref is ${response.reference}`);
      },
      onClose: function () {
        setIsLoading(false);
        toast("Donation window closed.");
      },
    });

    handler.openIframe();
  };

  const cause = impactAreas.find((area) => area.id === selectedCause);

  return (
    <>
      <PageHero
        eyebrow="Make a Difference"
        title="Empower our community"
        description="Your generous donation helps us provide vital support to the Somali Bantu community in Alberta. Together, we're building stronger families, empowering youth, and creating lasting change through education, advocacy, and community programs."
        image={AboutImage}
        imageAlt="Young people from the Somali Bantu community in Edmonton"
        stats={communityStats}
      />

      <Section tone="sand">
        <div className={styles.layout}>
          <div className={styles.causes}>
            <div className={styles.causesHead}>
              <Eyebrow>Your impact</Eyebrow>
              <h2>Choose where your donation goes</h2>
              <p>Select the cause closest to your heart, or choose general support for maximum flexibility.</p>
            </div>

            <div className={styles.causeGrid} role="radiogroup" aria-label="Cause">
              {impactAreas.map((area) => (
                <button
                  type="button"
                  key={area.id}
                  role="radio"
                  aria-checked={selectedCause === area.id}
                  className={`${styles.cause} ${selectedCause === area.id ? styles.causeActive : ""}`}
                  onClick={() => setSelectedCause(area.id)}
                >
                  <span className={styles.causeIcon} aria-hidden="true">
                    <area.icon />
                  </span>
                  <strong>{area.title}</strong>
                  <span>{area.description}</span>
                  <em>
                    <IoCheckmarkCircle aria-hidden="true" />
                    {area.impact}
                  </em>
                </button>
              ))}
            </div>

            <ul className={styles.benefits}>
              {donorBenefits.map((benefit) => (
                <li key={benefit.title}>
                  <span aria-hidden="true">
                    <benefit.icon />
                  </span>
                  <div>
                    <strong>{benefit.title}</strong>
                    <p>{benefit.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <form className={styles.form} onSubmit={handleDonate}>
            <div className="stripes" aria-hidden="true" />
            <div className={styles.formBody}>
              <div>
                <h2>Complete your donation</h2>
                <p>Every contribution makes a meaningful difference</p>
              </div>

              <div className={styles.toggle} role="group" aria-label="Donation frequency">
                <button type="button" onClick={() => setIsMonthly(false)} className={!isMonthly ? styles.toggleActive : ""} aria-pressed={!isMonthly}>
                  One-time
                </button>
                <button type="button" onClick={() => setIsMonthly(true)} className={isMonthly ? styles.toggleActive : ""} aria-pressed={isMonthly}>
                  Monthly <span className={styles.badge}>More impact</span>
                </button>
              </div>

              <fieldset className={styles.group}>
                <legend>Select amount (USD)</legend>
                <div className={styles.amounts}>
                  {presetAmounts.map((value) => (
                    <button type="button" key={value} onClick={() => setAmount(value)} className={`${styles.amount} ${amount === value ? styles.amountActive : ""}`} aria-pressed={amount === value}>
                      ${value}
                      {isMonthly && <small>/mo</small>}
                    </button>
                  ))}
                </div>
                <label className={styles.custom}>
                  <span className="visuallyHidden">Custom amount</span>
                  <b aria-hidden="true">$</b>
                  <input type="number" min="1" value={amount} onChange={(event) => setAmount(Number(event.target.value))} placeholder="Enter amount" />
                  {isMonthly && <small>/month</small>}
                </label>
              </fieldset>

              <fieldset className={styles.group}>
                <legend>Your information</legend>
                <div className={styles.fields}>
                  <input type="text" value={donorName} onChange={(event) => setDonorName(event.target.value)} placeholder="Full name" aria-label="Full name" autoComplete="name" required />
                  <input type="email" value={donorEmail} onChange={(event) => setDonorEmail(event.target.value)} placeholder="Email address" aria-label="Email address" autoComplete="email" required />
                </div>
                <textarea value={donorMessage} onChange={(event) => setDonorMessage(event.target.value)} placeholder="Leave a message or dedication (optional)" aria-label="Message or dedication" rows={3} />
              </fieldset>

              <dl className={styles.summary}>
                <div>
                  <dt>Type</dt>
                  <dd>{isMonthly ? "Monthly recurring" : "One-time"}</dd>
                </div>
                <div>
                  <dt>Cause</dt>
                  <dd>{cause?.title}</dd>
                </div>
                <div className={styles.total}>
                  <dt>Total</dt>
                  <dd>
                    ${amount}
                    {isMonthly ? "/month" : ""}
                  </dd>
                </div>
              </dl>

              <button type="submit" className={styles.submit} disabled={isLoading}>
                {isLoading ? (
                  <>
                    <span className={styles.spinner} aria-hidden="true" />
                    Processing...
                  </>
                ) : (
                  <>
                    Donate ${amount} {isMonthly ? "monthly" : "now"}
                    <IoArrowForward aria-hidden="true" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </Section>
    </>
  );
}
