// src/components/Footer.jsx
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Logo & About */}
        <div className="footer-section about">
          <h2 className="footer-logo">Gym Power</h2>
          <p>Unleash your strength and push your limits with our expert trainers and modern equipment.</p>
        </div>

        {/* Opening Hours */}
        <div className="footer-section hours">
          <h3>Opening Hours</h3>
          <ul>
            <li>Mon - Fri: 6:00 AM - 10:00 PM</li>
            <li>Saturday: 7:00 AM - 8:00 PM</li>
            <li>Sunday: 8:00 AM - 6:00 PM</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/plan">Membership</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p><FaMapMarkerAlt /> &nbsp; 123 Gym Street, Fit City</p>
          <p><FaPhoneAlt /> &nbsp; +91 98765 43210</p>
          <p><FaEnvelope /> &nbsp; support@gympower.com</p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank"><FaFacebook /></a>
            <a href="https://instagram.com" target="_blank"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank"><FaLinkedin /></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Gym Power. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
