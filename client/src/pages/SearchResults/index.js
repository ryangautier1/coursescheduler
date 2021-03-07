import React, { useContext, useEffect, useState } from 'react';
import '../pages.css';
import './searchResults.css';
import FilterButton from '../../components/FilterButton';
import BackLink from '../../components/BackLink';
import PageTitle from '../../components/PageTitle';
import ResultsContainer from '../../components/ResultsContainer';
import CourseContext, { CourseConsumer } from '../../utils/CourseContext';
import { useParams } from 'react-router';
import API from '../../utils/API';
import ProfessorContext from '../../utils/ProfessorContext';

export default function SearchResults() {

    const backLinkData = { text: 'Start a new search', path: '/' };

    const { title } = useParams();

    const courseTitle = title.split('+').join(' ');

    const { getProfById } = useContext(ProfessorContext);
    const { setSearchResults, setFilteredResults } = useContext(CourseContext);

    // const [searchResults, setSearchResults] = useState([]);

    const [filterData, setFilterData] = useState([]);

    useEffect(() => {
        API
            .findCourseByTitle(courseTitle)
            .then(res => {
                const tempSearchResults = res.data;
                tempSearchResults.forEach(item => {
                    const prof = getProfById(item.professor);
                    item.profName = prof.name;
                })
                setSearchResults(tempSearchResults);
                setFilteredResults(tempSearchResults);
                const tempFilterData = [
                    { title: 'level', count: 0, items: {}},
                    { title: 'term', count: 0, items: {} },
                    { title: 'status', count: 0, items: {} },
                    { title: 'professor', count: 0, items: {} }
                ];
                tempFilterData.forEach(filter => {
                    const currentFilterTitle = filter.title;
                    // Create items obj for each that counts all the different categories
                    filter.items = tempSearchResults.reduce((obj, item) => {
                        if (!obj[item[currentFilterTitle]]) {
                            obj[item[currentFilterTitle]] = 0;
                        }
                        obj[item[currentFilterTitle]]++;
                        return obj;
                    }, {});
                    filter.count = Object.keys(filter.items).length;
                })
                setFilterData(tempFilterData);
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='container-fluid search-results-container'>
            <div className='row'>
                <div className='col col-sm-2'>
                    <span className='label-small'>filters</span>
                    <div className='filter-items'>
                        {
                            filterData && filterData.map(filter => <FilterButton key={filter.title} title={filter.title} count={filter.count} items={filter.items} />)
                        }
                        {/* <CourseConsumer>
                            {
                                value => {
                                    const { filterData } = value;
                                    return filterData.map(filter => <FilterButton key={filter.title} title={filter.title} count={filter.count} items={filter.items} />)
                                }
                            }
                        </CourseConsumer> */}
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
