import styles from "./ShineBox.module.css";
import ShineSolid from "../../../../public/icons/shineSolid.svg";
import ShineOutline from "../../../../public/icons/shineOutline.svg";

export default function ShineBox() {
  return (
    <div className={styles.container}>
      <ShineOutline className={styles.outline} />
      <ShineSolid className={styles.solid} />
    </div>
  );
}
