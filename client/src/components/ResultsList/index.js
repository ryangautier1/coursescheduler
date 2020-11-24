import React from 'react';
import './resultsList.css';
import ResultItem from '../ResultItem';
import { CourseConsumer } from '../../utils/CourseContext';

export default function ResultsList() {

    return (
        <div className='row'>
            <div className='list-wrapper col'>
                {/* Status keys */}
                <div className='status-key row'>
                    <div className='col d-flex'>
                        <span>Status:</span>
                        <ul>
                            <li><i className='open fas fa-circle' /> Open</li>
                            <li><i className='reserved fas fa-circle' /> Open; reserved</li>
                            <li><i className='closed fas fa-circle' /> Closed</li>
                            <li><i className='cancelled fas fa-circle' /> Cancelled</li>
                        </ul>
                    </div>
                </div>
                {/* List of results */}
                <div className='result-items row'>
                    <div className='col'>
                        <CourseConsumer>
                            {
                                value => {
                                    const { searchResults } = value;

                                    return searchResults.map(item => (
                                        <ResultItem
                                            key={item._id}
                                            id={item._id}
                                            status={item.status}
                                            title={item.title}
                                            courseNum={item.courseNumber}
                                            depart={item.department}
                                            term={item.term}
                                            professor={item.profName}
                                            days={item.days}
                                            startTime={item.startTime}
                                            endTime={item.endTime}
                                        />
                                    ))
                                }
                            }
                        </CourseConsumer>
                    </div>
                </div>
            </div>
        </div>
    )
}
