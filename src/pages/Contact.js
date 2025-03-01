import React, { useState } from "react";
import "../styles/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    fetch("/", {
      method: "POST",
      body: formData,
    })
      .then(() => setFormSubmitted(true)) // Set success state
      .catch(() => alert("Error submitting form!"));
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>Feel free to reach out to us for any inquiries.</p>

      <div className="contact-info">
        <p><i className="fa fa-map-marker"></i> 39, Uselu-Lagos Road, Benin City, Edo State</p>
        <p><i className="fa fa-envelope"></i> workfintech1@gmail.com</p>
        <p><i className="fa fa-phone"></i> 08139233396, 07067399959</p>
      </div>

      {formSubmitted ? (
        <p className="success-message">Thank you! Your message has been sent.</p>
      ) : (
        <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Contact;