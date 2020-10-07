import React from 'react';
import './resultItem.css';

export default function ResultItem({ status, title, school, depart, term, instructor, time }) {
    return (
        <table className='table item-table'>
            <thead>
                <tr>
                    <th scope='col'>Status</th>
                    <th scope='col'>Course Title</th>
                    <th scope='col'>School</th>
                    <th scope='col'>Depart.</th>
                    <th scope='col'>Term</th>
                    <th scope='col'>Instructor</th>
                    <th scope='col'>Time</th>
                </tr>
            </thead>
            <tbody>
                <tr className='item-data'>
                    <td className='status'><i className={`${status} fas fa-circle`} /></td>
                    <td className='title'>{title}</td>
                    <td className='school'>{school}</td>
                    <td className='depart'>{depart}</td>
                    <td className='term'>{term}</td>
                    <td className='instructor'>{instructor}</td>
                    <td className='time d-flex flex-column align-items-center'>
                        <div className='time-days d-flex'>
                            <span className={time.days.includes('sunday') ? 'selected' : ''}>S</span>
                            <span className={time.days.includes('monday') ? 'selected' : ''}>M</span>
                            <span className={time.days.includes('tuesday') ? 'selected' : ''}>T</span>
                            <span className={time.days.includes('wednesday') ? 'selected' : ''}>W</span>
                            <span className={time.days.includes('thursday') ? 'selected' : ''}>Th</span>
                            <span className={time.days.includes('friday') ? 'selected' : ''}>F</span>
                            <span className={time.days.includes('saturday') ? 'selected' : ''}>S</span>
                        </div>
                        <div className='time-time'>{time.hours}</div>
                    </td>
                </tr>
                <tr className='item-note'>
                    <td colSpan='7'>
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.
                    </td>
                </tr>
            </tbody>
        </table>
    )
}
