import React from 'react';
import './filterButton.css';

export default function FilterButton({ title, count }) {
    return (
        <button
            className='btn btn-outline-primary d-flex justify-content-between align-items-center'
            type='button'
            data-toggle='collapse'
            data-target={`${title}-items`}
            aria-expanded='false'
            aria-controls={`${title}-items`}
        >
            {`${title} (${count})`} <i className="fas fa-angle-down" />
        </button>
    )
}
