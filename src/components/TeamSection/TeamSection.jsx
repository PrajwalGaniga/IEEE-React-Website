// src/components/TeamSection/TeamSection.jsx
import React, { useState, useEffect } from 'react';
import styles from './TeamSection.module.css';
import { Mail, Github, Linkedin, Award, Users, Calendar } from 'lucide-react';

// Placeholder images - replace with actual images when available
import counselorImg from '../../assets/counselor.jpg';
import chairImg from '../../assets/chair.jpg';
import secretaryImg from '../../assets/secretary.jpg';

// Key Leaders (with photos)
const keyLeaders = [
  {
    name: 'Prof. Sudarshan K',
    role: 'Branch Counselor',
    details: 'HOD of CSD & ISE',
    img: counselorImg,
    email: 'sudarshan.k@sit.ac.in',
    linkedin: '#',
    github: '#'
  },
  {
    name: 'Yashmitha A',
    role: 'Chair',
    details: '4th year AIML',
    img: chairImg,
    email: 'yashmitha@ieee.sit.ac.in',
    linkedin: '#',
    github: '#'
  },
  {
    name: 'Chirag',
    role: 'Secretary',
    details: '3rd AIDS',
    img: secretaryImg,
    email: 'chirag@ieee.sit.ac.in',
    linkedin: '#',
    github: '#'
  },
];

// Other Office Bearers
const teams = [
  {
    title: 'Core Team',
    icon: Users,
    members: [
      { name: 'Megha Rai', role: 'Vice Chair', details: '3rd AIDS' },
      { name: 'Sinchana S', role: 'Treasurer', details: '3rd AIML' },
    ],
  },
  {
    title: 'Webmasters',
    icon: Github,
    members: [
      { name: 'P Prajwal', role: 'Webmaster', details: '3rd CSD' },
      { name: 'Prajna Gajanan Achari', role: 'Webmaster', details: '3rd CSBS' },
    ],
  },
  {
    title: 'Documentation Team',
    icon: Award,
    members: [
      { name: 'Hussain Hasim', role: 'Documentation', details: '3rd AIDS' },
      { name: 'Dhanyashri Kamble', role: 'Documentation', details: '3rd ISE' },
    ],
  },
  {
    title: 'Event Team',
    icon: Calendar,
    members: [
      { name: 'Thanzeed Ahamad', role: 'Event Team', details: '3rd AIML' },
      { name: 'Pavithra', role: 'Event Team', details: '3rd CSE' },
      { name: 'Spoorthi', role: 'Event Team', details: '4th ISE' },
    ],
  },
  {
    title: 'Design Team',
    icon: Users,
    members: [
      { name: 'Shreya Rai B U', role: 'Design Team', details: '4th CSE' },
      { name: 'Srushti', role: 'Design Team', details: '4th CSE' },
    ],
  },
];

export const TeamSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('team');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="team" className={styles.teamContainer}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>Meet Our Leadership</h2>
          <p className={styles.subtitle}>
            Dedicated students and faculty driving innovation and excellence at IEEE SIT
          </p>
        </div>

        {/* Key Leadership Grid */}
        <div className={`${styles.keyLeadersGrid} ${isVisible ? styles.visible : ''}`}>
          {keyLeaders.map((leader, index) => (
            <div 
              className={styles.keyCard} 
              key={index}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={styles.imageContainer}>
                <img 
                  src={leader.img} 
                  alt={leader.name}
                  className={styles.memberImage}
                  onError={(e) => { 
                    e.target.src = 'https://placehold.co/400x400/161b22/00b4d8?text=IEEE+SIT'; 
                  }}
                />
                <div className={styles.imageOverlay}>
                  <div className={styles.socialLinks}>
                    <a href={`mailto:${leader.email}`} aria-label="Email">
                      <Mail className={styles.socialIcon} />
                    </a>
                    <a href={leader.linkedin} aria-label="LinkedIn">
                      <Linkedin className={styles.socialIcon} />
                    </a>
                    <a href={leader.github} aria-label="GitHub">
                      <Github className={styles.socialIcon} />
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.keyCardInfo}>
                <h3>{leader.name}</h3>
                <p className={styles.role}>{leader.role}</p>
                <p className={styles.details}>{leader.details}</p>
              </div>
              <div className={styles.cardGlow}></div>
            </div>
          ))}
        </div>

        {/* Office Bearers Section */}
        <div className={styles.officeBearers}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.title}>Office Bearers 2026</h2>
            <p className={styles.subtitle}>
              The talented team behind IEEE SIT's success and innovation
            </p>
          </div>

          {/* Team Categories */}
          <div className={styles.teamCategories}>
            {teams.map((team, index) => (
              <div 
                key={index} 
                className={styles.teamCategory}
                data-visible={isVisible}
              >
                <div className={styles.categoryHeader}>
                  <div className={styles.categoryIcon}>
                    <team.icon className={styles.teamIcon} />
                  </div>
                  <h3 className={styles.categoryTitle}>{team.title}</h3>
                </div>
                <div className={styles.memberGrid}>
                  {team.members.map((member, i) => (
                    <div 
                      className={styles.memberCard} 
                      key={i}
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      <div className={styles.memberInfo}>
                        <h4 className={styles.memberName}>{member.name}</h4>
                        <p className={styles.memberRole}>{member.role}</p>
                        <p className={styles.memberDetails}>{member.details}</p>
                      </div>
                      <div className={styles.memberGlow}></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};