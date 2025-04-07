// src/pages/About.jsx
import React from "react";
import "./About.css";
import Particles from "react-tsparticles";

// Importing images correctly
import trainer1 from "../assets/hymt2.jpg";
import trainer2 from "../assets/gymt1.jpg";
import trainer3 from "../assets/gymt3.jpg";

const About = () => {
  return (
    <div className="about-container">
      {/* Particles Background */}
      <Particles
        options={{
          particles: {
            number: { value: 80 },
            size: { value: 3 },
            move: { speed: 1 },
            line_linked: { enable: false },
            opacity: { value: 0.3 }
          }
        }}
        style={{
          position: "absolute",
          zIndex: "-1",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0
        }}
      />

      {/* About Content */}
      <div className="about-content">
        {/* Heading & Tagline */}
        <section className="about-heading">
          <h1>Unleash the Beast Within!</h1>
          <p>Where Fitness Meets Passion!</p>
        </section>

        {/* Gym's Story & Mission */}
        <section className="about-story">
          <h2>Our Journey</h2>
          <p>
            Established with a vision to empower individuals to achieve their
            fitness goals, our gym has been a home for fitness enthusiasts since
            its inception. We believe in pushing boundaries and breaking limits!
          </p>
        </section>

        {/* Meet the Team */}
        <section className="about-team">
          <h2>Meet Our Expert Trainers</h2>
          <div className="trainers">
            <div className="trainer-card">
              <img src={trainer1} alt="Trainer 1" />
              <h3>John Doe</h3>
              <p>Strength Coach | 5+ Years Experience</p>
            </div>
            <div className="trainer-card">
              <img src={trainer2} alt="Trainer 2" />
              <h3>Jane Smith</h3>
              <p>Nutrition Specialist | 3+ Years Experience</p>
            </div>
            <div className="trainer-card">
              <img src={trainer3} alt="Trainer 3" />
              <h3>Mike Johnson</h3>
              <p>Personal Trainer | 7+ Years Experience</p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="about-usps">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>✅ Certified Trainers</li>
            <li>✅ Customized Workout Plans</li>
            <li>✅ State-of-the-Art Equipment</li>
            <li>✅ Friendly & Supportive Community</li>
          </ul>
        </section>

        {/* Achievements & Success Stories */}
        <section className="about-achievements">
          <h2>Achievements & Success Stories</h2>
          <p>Join our 500+ happy members who transformed their lives!</p>
          <div className="success-stories">
            <div className="story">
              <p>🏆 Lost 20 kg in 6 months!</p>
              <p>- Sarah M.</p>
            </div>
            <div className="story">
              <p>🏆 Gained 10 kg of muscle mass!</p>
              <p>- Alex T.</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="about-cta">
          <h2>Ready to Transform Yourself?</h2>
          <button>Join Us Today!</button>
        </section>
      </div>
    </div>
  );
};

export default About;
