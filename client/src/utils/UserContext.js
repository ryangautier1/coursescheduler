import React, { useState } from 'react';
import API from './API';

const UserContext = React.createContext();

// Provider
function UserProvider(props) {

    // Signup
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function handleSignup(e, name, username, password, confirmPassword) {
        e.preventDefault();

        if (name && username && password && confirmPassword) {
            if (password.length >= 6) {
                if (password === confirmPassword) {
                    API
                        .signup({
                            name: name,
                            username: username,
                            password: password
                        })
                        .then(res => {
                            // Send user thru login process into profile or dashboard page
                            console.log('User is signed up...', res);
                        })
                        .catch(err => {
                            console.log('Failed signup...', err);
                        })
                } else {
                    console.log("Password and confirm password must be the same.")
                }
            } else {
                console.log('Password must be at least 6 characters long.')
            }
        } else {
            console.log('Please fill out all fields.')
        }
    }


    // Login
    function handleLogin(e, username, password) {
        e.preventDefault();

        if (username && password) {
            API
                .login({
                    username: username,
                    password: password
                })
                .then(() => {
                    // Send user to profile or dashboard
                    console.log('User is now logged in.')
                })
                .catch(err => {
                    console.log('Something went wrong while logging in...', err);
                })
        } else {
            console.log('Missing username or password.');
        }
    }

    return (
        <UserContext.Provider
            value={{
                name,
                setName,
                username,
                setUsername,
                password,
                setPassword,
                confirmPassword,
                setConfirmPassword,
                handleSignup,
                handleLogin
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