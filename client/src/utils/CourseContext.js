import React from 'react';
import API from './API';

const CourseContext = React.createContext();

// Provider
function CourseProvider(props) {
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