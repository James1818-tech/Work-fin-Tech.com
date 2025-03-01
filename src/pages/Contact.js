import React, { useState } from "react";
import "../styles/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      body: new FormData(form),
    })
      .then(() => setSuccess(true))
      .catch((error) => console.error("Form submission error:", error));
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>We'd love to hear from you. Get in touch with us!</p>
      <div className="contact-info">
        <p><i className="fa fa-map-marker"></i> 39, Uselu-Lagos Road, Benin City, Edo State</p>
        <p><i className="fa fa-envelope"></i> workfintech1@gmail.com</p>
        <p><i className="fa fa-phone"></i> 08139233396, 07067399959</p>
      </div>
      {success ? (
        <p className="success-message">Thank you! Your message has been sent.</p>
      ) : (
        <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
          <input type="hidden" name="form-name" value="contact" />
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      )}
    </div>
  );
};

export default Contact;