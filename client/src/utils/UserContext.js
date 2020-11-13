import React, { useState, useEffect } from 'react';
import API from './API';

const UserContext = React.createContext();

// Provider
function UserProvider(props) {

    useEffect(() => {
        fetchUser();
    }, []);

    // User
    const [user, setUser] = useState({
        isLoggedIn: false,
        info: {}
    });

    // Signup & Login
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Signup
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
                            window.location.replace("/");
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
                    fetchUser();
                    console.log('User is now logged in.');
                    window.location.replace("/");
                })
                .catch(err => {
                    console.log('Something went wrong while logging in...', err);
                })
        } else {
            console.log('Missing username or password.');
        }
    }

    // User Data
    function fetchUser() {
        API.fetchUser()
            .then(res => {
                setUser({
                    isLoggedIn: true,
                    info: res.data
                });
            })
            .catch(() => {
                setUser({
                    isLoggedIn: false,
                    info: {}
                });
            })
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
                handleLogin,
                user,
                fetchUser
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