import React, { useState } from "react";
import "../styles/Projects.css";

const projects = [
  {
    title: "E-File Management System",
    description: "A digital solution for secure and efficient file management.",
    status: "Completed",
    image: "/e-file.png",
  },
  {
    title: "Dispatch Rider Apps",
    description: "An application designed to streamline dispatch operations.",
    status: "Completed",
    image: "/Rider.png",
  },
  {
    title: "School Result Checker",
    description: "A web-based platform for students to check their results.",
    status: "Completed",
    image: "/resultcheck.png",
  },
  {
    title: "Work-fin Tech Portfolio Site",
    description: "Our Official Potfolio Website with everything about us.",
    status: "Completed",
    image: "/Webview.png",
  },
  {
    title: "E-Commerce Apps",
    description: "A modern e-commerce solution for seamless online shopping.",
    status: "Completed",
    image: "/e-commerce.png",
  },
];


const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="projects-container">
      <h2 className="projects-heading">Take your time and tour around some of our projects.</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
              onClick={() => setSelectedImage(project.image)}
            />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span className="project-status">Status: {project.status}</span>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={() => setSelectedImage(null)}>&times;</span>
            <img src={selectedImage} alt="Project Preview" className="modal-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
