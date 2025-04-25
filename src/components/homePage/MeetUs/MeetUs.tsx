import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./MeetUs.module.css";
import Button from "@/components/shared/Button/Button";

export default function MeetUs() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <h2 className={styles.heading}>Meet Furnitlure</h2>
            <div className={styles.topContent}>
              <div className={styles.tcLeft}>
                <video
                  preload='auto'
                  autoPlay
                  muted
                  loop
                  className={styles.video}
                >
                  <source src='./videos/video2.mp4' />
                </video>
              </div>
              <div className={styles.tcRight}>
                <p className={styles.copy}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, inventore sunt. Ipsam sint nihil enim delectus natus, sunt explicabo ab vero rem, labore excepturi, commodi architecto autem nostrum odit sequi ad rerum itaque repudiandae blanditiis. Praesentium non impedit numquam dolor inventore minima porro sit, quisquam reiciendis, a eius molestias cum illum nisi delectus rerum nemo expedita consectetur maxime? Mollitia velit doloribus rerum ratione nam facere, possimus minima voluptatibus molestias consequatur, ipsa blanditiis pariatur quisquam quibusdam sequi, corrupti eaque. Consectetur dolores facilis, sit illo accusantium nulla nesciunt neque ullam, laudantium quibusdam dignissimos recusandae eveniet iste quod nostrum cum nisi voluptas magni!
                </p>
                <div className={styles.btnContainer}>
                  <Button btnType='primary' href='/' text='Learn More' />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bottom}></div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
