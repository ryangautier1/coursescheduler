import React from 'react';
import '../pages.css';
import './signup.css';
import PageTitle from '../../components/PageTitle';
import ButtonPrimary from '../../components/ButtonPrimary';

export default function Signup() {
    return (
        <div className='container-fluid signup-container'>
            <div className='row'>
                <div className='col'>
                    <div className='my-4 text-center'>
                        <PageTitle text='Signup' />
                    </div>
                    <form className='p-5'>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" className="form-control" id="confirmPassword" />
                        </div>
                        <ButtonPrimary text='Sign up' submit />
                    </form>
                </div>
            </div>
        </div>
    )
}
