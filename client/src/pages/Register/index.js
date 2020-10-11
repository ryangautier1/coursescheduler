import React from 'react';
import '../pages.css';
import './register.css';
import PageTitle from '../../components/PageTitle';
import RegisterForm from '../../components/RegisterForm';

export default function Register() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col col-md-10 col-lg-6'>
                    <PageTitle text='Register' />
                    <RegisterForm />
                </div>
            </div>
        </div>
    )
}
