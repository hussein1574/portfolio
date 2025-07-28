"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./Header.module.scss";

function Header() {
  return (
    <motion.div
      className={styles.header}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className={styles.logo}
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="43"
          viewBox="0 0 35 43"
          fill="none"
        >
          <path d="M0 2H35" stroke="white" strokeWidth="4" />
          <path d="M0 40.5518H35" stroke="white" strokeWidth="4" />
          <path
            d="M21.4375 2L7 20.8276L21.4375 41"
            stroke="white"
            strokeWidth="4"
          />
        </svg>
      </motion.div>

      <nav className={styles.navBar}>
        <motion.ul className={styles.navList}>
          <motion.li
            className={styles.navItem}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/">Home</Link>
          </motion.li>
          <motion.li
            className={styles.navItem}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/#about">About</Link>
          </motion.li>
          <motion.li
            className={styles.navItem}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/projects">Lab</Link>
          </motion.li>
        </motion.ul>
      </nav>
    </motion.div>
  );
}

export default Header;
