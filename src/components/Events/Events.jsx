// src/components/Events/Events.jsx
import React, { useState, useEffect } from 'react';
import styles from './Events.module.css';
import { Calendar, Users, Award, Clock, MapPin, ExternalLink } from 'lucide-react';

// Enhanced event data with more details
const eventsData = {
  pastEvents: [
    {
      title: 'IEEE Orientation 2025',
      date: 'Oct 2025',
      description: 'Welcome session for new IEEE members with insights about opportunities and benefits of being part of the world\'s largest technical organization.',
      type: 'Workshop',
      attendees: 150,
      duration: '2 hours',
      location: 'SIT Campus',
      image: '/events/orientation.jpg',
      tags: ['Orientation', 'Networking']
    },
    {
      title: 'Web Development Bootcamp',
      date: 'Sep 2025',
      description: 'Hands-on workshop covering modern web development technologies including React, Node.js, and MongoDB.',
      type: 'Bootcamp',
      attendees: 80,
      duration: '3 days',
      location: 'CS Lab',
      image: '/events/web-dev.jpg',
      tags: ['Web Development', 'Workshop']
    },
    {
      title: 'Hackathon 2025',
      date: 'Aug 2025',
      description: '24-hour coding competition where students developed innovative solutions for real-world problems.',
      type: 'Hackathon',
      attendees: 120,
      duration: '24 hours',
      location: 'SIT Innovation Center',
      image: '/events/hackathon.jpg',
      tags: ['Competition', 'Coding']
    }
  ],
  upcomingEvents: [
    {
      title: 'AI & ML Workshop',
      date: 'Nov 2025',
      description: 'Introduction to Artificial Intelligence and Machine Learning with practical Python implementations.',
      type: 'Workshop',
      attendees: 100,
      duration: '1 day',
      location: 'AIML Lab',
      image: '/events/ai-ml.jpg',
      tags: ['AI/ML', 'Workshop'],
      status: 'upcoming'
    },
    {
      title: 'IEEE Day Celebration',
      date: 'Dec 2025',
      description: 'Annual IEEE Day celebration with technical talks, competitions, and networking sessions.',
      type: 'Celebration',
      attendees: 200,
      duration: '1 day',
      location: 'Main Auditorium',
      image: '/events/ieee-day.jpg',
      tags: ['Networking', 'Technical'],
      status: 'upcoming'
    }
  ]
};

export const Events = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('upcoming');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('events');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const currentEvents = activeTab === 'upcoming' ? eventsData.upcomingEvents : eventsData.pastEvents;

  return (
    <section id="events" className={styles.eventsContainer}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>Events & Activities</h2>
          <p className={styles.subtitle}>
            Join us for workshops, hackathons, technical talks, and networking events 
            that shape the future of technology at IEEE SIT.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className={styles.tabNavigation}>
          <button 
            className={`${styles.tabButton} ${activeTab === 'upcoming' ? styles.active : ''}`}
            onClick={() => setActiveTab('upcoming')}
          >
            <Calendar className={styles.tabIcon} />
            Upcoming Events
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'past' ? styles.active : ''}`}
            onClick={() => setActiveTab('past')}
          >
            <Award className={styles.tabIcon} />
            Past Events
          </button>
        </div>

        {/* Events Grid */}
        <div 
          className={`${styles.eventsGrid} ${isVisible ? styles.visible : ''}`}
        >
          {currentEvents.map((event, index) => (
            <div 
              className={`${styles.eventCard} ${event.status === 'upcoming' ? styles.upcoming : ''}`}
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Event Image */}
              <div className={styles.eventImage}>
                <img 
                  src={event.image} 
                  alt={event.title}
                  onError={(e) => { 
                    e.target.src = 'https://placehold.co/600x400/161b22/00b4d8?text=IEEE+Event'; 
                  }}
                />
                <div className={styles.eventType}>{event.type}</div>
                {event.status === 'upcoming' && (
                  <div className={styles.upcomingBadge}>Coming Soon</div>
                )}
              </div>

              {/* Event Content */}
              <div className={styles.eventContent}>
                <div className={styles.eventHeader}>
                  <span className={styles.eventDate}>
                    <Calendar className={styles.eventIcon} />
                    {event.date}
                  </span>
                  <h3 className={styles.eventTitle}>{event.title}</h3>
                </div>

                <p className={styles.eventDescription}>{event.description}</p>

                {/* Event Details */}
                <div className={styles.eventDetails}>
                  <div className={styles.detailItem}>
                    <Users className={styles.detailIcon} />
                    <span>{event.attendees}+ Attendees</span>
                  </div>
                  <div className={styles.detailItem}>
                    <Clock className={styles.detailIcon} />
                    <span>{event.duration}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <MapPin className={styles.detailIcon} />
                    <span>{event.location}</span>
                  </div>
                </div>

                {/* Event Tags */}
                <div className={styles.eventTags}>
                  {event.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <button className={styles.eventButton}>
                  {event.status === 'upcoming' ? 'Register Now' : 'View Photos'}
                  <ExternalLink className={styles.buttonIcon} />
                </button>
              </div>

              <div className={styles.cardGlow}></div>
            </div>
          ))}

          {/* Coming Soon Card for Empty States */}
          {currentEvents.length === 0 && (
            <div className={`${styles.eventCard} ${styles.comingSoonCard}`}>
              <div className={styles.comingSoonIcon}>
                <Calendar className={styles.csIcon} />
              </div>
              <h3>More Events Coming Soon...</h3>
              <p>We're planning exciting workshops, competitions, and networking events. Stay tuned for updates!</p>
              <div className={styles.comingSoonGlow}></div>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className={styles.ctaSection}>
          <h3 className={styles.ctaTitle}>Want to Organize an Event?</h3>
          <p className={styles.ctaText}>
            Have an idea for a workshop or technical session? Reach out to our event team!
          </p>
          <button className={styles.ctaButton}>
            Propose an Event
            <ExternalLink className={styles.ctaIcon} />
          </button>
        </div>
      </div>
    </section>
  );
};