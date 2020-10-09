import React from 'react';
import { Link } from 'react-router-dom';
import '../pages.css';
import './courseDetail.css';

export default function CourseDetail() {

    function return5stars() {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars[i] = (<i className='fas fa-star' />);
        }
        return stars;
    }

    return (
        <div className='container-fluid course-doc'>
            <div className='row justify-content-center'>
                <div className='col doc-wrapper'>
                    <div className='row'>
                        <div className='col text-right'>
                            <Link to='/search-results'>
                                <i className='fas fa-times close-course' />
                            </Link>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col course-title'>Virtual Environment</div>
                    </div>
                    <div className='row'>
                        <div className='col-auto course-school'>INF 385T</div>
                        <div className='col course-instructor'>John Watson</div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col'>Unique: 27185</div>
                        <div className='col d-flex align-items-center'>
                            Class Capacity: 
                            <div className='capacity-bar'>
                                <div className='capacity-count'></div>
                            </div>
                            11/20    
                        </div>
                        <div className='col d-flex align-items-end'>
                            Review:
                            <div className='review-stars'>
                                { return5stars().map(star => star) }
                            </div>
                            5/5 {`(10)`}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
