import React from 'react';
import '../pages.css';
import './register.css';
import PageTitle from '../../components/PageTitle';
import RegisterForm from '../../components/RegisterForm';

export default function Register() {
    return (
        <div className='container register-container'>
            <div className='row mt-5 justify-content-center'>
                <div className='col col-md-10 col-lg-6'>
                    <PageTitle text='Register' />
                    <RegisterForm />
                    <p className='mt-3'>You are not registered for any courses.</p>
                </div>
            </div>
        </div>
    )
}
