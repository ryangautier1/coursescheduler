import React from 'react';
import './plannerAside.css';

function PlannerAside(props) {
  const {planners, semester} = props;

  return (
    <div>
      <aside className="planner-side">
        <h6>{semester} Time Tables</h6>
        {planners.map(item => (
          <label className="checkbox-container" key={item}>{item}
          <input type="checkbox" checked="checked" />
          <span className="checkmark"></span>
        </label>
        ))}
      </aside>
    </div>
  )
}

export default PlannerAside;