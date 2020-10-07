import React from 'react';
import './filterButton.css';

export default function FilterButton() {
    return (
        <button
            className='btn btn-outline-primary d-flex justify-content-between align-items-center'
            type='button'
            data-toggle='collapse'
            data-target='school-items'
            aria-expanded='false'
            aria-controls='school-items'
        >
            {`School (1)`} <i className="fas fa-angle-down" />
        </button>
    )
}
