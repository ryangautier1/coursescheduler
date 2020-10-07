import React, { useState } from 'react';
import './home.css';

function Home(props) {
  const { name } = props;
  const { categoryState, setCategoryState } = useState("ABC");
  return (
    <div className="search-page-container text-center font-weight-bold">
      <h5>Fall 2019</h5>
      <h3 className="font-weight-bold">COURSE SEARCH</h3>
      <h5>Hello, {name}</h5>

      <div className="input-group mb-2 mr-sm-2 my-4">
        <div className="input-group-prepend">
          <div>
            <select className="custom-select my-select" id="inlineFormCustomSelect" defaultValue={"0"}>
              <option value="0">Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <input type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="Username" />
      </div>
    </div>
  )
}

export default Home;