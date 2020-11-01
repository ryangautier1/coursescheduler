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
  ];

  const formatTimes = (course) => {
    let startTimeArr = course.startTime.split(":");
    console.log(startTimeArr);
    let endTimeArr = course.endTime.split(":");
    // convert time to 12 hr format
    if (+startTimeArr[0] > 12) {
      startTimeArr[0] = +startTimeArr[0] - 12;
      course.startTime = startTimeArr.join(":") + " PM";
    }
    else if (+startTimeArr[0] === 12) {
      course.startTime = startTimeArr.join(":") + " PM";
    }
    else {
      course.startTime = startTimeArr.join(":") + " AM";
    }
    if (+endTimeArr[0] > 12) {
      endTimeArr[0] = +endTimeArr[0] - 12;
      course.endTime = endTimeArr.join(":") + " PM";
    }
    else if (+endTimeArr[0] === 12) {
      course.endTime = endTimeArr.join(":") + " PM";
    }
    else {
      course.endTime = endTimeArr.join(":") + " AM";
    }
  };

  courses.map(item => formatTimes(item));

  let mondayCourses = courses.filter(item => item.days.includes("M"));
  let tuesdayCourses = courses.filter(item => item.days.includes("T"));
  let wednesdayCourses = courses.filter(item => item.days.includes("W"));
  let thursdayCourses = courses.filter(item => item.days.includes("TH"));
  let fridayCourses = courses.filter(item => item.days.includes("F"));

  return (
    <div className="planner-small-container">
      <h6 className="position-relative small-day-heading">M</h6>
      <div className="small-day">
        {mondayCourses.map(item => {
          return (
            <div className="row small-course-row" key={item.id + "m"}>
              <div className="col">
                <h4>{item.title}</h4>
                <br />
                <p>{item.name}</p>
                <div>{item.startTime} - {item.endTime}</div>
              </div>
            </div>
          )
        })}
      </div>
      <h6 className="position-relative small-day-heading">T</h6>
      <div className="small-day">
        {tuesdayCourses.map(item => {
          return (
            <div className="row small-course-row" key={item.id + "t"}>
              <h4>{item.title}</h4>
              <br />
              <p>{item.name}</p>
              <div>{item.startTime} - {item.endTime}</div>
            </div>
          )
        })}
      </div>
      <h6 className="position-relative small-day-heading">W</h6>
      <div className="small-day">
        {wednesdayCourses.map(item => {
          return (
            <div className="row small-course-row" key={item.id + "w"}>
              <h4>{item.title}</h4>
              <br />
              <p>{item.name}</p>
              <div>{item.startTime} - {item.endTime}</div>
            </div>
          )
        })}
      </div>
      <h6 className="position-relative small-day-heading">TH</h6>
      <div className="small-day">
        {thursdayCourses.map(item => {
          return (
            <div className="row small-course-row" key={item.id + "th"}>
              <h4>{item.title}</h4>
              <br />
              <p>{item.name}</p>
              <div>{item.startTime} - {item.endTime}</div>
            </div>
          )
        })}
      </div>
      <h6 className="position-relative small-day-heading">F</h6>
      <div className="small-day">
        {fridayCourses.map(item => {
          return (
            <div className="row small-course-row" key={item.id + "f"}>
              <h4>{item.title}</h4>
              <br />
              <p>{item.name}</p>
              <div>{item.startTime} - {item.endTime}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PlannerCalendarSmall;