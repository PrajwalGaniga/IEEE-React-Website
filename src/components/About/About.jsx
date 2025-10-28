// src/components/About/About.jsx
import React from 'react';
import styles from './About.module.css';
import { Globe, Users, Cpu, Award } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className={styles.aboutContainer}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>About IEEE</h2>
          <p className={styles.subtitle}>
            Advancing Technology for Humanity - From Global Impact to Local Innovation
          </p>
        </div>

        {/* About Grid */}
        <div className={styles.aboutGrid}>
          <div className={styles.aboutCard}>
            <div className={styles.cardIcon}>
              <Globe className={styles.icon} />
            </div>
            <h3>What is IEEE?</h3>
            <p>
              IEEE is the world's largest technical professional organization dedicated 
              to advancing technology for humanity. With over 400,000 members across 
              160+ countries, we drive innovation and excellence.
            </p>
          </div>

          <div className={styles.aboutCard}>
            <div className={styles.cardIcon}>
              <Cpu className={styles.icon} />
            </div>
            <h3>Bangalore Section</h3>
            <p>
              IEEE Bangalore Section is one of the most vibrant and active 
              sections in Region 10 (Asia-Pacific), fostering innovation 
              through events, conferences, and industry collaborations.
            </p>
          </div>

          <div className={styles.aboutCard}>
            <div className={styles.cardIcon}>
              <Users className={styles.icon} />
            </div>
            <h3>Mangalore Subsection</h3>
            <p>
              IEEE Mangalore Subsection acts as a bridge between regional 
              institutions and the Bangalore Section, supporting student 
              branches and technical communities across coastal Karnataka.
            </p>
          </div>

          <div className={styles.aboutCard}>
            <div className={styles.cardIcon}>
              <Award className={styles.icon} />
            </div>
            <h3>Our Student Branch</h3>
            <p>
              Our IEEE Student Branch at Srinivas Institute of Technology actively 
              organizes workshops, hackathons, and technical programs — nurturing 
              <strong> 190+ enthusiastic student members</strong> towards excellence.
            </p>
          </div>
        </div>

        {/* Mission Statement */}
        <div className={styles.missionSection}>
          <div className={styles.missionContent}>
            <h3 className={styles.missionTitle}>Our Mission</h3>
            <p className={styles.missionText}>
              To foster technological innovation and excellence for the benefit of humanity. 
              We provide a platform for students to develop professional skills, network 
              with industry experts, and contribute to cutting-edge research and development.
            </p>
            <div className={styles.missionStats}>
              <div className={styles.missionStat}>
                <span className={styles.statNumber}>400K+</span>
                <span className={styles.statLabel}>Global Members</span>
              </div>
              <div className={styles.missionStat}>
                <span className={styles.statNumber}>160+</span>
                <span className={styles.statLabel}>Countries</span>
              </div>
              <div className={styles.missionStat}>
                <span className={styles.statNumber}>190+</span>
                <span className={styles.statLabel}>SIT Members</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};