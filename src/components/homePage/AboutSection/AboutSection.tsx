import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./AboutSection.module.css";
import Image from "next/image";
import Img1 from "../../../../public/images/heroiv.jpg";
import Img2 from "../../../../public/images/about.jpg";
import Img3 from "../../../../public/images/hero.jpg";

export default function AboutSection() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.contentTop}>
          <div className={styles.left}>
            <span className={styles.intro}>About Us</span>
          </div>
          <div className={styles.right}>
            <div className={styles.rightTop}>
              <h2 className={styles.heading}>Furnitlure</h2>
            </div>
            <div className={styles.textArea}>
              <p className={styles.textLeft}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
                mollitia laudantium culpa dicta accusantium iure optio ad quasi,
                illum tenetur fuga veniam aliquam ex iste eveniet ducimus odit
                sed!
                <br />
                <br />
                Temporibus? Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Porro mollitia laudantium culpa dicta accusantium iure
                optio ad quasi, illum tenetur fuga veniam aliquam ex iste
                eveniet ducimus odit sed! Temporibus?
              </p>
              <p className={styles.textRight}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
                mollitia laudantium culpa dicta accusantium iure optio ad quasi,
                illum tenetur fuga veniam aliquam ex iste eveniet ducimus odit
                sed! Temporibus?
              </p>
            </div>
          </div>
        </div>
        <div className={styles.contentBottom}>
          <div className={styles.imgContainer1}>
            <Image src={Img1} alt='' title='' fill className={styles.img1} />
          </div>
          <div className={styles.imgContainer2}>
            <Image src={Img2} alt='' title='' fill className={styles.img2} />
          </div>
          <div className={styles.imgContainer3}>
            <Image src={Img3} alt='' title='' fill className={styles.img3} />
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
