import React from 'react';
import API from '.API';

const ProfessorContext = React.createContext();

// Provider
function ProfessorProvider(props) {

    // Professors list
    const [professors, setProfessors] = useState([]);

    return (
        <ProfessorContext.Provider
            value={ }
        >
            {props.children}
        </ProfessorContext.Provider>
    )
};

// Consumer
const ProfessorConsumer = ProfessorContext.Consumer;

export default ProfessorContext;
export { ProfessorProvider, ProfessorConsumer };