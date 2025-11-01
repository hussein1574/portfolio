"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Palette,
  Triangle,
  GitBranch,
  Figma,
  FileCode,
  Server,
  Layers,
} from "lucide-react";
import styles from "./Skills.module.scss";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 95, icon: Code2 },
      { name: "TypeScript", level: 90, icon: FileCode },
      { name: "Next.js", level: 88, icon: Triangle },
      { name: "Angular", level: 69, icon: Code2 },
      { name: "SCSS", level: 92, icon: Palette },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "PHP", level: 50, icon: Server },
      { name: "Laravel", level: 40, icon: Layers },
      { name: "Python", level: 70, icon: Code2 },
      { name: "MySql", level: 60, icon: Database },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", level: 70, icon: GitBranch },
      { name: "Figma", level: 70, icon: Figma },
    ],
  },
];

const teamText =
  "Frontend developer seeking opportunities to create intuitive, accessible interfaces that make a meaningful impact on users' daily lives";

function Skills() {
  return (
    <section className={styles.skills}>
      <div className={styles.container}>
        <motion.div
          className={styles.teamSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className={styles.teamText}>{teamText}</p>

          <div className={styles.techStack}>
            <div className={styles.techRow}>
              {[GitBranch, Code2, FileCode, Triangle, Palette, Server].map(
                (IconComponent, index) => (
                  <motion.div
                    key={index}
                    className={styles.techIcon}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    viewport={{ once: true }}
                  >
                    <IconComponent size={24} />
                  </motion.div>
                )
              )}
            </div>
            <div className={styles.techRow}>
              {[Code2, Database, Layers, Figma].map((IconComponent, index) => (
                <motion.div
                  key={index}
                  className={styles.techIcon}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: (index + 6) * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  viewport={{ once: true }}
                >
                  <IconComponent size={24} />
                </motion.div>
              ))}
            </div>
          </div>
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
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: categoryIndex * 0.2 + skillIndex * 0.15,
                      ease: "easeOut",
                    }}
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.2 },
                    }}
                    viewport={{ once: true, margin: "-20px" }}
                  >
                    <div className={styles.skillHeader}>
                      <span className={styles.skillIcon}>
                        <skill.icon size={16} />
                      </span>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillLevel}>{skill.level}%</span>
                    </div>
                    <div className={styles.skillBar}>
                      <motion.div
                        className={styles.skillProgress}
                        initial={{ width: 0, opacity: 0 }}
                        whileInView={{
                          width: `${skill.level}%`,
                          opacity: 1,
                        }}
                        transition={{
                          width: {
                            duration: 1.5 + (skill.level / 100) * 0.8, // Dynamic duration based on percentage
                            delay: categoryIndex * 0.3 + skillIndex * 0.2 + 0.5,
                            ease: [0.25, 0.46, 0.45, 0.94],
                          },
                          opacity: {
                            duration: 0.5,
                            delay: categoryIndex * 0.3 + skillIndex * 0.2 + 0.3,
                          },
                        }}
                        whileHover={{
                          scale: [1, 1.02, 1],
                          transition: { duration: 0.3 },
                        }}
                        viewport={{ once: true, margin: "-50px" }}
                      />
                    </div>
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
