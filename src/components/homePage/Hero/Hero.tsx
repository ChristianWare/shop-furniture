import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./Hero.module.css";
import Image from "next/image";
import HeroImage from "../../../../public/images/hero.jpg";
import Shine from '../../../../public/icons/shineSolid.svg'

export default function Hero() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <h1 className={styles.heading}>
              California-style <br />
              Home furniture
            </h1>
          </div>
          <Shine width={50} height={50} className={styles.icon} />
          <div className={styles.bottom}>
            <div className={styles.imgContainer}>
              <Image
                src={HeroImage}
                fill
                alt=''
                title=''
                className={styles.img}
              />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
