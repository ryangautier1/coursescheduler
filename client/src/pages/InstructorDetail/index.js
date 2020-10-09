import React from 'react';
import '../pages.css';
import './instructorDetail.css';
import ButtonPrimary from '../../components/ButtonPrimary';

export default function InstructorDetail() {
    return (
        <div className='container-fluid instructor-detail'>
            <div className='row instructor-infos'>
                <div className='col d-flex instructor-info'>
                    <img src='' alt='John Watson' />
                    <div className='d-flex'>
                        <div className='d-flex flex-column'>
                            <span>John Watson</span>
                            <span>professor</span>
                        </div>
                        <ButtonPrimary text='View website' />
                    </div>
                </div>
                <div className='col instructor-info'>
                    Teaching Style
                </div>
            </div>
        </div>
    )
}
