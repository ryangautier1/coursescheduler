import React from 'react';
import { Link } from 'react-router-dom';
import './instructorCoursesList.css';

export default function InstructorCoursesList() {
    return (
        <div className='row mt-4 courses-list'>
            <div className='col'>
                <div className='row mb-1'>
                    <div className='col label-count'>Current Courses: 1</div>
                </div>
                <div className='row py-1 course-item'>
                    <div className='col-md-2'>INF 385T</div>
                    <div className='col-md-4'>Virtual Environment</div>
                    <div className='col-md-4'>2019 Fall</div>
                    <div className='col-md-2'>
                        <Link to='/course-detail'>View Course</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
