import React, { useState } from 'react';
import API from './API';

const UserContext = React.createContext();

// Provider
function UserProvider(props) {

    // Signup
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function handleSignup(e, username, password, confirmPassword) {
        e.preventDefault();

        if (password && confirmPassword) {
            if (password.length >= 6) {
                if (password === confirmPassword) {
                    API
                        .signup({
                            username: username,
                            password: password
                        })
                        .then(res => {
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
            console.log('Please confirm password.')
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