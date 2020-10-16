import React, { useRef } from 'react';
import '../pages.css';
import './signup.css';
import PageTitle from '../../components/PageTitle';
import ButtonPrimary from '../../components/ButtonPrimary';

export default function Signup() {

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
                    <form className='p-5'>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" className="form-control" id="username" ref={usernameRef} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" ref={passwordRef} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" className="form-control" id="confirmPassword" ref={confirmPassRef} />
                        </div>
                        <ButtonPrimary text='Sign up' submit />
                    </form>
                </div>
            </div>
        </div>
    )
}
