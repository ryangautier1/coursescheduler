import React from 'react';
import './resultItem.css';

export default function ResultItem() {
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
                    <td className='status'><i className='open fas fa-circle' /></td>
                    <td className='title'>Virtual Environment</td>
                    <td className='school'>INF</td>
                    <td className='depart'>NA</td>
                    <td className='term'>2019 Fall</td>
                    <td className='instructor'>John Watson</td>
                    <td className='time d-flex flex-column align-items-center'>
                        <div className='time-days d-flex'>
                            <span>S</span>
                            <span>M</span>
                            <span>T</span>
                            <span>W</span>
                            <span>Th</span>
                            <span>F</span>
                            <span>S</span>
                        </div>
                        <div className='time-time'>9:00am-12:00pm</div>
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
