import React from 'react';
import './planner.css';

function PlannerAside(props) {
  const {planners} = props;

  return (
    <div>
      <aside className="planner-side">
        
        {planners.map(item => (
          <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id={item} />
          <label class="form-check-label" for="defaultCheck1">
            {item}
          </label>
        </div>
        ))}
      </aside>
    </div>
  )
}

export default PlannerAside;