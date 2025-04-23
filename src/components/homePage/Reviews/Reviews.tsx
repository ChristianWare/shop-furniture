'use client'

import { useState } from "react";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./Reviews.module.css";
import Image from "next/image";
import Img from "../../../../public/images/hero.jpg";
import Img2 from "../../../../public/images/heroii.jpg";
import Img3 from "../../../../public/images/heroiii.jpg";
import Img4 from "../../../../public/images/heroiv.jpg";

const data = [
  {
    id: 1,
    title: "Our gift to you",
    name: "Chris N.",
    copy: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, voluptatum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, voluptatum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, voluptatum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, voluptatum.",
    src: Img,
  },
  {
    id: 2,
    title: "Our gift to you",
    name: "Chris N.",
    copy: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, voluptatum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, voluptatum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, voluptatum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, voluptatum.",
    src: Img2,
  },
  {
    id: 3,
    title: "Our gift to you",
    name: "Chris N.",
    copy: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, voluptatum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, voluptatum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, voluptatum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, voluptatum.",
    src: Img3,
  },
  {
    id: 4,
    title: "Our gift to you",
    name: "Chris N.",
    copy: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, voluptatum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, voluptatum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, voluptatum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, voluptatum.",
    src: Img4,
  },
];

export default function Reviews() {
  // State to track the current review index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigation functions
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Get the current review
  const currentReview = data[currentIndex];

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.contentTop}>
          <div className={styles.left}>
            <span className={styles.intro}>Reviews</span>
          </div>
          <div className={styles.right}>
            <div className={styles.rightTop}>
              <h2 className={styles.heading}>What people say:</h2>
            </div>
            <div className={styles.rightBottom}>
              <div className={styles.carouselContainer}>
                {/* Current review */}
                <div className={styles.card}>
                  <div className={styles.cardLeft}>
                    <span className={styles.name}>{currentReview.name}</span>
                    <p className={styles.copy}>{currentReview.copy}</p>
                  </div>
                  <div className={styles.cardRight}>
                    <div className={styles.imgContainer}>
                      <Image
                        src={currentReview.src}
                        alt=''
                        title=''
                        fill
                        className={styles.img}
                      />
                    </div>
                  </div>
                </div>

                {/* Navigation buttons */}
                <div className={styles.navigation}>
                  <button
                    className={styles.navButton}
                    onClick={goToPrevious}
                    aria-label='Previous review'
                  >
                    ⬅️
                  </button>
                  <div className={styles.indicators}>
                    {data.map((_, index) => (
                      <span
                        key={index}
                        className={`${styles.indicator} ${
                          index === currentIndex ? styles.activeIndicator : ""
                        }`}
                        aria-label={
                          index === currentIndex
                            ? "Current review"
                            : `Go to review ${index + 1}`
                        }
                        onClick={() => setCurrentIndex(index)}
                      />
                    ))}
                  </div>
                  <button
                    className={styles.navButton}
                    onClick={goToNext}
                    aria-label='Next review'
                  >
                    ➡️
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}