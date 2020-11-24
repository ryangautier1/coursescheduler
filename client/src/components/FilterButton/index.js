import React from 'react';
import './filterButton.css';

export default function FilterButton({ title, count, items }) {
    return (
        <React.Fragment>
            <button
                className='btn btn-outline-primary d-flex justify-content-between align-items-center'
                type='button'
                data-toggle='collapse'
                data-target={`#${title}-items`}
                aria-expanded='false'
                aria-controls={`${title}-items`}
            >
                {`${title} (${count})`} <i className="fas fa-angle-down" />
            </button>
            <div className='filter-sub-items collapse' id={`${title}-items`}>
                {
                    Object.keys(items).map(item => (
                        <div className='filter-sub-item form-check' key={item}>
                            <input type='checkbox' className='form-check-input' id={`${title}-${item}`} />
                            <label className='form-check-label' htmlFor={`${title}-${item}`}>{`${item} (${items[item]})`}</label>
                        </div>
                    ))
                }
            </div>
        </React.Fragment>
    )
}
