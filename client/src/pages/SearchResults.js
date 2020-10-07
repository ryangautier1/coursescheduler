import React from 'react';
import './pages.css';
import FilterButton from '../components/FilterButton';

export default function SearchResults() {

    const fakeFilterData = [
        {
            title: 'school',
            count: 1
        },
        {
            title: 'department',
            count: 1
        }
    ]

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col col-sm-2'>
                    <span className='label-small'>filters</span>
                    <div className='filter-items'>
                        { fakeFilterData.map(filter => <FilterButton title={filter.title} count={filter.count} />) }
                    </div>
                </div>
                <div className='col col-sm-10'>
                    Main
                </div>
            </div>
        </div>
    )
}
