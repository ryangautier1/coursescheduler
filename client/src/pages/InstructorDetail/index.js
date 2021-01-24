import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../pages.css';
import './instructorDetail.css';
import ButtonPrimary from '../../components/ButtonPrimary';
import UserImg from '../../images/male.svg';
import LabelAndValue from '../../components/LabelAndValue';
import InstructorCoursesList from '../../components/InstructorCoursesList';
import BackLink from '../../components/BackLink';
import API from '../../utils/API';
import CourseContext from '../../utils/CourseContext';

export default function InstructorDetail() {

    const { courses } = useContext(CourseContext);
    const [currentCourses, setCurrentCourses] = useState([]);
    const [taughtCourses, setTaughtCourses] = useState([]);

    const { id } = useParams();

    const [instructorDetail, setInstructorDetail] = useState({});

    const { name, school, department, office, email, website, courseLoad, grading, projects, teachingPreference, organization } = instructorDetail;

    useEffect(() => {
        API
            .fetchProfById(id)
            .then(res => {
                setInstructorDetail(res.data);
                getCourses(res.data.courses);
            })
            .catch(err => console.error(err));

    }, []);

    function getCourses(courseIds) {
        const tempCurrentCourses = [];
        const tempTaughtCourses = [];
        const currentYear = new Date().getFullYear();
        courseIds.forEach(courseId => {
            const course = courses.find(course => course._id === courseId);
            const courseYear = parseInt(course.term.split(' ')[0])
            if (courseYear >= currentYear) {
                tempCurrentCourses.push(course)
            } else {
                tempTaughtCourses.push(course)
            }
        })
        setCurrentCourses(tempCurrentCourses);
        setTaughtCourses(tempTaughtCourses);
    }

    return (
        <div className='container-fluid instructor-container'>
            <div className='row mb-5 instructor-infos'>
                <div className='col-md instructor-info p-4'>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <img src={UserImg} alt='John Watson' />
                        </div>
                        <div className='col-lg-8'>
                            <div className='d-flex justify-content-between align-items-end'>
                                <div className='d-flex flex-column'>
                                    <span className='name'>{name}</span>
                                    <span className='title'>professor</span>
                                </div>
                                <a href={website} target='_blank' rel="noopener noreferrer">
                                    <ButtonPrimary text='View website' />
                                </a>
                            </div>
                            <div className='mt-4'>
                                <LabelAndValue label='School' value={school} />
                                <LabelAndValue label='Department' value={department} />
                                <LabelAndValue label='Office' value={office} />
                                <LabelAndValue label='E-Mail' value={email} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md instructor-info p-4'>
                    <span className='name'>Teaching Style</span>
                    <div className='mt-3'>
                        <LabelAndValue label='Course Load' value={courseLoad} />
                        <LabelAndValue label='Grading' value={grading} />
                        <LabelAndValue label='Reading/Writing/Project' value={projects} />
                        <LabelAndValue label='Teaching Preference' value={teachingPreference} />
                        <LabelAndValue label='Course Organizing' value={organization} />
                    </div>
                </div>
            </div>
            <InstructorCoursesList label='Current Courses' courses={currentCourses} />
            <InstructorCoursesList label='Courses Taught' courses={taughtCourses} />
            <div className='row mt-4'>
                <div className='col p-0'>
                    <BackLink text='Back to previous page' path='/search-results' />
                </div>
            </div>
        </div>
    )
}
