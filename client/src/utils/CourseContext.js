import React, { useEffect, useState } from 'react';
import API from './API';

const CourseContext = React.createContext();

// Provider
function CourseProvider(props) {

    // Courses list
    const [courses, setCourses] = useState([]);

    // Search query
    const [search, setSearch] = useState({
        departments: [],
        department: '',
        courses: []
    });

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
                const courses = res.data;
                setCourses(courses);
                console.log(res.data);

                // Loop through result
                const departments = [];
                for (let i = 0; i < courses.length; i++) {
                    let currentCourse = courses[i];
                    if (departments.indexOf(currentCourse.department) < 0) {
                        departments.push(currentCourse.department);
                    }
                };
                // Sort based on department
                const sorted = departments.sort();
                // Filter courses by first course on the list
                const initialCourses = filterByDepartment(courses, sorted[0]);
                // Take first department as default search department
                // Set dropdown courses to ones in this department
                setSearch({
                    departments: sorted,
                    department: sorted[0],
                    courses: initialCourses
                });
                console.log('Courses', initialCourses)
            })
            .catch(err => console.error(err));
    };

    // Filter courses by search
    function filterBySearch(title) {
        const filtered = courses.filter(course => course.title === title);
        setSearchResults(filtered);
    };

    // Filter courses by department
    function filterByDepartment(department) {
        const filtered = courses.filter(course => course.department === department);
        setSearch({
            ...search,
            department: department,
            courses: filtered
        });
        return filtered;
    };

    return (
        <CourseContext.Provider
            value={{
                filterBySearch,
                filterByDepartment,
                searchResults,
                search
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