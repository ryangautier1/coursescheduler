import React from 'react';
import './buttonPrimary.css';
import { UserConsumer } from '../../utils/UserContext';

export default function ButtonPrimary({ text, submit, signup }) {
    return (
        <UserConsumer>
            {
                value => {
                    const { username, password, confirmPassword, handleSignup } = value;
                    return (
                        <button
                            className='btn btn-primary button-primary'
                            type={submit ? "submit" : "button"}
                            onClick={(e) => signup && handleSignup(e, username, password, confirmPassword)}
                        >
                            {text}
                        </button>
                    )
                }
            }
        </UserConsumer>
    )
}
