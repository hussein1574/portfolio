"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Menu, X } from "lucide-react";
import Link from "next/link";
import styles from "./Header.module.scss";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <motion.header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Link href="/">
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
      </Link>

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
            <Link href="/projects">Projects</Link>
          </motion.li>
          <motion.li
            className={styles.navItem}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/#contact">Contact</Link>
          </motion.li>
        </motion.ul>
      </nav>

      <div className={styles.headerActions}>
        <motion.a
          href="https://drive.google.com/file/d/1WkqxssXMKJzlQKmfh86ztQNE1IjGfdDp/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.resumeButton}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FileText size={16} />
          <span>Resume</span>
        </motion.a>

        <button
          className={styles.mobileMenuToggle}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <nav className={styles.mobileNav}>
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
              <Link href="/#about" onClick={() => setIsMobileMenuOpen(false)}>
                About
              </Link>
              <Link href="/projects" onClick={() => setIsMobileMenuOpen(false)}>
                Projects
              </Link>
              <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </Link>
              <a
                href="https://drive.google.com/file/d/1WkqxssXMKJzlQKmfh86ztQNE1IjGfdDp/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mobileResumeLink}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FileText size={18} />
                Download Resume
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;
