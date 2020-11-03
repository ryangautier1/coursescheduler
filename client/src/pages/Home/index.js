import React, {useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import ClassCard from '../../components/ClassCard';
import API from '../../utils/API';
import UserContext, { UserConsumer } from '../../utils/UserContext';
import './home.css';

function Home() {
  const { fetchUser } = useContext(UserContext);
  const [selectState, setSelectState] = useState("DES");
  // course state will be an array of courses that is mapped to produce course cards
  const [courseCardState, setCourseCardState] = useState([]);

  // on selectState change, load 4 classes with that department
  useEffect(() => {
    API.findCoursesByDepartment(4, selectState)
    .then(res => setCourseCardState(res.data));
  }, [selectState]);

  useEffect(() => {fetchUser()})

  return (
    <div className="search-page-container text-center font-weight-bold">
      <h5>Fall 2019</h5>
      <h3 className="font-weight-bold">COURSE SEARCH</h3>
      <UserConsumer>
        {
          value => {
            if (value.user.isLoggedIn) {
              return <h5>Hello, {value.user.info.name}</h5>
            }
            else {
              return <h5>Hello! Log in to register courses.</h5>
            }
          }
        }
      </UserConsumer>

      <form>
        <div className="input-group mb-2 mr-sm-2 my-4 form-row">
          <div className="input-group-prepend">
            <div>
              <select className="custom-select my-select"
              onChange={(e) => {setSelectState(e.target.value)}}
              value={selectState}>
                <option value="DES">DES</option>
                <option value="INF">INF</option>
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
        {courseCardState.map(item => (
          <ClassCard title={item.title} department={item.department} courseNumber={item.courseNumber} key={item.id} />
        ))}
      </div>


    </div>
  )
}

export default Home;