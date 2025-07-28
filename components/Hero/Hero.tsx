"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Hero.module.scss";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <motion.div
          className={styles.greeting}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.hello}>Hello! I Am </span>
          <span className={styles.name}>Hussein Medhat</span>
        </motion.div>

        <motion.div
          className={styles.mainContent}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.avatar}>
            <Image
              src="/imgs/Avatar.PNG"
              alt="Hussein Medhat"
              width={200}
              height={200}
            />
            <div className={styles.avatarGlow}></div>
          </div>

          <div className={styles.description}>
            <motion.div
              className={styles.tagline}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span>A developer who</span>
              <h1>
                Judges a book
                <br />
                by its <span className={styles.highlight}>Cover</span>...
              </h1>
              <p>Because if the cover does not impress you what else can.</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className={styles.intro}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2>I&apos;m a FrontEnd Engineer!</h2>
          <p className={styles.subtitle}>Currently I&apos;m a Freelancer</p>

          <div className={styles.description}>
            <p>
              A self-taught FrontEnd Engineer, functioning in the industry for
              2+ years now. I make meaningful and delightful digital products
              that create an equilibrium between user needs and business goals.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
