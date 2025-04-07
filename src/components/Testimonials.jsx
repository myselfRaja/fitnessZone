// src/components/TransformationSection.jsx
import React from 'react';
import riya from '../assets/riya.jpg';
import aman from '../assets/aman.jpg';
import './TransformationSection.css';

const stories = [
  {
    name: 'Riya Sharma',
    image: riya,
    story:
      'Joining our gym transformed my life! With the right guidance and consistency, I lost 12 kg in 4 months.',
  },
  {
    name: 'Aman Khan',
    image: aman,
    story:
      'Thanks to the personal training sessions, I gained muscle mass and confidence in just 6 months!',
  },
];

const TransformationSection = () => {
  return (
    <section className="transformation-section">
      <h2 className="section-heading">Transformation Stories & Testimonials</h2>
      <div className="cards-wrapper">
        {stories.map((s, index) => (
          <div className="story-card fade-in" key={index}>
            <div className="image-wrapper">
              <img src={s.image} alt={s.name} />
              <div className="image-overlay" />
            </div>
            <div className="story-content">
              <h3>{s.name}</h3>
              <p>{s.story}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TransformationSection;
