import React from 'react';
import ButtonPrimary from '../ButtonPrimary';
import './plannerList.css';

function PlannerList(props) {
  let {courses} = props;
  return (
    <div className="pt-5">
      {courses.map(item => (
        <div className="card my-planner-card shadow" key={item.id}>
        <div className="card-body">
          <h5 className="card-title">{item.classCode} {item.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{[...item.days]}</h6>
          <p className="card-text">{item.description}</p>
          <div className="d-flex justify-content-end">
            <div className="mr-3">
              <ButtonPrimary text={"Delete"}/>
            </div>
          <ButtonPrimary text={"Register"}/>
          </div>
        </div>
      </div>
      ) )}
      
    </div>
  )
}

export default PlannerList;