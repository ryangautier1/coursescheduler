import React from 'react';
import './pages.css';
import FilterButton from '../components/FilterButton';
import BackLink from '../components/BackLink';

export default function SearchResults() {

    const fakeFilterData = [
        { title: 'school', count: 1 },
        { title: 'department', count: 1 },
        { title: 'level', count: 3 },
        { title: 'term', count: 3 },
        { title: 'status', count: 4 },
        { title: 'day', count: 7 },
        { title: 'instructor', count: 28 }
    ]

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col col-sm-2'>
                    <span className='label-small'>filters</span>
                    <div className='filter-items'>
                        {fakeFilterData.map(filter => <FilterButton title={filter.title} count={filter.count} />)}
                    </div>
                    <BackLink />
                </div>
                <div className='col col-sm-10'>
                    Main
                </div>
            </div>
        </div>
    )
}
