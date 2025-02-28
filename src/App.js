import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import "./App.css";
import logo from "./workfin logo.png"; // Ensure logo file exists

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Router>
      <div className="app-container">
        {/* Header Section */}
        <header className="navbar">
          <div className="logo-container">
            <img src={logo} alt="Company Logo" className="logo" />
            <h1 className="company-name">Work-fin Tech Innovative Ltd</h1>
          </div>
          <FaBars className="menu-icon" onClick={toggleSidebar} />
        </header>

        {/* Sidebar Navigation */}
        <nav className={`sidebar ${sidebarOpen ? "open" : ""}`}>
          <ul>
            <li onClick={toggleSidebar}><Link to="/">Home</Link></li>
            <li onClick={toggleSidebar}><Link to="/services">Our Services</Link></li>
            <li onClick={toggleSidebar}><Link to="/projects">Projects</Link></li>
            <li onClick={toggleSidebar}><Link to="/contact">Contact Us</Link></li>
            <li onClick={toggleSidebar}><Link to="/team">Team</Link></li>
          </ul>
        </nav>

        {/* Page Content */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} /> {/* Default Route */}
            <Route path="/home" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
