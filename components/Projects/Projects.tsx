"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getFeaturedProjects } from "@/data/projects";
import styles from "./Projects.module.scss";

const projects = getFeaturedProjects();

function Projects() {
  return (
    <section className={styles.projects}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Featured Projects</h2>
          <p>Some things I&apos;ve built</p>
        </motion.div>

        <div className={styles.projectsList}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`${styles.projectCard} ${
                index % 2 === 1 ? styles.reverse : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={styles.projectImage}>
                <motion.div
                  className={styles.imageContainer}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link href={`/projects/${project.id}`}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      className={styles.projectImg}
                      style={{ cursor: "pointer" }}
                      unoptimized
                      priority
                    />
                  </Link>
                  <div className={styles.imageOverlay}>
                    <Link href={`/projects/${project.id}`}>
                      <motion.div
                        className={styles.viewProjectButton}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        title="View Project Details"
                      >
                        <ExternalLink size={20} />
                      </motion.div>
                    </Link>
                  </div>
                </motion.div>
              </div>

              <div className={styles.projectContent}>
                <motion.div
                  className={styles.projectInfo}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                >
                  <p className={styles.subtitle}>{project.subtitle}</p>
                  <h3 className={styles.title}>{project.title}</h3>

                  <div className={styles.description}>
                    <p>{project.description}</p>
                  </div>

                  <div className={styles.tags}>
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tag}
                        className={styles.tag}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.2 + 0.5 + tagIndex * 0.1,
                        }}
                        viewport={{ once: true }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {project.links && (
                    <div className={styles.projectLinks}>
                      {project.links.github && (
                        <motion.a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.projectLink}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github size={20} />
                          <span>Code</span>
                        </motion.a>
                      )}
                      {project.links.live && (
                        <motion.a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.projectLink}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink size={20} />
                          <span>Live Demo</span>
                        </motion.a>
                      )}
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
