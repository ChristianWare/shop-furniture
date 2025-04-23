/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import styles from "./Discounts.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import Image from "next/image";
import Img from "../../../../public/images/heroiv.jpg";
import Close from "../../../../public/icons/close.svg";
import ShineBox from "@/components/shared/ShineBox/ShineBox";

const data = [
  {
    id: 1,
    title: "Our gift to you ",
    copy: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, voluptatum.",
    src: Img,
  },
  {
    id: 2,
    title: "Sale pillows & throws upt to 70% off",
    copy: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, voluptatum.",
    src: Img,
  },
  {
    id: 3,
    title: "South seas bar craft now $598",
    copy: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, voluptatum.",
    src: Img,
  },
  {
    id: 4,
    title: "Up to 70% clearance + free shipping",
    copy: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, voluptatum.",
    src: Img,
  },
  {
    id: 5,
    title: "Up to 70% clearance + free shipping",
    copy: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, voluptatum.",
    src: Img,
  },
];

export default function Discounts() {
  // State to track which card is expanded
  const [expandedCard, setExpandedCard] = useState(null);

  // Toggle function to expand/collapse a card
  const toggleCard = (id: any) => {
    if (expandedCard === id) {
      setExpandedCard(null); // Collapse if it's already expanded
    } else {
      setExpandedCard(id); // Expand this card
    }
  };

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.contentTop}>
          <div className={styles.left}>
            <span className={styles.intro}>Discounts</span>
            <div className={styles.shineBox}>
              <ShineBox />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.rightTop}>
              <h2 className={styles.heading}>Discount codes:</h2>
            </div>
            <div className={styles.rightBottom}>
              <div className={styles.mapDataBox}>
                {data.map((x) => (
                  <div
                    key={x.id}
                    className={`${styles.card} ${
                      expandedCard === x.id ? styles.expanded : ""
                    }`}
                    onClick={() => toggleCard(x.id)}
                  >
                    <div className={styles.cardLeft}>
                      <h3 className={styles.subheading}>{x.title}</h3>
                    </div>
                    <div className={styles.cardRight}>
                      <p className={styles.copy}>{x.copy}</p>
                      {expandedCard === x.id && (
                        <div className={styles.imgContainer}>
                          <Image
                            src={Img}
                            alt=''
                            title=''
                            fill
                            className={styles.img}
                          />
                        </div>
                      )}
                    </div>
                    <div
                      className={styles.closeContainer}
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent card click event from firing
                        toggleCard(x.id);
                      }}
                    >
                      <Close
                        className={`${styles.close} ${
                          expandedCard === x.id ? styles.rotated : ""
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
