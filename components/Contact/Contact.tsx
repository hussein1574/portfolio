"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  FileText,
  Copy,
  CheckCheck,
} from "lucide-react";
import { useState } from "react";
import styles from "./Contact.module.scss";

function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "hussenmedhatfarouk@gmail.com";

  const socialLinks = [
    { icon: Github, href: "https://github.com/hussein1574/", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/hussein-medhat-99132875/",
      label: "LinkedIn",
    },
    {
      icon: FileText,
      href: "https://drive.google.com/file/d/11i0hKKiUyBIr9elbBP2XRmGq9f6qpLKj/view?usp=sharing",
      label: "Resume",
    },
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className={styles.sectionLabel}>Let&apos;s Connect</span>
          <h2>Get In Touch</h2>
          <p className={styles.headerDescription}>
            I&apos;m currently open to new opportunities. Whether you have a
            question or just want to say hi, my inbox is always open.
          </p>
        </motion.div>

        <motion.div
          className={styles.contactCard}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className={styles.emailRow}>
            <motion.a
              href={`mailto:${email}`}
              className={styles.emailButton}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Mail size={20} />
              <span>{email}</span>
            </motion.a>
            <motion.button
              className={styles.copyButton}
              onClick={handleCopyEmail}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title="Copy email"
            >
              {copied ? <CheckCheck size={18} /> : <Copy size={18} />}
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          className={styles.socialLinks}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.9 }}
                viewport={{ once: true }}
              >
                <IconComponent size={20} />
                <span>{social.label}</span>
              </motion.a>
            );
          })}
        </motion.div>

        <motion.div
          className={styles.footer}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className={styles.logoContainer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="48"
              viewBox="0 0 35 43"
              fill="none"
              className={styles.logoSvg}
            >
              <path d="M0 2H35" stroke="url(#gradient1)" strokeWidth="4" />
              <path
                d="M0 40.5518H35"
                stroke="url(#gradient1)"
                strokeWidth="4"
              />
              <path
                d="M21.4375 2L7 20.8276L21.4375 41"
                stroke="url(#gradient1)"
                strokeWidth="4"
              />
              <defs>
                <linearGradient
                  id="gradient1"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#7127ba" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <p className={styles.copyright}>Designed & Built by Hussein Medhat</p>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
