'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const HangingCardsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const cards = [
    {
      id: 1,
      number: '01',
      title: 'Structures',
      description: 'Drone frame design and construction using SolidWorks, carbon fiber, and precision manufacturing.',
      image: '/images/structures-thumbnail.png',
      link: '/subteams#structures',
      accent: '#00d4ff'
    },
    {
      id: 2,
      number: '02',
      title: 'Software',
      description: 'Computer vision, autonomous navigation, and flight control algorithms.',
      image: '/images/software-thumbnail.png',
      link: '/subteams#software',
      accent: '#FFCB05'
    },
    {
      id: 3,
      number: '03',
      title: 'Embedded',
      description: 'Custom PCB design for flight controllers, sensors, and safety systems.',
      image: '/images/embedded-thumbnail.png',
      link: '/subteams#embedded',
      accent: '#00ff88'
    }
  ];

  const handleCardClick = (index) => {
    if (isAnimating || index === activeIndex) return;
    setIsAnimating(true);
    setActiveIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const getCardStyle = (index) => {
    const diff = index - activeIndex;
    const normalizedDiff = ((diff + 1.5) % 3) - 1.5;

    if (normalizedDiff === 0) {
      return {
        transform: 'translateX(0) scale(1)',
        opacity: 1,
        zIndex: 10,
        filter: 'brightness(1)'
      };
    } else if (normalizedDiff === 1 || normalizedDiff === -2) {
      return {
        transform: 'translateX(120%) scale(0.85)',
        opacity: 0.5,
        zIndex: 5,
        filter: 'brightness(0.7)'
      };
    } else {
      return {
        transform: 'translateX(-120%) scale(0.85)',
        opacity: 0.5,
        zIndex: 5,
        filter: 'brightness(0.7)'
      };
    }
  };

  return (
    <div className="carousel-container">
      <div className="carousel-header">
        <div className="section-label">
          <span className="section-label-line" />
          <span className="section-label-text">Quick Overview</span>
        </div>
        <h2 className="carousel-title">EXPLORE OUR TEAMS</h2>
      </div>

      <div className="carousel-viewport">
        <div className="carousel-track">
          {cards.map((card, index) => (
            <div
              key={card.id}
              onClick={() => handleCardClick(index)}
              className={`carousel-card ${index === activeIndex ? 'active' : ''}`}
              style={getCardStyle(index)}
            >
              <div className="card-media">
                <img src={card.image} alt={card.title} />
                <div className="card-media-overlay" />
                <span className="card-number" style={{ color: card.accent }}>{card.number}</span>
              </div>
              <div className="card-body">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-desc">{card.description}</p>
                <Link href={card.link} className="card-link">
                  Learn More
                  <svg viewBox="0 0 20 20" fill="currentColor" className="card-link-icon">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-nav">
        {cards.map((card, index) => (
          <button
            key={index}
            onClick={() => handleCardClick(index)}
            className={`nav-dot ${index === activeIndex ? 'active' : ''}`}
            aria-label={`View ${card.title}`}
          >
            <span className="dot-inner" style={index === activeIndex ? { background: card.accent } : {}} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default HangingCardsCarousel;
