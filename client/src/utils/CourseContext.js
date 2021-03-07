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

    // Filter courses
    // const [filteredResults, setFilteredResults] = useState([]);

    const localStorageResults = JSON.parse(localStorage.getItem('results'));
    // Search results
    const [searchResults, setSearchResults] = useState(localStorageResults || []);
    // Filtered results
    const [filteredResults, setFilteredResults] = useState([]);

    const localStorageFilterData = JSON.parse(localStorage.getItem('filterData'));
    // Filter data
    const [filterData, setFilterData] = useState(localStorageFilterData || []);

    // const localStorageCourseDetail = JSON.parse(localStorage.getItem('courseDetail'));
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
        });
        // console.log({filtered});

        setSearchResults(filtered);
        // Set filteredResults to all
        setFilteredResults(filtered);
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
        // Store course detail data into local storage
        localStorage.setItem('courseDetail', JSON.stringify(course));
    }

    // Filter search results
    function filterSearchResults(e) {
        // Current element that was selected
        const element = e.currentTarget;
        // Get all filter options
        const filters = document.querySelectorAll('.form-check-input');
        const checked = []; // array for all filter options that are checked
        // Loop through the filter options and push all checked into the checked array
        filters.forEach(filter => {
            if (filter.checked) {
                checked.push(filter.id);
            }
        });
        // Copy the results into a temporary array
        let tempResults = [...searchResults];
        // Loop through the checked array of id's and filter the results
        checked.forEach(filter => {
            const filterTitle = filter.split('-')[0]; // title from the id
            const filterValue = filter.split('-')[1]; // value from the id
            tempResults = tempResults.filter(course => course[filterTitle] === filterValue); // filter using the title and value
        }); 
        // Set the filtered results to the tempResults
        setFilteredResults(tempResults);
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
                selectCourseForView,
                courseDetail,
                filterSearchResults,
                filteredResults,
                setSearchResults,
                setFilteredResults
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