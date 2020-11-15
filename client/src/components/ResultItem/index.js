import React from 'react';
import { Link } from 'react-router-dom';
import './resultItem.css';

export default function ResultItem({ status, title, courseNum, depart, term, professor, days, startTime, endTime }) {
    return (
        <Link to='/course-detail'>
            <table className='table item-table'>
                <thead>
                    <tr>
                        <th scope='col'>Status</th>
                        <th scope='col'>Course Title</th>
                        <th scope='col'>Depart.</th>
                        <th scope='col'>Term</th>
                        <th scope='col'>Instructor</th>
                        <th scope='col' className='time-th'>Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='item-data'>
                        <td className='status'><i className={`${status} fas fa-circle`} /></td>
                        <td className='title'>{courseNum} {title}</td>
                        <td className='depart'>{depart}</td>
                        <td className='term'>{term}</td>
                        <td className='instructor'>{professor}</td>
                        <td className='time d-flex flex-column align-items-center'>
                            <div className='time-days d-flex'>
                                <span className={days.includes('Sunday') ? 'selected' : ''}>S</span>
                                <span className={days.includes('Monday') ? 'selected' : ''}>M</span>
                                <span className={days.includes('Tuesday') ? 'selected' : ''}>T</span>
                                <span className={days.includes('Wednesday') ? 'selected' : ''}>W</span>
                                <span className={days.includes('Thursday') ? 'selected' : ''}>Th</span>
                                <span className={days.includes('Friday') ? 'selected' : ''}>F</span>
                                <span className={days.includes('Saturday') ? 'selected' : ''}>S</span>
                            </div>
                            <div className='time-time'>{startTime}-{endTime}</div>
                        </td>
                    </tr>
                    <tr className='item-note'>
                        <td colSpan='6'>
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.
                    </td>
                    </tr>
                </tbody>
            </table>
        </Link>
    )
}
