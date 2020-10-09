import React from 'react';
import { Link } from 'react-router-dom';
import ClassCard from '../../components/ClassCard';
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
          <input type="text" className="form-control my-serach-field" placeholder="Search for a class..." />
          <Link to="/search-results">
            <button className="btn btn-primary ml-4 my-search-btn" >SEARCH</button>
          </Link>
        </div>
      </form>

      <h5 className="suggested">Suggested Courses</h5>

      <div className="d-flex flex-wrap justify-content-around">
        <ClassCard />
        <ClassCard />
        <ClassCard />
        <ClassCard />
      </div>


    </div>
  )
}

export default Home;