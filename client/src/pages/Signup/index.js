import React, { useRef } from 'react';
import '../pages.css';
import './signup.css';
import PageTitle from '../../components/PageTitle';
import { UserConsumer } from '../../utils/UserContext';

export default function Signup() {

    const nameRef = useRef();
    const usernameRef = useRef();
    const passwordRef = useRef();
    const confirmPassRef = useRef();

    return (
        <div className='container-fluid signup-container'>
            <div className='row'>
                <div className='col'>
                    <div className='my-4 text-center'>
                        <PageTitle text='Signup' />
                    </div>
                    <UserConsumer>
                        {
                            value => {
                                const { name, username, password, confirmPassword, setName, setUsername, setPassword, setConfirmPassword, handleSignup } = value;
                                return (
                                    <form className='p-5'>
                                        <div className="form-group">
                                            <label htmlFor="name">Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                ref={nameRef}
                                                onChange={() => setName(nameRef.current.value)}
                                            />
                                        </div>
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
                                        <div className="form-group">
                                            <label htmlFor="confirmPassword">Confirm Password</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="confirmPassword"
                                                ref={confirmPassRef}
                                                onChange={() => setConfirmPassword(confirmPassRef.current.value)}
                                            />
                                        </div>
                                        <button
                                            className='btn btn-primary button-primary'
                                            type='submit'
                                            onClick={(e) => handleSignup(e, name, username, password, confirmPassword)}
                                        >
                                            Sign up
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
