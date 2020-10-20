import React, { useState } from 'react';

const UserContext = React.createContext();

// Provider
function UserProvider(props) {

    // Signup
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function handleSignup(e, username, password, confirmPassword) {
        e.preventDefault();
        console.log("hello")

        if (password && confirmPassword) {
            if (password.length >= 6) {
                if (password === confirmPassword) {
                    // API to create user
                    console.log("Creating User: " + username);
                } else {
                    console.log("password must be the same")
                }
            }
        } else {
            console.log("Passwords are different")
        }
    }

    return (
        <UserContext.Provider
            value={{
                username,
                setUsername,
                password,
                setPassword,
                confirmPassword,
                setConfirmPassword,
                handleSignup
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
};

// Consumer
const UserConsumer = UserContext.Consumer;

export default UserContext;
export { UserProvider, UserConsumer };