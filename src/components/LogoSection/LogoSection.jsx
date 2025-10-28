// src/components/LogoSection/LogoSection.jsx
import React, { useState, useEffect } from 'react';
import styles from './LogoSection.module.css';
import { Shield, Users, Globe, Building2, Award } from 'lucide-react';

// Import all your logos
import logoBangalore from '../../assets/logo-bangalore.png';
import logoMangalore from '../../assets/logo-mangalore.png';
import logoSIT from '../../assets/logo-sit.jpg';
import logoIEEE from '../../assets/logo-ieee-main.png';
import logoGRSS from '../../assets/logo-grss.jpg';

// Logo data with additional information
const logos = [
  { 
    img: logoIEEE, 
    alt: 'IEEE Logo',
    title: 'IEEE Global',
    description: 'World\'s Largest Technical Professional Organization',
    icon: Globe
  },
  { 
    img: logoBangalore, 
    alt: 'IEEE Bangalore Section',
    title: 'IEEE Bangalore',
    description: 'One of the most vibrant sections in Region 10',
    icon: Building2
  },
  { 
    img: logoMangalore, 
    alt: 'IEEE Mangalore Subsection',
    title: 'IEEE Mangalore',
    description: 'Connecting coastal Karnataka institutions',
    icon: Users
  },
  { 
    img: logoSIT, 
    alt: 'IEEE SIT Student Branch',
    title: 'IEEE SIT',
    description: 'Srinivas Institute of Technology Student Branch',
    icon: Shield
  },
  { 
    img: logoGRSS, 
    alt: 'IEEE GRSS Bangalore Chapter',
    title: 'IEEE GRSS',
    description: 'Geoscience and Remote Sensing Society',
    icon: Award
  },
];

export const LogoSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('affiliations');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="affiliations" className={styles.logoContainer}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>Our Affiliations</h2>
          <p className={styles.subtitle}>
            Proudly associated with global and regional IEEE organizations
          </p>
        </div>

        {/* Logo Grid */}
        <div 
          className={`${styles.logoGrid} ${isVisible ? styles.visible : ''}`}
        >
          {logos.map((logo, index) => (
            <div 
              className={styles.logoCard} 
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.logoImageContainer}>
                <img 
                  src={logo.img} 
                  alt={logo.alt}
                  className={styles.logoImage}
                  onError={(e) => { 
                    e.target.src = 'https://placehold.co/200x120/161b22/00b4d8?text=IEEE+Logo'; 
                  }}
                />
                <div className={styles.logoOverlay}>
                  <logo.icon className={styles.overlayIcon} />
                </div>
              </div>
              
              <div className={styles.logoInfo}>
                <h3 className={styles.logoTitle}>{logo.title}</h3>
                <p className={styles.logoDescription}>{logo.description}</p>
              </div>
              
              <div className={styles.cardGlow}></div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className={styles.affiliationInfo}>
          <div className={styles.infoCard}>
            <h3 className={styles.infoTitle}>Global Network</h3>
            <p className={styles.infoText}>
              Part of IEEE's worldwide community of 400,000+ professionals and students 
              across 160+ countries, driving technological innovation and excellence.
            </p>
          </div>
          <div className={styles.infoCard}>
            <h3 className={styles.infoTitle}>Regional Presence</h3>
            <p className={styles.infoText}>
              Active participation in IEEE Bangalore Section and Mangalore Subsection, 
              collaborating with premier institutions across Karnataka.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};