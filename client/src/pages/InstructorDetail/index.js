import React from 'react';
import '../pages.css';
import './instructorDetail.css';
import ButtonPrimary from '../../components/ButtonPrimary';
import UserImg from '../../images/male.svg';
import LabelAndValue from '../../components/LabelAndValue';
import InstructorCoursesList from '../../components/InstructorCoursesList';

export default function InstructorDetail() {

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
            <div className='row instructor-infos'>
                <div className='col-md instructor-info p-4'>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <img src={UserImg} alt='John Watson' />
                        </div>
                        <div className='col-lg-8'>
                            <div className='d-flex justify-content-between align-items-end'>
                                <div className='d-flex flex-column'>
                                    <span className='name'>John Watson</span>
                                    <span className='title'>professor</span>
                                </div>
                                <ButtonPrimary text='View website' />
                            </div>
                            <div className='mt-4'>
                                <LabelAndValue label='School' value='The Information of School' />
                                <LabelAndValue label='Department' value='NA' />
                                <LabelAndValue label='Office' value='UTA 5.326' />
                                <LabelAndValue label='E-Mail' value='john.watson@ischool.utexas.edu' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md instructor-info p-4'>
                    <span className='name'>Teaching Style</span>
                    <div className='mt-3'>
                        <LabelAndValue label='Course Load' value='Medium' />
                        <LabelAndValue label='Grading' value='Pass/fail allowed' />
                        <LabelAndValue label='Reading/Writing/Project' value='Medium to heavy' />
                        <LabelAndValue label='Teaching Preference' value='Being on time' />
                        <LabelAndValue label='Course Organizing' value='PowerPoint and discussion' />
                    </div>
                </div>
            </div>
            <InstructorCoursesList />
        </div>
    )
}
