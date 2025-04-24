"use client";

import styles from "./Nav.module.css";
import { useState } from "react";
import Link from "next/link";
// import User from "../../../../public/icons/user.svg";

const navItems = [
  { text: "Shop", href: "/shop" },
  { text: "About", href: "/about" },
  { text: "Cart", href: "/cart" },
  { text: "Contact", href: "/contact" },
  { text: "Account", href: "/account" },
];

export default function Nav() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleHamburger = () => setIsOpen((v) => !v);
  const closeHamburger = () => setIsOpen(false);

  return (
    <header className={styles.header}>
      {/* mobile logo */}
      <div className={styles.logoContainerMobile}>
        {/* <Logo /> */}
        Furnitlure
      </div>

      <nav className={styles.navbar}>
        {/* ------------- mobile / desktop nav links ------------- */}
        <div
          className={
            !isOpen ? styles.navMenu : `${styles.navMenu} ${styles.active}`
          }
        >
          <div className={styles.logoContainer}>
            {/* <Logo /> */}
            Furnitlure
          </div>

          <ul
            className={styles.navItems}
            onClick={(e) => e.stopPropagation()} /* keep hamburger stable */
          >
            {navItems.map((item) => (
              <li
                key={item.href}
                className={styles.navItem}
                onClick={closeHamburger}
              >
                <Link href={item.href}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ------------- avatar / auth dropdown ------------- */}
        

        {/* ------------- hamburger button ------------- */}
        <div
          className={
            !isOpen ? styles.hamburger : `${styles.hamburger} ${styles.active}`
          }
          onClick={toggleHamburger}
        >
          <span className={styles.whiteBar}></span>
          <span className={styles.whiteBar}></span>
          <span className={styles.whiteBar}></span>
        </div>
      </nav>
    </header>
  );
}
