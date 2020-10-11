import React from 'react';
import './plannerCalendar.css';

function PlannerCalendar() {
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
      <div className="days d-flex justify-content-around">
        <div className="day">Monday</div>
        <div className="day">Tuesday</div>
        <div className="day">Wednesday</div>
        <div className="day">Thursday</div>
        <div className="day">Friday</div>
      </div>
    </div>
  )
}

export default PlannerCalendar;