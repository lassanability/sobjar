import Image from "next/image";
import { GiMapleLeaf, GiPalmTree, GiWheat } from "react-icons/gi";
import { IoPeople } from "react-icons/io5";
import LogoImg from "@/public/assets/logo.png";
import SectionHeader from "@/app/component/SectionHeader";
import { Rivers } from "@/app/component/Motifs";
import styles from "@/app/styles/heritage.module.css";

const journey = [
  {
    icon: GiWheat,
    place: "Jubba and Shabelle valleys",
    title: "Farmers of the river valleys",
    text: "For generations our families farmed the fertile Jubba and Shabelle river valleys of southern Somalia, keeping their own languages, music and traditions.",
  },
  {
    icon: GiPalmTree,
    place: "Kenya",
    title: "Displacement and survival",
    text: "The civil war of the early 1990s forced many Somali Bantu families into refugee camps in Kenya, where they waited years for a safe place to call home.",
  },
  {
    icon: GiMapleLeaf,
    place: "Canada",
    title: "A new home in Alberta",
    text: "Families resettled across Canada and built new lives in Edmonton and across Alberta, carrying their culture with them.",
  },
  {
    icon: IoPeople,
    place: "Edmonton",
    title: "Sobjar, rooted together",
    text: "The Jareer Weyne Society of Alberta brings us together so our youth grow up proud of where they come from and confident in where they are going.",
  },
];

const culture = ["Maay Maay and Kizigua heritage", "Woven mats and baskets", "Colourful garbasaar and dirac", "Drums, song and dance", "Shared meals and celebrations", "Football on summer evenings"];

export default function Heritage() {
  return (
    <section className={styles.section} aria-label="Our heritage">
      <div className={`container ${styles.inner}`}>
        <div className={styles.head}>
          <SectionHeader
            align="left"
            tag="Our roots"
            title="From the Jubba valley to Alberta"
            description="The tree on our emblem stands for deep roots and a shared future. This is the journey our families carried with them."
          />
          <div className={styles.emblem}>
            <Image src={LogoImg} alt="Sobjar emblem with the Canadian and Somali flags and a tree" width={160} height={150} />
          </div>
        </div>

        <div className={styles.timeline}>
          <div className={styles.river}>
            <Rivers />
          </div>
          <ol className={styles.steps}>
            {journey.map((step, index) => (
              <li key={step.title} className={styles.step}>
                <span className={styles.marker} aria-hidden="true">
                  <step.icon />
                </span>
                <span className={styles.place}>
                  {String(index + 1).padStart(2, "0")} · {step.place}
                </span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className={styles.culture}>
          <h3>Culture we keep alive</h3>
          <ul>
            {culture.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
