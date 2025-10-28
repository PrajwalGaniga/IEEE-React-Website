// src/components/StatsBar/StatsBar.jsx
import React, { useState, useEffect } from 'react';
import styles from './StatsBar.module.css';
import { Users, Calendar, Award, TrendingUp } from 'lucide-react';

export const StatsBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('stats-bar');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const stats = [
    {
      icon: Users,
      number: 190,
      suffix: '+',
      label: 'Student Members',
      duration: 2000
    },
    {
      icon: Calendar,
      number: 15,
      suffix: '+',
      label: 'Annual Events',
      duration: 1800
    },
    {
      icon: Award,
      number: 25,
      suffix: '+',
      label: 'Awards Won',
      duration: 2200
    },
    {
      icon: TrendingUp,
      number: 5,
      suffix: '+',
      label: 'Active Years',
      duration: 1600
    }
  ];

  return (
    <section id="stats-bar" className={styles.statsContainer}>
      <div className={styles.statsWrapper}>
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className={styles.statCard}
            data-visible={isVisible}
          >
            <div className={styles.cardIcon}>
              <stat.icon className={styles.icon} />
            </div>
            <div className={styles.statContent}>
              <h3 className={styles.statNumber}>
                <Counter 
                  end={stat.number} 
                  suffix={stat.suffix}
                  duration={stat.duration}
                  isVisible={isVisible}
                />
              </h3>
              <p className={styles.statLabel}>{stat.label}</p>
            </div>
            <div className={styles.cardGlow}></div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Counter component for animated numbers
const Counter = ({ end, suffix, duration, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = end / (duration / 16); // 60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration, isVisible]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
};