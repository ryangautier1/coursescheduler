import React, { useState } from 'react';
import './dashboard.css';

function Dashboard() {
  const [semesterState, setSemesterState] = useState("Spring 2021");
  const toggleDashboardSection = (e) => {
    e.target.classList.toggle("fa-arrow-down");
    e.target.classList.toggle("fa-arrow-up");
    let toggleId = e.target.getAttribute("data-section");
    document.getElementById(toggleId).classList.toggle("d-none");
  };

  return (
    <div className="dashboard-container row">
      <div className="col-md-3 col-12">
        <h3 className="font-weight-light">DASHBOARD</h3>
      </div>
      <div className="col-md-6 col-12">
        <h5 className="semester-heading">{semesterState}</h5>
        <div className="dashboard-section">
          {/* the data-section attribute should match the id of the section to be toggled */}
          <i class="fas fa-arrow-down dashboard-section-arrow"
          onClick={(e)=>{toggleDashboardSection(e)}}
          data-section="dashboard-schedule"></i>
          My Schedule
          <div className="d-none" id="dashboard-schedule">
            This is your schedule
          </div>
        </div>
        <div className="dashboard-section"><i class="fas fa-arrow-down dashboard-section-arrow" onClick={(e)=>{toggleDashboardSection(e)}}></i>My Waitlist</div>
        <div className="dashboard-section"><i class="fas fa-arrow-down dashboard-section-arrow" onClick={(e)=>{toggleDashboardSection(e)}}></i>My Planner</div>
      </div>
      <div className="col-md-3 col-12">
        <h3 className="font-weight-light">DASHBOARD</h3>
      </div>
    </div>
  );
}

export default Dashboard;