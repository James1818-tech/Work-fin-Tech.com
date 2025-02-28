import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsersCog, faCreditCard, faCode, faShieldAlt, faServer, faLaptop, faHandshake } from "@fortawesome/free-solid-svg-icons";
import "../styles/Services.css";

const services = [
  { icon: faUsersCog, title: "HR Tech Solutions", description: "Applicant tracking, performance management, and engagement platforms." },
  { icon: faCreditCard, title: "FinTech Products", description: "Digital payments, blockchain services, and financial planning tools." },
  { icon: faCode, title: "Custom Software Development", description: "Tailored software solutions for businesses." },
  { icon: faShieldAlt, title: "Cybersecurity Services", description: "Comprehensive security solutions against cyber threats." },
  { icon: faServer, title: "IT Infrastructure Management", description: "Optimize and manage IT infrastructure efficiently." },
  { icon: faLaptop, title: "General Computer Merchandize", description: "High-quality hardware, accessories, and software solutions." },
  { icon: faHandshake, title: "Consultancy", description: "Expert guidance in Finance, HR, and Technology for sustainable growth." }
];

const Services = () => {
  return (
    <div className="services-container">
      <h2>Our Products and Services</h2>
      <div className="services-grid">
        {services.slice(0, 6).map((service, index) => (
          <div key={index} className="service-card">
            <FontAwesomeIcon icon={service.icon} className="service-icon" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      <div className="single-service">
        <div className="service-card">
          <FontAwesomeIcon icon={services[6].icon} className="service-icon" />
          <h3>{services[6].title}</h3>
          <p>{services[6].description}</p>
        </div>
      </div>

      {/* Core Values & Why Choose Us Section */}
      <div className="values-why-container">
        <div className="values-card">
          <h3>Our Core Values</h3>
          <ul>
            <li><strong>Innovation:</strong> Exploring new ideas and technologies.</li>
            <li><strong>Integrity:</strong> Upholding ethical standards and transparency.</li>
            <li><strong>Excellence:</strong> Striving for the best in all we do.</li>
            <li><strong>Collaboration:</strong> Encouraging teamwork and partnerships.</li>
            <li><strong>Customer-Centric:</strong> Prioritizing client needs and satisfaction.</li>
            <li><strong>Agility:</strong> Adapting quickly to market changes.</li>
          </ul>
        </div>
        <div className="why-card">
          <h3>Why Choose WorkFinTech Innovative Ltd?</h3>
          <ul>
            <li><strong>Expertise:</strong> We are Professionals with deep knowledge in finance, HR, and tech.</li>
            <li><strong>Innovation-Driven:</strong> We Leverage on the latest technology for our clients.</li>
            <li><strong>Customer Focus:</strong> We Deliver tailored solutions for unique challenges.</li>
            <li><strong>Comprehensive Solutions:</strong> Integrating work, finance, and technology.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
