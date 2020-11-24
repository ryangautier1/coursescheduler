import React, { useContext, useEffect, useState } from 'react';
import API from './API';
import ProfessorContext from './ProfessorContext';

const CourseContext = React.createContext();

// Provider
function CourseProvider(props) {

    const { getProfById } = useContext(ProfessorContext);

    // Courses list
    const [courses, setCourses] = useState([]);

    // Search query
    const [search, setSearch] = useState({
        departments: [],
        department: '',
        courses: []
    });

    const localStorageResults = JSON.parse(localStorage.getItem('results'));
    // Search results
    const [searchResults, setSearchResults] = useState(localStorageResults || []);

    const localStorageFilterData = JSON.parse(localStorage.getItem('filterData'));
    // Filter data
    const [filterData, setFilterData] = useState(localStorageFilterData || []);

    // Course detail view
    const [courseDetail, setCourseDetail] = useState({});

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
            })
            .catch(err => console.error(err));
    };

    // Filter courses by search
    function filterBySearch(title) {
        const filtered = courses.filter(course => course.title === title);
        // Add prof name to each search result
        filtered.forEach(item => {
            const prof = getProfById(item.professor);
            item.profName = prof.name;
        })

        setSearchResults(filtered);
        console.log({filtered});
        // Store filtered into local storage
        localStorage.setItem("results", JSON.stringify(filtered));

        // Populate filter data
        const tempFilterData = [
            // { title: '', count: 0, items: {} }
            // { title: 'school', count: 1, items: {} },
            // { title: 'department', count: 1, items: {} },
            { title: 'level', count: 0, items: {}},
            { title: 'term', count: 0, items: {} },
            { title: 'status', count: 0, items: {} },
            // { title: 'days', count: 0, items: {} },
            { title: 'professor', count: 0, items: {} }
        ];
        tempFilterData.forEach(filter => {
            const currentFilterTitle = filter.title;
            // Create items obj for each that counts all the different categories
            filter.items = filtered.reduce((obj, item) => {
                if (!obj[item[currentFilterTitle]]) {
                    obj[item[currentFilterTitle]] = 0;
                }
                obj[item[currentFilterTitle]]++;
                return obj;
            }, {});
            filter.count = Object.keys(filter.items).length;
        })
        setFilterData(tempFilterData);
        // Store filter data into local storage
        localStorage.setItem("filterData", JSON.stringify(tempFilterData));
    };

    // Filter courses by department
    function filterByDepartment(courses, department) {
        const filtered = courses.filter(course => course.department === department);
        setSearch({
            ...search,
            department: department,
            courses: filtered
        });
        return filtered;
    };

    // Course detail view
    function selectCourseForView(id) {
        const course = searchResults.find(course => course._id === id);
        setCourseDetail(course);
        console.log(course);
    }

    return (
        <CourseContext.Provider
            value={{
                filterBySearch,
                filterByDepartment,
                searchResults,
                search,
                courses,
                fetchCourses,
                filterData,
                selectCourseForView
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