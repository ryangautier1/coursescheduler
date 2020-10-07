import React from 'react';
import './pages.css';
import FilterButton from '../components/FilterButton';

export default function SearchResults() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col col-sm-2'>
                    <span className='label-small'>filters</span>
                    <div className='filter-items'>
                        <FilterButton />
                    </div>
                </div>
                <div className='col col-sm-10'>
                    Main
                </div>
            </div>
        </div>
    )
}
