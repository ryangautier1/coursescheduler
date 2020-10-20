import React from 'react';
import '../pages.css';
import './login.css';
import PageTitle from '../../components/PageTitle';

export default function Login() {
    return (
        <div className='container-fluid login-container'>
            <div className='row'>
                <div className='col'>
                    <div className='my-4 text-center'>
                        <PageTitle text='Login' />
                    </div>
                    <form className='p-5'>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" className="form-control" id="username" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" />
                        </div>
                        <button
                            className='btn btn-primary button-primary'
                            type='submit'
                        >
                            Log In
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
