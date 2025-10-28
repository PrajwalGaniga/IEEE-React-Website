// src/components/Navbar/Navbar.jsx

import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import logo from '../../assets/ieee-logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll effect for navbar background & shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      {/* --- LOGO --- */}
      <div className={styles.navLogo}>
        <img src={logo} alt="IEEE Logo" />
        <span>IEEE SIT</span>
      </div>

      {/* --- DESKTOP MENU --- */}
      <ul className={styles.navMenu}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#team">Team</a></li>
        <li><a href="#events">Events</a></li>
      </ul>

      <div className={styles.contactButton}>
        <a href="#contact">Contact</a>
      </div>

      {/* --- HAMBURGER ICON --- */}
      <div className={styles.hamburgerIcon} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* --- MOBILE MENU --- */}
      <div className={isMenuOpen ? `${styles.mobileMenu} ${styles.active}` : styles.mobileMenu}>
        <ul className={styles.mobileNavLinks}>
          <li onClick={() => setIsMenuOpen(false)}><a href="#home">Home</a></li>
          <li onClick={() => setIsMenuOpen(false)}><a href="#about">About</a></li>
          <li onClick={() => setIsMenuOpen(false)}><a href="#team">Team</a></li>
          <li onClick={() => setIsMenuOpen(false)}><a href="#events">Events</a></li>
          <li onClick={() => setIsMenuOpen(false)}><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};
