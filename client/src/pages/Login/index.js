import React, { useRef } from 'react';
import '../pages.css';
import './login.css';
import PageTitle from '../../components/PageTitle';
import { UserConsumer } from '../../utils/UserContext';

export default function Login() {

    const usernameRef = useRef();
    const passwordRef = useRef();

    return (
        <div className='container-fluid login-container'>
            <div className='row'>
                <div className='col'>
                    <div className='my-4 text-center'>
                        <PageTitle text='Login' />
                    </div>
                    <UserConsumer>
                        {
                            value => {
                                const { username, setUsername, password, setPassword, handleLogin } = value;
                                return (
                                    <form className='p-5'>
                                        <div className="form-group">
                                            <label htmlFor="username">Username</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="username"
                                                ref={usernameRef}
                                                onChange={() => setUsername(usernameRef.current.value)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password">Password</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="password"
                                                ref={passwordRef}
                                                onChange={() => setPassword(passwordRef.current.value)}
                                            />
                                        </div>
                                        <button
                                            className='btn btn-primary button-primary'
                                            type='submit'
                                            onClick={(e) => handleLogin(e, username, password)}
                                        >
                                            Log In
                                        </button>
                                    </form>
                                )
                            }
                        }
                    </UserConsumer>
                </div>
            </div>
        </div>
    )
}
