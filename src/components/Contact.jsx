// src/components/Contact.jsx
import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <h2 className="contact-title">Get in Touch</h2>

      <div className="contact-container">
        {/* Contact Information */}
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Feel free to reach out to us!</p>
          <div className="info-item">
            <FaPhone className="icon" />
            <span>+1 234 567 890</span>
          </div>
          <div className="info-item">
            <FaEnvelope className="icon" />
            <span>info@gympower.com</span>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <span>123 Fitness St, Gym City</span>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h3>Send Us a Message</h3>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" required></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
