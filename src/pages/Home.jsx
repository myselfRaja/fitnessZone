import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import gymImage from '../assets/hero.jpg';
import BMICalculator from '../components/BmiCalculator';  // BMI Calculator import
import './Home.css';
import CalorieCalculator from '../components/CalorieCalculator';
import Testimonials from "../components/Testimonials";
// <Testimonials /> in the Home component


export default function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <motion.div
        className="hero-section"
        style={{
          backgroundImage: `url(${gymImage})`,
          backgroundSize: 'cover',
          height: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          className="hero-content"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1>Transform Your Body, Transform Your Life</h1>
          <p>Your journey to fitness starts here. Join GymFit today!</p>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link to="/about" className="btn btn-primary join-button">
              Join Now
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Services Section */}
      <motion.section
        className="services-section"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2>Our Services</h2>
        <div className="services">
          <motion.div className="service-card" whileHover={{ scale: 1.1 }}>
            <span className="service-icon">🏋️</span>
            <div className="service-title">Strength Training</div>
            <p className="service-description">Build strength with guided training plans.</p>
          </motion.div>
          <motion.div className="service-card" whileHover={{ scale: 1.1 }}>
            <span className="service-icon">💪</span>
            <div className="service-title">Personal Training</div>
            <p className="service-description">Customized coaching for your goals.</p>
          </motion.div>
          <motion.div className="service-card" whileHover={{ scale: 1.1 }}>
            <span className="service-icon">🧘</span>
            <div className="service-title">Yoga & Zumba</div>
            <p className="service-description">Mindful and energetic group sessions.</p>
          </motion.div>
          <motion.div className="service-card" whileHover={{ scale: 1.1 }}>
            <span className="service-icon">🥗</span>
            <div className="service-title">Nutrition Guidance</div>
            <p className="service-description">Personalized meal plans for better health.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* BMI Calculator Section */}
      <section className="bmi-calculator-section">
        <h2>BMI Calculator</h2>
      </section>
      <section className="Calorie-Calculator-section">
        <CalorieCalculator />
        <Testimonials />
      </section>
    </div>
  );
}
