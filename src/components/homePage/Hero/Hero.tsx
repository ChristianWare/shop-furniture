import styles from "./Hero.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import Image from "next/image";
import HeroImage from "../../../../public/images/hero.jpg";
import Button from "@/components/shared/Button/Button";

export default function Hero() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.bottom}>
            <div className={styles.imgContainer}>
              <div className={styles.overlay} />
              <Image
                src={HeroImage}
                fill
                alt=''
                title=''
                className={styles.img}
              />
            </div>
            <div className={styles.contentChildren}>
              <h1 className={styles.heading}>
                California-style <br />
                Home furniture
              </h1>
              <p className={styles.copy}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci corporis quia omnis officiis, impedit error ipsam.
              </p>
              <div className={styles.btnContainer}>
                <Button btnType='tanOutline' href='/' text='About us' />
              </div>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
