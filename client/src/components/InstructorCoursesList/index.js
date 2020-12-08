import React from 'react';
import { Link } from 'react-router-dom';
import './instructorCoursesList.css';

export default function InstructorCoursesList({ label, courses }) {
    return (
        <div className='row mt-4 courses-list'>
            <div className='col'>
                <div className='row mb-1'>
                    <div className='col label-count'>{`${label}: ${courses.length}`}</div>
                </div>
                {
                    courses.map(course => (
                        <div className='row py-2 course-item' key={course._id}>
                            <div className='col-md-2'>{course.department} {course.courseNumber}</div>
                            <div className='col-md-4'>{course.title}</div>
                            <div className='col-md-4'>{course.term}</div>
                            <div className='col-md-2'>
                                <Link to='/course-detail'>View Course</Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
