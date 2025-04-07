import React from "react";
import "./Services.css";
import { FaDumbbell, FaHeartbeat, FaAppleAlt, FaUserShield } from "react-icons/fa";

const Services = () => {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="services-list">
        <div className="service-card">
          <FaDumbbell className="service-icon" />
          <h3>Personal Training</h3>
          <p>One-on-one training sessions with certified experts.</p>
        </div>
        <div className="service-card">
          <FaHeartbeat className="service-icon" />
          <h3>Cardio Sessions</h3>
          <p>Boost your heart health and stamina.</p>
        </div>
        <div className="service-card">
          <FaAppleAlt className="service-icon" />
          <h3>Nutrition Guidance</h3>
          <p>Customized diet plans to match your goals.</p>
        </div>
        <div className="service-card">
          <FaUserShield className="service-icon" />
          <h3>Injury Rehab</h3>
          <p>Recovery support and tailored workout plans.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
