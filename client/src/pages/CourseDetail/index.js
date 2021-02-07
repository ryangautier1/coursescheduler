import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../pages.css';
import './courseDetail.css';
import ButtonPrimary from '../../components/ButtonPrimary';
import SyllabusSample from '../../images/syllabus_sample.pdf';
import ProfessorContext from '../../utils/ProfessorContext';
import API from '../../utils/API';

export default function CourseDetail() {

    const { getProfById } = useContext(ProfessorContext);

    const [profName, setProfName] = useState('');

    const { id } = useParams();

    const [course, setCourse] = useState({});

    const tempDate = new Date(course.finalDate);

    const [stars, setStars] = useState([]);

    useEffect(() => {
        API
            .fetchCourseById(id)
            .then(res => {
                setCourse(res.data);
                const professor = getProfById(res.data.professor);
                setProfName(professor.name);
                const { ratings } = res.data;
                res.data.avgRating = ratings.reduce((total, x) => total + x) / ratings.length;
                return5stars(res.data);
            })
            .catch(err => console.error(err));
    }, []);

    function return5stars(course) {
        const tempStars = [];
        const full = Math.floor(course.avgRating);
        const half = Math.ceil(course.avgRating) - full === 1 ? 1 : 0;
        const empty = 5 - full - half;
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
                {
                    course && (
                        <div className='col doc-wrapper'>
                            <Link to='/search-results'>
                                <i className='fas fa-times close-course' />
                            </Link>
                            <div className='row'>
                                <div className='col course-title'>{course.title}</div>
                            </div>
                            <div className='row'>
                                <div className='col-auto course-school'>{course.department} {course.courseNumber}</div>
                                <div className='col course-instructor'>
                                    <Link to={`/instructor-detail/${course.professor}`}>
                                        {profName}
                                    </Link>
                                </div>
                            </div>
                            <div className='row mt-2 align-items-end'>
                                <div className='col-auto'>Unique: {course.classCode}</div>
                                <div className='col-auto d-flex align-items-center'>
                                    Class Capacity:
                                            <div className='capacity-bar'>
                                        <div className='capacity-count'></div>
                                    </div>
                                    {course.numberRegistered}/{course.capacity}
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
                                    {course.avgRating}/5 {`(${course.ratings && course.ratings.length})`}
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
                                    <span className='course-doc-label'>Level: </span> {course.level}
                                </div>
                                <div className='col'>
                                    <span className='course-doc-label'>Term: </span> {course.term}
                                </div>
                            </div>
                            <div className='row mt-2'>
                                <div className='col'>
                                    <span className='course-doc-label'>Department: </span> {course.department}
                                </div>
                                <div className='col'>
                                    <span className='course-doc-label'>Status: </span> {course.status}
                                </div>
                                <div className='col'>
                                    <span className='course-doc-label'>Exam/Final Deadline: </span> {tempDate.getFullYear()}/{tempDate.getMonth()}/{tempDate.getDate()}
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
            </div>
        </div>
    )
}
