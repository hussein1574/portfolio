"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiAngular,
  SiSass,
  SiPython,
  SiFastapi,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiGit,
  SiFigma,
} from "react-icons/si";
import styles from "./Skills.module.scss";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Angular", icon: SiAngular },
      { name: "SCSS", icon: SiSass },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "FastAPI", icon: SiFastapi },
      { name: "PHP", icon: SiPhp },
      { name: "Laravel", icon: SiLaravel },
      { name: "MySQL", icon: SiMysql },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "Figma", icon: SiFigma },
    ],
  },
];

const teamText =
  "Full stack developer seeking opportunities to build end-to-end solutions with intuitive interfaces and robust backends that make a meaningful impact on users' daily lives";

function Skills() {
  return (
    <section className={styles.skills}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className={styles.sectionLabel}>What I Bring</span>
          <h2>Skills &amp; Expertise</h2>
          <p className={styles.teamText}>{teamText}</p>
        </motion.div>

        <motion.div
          className={styles.skillsGrid}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className={styles.skillCategory}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <h3>{category.title}</h3>
              <div className={styles.skillsList}>
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className={styles.skillItem}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.15 + skillIndex * 0.1,
                      ease: "easeOut",
                    }}
                    whileHover={{
                      scale: 1.08,
                      transition: { duration: 0.2 },
                    }}
                    viewport={{ once: true, margin: "-20px" }}
                  >
                    <span className={styles.skillIcon}>
                      <skill.icon size={20} />
                    </span>
                    <span className={styles.skillName}>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
