import React, { useEffect, useState } from 'react';
import API from './API';

const CourseContext = React.createContext();

// Provider
function CourseProvider(props) {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetchCourses();
    }, [])

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

    return (
        <CourseContext.Provider
            value={{

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