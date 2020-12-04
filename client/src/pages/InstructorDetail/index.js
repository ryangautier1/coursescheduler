import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../pages.css';
import './instructorDetail.css';
import ButtonPrimary from '../../components/ButtonPrimary';
import UserImg from '../../images/male.svg';
import LabelAndValue from '../../components/LabelAndValue';
import InstructorCoursesList from '../../components/InstructorCoursesList';
import BackLink from '../../components/BackLink';
import API from '../../utils/API';

export default function InstructorDetail() {

    const { id } = useParams();

    const [instructorDetail, setInstructorDetail] = useState({});

    const { name, school, department, office, email, website, courseLoad, grading, projects, teachingPreference, organization, courses } = instructorDetail;

    useEffect(() => {
        API
            .fetchProfById(id)
            .then(res => setInstructorDetail(res.data))
            .catch(err => console.error(err));
    }, []);

    const currentCourses = [
        {
            code: 'INF 385T',
            name: 'Virtual Environment',
            term: '2019 Fall',
            link: '/course-detail'
        }
    ];

    const taughtCourses = [
        {
            code: 'INF 342',
            name: 'Perspective on Information',
            term: '2018 Fall',
            link: '/course-detail'
        },
        {
            code: 'INF 311',
            name: 'Interaction Design',
            term: '2018 Spring',
            link: '/course-detail'
        },
        {
            code: 'INF 313',
            name: 'Understanding Research',
            term: '2016 Summer',
            link: '/course-detail'
        }
    ]

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
                                <ButtonPrimary text='View website' />
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
