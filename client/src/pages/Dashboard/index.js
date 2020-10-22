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
            onClick={(e) => { toggleDashboardSection(e) }}
            data-section="dashboard-schedule"></i>
          <h4 className="dashboard-section-heading d-inline-block">My Schedule</h4>
          <div className="d-none" id="dashboard-schedule">
            <table className="table table-sm">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colspan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="dashboard-section"><i class="fas fa-arrow-down dashboard-section-arrow" onClick={(e) => { toggleDashboardSection(e) }}></i>My Waitlist</div>
        <div className="dashboard-section"><i class="fas fa-arrow-down dashboard-section-arrow" onClick={(e) => { toggleDashboardSection(e) }}></i>My Planner</div>
      </div>
      <div className="col-md-3 col-12">
        <h3 className="font-weight-light">DASHBOARD</h3>
      </div>
    </div>
  );
}

export default Dashboard;