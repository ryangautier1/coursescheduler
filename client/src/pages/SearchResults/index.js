import React from 'react';
import '../pages.css';
import './searchResults.css';
import FilterButton from '../../components/FilterButton';
import BackLink from '../../components/BackLink';
import PageTitle from '../../components/PageTitle';
import ResultsContainer from '../../components/ResultsContainer';
import { CourseConsumer } from '../../utils/CourseContext';

export default function SearchResults() {

    const backLinkData = { text: 'Start a new search', path: '/' };

    return (
        <div className='container-fluid search-results-container'>
            <div className='row'>
                <div className='col col-sm-2'>
                    <span className='label-small'>filters</span>
                    <div className='filter-items'>
                        <CourseConsumer>
                            {
                                value => {
                                    const { filterData } = value;
                                    return filterData.map(filter => <FilterButton key={filter.title} title={filter.title} count={filter.count} items={filter.items} />)
                                }
                            }
                        </CourseConsumer>
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
