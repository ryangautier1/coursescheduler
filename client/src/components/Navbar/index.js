import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const [navState, setNavState] = useState("/");

  return (
    <nav className="navbar  navbar-dark navbar-expand-lg text-light">
      <div className="navbar-brand mr-16">Course Scheduler</div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <Link to="/" onClick={() => {setNavState("/")}}>
            <li className={navState === "/" ? "nav-item active" : "nav-item"}>
              <div className="nav-link">Search</div>
            </li>
          </Link>
          <Link to="/planner" onClick={() => {setNavState("/planner")}}>
            <li className={navState === "/planner" ? "nav-item active" : "nav-item"}>
              <div className="nav-link">Planner</div>
            </li>
          </Link>
          <Link to="/dashboard" onClick={() => {setNavState("/dashbaord")}}>
            <li className={navState === "/dashboard" ? "nav-item active" : "nav-item"}>
              <div className="nav-link">Dashboard</div>
            </li>
          </Link>
          <Link to="/degreeplan" onClick={() => {setNavState("/degreeplan")}}>
            <li className={navState === "/degreeplan" ? "nav-item active" : "nav-item"}>
              <div className="nav-link">Degree Plan</div>
            </li>
          </Link>
          <Link to="/register" onClick={() => {setNavState("/register")}}>
            <li className={navState === "/register" ? "nav-item active" : "nav-item"}>
              <div className="nav-link">Register</div>
            </li>
          </Link>
          <Link to="/help" onClick={() => {setNavState("/help")}}>
            <li className={navState === "/help" ? "nav-item active" : "nav-item"}>
              <div className="nav-link">Help</div>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;