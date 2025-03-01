import React, { useState } from "react";
import "../styles/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="contact-container">
      <h2>Contact Us</h2>

      {/* Contact Information */}
      <div className="contact-info">
        <p>
          <FontAwesomeIcon icon={faEnvelope} /> 
          <strong> Email:</strong> info@workfintech.com
        </p>
        <p>
          <FontAwesomeIcon icon={faPhone} /> 
          <strong> Phone:</strong> +234 812 345 6789
        </p>
        <p>
          <FontAwesomeIcon icon={faMapMarkerAlt} /> 
          <strong> Address:</strong> 123 Tech Street, Lagos, Nigeria
        </p>
      </div>

      {/* Netlify Form */}
      <form 
        name="contact" 
        method="POST" 
        data-netlify="true"
        className="contact-form"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="input-group">
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="input-group">
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="input-group">
          <textarea 
            name="message" 
            placeholder="Your Message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
          />
        </div>
        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
