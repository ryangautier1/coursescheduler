import React, { useState } from 'react';
import './home.css';

function Home(props) {
  const { name } = props;

  return (
    <div className="search-page-container text-center font-weight-bold">
      <h5>Fall 2019</h5>
      <h3 className="font-weight-bold">COURSE SEARCH</h3>
      <h5>Hello, {name}</h5>

      <form>
      <div className="input-group mb-2 mr-sm-2 my-4 form-row">
          <div className="input-group-prepend">
            <div>
              <select className="custom-select my-select" defaultValue={"ACC"}>
                <option value="ACC">ACC</option>
                <option value="BCH">BCH</option>
                <option value="CHE">CHE</option>
                <option value="CSE">CSE</option>
              </select>
            </div>
          </div>
          <input type="text" className="form-control serach-field" placeholder="Search for a class..." />
          <button type="submit" className="btn btn-primary ml-4 my-search-btn">SEARCH</button>
      </div>
      </form>
    </div>
  )
}

export default Home;