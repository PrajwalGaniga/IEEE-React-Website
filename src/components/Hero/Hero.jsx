// src/components/Hero/Hero.jsx

import React from 'react';
import styles from './Hero.module.css';
import { motion } from 'framer-motion';
import { HeroAnimation } from './HeroAnimation'; // <-- 1. IMPORT IT

// (Animation variants are the same as before)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export const Hero = () => {
  return (
    <section id="home" className={styles.heroContainer}>
      
      {/* 2. ADD THE 3D ANIMATION CANVAS */}
      <div className={styles.animationContainer}>
        <HeroAnimation />
      </div>

      <motion.div
        className={styles.heroContent}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className={styles.heroTitle} variants={itemVariants}>
          Empowering Innovation at Student Level
        </motion.h1>
        <motion.p className={styles.heroSubtitle} variants={itemVariants}>
          IEEE Student Branch of Srinivas Institute of Technology
        </motion.p>
        <motion.div className={styles.heroButtons} variants={itemVariants}>
          <a href="#about" className={styles.btnPrimary}>
            Know More About IEEE
          </a>
          <a href="#team" className={styles.btnSecondary}>
            Meet Our Team
          </a>
        </motion.div>
      </motion.div>

      {/* We can remove the old grid, or keep it. Let's remove it for now. */}
      {/* <div className={styles.glowingGrid}></div> */}
    </section>
  );
};