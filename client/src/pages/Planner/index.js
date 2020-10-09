import React from 'react';
import PlannerAside from '../../components/PlannerAside';

function Planner() {
  const planners = ["one", "two"];
  return (
    <div>
      <PlannerAside planners={planners}/>
    </div>
  )
}

export default Planner;