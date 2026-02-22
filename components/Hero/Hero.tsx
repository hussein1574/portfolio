"use client";

import { motion } from "framer-motion";
import {
  Download,
  Mail,
  ArrowDown,
  Briefcase,
  FolderGit2,
  Award,
} from "lucide-react";
import Image from "next/image";
import styles from "./Hero.module.scss";

const stats = [
  { icon: Briefcase, value: "2+", label: "Years Experience" },
  { icon: FolderGit2, value: "5+", label: "Projects Delivered" },
  { icon: Award, value: "4", label: "Companies Worked" },
];

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroGrid}>
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className={styles.statusBadge}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className={styles.statusDot} />
              Open to Opportunities
            </motion.div>

            <motion.h1
              className={styles.headline}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Hi, I&apos;m <span className={styles.name}>Hussein Medhat</span>
            </motion.h1>

            <motion.h2
              className={styles.role}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Full Stack Developer
            </motion.h2>

            <motion.p
              className={styles.description}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              I build meaningful, delightful digital products that create an
              equilibrium between user needs and business goals. Specializing in{" "}
              <strong>React</strong>, <strong>Next.js</strong>, and{" "}
              <strong>TypeScript</strong> on the frontend, with{" "}
              <strong>FastAPI</strong> powering the backend.
            </motion.p>

            <motion.div
              className={styles.ctaButtons}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.a
                href="https://drive.google.com/file/d/11i0hKKiUyBIr9elbBP2XRmGq9f6qpLKj/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryCta}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={18} />
                Download CV
              </motion.a>
              <motion.a
                href="mailto:hussenmedhatfarouk@gmail.com"
                className={styles.secondaryCta}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={18} />
                Hire Me
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.heroVisual}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className={styles.avatarWrapper}>
              <Image
                src="/imgs/Avatar.PNG"
                alt="Hussein Medhat"
                width={320}
                height={320}
                priority
              />
              <div className={styles.avatarRing} />
              <div className={styles.avatarGlow} />
            </div>

            <motion.div
              className={styles.taglineCard}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <p>
                &ldquo;Judges a book by its{" "}
                <span className={styles.highlight}>Cover</span>&rdquo;
              </p>
              <span className={styles.taglineSub}>
                Because if the cover doesn&apos;t impress you, what else can?
              </span>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className={styles.statsRow}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className={styles.statItem}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 + index * 0.15 }}
            >
              <div className={styles.statIcon}>
                <stat.icon size={20} />
              </div>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.a
          href="#about"
          className={styles.scrollIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <span>Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={18} />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}

export default Hero;
