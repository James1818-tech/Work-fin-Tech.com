import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../styles/Contact.css";

const ContactPage = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <p>
          <FontAwesomeIcon icon={faMapMarkerAlt} /> 39, Uselu-Lagos Road, Benin City, Edo State
        </p>
        <p>
          <FontAwesomeIcon icon={faPhone} /> 08139233396, 07067399959
        </p>
        <p>
          <FontAwesomeIcon icon={faEnvelope} /> workfintech1@gmail.com
        </p>
      </div>

      {/* Contact Form */}
      <form className="contact-form" name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      {/* Consultation Form */}
      <h3>Schedule a Consultation</h3>
      <form className="consultation-form" name="consultation" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="consultation" />
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <input type="text" name="topic" placeholder="Consultation Topic" required />
        <input type="datetime-local" name="date" required />
        <button type="submit">Book Consultation</button>
      </form>
    </div>
  );
};

export default ContactPage;
