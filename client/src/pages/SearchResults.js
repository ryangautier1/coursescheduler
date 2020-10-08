import React from 'react';
import './pages.css';
import FilterButton from '../components/FilterButton';
import BackLink from '../components/BackLink';
import PageTitle from '../components/PageTitle';
import ResultsContainer from '../components/ResultsContainer';

export default function SearchResults() {

    const fakeFilterData = [
        { title: 'school', count: 1, items: [{ name: 'INF', count: 28 }] },
        { title: 'department', count: 1, items: [{ name: 'NA', count: 28 }] },
        { title: 'level', count: 3, items: [{ name: 'LVL 1', count: 2 }, { name: 'LVL 2', count: 1 }, { name: 'LVL 3', count: 3 }] },
        { title: 'term', count: 3, items: [{ name: '2019 Fall', count: 2 }, { name: '2019 Winter', count: 1 }, { name: '2020 Spring', count: 3 }] },
        { title: 'status', count: 4, items: [{ name: 'Open', count: 2 }, { name: 'Open; reserved', count: 1 }, { name: 'Closed', count: 3 }, { name: 'Cancelled', count: 4 }] },
        { title: 'day', count: 7, items: [{ name: 'Sunday', count: 2 }, { name: 'Monday', count: 1 }, { name: 'Tuesday', count: 3 }, { name: 'Wednesday', count: 4 }, { name: 'Thursday', count: 4 }, { name: 'Friday', count: 4 }, { name: 'Saturday', count: 4 }] },
        { title: 'instructor', count: 28, items: [{ name: 'John Watson', count: 3 }]  }
    ];

    const backLinkData = { text: 'Start a new search', path: '/' };

    return (
        <div className='container-fluid search-results-container'>
            <div className='row'>
                <div className='col col-sm-2'>
                    <span className='label-small'>filters</span>
                    <div className='filter-items'>
                        {fakeFilterData.map(filter => <FilterButton key={filter.title} title={filter.title} count={filter.count} />)}
                    </div>
                    <BackLink text={backLinkData.text} path={backLinkData.path} />
                </div>
                <div className='col col-sm-10'>
                    <PageTitle text='Search Results' />
                    <ResultsContainer />
                </div>
            </div>
        </div>
    )
}
