import React from 'react';
import './labelAndValue.css';

export default function LabelAndValue({ label, value }) {
    return (
        <div className='label-value mt-2'>
            <span className='label'>{label}: </span> {label.toLowerCase() === 'e-mail' ? (
                <a href={`mailto: ${value}`}>{value}</a>
            ) : value}
        </div>
    )
}
