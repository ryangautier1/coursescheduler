import React, { useState } from 'react';
import './dashboard.css';

function Dashboard() {
  const [semesterState, setSemesterState] = useState("Spring 2021");
  const courses = [
    {
      name: "ITD 380",
      title: "Intro Design",
      room: "ABC Room",
      instructor: "A.B.",
      days: ["M", "W", "F"],
      startTime: "8:30:00",
      endTime: "10:30:00"
    },
    {
      name: "ITD 380",
      title: "Intro Design",
      room: "ABC Room",
      instructor: "A.B.",
      days: ["M", "W", "F"],
      startTime: "8:30:00",
      endTime: "10:30:00"
    }
  ];
  const toggleDashboardSection = (e) => {
    e.target.classList.toggle("fa-arrow-down");
    e.target.classList.toggle("fa-arrow-up");
    let toggleId = e.target.getAttribute("data-section");
    // document.getElementById(toggleId).classList.toggle("d-none");
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
          <i className="fas fa-arrow-down dashboard-section-arrow"
            onClick={(e) => { toggleDashboardSection(e) }}
            data-section="dashboard-schedule"
            data-toggle="collapse"
            data-target="#dashboard-schedule"
            aria-expanded="false" aria-controls="dashboard-schedule">
          </i>
          <h4 className="dashboard-section-heading d-inline-block">My Schedule</h4>
          <div className="collapse" id="dashboard-schedule">
            <table className="table table-sm">
              <thead>
                <tr>
                  <th scope="col">COURSE</th>
                  <th scope="col">TITLE</th>
                  <th scope="col">ROOM</th>
                  <th scope="col">INSTRUCTOR</th>
                  <th scope="col">DAY & TIME</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course) => {
                  return (
                    <tr>
                      <th scope="row">{course.name}</th>
                      <td>{course.title}</td>
                      <td>{course.room}</td>
                      <td>{course.instructor}</td>
                      <td>{course.days} {course.startTime}-{course.endTime}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="dashboard-section"><i className="fas fa-arrow-down dashboard-section-arrow" onClick={(e) => { toggleDashboardSection(e) }}></i>My Waitlist</div>
        <div className="dashboard-section"><i className="fas fa-arrow-down dashboard-section-arrow" onClick={(e) => { toggleDashboardSection(e) }}></i>My Planner</div>
      </div>
      <div className="col-md-3 col-12">
        <h3 className="font-weight-light">DASHBOARD</h3>
      </div>
    </div>
  );
}

export default Dashboard;