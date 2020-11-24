import React, { useEffect, useState } from 'react';
import API from './API';

const ProfessorContext = React.createContext();

// Provider
function ProfessorProvider(props) {

    // Professors list
    const [professors, setProfessors] = useState([]);

    useEffect(() => {
        fetchProfessors();
    }, []);

    // Fetch all professors
    function fetchProfessors() {
        API
            .fetchProfessors()
            .then(res => {
                setProfessors(res.data);
            })
            .catch(err => console.error(err));
    };

    // Get professor by id
    function getProfById(id) {
        return professors.find(prof => prof._id === id);
    }

    return (
        <ProfessorContext.Provider
            value={{
                getProfById
            }}
        >
            {props.children}
        </ProfessorContext.Provider>
    )
};

// Consumer
const ProfessorConsumer = ProfessorContext.Consumer;

export default ProfessorContext;
export { ProfessorProvider, ProfessorConsumer };