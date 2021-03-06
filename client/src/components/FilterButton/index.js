import React, { useContext, useEffect, useState } from 'react';
import './filterButton.css';
import ProfessorContext from '../../utils/ProfessorContext';
import { CourseConsumer } from '../../utils/CourseContext';

export default function FilterButton({ title, count, items }) {

    const { getProfById } = useContext(ProfessorContext);
    const [profNames, setProfNames] = useState([]);

    useEffect(() => {
        const tempProfNames = [];
        if (title === 'professor') {
            Object.keys(items).map(item => {
                const { name } = getProfById(item);
                return tempProfNames.push(name);
            })
            setProfNames(tempProfNames);
        }
    }, [title, items, getProfById])

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
                    Object.keys(items).map((item, index) => {
                        return (
                            <div className='filter-sub-item form-check' key={item}>
                                <CourseConsumer>
                                    {
                                        value => <input type='checkbox' onChange={(e) => value.filterSearchResults(e)} className='form-check-input' id={`${title}-${item}`} />
                                    }
                                </CourseConsumer>
                                {
                                    title === "professor" ? <label className='form-check-label' htmlFor={`${title}-${item}`}>{`${profNames[index]} (${items[item]})`}</label>
                                        : <label className='form-check-label' htmlFor={`${title}-${item}`}>{`${item} (${items[item]})`}</label>
                                }

                            </div>
                        )
                    })
                }
            </div>
        </React.Fragment>
    )
}
