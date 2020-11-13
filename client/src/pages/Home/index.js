import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ClassCard from '../../components/ClassCard';
import API from '../../utils/API';
import UserContext, { UserConsumer } from '../../utils/UserContext';
import CourseContext, { CourseConsumer } from '../../utils/CourseContext';
import './home.css';

function Home() {
  const [selectState, setSelectState] = useState();
  const [courseState, setCourseState] = useState()

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
                  onChange={(e) => { setSelectState(e.target.value) }}
                  value={selectState}>
                <CourseConsumer>
                  {value => {
                    return (
                      value.search.departments.map(item => {
                        return (<option value={item} key={item}>{item}</option>)
                      }))
                  }}
                  </CourseConsumer>
                </select>
              </div>
            </div>
            <select className="custom-select my-select"
              onChange={(e) => { setCourseState(e.target.value) }}
              value={courseState}>
                <CourseConsumer>
              {value => {
                return (
                  value.search.courses.map(item => {
                    return (<option value={item.classCode} key={item.classCode}>{item.courseNumber} {item.title}</option>)
                  }))
              }}
              </CourseConsumer>
            </select>
            <Link to="/search-results">
              <button className="btn btn-primary ml-4 my-search-btn" >SEARCH</button>
            </Link>
          </div>

        </form>

        <h5 className="suggested">Suggested Courses</h5>

        <div className="d-flex flex-wrap justify-content-around">
          <CourseConsumer>
          {value => {
            return (
              value.search.courses.slice(0, 4).map(item => {
                return (
                  <ClassCard title={item.title} department={item.department} courseNumber={item.courseNumber} key={item.id} />
                )
              }))
          }}
          </CourseConsumer>
        </div>

    </div>
  )
}

export default Home;