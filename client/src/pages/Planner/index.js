import React, { useState } from 'react';
import PlannerAside from '../../components/PlannerAside';
import PlannerList from '../../components/PlannerList';
import PlannerCalendar from '../../components/PlannerCalendar';
import PlannerMap from '../../components/PlannerMap';
import './planner.css';

function Planner() {
  const [plannerTabState, setPlannerTabState] = useState("list");

  // 
  const planners = ["one", "two"];
  const semester = "Spring 2021"
  const courses = [
    {
      id: 1,
      title: "Design Thinking",
      classCode: "ITD 380",
      description: "Lorem ipsum and all that",
      days: ["M", "W", "F"]
    },
    {
      id: 2,
      title: "Design Thinking",
      classCode: "ITD 380",
      description: "Lorem ipsum and all that",
      days: ["M", "W", "F"]
    },
    {
      id: 3,
      title: "Design Thinking",
      classCode: "ITD 380",
      description: "Lorem ipsum and all that",
      days: ["T", "TH"]
    }
  ]
  // 

  return (
    <div>
      <PlannerAside planners={planners} semester={semester} />
      <div className="planner-container">
        <div className="d-flex flex-row planner-tabs">
          <i className="fas fa-bars" onClick={() => {setPlannerTabState("list")}}></i>
          <i className="far fa-calendar" onClick={() => {setPlannerTabState("calendar")}}></i>
          <i className="fas fa-map" onClick={() => {setPlannerTabState("map")}}></i>
        </div>
        {plannerTabState === "list" ?
          <PlannerList courses={courses}/>
          : null}
        {plannerTabState === "calendar" ?
          <PlannerCalendar />
          : null}
        {plannerTabState === "map" ?
          <PlannerMap />
          : null}
      </div>
    </div>
  )
}

export default Planner;