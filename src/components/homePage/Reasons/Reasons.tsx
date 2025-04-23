import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./Reasons.module.css";
import Gift from "../../../../public/icons/gift.svg";
import ShineBox from "@/components/shared/ShineBox/ShineBox";

const data = [
  {
    id: 1,
    icon: <Gift className={styles.icon} />,
    reason:
      "Exclusive California aesthetic that blends mid-century modern lines with laid-back coastal vibes for a truly unique home look.",
  },
  {
    id: 2,
    icon: <Gift className={styles.icon} />,
    reason:
      "Premium, sustainably sourced materials—think responsibly harvested teak, reclaimed wood,.",
  },
  {
    id: 2.1,
    icon: <ShineBox />,
  },
  {
    id: 3,
    icon: <Gift className={styles.icon} />,
    reason:
      "Customizable finishes and fabrics allow you to tailor each piece to you color palette and lifestyle.",
  },
  {
    id: 4,
    icon: <Gift className={styles.icon} />,
    reason:
      "White-glove delivery and professional in-home assembly ensure your new furniture arrives flawlessly.",
  },
  {
    id: 5.1,
    icon: <ShineBox />,
    reason: "",
  },
  {
    id: 5,
    icon: <Gift className={styles.icon} />,
    reason:
      "Award-winning craftsmanship from vetted artisans guarantees durability and heirloom quality.",
  },
  {
    id: 6,
    icon: <Gift className={styles.icon} />,
    reason:
      "Personal design consultations and virtual room mock-ups give shoppers expert guidance.",
  },
];

export default function Reasons() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <h2 className={styles.heading}>why choose us?</h2>
          </div>
          <div className={styles.bottom}>
            <div className={styles.mapBox}>
              {data.map((x) => (
                <div key={x.id} className={styles.card}>
                  {x.icon}
                  <p className={styles.reason}>{x.reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
