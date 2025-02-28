import React, { useState } from "react";
import "../styles/Team.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const teamMembers = [
  {
    name: "Ewa Prince",
    role: "CEO/MD",
    image: "/ewapassport.jpeg",
    description: "Ewa Prince is the visionary leader driving Work-fin Tech Innovative Ltd forward...",
  },
  {
    name: "Njoku James C",
    role: "Co-CEO/COO",
    image: "/PASSPORT.jpeg",
    description: "Njoku James C is responsible for overseeing operations and strategic initiatives...",
  },
  {
    name: "Dr. J.C",
    role: "Member Board of Directors",
    image: "/imageplace.jpg",
    description: "Dr. J.C brings a wealth of experience to the board, ensuring sustainable growth...",
  },
  {
    name: "Dr. A.O",
    role: "Member Board of Directors",
    image: "/imageplace.jpg",
    description: "Dr. A.O is a strategic thinker who plays a crucial role in guiding company policies...",
  },
  {
    name: "Christian O.",
    role: "Backend Developer",
    image: "/imageplace.jpg",
    description: "Christian O. is an expert in backend development, ensuring seamless functionality...",
  },
  {
    name: "Chibuikem J.",
    role: "Frontend Developer",
    image: "/imageplace.jpg",
    description: "Chibuikem J. specializes in creating engaging user interfaces with modern frameworks...",
  },
];

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <div className="team-container">
      <h2 className="team-heading">Meet Our Team</h2>
      <p className="team-intro">
        Our team of experts is dedicated to delivering innovative solutions across work, finance, and technology.
      </p>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card" onClick={() => setSelectedMember(member)}>
            <img src={member.image} alt={member.name} className="team-image" />
            <h3>{member.name}</h3>
            <p className="team-role">{member.role}</p>
            <div className="social-icons">
              <FaGithub className="icon" />
              <FaLinkedin className="icon" />
            </div>
          </div>
        ))}
      </div>

      {selectedMember && (
        <div className="modal-overlay" onClick={() => setSelectedMember(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={() => setSelectedMember(null)}>&times;</span>
            <img src={selectedMember.image} alt={selectedMember.name} className="modal-image" />
            <h3>{selectedMember.name}</h3>
            <p className="team-role">{selectedMember.role}</p>
            <p className="team-description">{selectedMember.description}</p>
            <div className="social-icons">
              <FaGithub className="icon" />
              <FaLinkedin className="icon" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Team;
