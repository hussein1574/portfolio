"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Monitor,
  Gamepad2,
  Anchor,
  UtensilsCrossed,
} from "lucide-react";
import styles from "./WorkExperience.module.scss";

const workExperience = [
  {
    id: 1,
    title: "Frontend Developer - AI Training Specialist",
    company: "Outlier",
    location: "Remote",
    period: "2025 - Present",
    description:
      "Contributing to AI model training by developing and evaluating frontend code solutions, ensuring high-quality training data for machine learning applications",
    color: "#2D6D9A",
    icon: Monitor,
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "World Of Secrets Game",
    location: "Remote",
    period: "2024 - 2025",
    description:
      "Developed web-based administrative tools and dashboards for game management, enabling efficient content updates and player analytics",
    color: "#f59e0b",
    icon: Gamepad2,
  },
  {
    id: 3,
    title: "Frontend Engineer & Calibration Specialist",
    company: "Egyptian Naval Forces",
    location: "Alexandria, Egypt",
    period: "2024 - 2025",
    description:
      "Designed and implemented frontend interfaces for calibration automation software while maintaining precision measurement equipment, streamlining technical operations",
    color: "#4747ff",
    icon: Anchor,
  },
  {
    id: 4,
    title: "Software Developer & IT Support Engineer",
    company: "Oriental Cookary (Tabali)",
    location: "Cairo, Egypt",
    period: "2023 - 2024",
    description:
      "Built task management software to optimize restaurant operations while providing comprehensive IT support and infrastructure maintenance",
    color: "#6A3E2C",
    icon: UtensilsCrossed,
  },
];

function WorkExperience() {
  return (
    <section className={styles.workExperience}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className={styles.sectionLabel}>Career Path</span>
          <h2>Work Experience</h2>
        </motion.div>

        <div className={styles.timeline}>
          <div className={styles.timelineLine} />
          {workExperience.map((experience, index) => (
            <motion.div
              key={experience.id}
              className={`${styles.timelineItem} ${index % 2 === 1 ? styles.right : ""}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div
                className={styles.timelineDot}
                style={{ background: experience.color }}
              />
              <motion.div
                className={styles.experienceCard}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.2 },
                }}
                style={
                  { "--card-color": experience.color } as React.CSSProperties
                }
              >
                <div className={styles.cardTop}>
                  <div className={styles.icon}>
                    <experience.icon size={20} />
                  </div>
                  <span className={styles.period}>
                    <Calendar size={13} />
                    {experience.period}
                  </span>
                </div>

                <h3>{experience.title}</h3>
                <div className={styles.companyRow}>
                  <span className={styles.company}>{experience.company}</span>
                  <span className={styles.divider}>|</span>
                  <span className={styles.location}>
                    <MapPin size={13} />
                    {experience.location}
                  </span>
                </div>
                <p className={styles.description}>{experience.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;
