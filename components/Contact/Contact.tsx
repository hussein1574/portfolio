"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, FileText } from "lucide-react";
import styles from "./Contact.module.scss";

function Contact() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/hussein1574/", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/hussein-medhat-99132875/",
      label: "LinkedIn",
    },
    {
      icon: FileText,
      href: "https://drive.google.com/file/d/1WkqxssXMKJzlQKmfh86ztQNE1IjGfdDp/view?usp=sharing",
      label: "CV",
    },
  ];

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
          <h2>Contact</h2>
        </motion.div>

        <motion.div
          className={styles.contactContent}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className={styles.contactText}>
            <h3>Get In Touch</h3>
            <p>
              Frontend developer seeking opportunities to create intuitive,
              accessible interfaces that make a meaningful impact on users&apos;
              daily lives
            </p>

            <motion.a
              href="mailto:hussenmedhatfarouk@gmail.com"
              className={styles.emailButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} />
              <span>hussenmedhatfarouk@gmail.com</span>
            </motion.a>
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
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                viewport={{ once: true }}
              >
                <IconComponent size={24} />
              </motion.a>
            );
          })}
        </motion.div>

        <motion.div
          className={styles.logo}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className={styles.logoContainer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="90"
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
            <div className={styles.logoGlow}></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
