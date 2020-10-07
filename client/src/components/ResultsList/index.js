import React from 'react';
import './resultsList.css';

export default function ResultsList() {
    return (
        <div className='row'>
            <div className='list-wrapper col'>
                <div className='status-key row'>
                    <span>Status:</span>
                    <ul>
                        <li><i className='open fas fa-circle' /> Open</li>
                        <li><i className='reserved fas fa-circle' /> Open; reserved</li>
                        <li><i className='closed fas fa-circle' /> Closed</li>
                        <li><i className='cancelled fas fa-circle' /> Cancelled</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
