import React from 'react';
import '../pages.css';
import './register.css';
import PageTitle from '../../components/PageTitle';
import RegisterForm from '../../components/RegisterForm';

export default function Register() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <PageTitle text='Register' />
                    <RegisterForm />
                </div>
            </div>
        </div>
    )
}
