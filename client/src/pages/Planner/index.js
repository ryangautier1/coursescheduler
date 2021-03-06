import React, { useState, useEffect } from 'react';
import PlannerAside from '../../components/PlannerAside';
import PlannerList from '../../components/PlannerList';
import PlannerCalendar from '../../components/PlannerCalendar';
import PlannerCalendarSmall from '../../components/PlannerCalendarSmall';
import PlannerMap from '../../components/PlannerMap';
import UserContext, { UserConsumer } from '../../utils/UserContext';
import './planner.css';

function Planner() {
  const [plannerTabState, setPlannerTabState] = useState("list");
  const [screenState, setScreenState] = useState(window.innerWidth);
  const [planners, setPlanners] = useState(["one", "two", "three"]);
  const [plannerCourses, setPlannerCourses] = useState();

  // 
  // const planners = ["one", "two", "three"];
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

  // update screen width on resize
  // useEffect(() => { setScreenState(window.innerWidth) }, [window.innerWidth]);

  return (
    <div>
      <PlannerAside planners={planners} semester={semester} />
      <div className="planner-container">
        <div className="d-flex flex-row planner-tabs">
          <i className="fas fa-bars planner-tabs-item" onClick={() => { setPlannerTabState("list") }}></i>
          <i className="far fa-calendar planner-tabs-item" onClick={() => { setPlannerTabState("calendar") }}></i>
          <i className="fas fa-map planner-tabs-item" onClick={() => { setPlannerTabState("map") }}></i>
        </div>
        {plannerTabState === "list" ?
          <PlannerList courses={courses} />
          : null}
        {plannerTabState === "calendar" ?
          screenState > 780 ? <PlannerCalendar />
            : <PlannerCalendarSmall />
          : null}
        {plannerTabState === "map" ?
          <PlannerMap />
          : null}
      </div>
    </div>
  )
}

export default Planner;