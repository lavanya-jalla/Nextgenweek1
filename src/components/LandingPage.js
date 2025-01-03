import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="content">
        <img src="/logo.png" alt="Dynamic Collab Logo" className="logo" />
        <h1>Welcome to Dynamic Collab</h1>
        <p>Collaborate Dynamically, not harder.</p>
        <div className="buttons">
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
          <Link to="/register" className="btn btn-secondary">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;