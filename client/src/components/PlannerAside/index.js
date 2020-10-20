import React from 'react';
import './plannerAside.css';

function PlannerAside(props) {
  const {planners, semester} = props;
  

  return (
    <div>
      <aside className="planner-side d-flex flex-lg-column flex-row">
        <h6>{semester} Time Tables</h6>
        <div className="d-flex flex-lg-column flex-row ml-2 ml-lg-0">
        {planners.map(item => (
          <label className="checkbox-label ml-2 ml-lg-0" key={item}>
          <input type="checkbox" />
          <span className="checkbox-custom"></span>
          <span className="label-name">{item}</span>
        </label>
        ))}
        </div>
      </aside>
    </div>
  )
}

export default PlannerAside;