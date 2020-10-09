import React from 'react';
import './labelAndValue.css';

export default function LabelAndValue({ label, value }) {
    return (
        <div className='label-value'>
            <span className='label'>{label}: </span> {label === 'E-Mail' ? (
                <a href={`mailto: ${value}`}>{value}</a>
            ) : value}
        </div>
    )
}
