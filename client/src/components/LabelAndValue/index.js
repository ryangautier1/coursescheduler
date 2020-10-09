import React from 'react';
import './labelAndValue.css';

export default function LabelAndValue({ label, value }) {
    return (
        <div>
            <span className='instructor-label'>{label}: </span> {value}
        </div>
    )
}
