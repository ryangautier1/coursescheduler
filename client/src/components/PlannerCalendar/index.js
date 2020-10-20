import React, { useEffect } from 'react';
import './plannerCalendar.css';

function PlannerCalendar() {
  const courses = [
    {
      id: 1,
      title: "ITD 380",
      name: "Design Thinking",
      days: ["M", "W", "F"],
      startTime: "08:00:00",
      endTime: "09:30:00",
      duration: 90
    },
    {
      id: 2,
      title: "ITD 380",
      name: "Design Thinking",
      days: ["M", "W", "F"],
      startTime: "10:15:00",
      endTime: "12:30:00",
      duration: 135

    },
    {
      id: 3,
      title: "ITD 380",
      name: "Design Thinking",
      days: ["M", "W", "F"],
      startTime: "14:15:00",
      endTime: "15:45:00",
      duration: 90
    },
    {
      id: 4,
      title: "ITD 380",
      name: "Design Thinking",
      days: ["T", "TH"],
      startTime: "09:15:00",
      endTime: "11:30:00",
      duration: 135
    },
    {
      id: 5,
      title: "ITD 380",
      name: "Design Thinking",
      days: ["TH"],
      startTime: "15:15:00",
      endTime: "17:30:00",
      duration: 135
    }
  ]

  // dynamic styling
  const lineHeight = 37;
  useEffect(() => {
    document.querySelectorAll(".line").forEach((line) => {
      line.style.marginBottom = lineHeight + "px";
    });

    // dynamically style each course based on it's duration and start time
    let checkedCourses = [];
    courses.map(course => {
      if (!checkedCourses.includes(course.duration)) {
        document.querySelectorAll("*[data-duration='" + course.duration + "']").forEach((item) => {
          item.style.height = ((course.duration/60) * lineHeight) + "px";
          let start = item.getAttribute("data-start");
          let distanceFromTop = parseInt(start[0] + start[1]) - 7;
          // if the course starts at xx:15
          if (start[3] === "1") {
            distanceFromTop += .25;
          }
          // if the course starts at xx:30
          else if (start[3] === "3") {
            distanceFromTop += .5;
          }
          // if the course starts at xx:45
          else if (start[3] === "4") {
            distanceFromTop += .75;
          }
          item.style.top = distanceFromTop * (lineHeight + 1) + "px";
        });
        checkedCourses.push(course.duration);
      }
    })
    
  });
  
  return (
    <div className="calendar-background">
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="times">
        <div className="time">7 AM</div>
        <div className="time">8 AM</div>
        <div className="time">9 AM</div>
        <div className="time">10 AM</div>
        <div className="time">11 AM</div>
        <div className="time">12 PM</div>
        <div className="time">1 PM</div>
        <div className="time">2 PM</div>
        <div className="time">3 PM</div>
        <div className="time">4 PM</div>
        <div className="time">5 PM</div>
        <div className="time">6 PM</div>
        <div className="time">7 PM</div>
        <div className="time">8 PM</div>
      </div>
      <div className="days row">
        <div className="day col text-center">Monday</div>
        <div className="day col text-center">Tuesday</div>
        <div className="day col text-center">Wednesday</div>
        <div className="day col text-center">Thursday</div>
        <div className="day col text-center">Friday</div>
      </div>

      <div className="courses">
        {courses.map(item => {
          
          return (
            <div className="row course-row" key={item.id}>
              {/* monday */}
              {item.days.includes("M") ?
                <div className="course col" data-duration={item.duration} data-start={item.startTime}>
                  {item.title}
                  <br />
                  <span className="class-name">{item.name}</span>
                </div> :
                <div className="col"></div>
              }

              {/* tuesday */}
              {item.days.includes("T") ?
                <div className="course col" data-duration={item.duration} data-start={item.startTime}>
                  {item.title}
                  <br />
                  <span className="class-name">{item.name}</span>
                </div> :
                <div className="col"></div>
              }

              {/* wednesday */}
              {item.days.includes("W") ?
                <div className="course col" data-duration={item.duration} data-start={item.startTime}>
                  {item.title}
                  <br />
                  <span className="class-name">{item.name}</span>
                </div> :
                <div className="col"></div>
              }

              {/* thursday */}
              {item.days.includes("TH") ?
                <div className="course col" data-duration={item.duration} data-start={item.startTime}>
                  {item.title}
                  <br />
                  <span className="class-name">{item.name}</span>
                </div> :
                <div className="col"></div>
              }

              {/* friday */}
              {item.days.includes("F") ?
                <div className="course col" data-duration={item.duration} data-start={item.startTime}>
                  {item.title}
                  <br />
                  <span className="class-name">{item.name}</span>
                </div> :
                <div className="col"></div>
              }
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PlannerCalendar;