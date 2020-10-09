import React from 'react';
import '../pages.css';
import './instructorDetail.css';
import ButtonPrimary from '../../components/ButtonPrimary';
import UserImg from '../../images/male.svg';

export default function InstructorDetail() {
    return (
        <div className='container-fluid instructor-detail'>
            <div className='row instructor-infos'>
                <div className='col instructor-info p-4'>
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
                        </div>
                    </div>
                </div>
                <div className='col instructor-info p-4'>
                    Teaching Style
                </div>
            </div>
        </div>
    )
}
