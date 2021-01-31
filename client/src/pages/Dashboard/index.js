import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './dashboard.css';

function Dashboard() {
  const [semesterState, setSemesterState] = useState(["Spring", "2021"]);
  const courses = [
    {
      id: 1,
      name: "ITD 380",
      title: "Intro Design",
      room: "ABC Room",
      instructor: "A.B.",
      days: ["M", "W", "F"],
      startTime: "8:30:00",
      endTime: "10:30:00"
    },
    {
      id: 2,
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
  };

  const semesters = ["Spring", "Summer", "Fall"];

  return (
    <div className="dashboard-container row">
      <div className="col-lg-2 col-12">
        <h3 className="font-weight-light">DASHBOARD</h3>
        <div className="d-flex flex-column">
          <span>{semesterState[0]} {semesterState[1]-1}</span>
          <span>{semesterState[0] === "Spring" ? "Fall" : "Fall"} {semesterState[1]-1}</span>
          <span>{semesterState[0]} {semesterState[1]-1}</span>
          <span>{semesterState[0]} {semesterState[1]-1}</span>
          <span>{semesterState[0]} {semesterState[1]-1}</span>
        </div>
      </div>

      <div className="col-lg-6 col-12">
        <h5 className="semester-heading">{semesterState[0]} {semesterState[1]}</h5>
        <div className="dashboard-section">
          {/* the data-target attribute should match the id of the section to be toggled */}
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
                    <tr key={course.id}>
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

        <div className="dashboard-section">
          <i className="fas fa-arrow-down dashboard-section-arrow"
            onClick={(e) => { toggleDashboardSection(e) }}
            data-section="dashboard-waitlist"
            data-toggle="collapse"
            data-target="#dashboard-waitlist"
            aria-expanded="false" aria-controls="dashboard-waitlist">
          </i>
          <h4 className="dashboard-section-heading d-inline-block">My Waitlist</h4>
          <div className="collapse" id="dashboard-waitlist">
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
                    <tr key={course.id}>
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

        <div className="dashboard-section">
        <i className="fas fa-arrow-down dashboard-section-arrow"
            onClick={(e) => { toggleDashboardSection(e) }}
            data-section="dashboard-planner"
            data-toggle="collapse"
            data-target="#dashboard-planner"
            aria-expanded="false" aria-controls="dashboard-planner">
          </i>
          <h4 className="dashboard-section-heading d-inline-block">My Planner</h4>
          <div className="collapse" id="dashboard-planner">
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
                    <tr key={course.id}>
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

      </div>
      <div className="col-lg-4 col-12">
        <h3 className="font-weight-light">DASHBOARD</h3>
        <Calendar />
      </div>
    </div>
  );
}

export default Dashboard;
