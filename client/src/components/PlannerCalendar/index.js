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
      <div className="days row">
        <div className="day col text-center">Monday</div>
        <div className="day col text-center">Tuesday</div>
        <div className="day col text-center">Wednesday</div>
        <div className="day col text-center">Thursday</div>
        <div className="day col text-center">Friday</div>
      </div>

      <div className="courses">
        <div className="row eight-ten-row">
          <div className="eight-ten col">
            ITD 380
            <br />
            <span className="class-name">Design Thinking</span>
          </div>
          <div className="col"></div>
          <div className="eight-ten col">
            ITD 380
            <br />
            <span className="class-name">Design Thinking</span>
          </div>
          <div className="col"></div>
          <div className="eight-ten col">
            ITD 380
            <br />
            <span className="class-name">Design Thinking</span>
          </div>
        </div>

        <div className="row nine-twelve-row">
            <div className="col"></div>
            <div className="nine-twelve col">
              ITD 380
            <br />
              <span className="class-name">Design Thinking</span>
            </div>
            <div className="col"></div>
            <div className="nine-twelve col">
              ITD 380
            <br />
              <span className="class-name">Design Thinking</span>
            </div>
            <div className="col"></div>
          </div>

      </div>
    </div>
  )
}

export default PlannerCalendar;