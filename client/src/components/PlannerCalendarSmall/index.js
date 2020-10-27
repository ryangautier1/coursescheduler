import React, { useEffect } from 'react';
import './plannerCalendarSmall.css';

function PlannerCalendarSmall() {
  const courses = [
    {
      id: 1,
      title: "ITD 380",
      name: "Design Thinking",
      days: ["M", "W", "F"],
      startTime: "08:00",
      endTime: "09:30",
      duration: 90
    },
    {
      id: 2,
      title: "ITD 380",
      name: "Design Thinking",
      days: ["M", "W", "F"],
      startTime: "10:15",
      endTime: "12:30",
      duration: 135

    },
    {
      id: 3,
      title: "ITD 380",
      name: "Design Thinking",
      days: ["M", "W", "F"],
      startTime: "14:15",
      endTime: "15:45",
      duration: 90
    },
    {
      id: 4,
      title: "ITD 380",
      name: "Design Thinking",
      days: ["T", "TH"],
      startTime: "09:15",
      endTime: "11:30",
      duration: 135
    },
    {
      id: 5,
      title: "ITD 380",
      name: "Design Thinking",
      days: ["TH"],
      startTime: "15:15",
      endTime: "17:30",
      duration: 135
    }
  ]

  let mondayCourses = courses.filter(item => item.days.includes("M"));
  let tuesdayCourses = courses.filter(item => item.days.includes("T"));
  let wednesdayCourses = courses.filter(item => item.days.includes("W"));
  let thursdayCourses = courses.filter(item => item.days.includes("TH"));
  let fridayCourses = courses.filter(item => item.days.includes("F"));

  const formatTimes = (course) => {
    let startTimeArr = course.startTime.split(":");
    let endTimeArr = course.endTime.split(":");
    // convert time to 12 hr format
    if (+startTimeArr[0] > 12) {
      startTimeArr[0] = +startTimeArr[0] - 12;
      course.startTime = startTimeArr.join(":") + " PM";
    }
    else {
      course.startTime = startTimeArr.join(":") + " AM";
    }
    if (+endTimeArr[0] > 12) {
      endTimeArr[0] = +endTimeArr[0] - 12;
      course.endTime = endTimeArr.join(":") + " PM";
    }
    else {
      course.endTime = endTimeArr.join(":") + " AM";
    }
    console.log(course);
  }

  formatTimes(mondayCourses[0]);
  
  return (
      <div className="planner-small-container">
        {mondayCourses.map(item => {
          return (
            <div className="row small-course-row">
              <h4 className="position-relative">{item.title}</h4>
              <br />
              <p className="position-relative">{item.name}</p>
              <div className="position-relative">{item.startTime} - {item.endTime}</div>
            </div>
          )
        })}
        {tuesdayCourses.map(item => {
          return (
            <div className="row small-course-row">
              <h4 className="position-relative">{item.title}</h4>
              <br />
              <p className="position-relative">{item.name}</p>
              <div className="position-relative">{item.startTime} - {item.endTime}</div>
            </div>
          )
        })}
        {wednesdayCourses.map(item => {
          return (
            <div className="row small-course-row">
              <h4 className="position-relative">{item.title}</h4>
              <br />
              <p className="position-relative">{item.name}</p>
              <div className="position-relative">{item.startTime} - {item.endTime}</div>
            </div>
          )
        })}
        {thursdayCourses.map(item => {
          return (
            <div className="row small-course-row">
              <h4 className="position-relative">{item.title}</h4>
              <br />
              <p className="position-relative">{item.name}</p>
              <div className="position-relative">{item.startTime} - {item.endTime}</div>
            </div>
          )
        })}
        {fridayCourses.map(item => {
          return (
            <div className="row small-course-row">
              <h4 className="position-relative">{item.title}</h4>
              <br />
              <p className="position-relative">{item.name}</p>
              <div className="position-relative">{item.startTime} - {item.endTime}</div>
            </div>
          )
        })}
      </div>
  )
}

export default PlannerCalendarSmall;