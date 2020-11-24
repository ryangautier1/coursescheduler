import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../pages.css';
import './courseDetail.css';
import ButtonPrimary from '../../components/ButtonPrimary';
import SyllabusSample from '../../images/syllabus_sample.pdf';
import CourseContext, { CourseConsumer } from '../../utils/CourseContext';

export default function CourseDetail() {

    const { courseDetail: { ratings } } = useContext(CourseContext);

    const avgRating = ratings.reduce((total, x) => total + x) / ratings.length;

    const [stars, setStars] = useState([]);

    useEffect(() => {
        return5stars();
    }, []);

    function return5stars() {
        const tempStars = [];
        const full = Math.floor(avgRating);
        const half = Math.ceil(avgRating) - full === 1 ? 1 : 0;
        const empty = 5 - full - half;
        console.log({ full, half, empty })
        for (let i = 0; i < full; i++) {
            tempStars.push('full');
        }
        if (half === 1) stars.push('half');
        for (let j = 0; j < empty; j++) {
            if (empty === 0) return;
            tempStars.push('empty');
        }
        setStars(tempStars);
    }

    return (
        <div className='container-fluid course-doc'>
            <div className='row justify-content-center'>
                <CourseConsumer>
                    {
                        value => {
                            const { courseDetail: {
                                capacity, classCode, courseNumber, department, finalDate, level, numberRegistered, profName, status, term, title
                            } } = value;

                            return (
                                <div className='col doc-wrapper'>
                                    <Link to='/search-results'>
                                        <i className='fas fa-times close-course' />
                                    </Link>
                                    <div className='row'>
                                        <div className='col course-title'>{title}</div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-auto course-school'>{department} {courseNumber}</div>
                                        <div className='col course-instructor'>
                                            <Link to='/instructor-detail'>
                                                {profName}
                                            </Link>
                                        </div>
                                    </div>
                                    <div className='row mt-2 align-items-end'>
                                        <div className='col-auto'>Unique: {classCode}</div>
                                        <div className='col-auto d-flex align-items-center'>
                                            Class Capacity:
                                            <div className='capacity-bar'>
                                                <div className='capacity-count'></div>
                                            </div>
                                            {numberRegistered}/{capacity}
                                        </div>
                                        <div className='col d-flex align-items-end'>
                                            Review:
                                            <div className='review-stars'>
                                                {
                                                    stars.map((star, i) => {
                                                        if (star === 'full') {
                                                            return <i className='fas fa-star' key={i} />
                                                        } else if (star === 'half') {
                                                            return <i className='fas fa-star-o' key={i} />
                                                        } else {
                                                            return <i className='fas fa-star-o' key={i} />
                                                        }
                                                    })
                                                }
                                            </div>
                                            {avgRating}/5 {`(${ratings.length})`}
                                        </div>
                                    </div>
                                    <div className='row mt-4'>
                                        <div className='col-auto course-doc-label'> Description:</div>
                                        <div className='col'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo consequat.
                                        </div>
                                    </div>
                                    <div className='row mt-4'>
                                        <div className='col'>
                                            <span className='course-doc-label'>School: </span> The School of Information
                                        </div>
                                        <div className='col'>
                                            <span className='course-doc-label'>Level: </span> {level}
                                        </div>
                                        <div className='col'>
                                            <span className='course-doc-label'>Term: </span> {term}
                                        </div>
                                    </div>
                                    <div className='row mt-2'>
                                        <div className='col'>
                                            <span className='course-doc-label'>Department: </span> {department}
                                        </div>
                                        <div className='col'>
                                            <span className='course-doc-label'>Status: </span> {status}
                                        </div>
                                        <div className='col'>
                                            <span className='course-doc-label'>Exam/Final Deadline: </span> {finalDate}
                                        </div>
                                    </div>
                                    <div className='row mt-2'>
                                        <div className='col-4'>
                                            <span className='course-doc-label'>Grading Method: </span> Pass/Fail Allowed
                                        </div>
                                        <div className='col-4'>
                                            <span className='course-doc-label'>Course Component: </span> Tutorial
                                        </div>
                                    </div>
                                    <div className='row mt-4'>
                                        <div className='col-auto'>
                                            <ButtonPrimary text='add to planner' />
                                        </div>
                                        <div className='col-auto'>
                                            <ButtonPrimary text='view roommap' />
                                        </div>
                                        <div className='col-auto'>
                                            <ButtonPrimary text='view textbook' />
                                        </div>
                                    </div>
                                    <div className='row mt-3'>
                                        <div className='col syllabus-link'>
                                            <span className='download-link'>Download Syllabus </span>{'(18 KB)'}
                                        </div>
                                    </div>
                                    <div className='row mt-1 mb-4'>
                                        <div className='col syllabus-viewer'>
                                            <iframe title='Syllabus' src={SyllabusSample} width='100%' />
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    }
                </CourseConsumer>
            </div>
        </div>
    )
}
