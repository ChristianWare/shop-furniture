import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./Hero.module.css";
import Image from "next/image";
import HeroImage from "../../../../public/images/hero.jpg";
import ShineBox from "@/components/shared/ShineBox/ShineBox";
import Button from "@/components/shared/Button/Button";

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
          <div className={styles.bottom}>
            <div className={styles.shineBoxContainer}>
              <ShineBox />
            </div>
            <div className={styles.shineBoxContainerii}>
              <ShineBox />
            </div>
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
          <div className={styles.copy}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            corporis quia omnis officiis, impedit error ipsam quae hic! Quas
            dicta a doloribus explicabo consequatur assumenda fugiat aliquid
            beatae repudiandae soluta?
          </div>
        </div>
        <div className={styles.btnContainer}>
          <Button btnType='primary' href='/' text='Go to Catalog' />
          <Button btnType='secondary' href='/' text='About us' />
        </div>
      </LayoutWrapper>
    </section>
  );
}
