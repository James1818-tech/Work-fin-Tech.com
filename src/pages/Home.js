import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faCreditCard,
  faCode,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/Home.css";

import bgImage from "../bg-image.webp"; // Import image

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section with Background Image */}
      <section
        className="hero-section"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay improved-overlay">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="hero-title bolder-text"
          >
            Work-fin Tech Innovative Ltd
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: [0, -10, 10, -5, 5, 0] }} 
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 10 }}
            className="hero-tagline spinning-text"
          >
            Transforming Businesses with Smart Tech Solutions
          </motion.h2>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Us
        </motion.h2>
        <div className="about-grid">
          <div className="about-card">
            <h3>Who we are</h3>
            <p>
              We are Workfin-Tech! We revolutionize the intersection of work, finance, and technology
              by providing innovative solutions that enhance productivity,
              financial efficiency, and technological advancement.
            </p>
          </div>
          <div className="about-card">
            <h3>Our Mission</h3>
            <p>
              To revolutionize the integration of work, finance, and technology
              by delivering innovative, efficient, and secure solutions that
              empower businesses and individuals.
            </p>
          </div>
          <div className="about-card">
            <h3>Our Vision</h3>
            <p>
              To be the leading global provider of innovative, integrated
              solutions at the nexus of work, finance, and technology.
            </p>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="services">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h2>
        <div className="services-grid">
          <motion.div className="service-card" whileHover={{ scale: 1.05 }}>
            <FontAwesomeIcon icon={faUsers} className="service-icon" />
            <h3>HR Tech Solutions</h3>
          </motion.div>
          <motion.div className="service-card" whileHover={{ scale: 1.05 }}>
            <FontAwesomeIcon icon={faCreditCard} className="service-icon" />
            <h3>FinTech Products</h3>
          </motion.div>
          <motion.div className="service-card" whileHover={{ scale: 1.05 }}>
            <FontAwesomeIcon icon={faCode} className="service-icon" />
            <h3>Custom Software Development</h3>
          </motion.div>
          <motion.div className="service-card" whileHover={{ scale: 1.05 }}>
            <FontAwesomeIcon icon={faShieldAlt} className="service-icon" />
            <h3>Cybersecurity Services</h3>
          </motion.div>
        </div>
        <Link to="/services" className="view-services-btn">
          View All Services
        </Link>
      </section>

      {/* Call to Action Section */}
      <section className="cta">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Ready to transform your business with our smart tech solutions?
        </motion.h2>
        <div className="cta-buttons">
          <Link to="/contact" className="cta-btn">
            Get in Touch
          </Link>
          <Link to="/contact" className="cta-btn secondary">
            Schedule a Consultation
          </Link>
        </div>
      </section>

       {/* Footer Section */}
       <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Work-fin Tech Innovative Ltd. All rights reserved.</p>
      </footer>
    </div>
  );
};


export default Home;
