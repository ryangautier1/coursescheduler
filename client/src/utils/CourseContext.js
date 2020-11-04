import React, { useEffect, useState } from 'react';
import API from './API';

const CourseContext = React.createContext();

// Provider
function CourseProvider(props) {

    // Courses list
    const [courses, setCourses] = useState([]);

    // Search results
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        fetchCourses();
    }, []);

    // Fetch all courses
    function fetchCourses() {
        API
            .fetchCourses()
            .then(res => {
                setCourses(res.data);
                console.log(res.data);
            })
            .catch(err => console.error(err));
    };

    // Filter courses by search
    function filterBySearch(title) {
        const filtered = courses.filter(course => course.title === title);
        setSearchResults(filtered);
    };

    return (
        <CourseContext.Provider
            value={{
                filterBySearch
            }}
        >
            {props.children}
        </CourseContext.Provider>
    )
};

// Consumer
const CourseConsumer = CourseContext.Consumer;

export default CourseContext;
export { CourseProvider, CourseConsumer };