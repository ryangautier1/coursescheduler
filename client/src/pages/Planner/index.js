import React, { useState } from 'react';
import PlannerAside from '../../components/PlannerAside';
import PlannerList from '../../components/PlannerList';
import PlannerCalendar from '../../components/PlannerCalendar';
import PlannerMap from '../../components/PlannerMap';
import './planner.css';

function Planner() {
  const [plannerTabState, setPlannerTabState] = useState("list");
  const planners = ["one", "two"];
  return (
    <div>
      <PlannerAside planners={planners} />
      <div className="planner-container">
        <div className="d-flex flex-row planner-tabs">
          <i className="fas fa-bars"></i>
          <i className="far fa-calendar"></i>
          <i className="fas fa-map"></i>
        </div>
        {plannerTabState === "list" ?
          <PlannerList />
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