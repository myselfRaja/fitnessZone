import React from "react";
import "./Plan.css";

const Plans = () => {
  return (
    <div className="plans-container">
      <h1>Membership Plans</h1>
      <div className="plans-list">
        <div className="plan-card">
          <h3>Basic Plan</h3>
          <p>₹999/month</p>
          <ul>
            <li>Access to gym</li>
            <li>Group classes</li>
            <li>Locker facility</li>
          </ul>
          <button>Join Now</button>
        </div>
        <div className="plan-card">
          <h3>Standard Plan</h3>
          <p>₹1499/month</p>
          <ul>
            <li>Personal Training</li>
            <li>Diet Consultation</li>
            <li>All Basic Plan benefits</li>
          </ul>
          <button>Join Now</button>
        </div>
        <div className="plan-card">
          <h3>Premium Plan</h3>
          <p>₹1999/month</p>
          <ul>
            <li>Customized Plans</li>
            <li>Injury Rehab</li>
            <li>All Standard Plan benefits</li>
          </ul>
          <button>Join Now</button>
        </div>
      </div>
    </div>
  );
};

export default Plans;
