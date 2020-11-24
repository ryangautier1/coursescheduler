import React from 'react';
import './resultsContainer.css';
import ResultsList from '../ResultsList';
import { CourseConsumer } from '../../utils/CourseContext';

export default function ResultsContainer() {
    return (
        <div className='results-wrapper'>
            {/* Sort by row */}
            <div className='sort-row row'>
                <CourseConsumer>
                    {
                        value => {
                            const { searchResults } = value;
                            return (
                                <div className='col d-flex justify-content-between align-items-end'>
                                    <div className='sort d-flex align-items-end'>
                                        <span>Sort by:</span>
                                        <ul>
                                            <li>Course Title</li>
                                            <li>School</li>
                                            <li>Department</li>
                                        </ul>
                                    </div>
                                    <div className='list-count'>
                                        {searchResults.length} Course{searchResults.length > 1 && 's'} Found
                            </div>
                                </div>
                            )
                        }
                    }
                </CourseConsumer>
            </div>
            <ResultsList />
        </div>
    )
}
