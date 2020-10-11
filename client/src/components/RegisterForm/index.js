import React from 'react';
import './registerForm.css';
import ButtonPrimary from '../ButtonPrimary';

export default function RegisterForm() {
    return (
        <div className='register-form-wrapper'>
            <div className='list-group d-flex flex-row' id='list-tab' role='tablist'>
                <a className='list-group-item list-group-item-action flex-fill d-flex justify-content-center align-items-center active' id='list-courseNum-list' data-toggle='list' href='#list-courseNum' role='tab' aria-controls='courseNum'>By Course Number</a>
                <a className='list-group-item list-group-item-action flex-fill d-flex justify-content-center align-items-center' id='list-planner-list' data-toggle='list' href='#list-planner' role='tab' aria-controls='planner'>By Planner</a>
            </div>
            <div className='tab-content' id='nav-tabContent'>
                <div className='tab-pane fade show active' id='list-courseNum' role='tabpanel' aria-labelledby='list-courseNum-list'>
                    <form className='pt-5 pb-3 px-4'>
                        <div className='form-row'>
                            <div className='form-group col'>
                                <label>Course Number</label>
                                <input type='text' className='form-control' id='course1' />
                            </div>
                        </div>
                        <div className='form-row'>
                            <div className='form-group col'>
                                <input type='text' className='form-control' id='course2' />
                            </div>
                        </div>
                        <div className='form-row'>
                            <div className='form-group col'>
                                <input type='text' className='form-control' id='course3' />
                            </div>
                        </div>
                        <div className='form-row'>
                            <div className='form-group col d-flex justify-content-end'>
                                <ButtonPrimary text='Register' submit />
                            </div>
                        </div>
                    </form>
                </div>
                <div className='tab-pane fade' id='list-planner' role='tabpanel' aria-labelledby='list-planner-list'>Planner Form...</div>
            </div>
        </div>
    )
}
