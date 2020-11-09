import React from 'react';
import './resultsList.css';
import ResultItem from '../ResultItem';

export default function ResultsList() {

    const resultItems = [
        {
            status: 'open',
            title: 'virtual environment',
            department: 'na',
            term: '2019 fall',
            instructor: 'john watson',
            time: {
                days: ['wednesday'],
                hours: '9:00am-12:00pm'
            }
        },
        {
            status: 'reserved',
            title: 'graphic design',
            department: 'na',
            term: '2019 fall',
            instructor: 'john watson',
            time: {
                days: ['monday', 'wednesday'],
                hours: '2:00pm-5:00pm'
            }
        },
        {
            status: 'open',
            title: 'web design',
            department: 'na',
            term: '2019 fall',
            instructor: 'john watson',
            time: {
                days: ['tuesday', 'thursday'],
                hours: '9:00am-12:00pm'
            }
        }
    ]

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
                        {
                            resultItems.map(item => (
                                <ResultItem 
                                    key={item.title}
                                    status={item.status}
                                    title={item.title}
                                    depart={item.department}
                                    term={item.term}
                                    instructor={item.instructor}
                                    time={item.time}
                                />
                            ))
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
