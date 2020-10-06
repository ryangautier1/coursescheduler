import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar  navbar-dark navbar-expand-lg text-light">
      <div className="navbar-brand mr-16">Course Scheduler</div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <div className="nav-link">Search <span className="sr-only">(current)</span></div>
          </li>
          <li className="nav-item">
            <div className="nav-link">Planner</div>
          </li>
          <li className="nav-item">
            <div className="nav-link">Dashboard</div>
          </li>
          <li className="nav-item">
            <div className="nav-link">Degree Plan</div>
          </li>
          <li className="nav-item">
            <div className="nav-link">Register</div>
          </li>
          <li className="nav-item">
            <div className="nav-link">Help</div>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;