import LayoutWrapper from "../LayoutWrapper";
import styles from "./Shipping.module.css";
import Gift from "../../../../public/icons/gift.svg";

const data = [
  {
    id: 1,
    icon: <Gift className={styles.icon} />,
    title: "Selection and Ordering",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, voluptatum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, voluptatum. ",
  },
  {
    id: 2,
    icon: <Gift className={styles.icon} />,
    title: "Confirmation and Preperation",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, voluptatum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, voluptatum. ",
  },
  {
    id: 3,
    icon: <Gift className={styles.icon} />,
    title: "Delivery",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, voluptatum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, voluptatum. ",
  },
  {
    id: 4,
    icon: <Gift className={styles.icon} />,
    title: "Receipt and Inspection",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, voluptatum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, voluptatum. ",
  },
];

export default function Shipping() {
  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <div className={styles.contentTop}>
          <div className={styles.left}>
            <span className={styles.intro}>Shipping</span>
          </div>
          <div className={styles.right}>
            <h2 className={styles.heading}>Order and delivery</h2>
          </div>
        </div>
        <div className={styles.bottom}>
          {data.map((x) => (
            <div key={x.id} className={styles.card}>
              {x.icon}
              <h3 className={styles.title}>{x.title}</h3>
              <p className={styles.desc}>{x.desc}</p>
            </div>
          ))}
        </div>
      </LayoutWrapper>
    </div>
  );
}
